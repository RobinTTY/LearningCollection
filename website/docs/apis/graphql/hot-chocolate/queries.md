---
id: queries
title: Queries
sidebar_position: 2
---

The query type in GraphQL represents a read-only view of all of our entities and ways to retrieve them.
A query type is required for every GraphQL server.
Queries are expected to be side-effect free and are therefore parallelized by the execution engine.

## Usage

A query type can be defined like the following:

```csharp
public class Query
{
    public Book GetBook()
    {
        return new Book { Title  = "C# in depth", Author = "Jon Skeet" };
    }
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

:::caution
Only one query type can be registered using `AddQueryType()`. If we want to split up our query type into multiple classes, we can do so using [type extensions](https://chillicream.com/docs/hotchocolate/v13/defining-a-schema/extending-types).
:::

A query type is just a regular object type, so everything that applies to an [object type](https://chillicream.com/docs/hotchocolate/v13/defining-a-schema/object-types) also applies to the query type (this is true for all root types).

## Lists

GraphQL allows us to return lists of elements from our fields.
Querying a list field will result in an ordered list containing elements with the specified sub-selection of fields.
More information about lists can be found in the [official GraphQL documentation](https://graphql.org/learn/schema/#lists-and-non-null).

### Usage

If our field resolver returns a list type, e.g. `IEnumerable<T>` or `IQueryable<T>`, it will automatically be treated as a list type in the schema.

```csharp
public class Query
{
    public List<User> GetUsers()
    {
        // Omitted code for brevity
    }
}
```
