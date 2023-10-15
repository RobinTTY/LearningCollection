---
id: pagination
title: Pagination
sidebar_position: 1
---

HotChocolate supports both offset and cursor based pagination. The cursor based pagination is based on the [Relay spec](https://relay.dev/graphql/connections.htm).

## Usage

To add pagination capabilities, we add the `UsePaging` middleware:

```csharp
public class Query
{
    [UsePaging]
    public IEnumerable<User> GetUsers([Service] IUserRespository repository)
        => repository.GetUsers();
}
```

For the `UsePaging` middleware to work, our resolver needs to return an `IEnumerable<T>` or an `IQueryable<T>`. The middleware will then apply the pagination arguments to what we have returned. In the case of an `IQueryable<T>` this means that the pagination operations can be directly translated to native database queries. HotChocolate also offer pagination integrations for some database technologies that do not use `IQueryable`.

### Naming

The name of the Connection and Edge type is automatically inferred from the field name. If our field is called `users`, a `UsersConnection` and `UsersEdge` type is automatically generated. We can also specify a custom name for our Connection like the following:

```csharp
public class Query
{
    [UsePaging(ConnectionName = "CustomUsers")]
    public IEnumerable<User> GetUsers([Service] IUserRespository repository)
    {
        // Omitted code for brevity
    }
}
```

### Options

We can define a number of options on a per-field basis trough properties on the attribute, e.g.:

```csharp
[UsePaging(MaxPageSize = 100)]
public IEnumerable<User> GetUsers([Service] IUserRespository repository)
{
    // Omitted code for brevity
}
```

#### Total count

Sometimes we might want to return the total number of pageable entries. For this to work we need to enable the `IncludeTotalCount` flag on the `UsePaging` middleware:

```csharp
[UsePaging(IncludeTotalCount = true)]
public IEnumerable<User> GetUsers([Service] IUserRespository repository)
{
    // Omitted code for brevity
}
```

This will add a new field called `totalCount` to our Connection. If our resolver returns an `IEnumerable<T>` or an `IQueryable<T>` the `totalCount` will be automatically computed, if it has been specified as a subfield in the query.

If we have customized our pagination and our resolver now returns a `Connection<T>`, we have to explicitly declare how the `totalCount` value is computed:

```csharp
var connection = new Connection<User>(
    edges,
    pageInfo,
    getTotalCount: cancellationToken => ValueTask.FromResult(0)
  );
```

## Custom pagination logic

If we need more control over the pagination process we can do so, by returning a `Connection<T>`:

```csharp
{
    [UsePaging]
    public Connection<User> GetUsers(string? after, int? first, string sortBy)
    {
        // Get users using the above arguments
        IEnumerable<User> users = null;

        var edges = users.Select(user => new Edge<User>(user, user.Id))
                            .ToList();
        var pageInfo = new ConnectionPageInfo(false, false, null, null);

        var connection = new Connection<User>(edges, pageInfo,
                            ct => ValueTask.FromResult(0));

        return connection;
    }
}
```

### Changing the node type

Lets say we are returning a collection of `string` from our pagination resolver, but we want these `string` to be represented in the schema using the `ID` scalar. We can change the node type like the following:

```csharp
public class Query
{
    [UsePaging(typeof(IdType))]
    public IEnumerable<string> GetIds()
    {
        // Omitted code for brevity
    }
}
```

The same applies of course, if we are returning a collection of `User` from our pagination resolver, but we want to use the `UserType` for representation in the schema.

### Adding fields to an Edge

We can add new fields to an Edge type, by creating a type extension that targets the Edge type by its name. If our Edge is named `UsersEdge`, we can add a new field to it like the following:

```csharp
[ExtendObjectType("UsersEdge")]
public class UsersEdge
{
    public string NewField([Parent] Edge<User> edge)
    {
        var cursor = edge.Cursor;
        var user = edge.Node;

        // Omitted code for brevity
    }
}
```

### Adding fields to a Connection

We can add new fields to a Connection type, by creating a type extension that targets the Connection type by its name. If our Connection is named `UsersConnection`, we can add a new field to it like the following:

```csharp
[ExtendObjectType("UsersConnection")]
public class UsersConnectionExtension
{
    public string NewField()
    {
        // Omitted code for brevity
    }
}
```

These additional fields are great to perform aggregations either on the entire dataset, by for example issuing a second database call, or on top of the paginated result. We can access the pagination result like the following:

```csharp
[ExtendObjectType("UsersConnection")]
public class UsersConnectionExtension
{
    public string NewField([Parent] Connection<User> connection)
    {
        var result = connection.Edges.Sum(e => e.Node.SomeField);

        // Omitted code for brevity
    }
}
```
