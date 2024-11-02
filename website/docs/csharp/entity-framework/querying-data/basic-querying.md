---
title: Basic Querying
---

Entity Framework Core uses Language-Integrated Query (LINQ) to query data from the database. EF Core passes a representation of the LINQ query to the database provider. Database providers in turn translate it to database-specific query language (for example, SQL for a relational database). Queries are always executed against the database even if the entities returned in the result already exist in the context.

The following snippets show a few examples of how to achieve common tasks with Entity Framework Core.

## Loading all data

```csharp
using (var context = new BloggingContext())
{
    var blogs = context.Blogs.ToList();
}
```

## Loading a single entity

```csharp
using (var context = new BloggingContext())
{
    var blog = context.Blogs
        .Single(b => b.BlogId == 1);
}
```

### `Find()`

The `Find` method on `DbSet` uses the primary key value to attempt to find an entity tracked by the context. If the entity is not found in the context then a query will be sent to the database to find the entity there. `Null` is returned if the entity is not found in the context or in the database.

## Filtering

```csharp
using (var context = new BloggingContext())
{
    var blogs = context.Blogs
        .Where(b => b.Url.Contains("dotnet"))
        .ToList();
}
```

## Ordering

Ordering can be done via the `OrderBy` method. To for instance order a set of authors by last name and then first name we can do the following:

```csharp
var authorsByLastName = _context.Author
    .OrderBy(a => a.LastName)
    .ThenBy(a => a.FirstName)
    .ToList();
```
