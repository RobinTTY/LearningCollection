---
id: resolvers
title: Resolvers
sidebar_position: 5
---

Resolvers are the main building blocks when it comes to fetching data. Every field in our GraphQL schema is backed by such a resolver function, responsible for returning the field's value. Since a resolver is just a function, we can use it to retrieve data from a database, a REST service, or any other data source as needed.

## Resolver Tree

A resolver tree is a projection of a GraphQL operation that is prepared for execution. For better understanding, let's imagine we have a simple GraphQL query like the following, where we select some fields of the currently logged-in user.

```graphql
query {
  me {
    name
    company {
      id
      name
    }
  }
}
```

In Hot Chocolate, this query results in the following resolver tree.

![resolver-tree](/img/docs/apis/graphql/resolver-tree.png)

This tree will be traversed by the execution engine, starting with one or more root resolvers. In the above example the `me` field represents the only root resolver.

Field resolvers that are sub-selections of a field, can only be executed after a value has been resolved for their parent field. In the case of the above example this means that the `name` and `company` resolvers can only run, after the `me` resolver has finished.

:::danger
Resolvers of field sub-selections can and will be executed in parallel.
Because of this it is important that resolvers, with the exception of top level mutation field resolvers, do not contain side-effects, since their execution order may vary.
:::

The execution of a request finishes, once each resolver of the selected fields has produced a result. This is of course an oversimplification that differs from the actual implementation.

## Defining a Resolver

Resolvers can be defined in a way that should feel very familiar to C# developers, especially in the Annotation-based approach.

### Properties

Hot Chocolate automatically converts properties with a public get accessor to a resolver that simply returns its value.

### Regular Resolver

A regular resolver is just a simple method, which returns a value.

```csharp
public class Query
{
    public string Foo() => "Bar";
}

public class Startup
{
    public void ConfigureServices(IServiceCollection services)
    {
        services
            .AddGraphQLServer()
            .AddQueryType<Query>();
    }
}
```

### Async Resolver

Most data fetching operations, like calling a service or communicating with a database, will be asynchronous.
In Hot Chocolate, we can simply mark our resolver methods and delegates as `async` or return a `Task<T>` and it becomes an async-capable resolver.
We can also add a `CancellationToken` argument to our resolver. Hot Chocolate will automatically cancel this token if the request has been aborted.

```csharp
public class Query
{
    public async Task<string> Foo(CancellationToken ct)
    {
        // Omitted code for brevity
    }
}
```

When using a delegate resolver, the `CancellationToken` is passed as second argument to the delegate.

```csharp
descriptor
    .Field("foo")
    .Resolve((context, ct) =>
    {
        // Omitted code for brevity
    });
```

### ResolveWith

Thus far we have looked at two ways to specify resolvers in Code-first:

- Add new methods to the CLR type, e.g. the `T` type of `ObjectType<T>`
- Add new fields to the schema type in the form of delegates

```csharp
descriptor.Field("foo").Resolve(context => )
```

But there's a third way. We can describe our field using the `descriptor`, but instead of a resolver delegate, we can point to a method on another class, responsible for resolving this field.

```csharp
public class FooResolvers
{
    public string GetFoo(string arg, [Service] FooService service)
    {
        // Omitted code for brevity
    }
}

public class QueryType : ObjectType
{
    protected override void Configure(IObjectTypeDescriptor descriptor)
    {
        descriptor
            .Field("foo")
            .Argument("arg", a => a.Type<NonNullType<StringType>>())
            .ResolveWith<FooResolvers>(r => r.GetFoo(default, default));
    }
}
```

## Arguments

We can access arguments we defined for our resolver like regular arguments of a function. There are also specific arguments that will be automatically populated by Hot Chocolate when the resolver is executed. These include [Dependency injection](https://chillicream.com/docs/hotchocolate/v13/fetching-data/resolvers/#injecting-services) services, [DataLoaders](https://chillicream.com/docs/hotchocolate/v13/fetching-data/dataloader), state, or even context like a [parent](https://chillicream.com/docs/hotchocolate/v13/fetching-data/resolvers/#accessing-parent-values) value.

### Accessing Parent Values

The resolver of each field on a type has access to the value that was resolved for said type.

Let's look at an example. We have the following schema:

```graphql
type Query {
  me: User!;
}

type User {
  id: ID!;
  friends: [User!]!;
}
```

The `User` schema type is represented by an `User` CLR type. The `id` field is an actual property on this CLR type:

```csharp
public class User
{
    public string Id { get; set; }
}
```

`friends` on the other hand is a resolver i.e. method we defined. It depends on the user's `Id` property to compute its result. From the point of view of this `friends` resolver, the `User` CLR type is its parent.
We can access this so called parent value like the following. In the Annotation-based approach we can just access the properties using the `this` keyword:

```csharp
public class User
{
    public string Id { get; set; }

    public List<User> GetFriends()
    {
        var currentUserId = this.Id;

        // Omitted code for brevity
    }
}
```

There's also a `[Parent]` attribute that injects the parent into the resolver:

```csharp
public class User
{
    public string Id { get; set; }

    public List<User> GetFriends([Parent] User parent)
    {
        // Omitted code for brevity
    }
}
```
