---
title: Updating Data
---

There are multiple ways to update data in EF Core. The simplest way may be to query the data to update first and then to update it in a second operation:

```csharp
var author = _context.Authors.FirstOrDefault(a => a.FirstName == "Julie" && a.LastName == "Lerman");

if(author != null)
{
  author.FirstName = "Julia";
  _context.SaveChanges();
}
```

## Efficient updating using `ExecuteUpdate`

`ExecuteUpdate` provides a similar way to express a SQL `UPDATE` statement:

```csharp
context.Blogs
    .Where(b => b.Rating < 3)
    .ExecuteUpdate(setters => setters.SetProperty(b => b.IsVisible, false));
```

We first use LINQ to determine which Blogs should be affected, then need to express the change to be applied to the matching Blogs. This is done by calling `SetProperty` within the `ExecuteUpdate` call, and providing it with two arguments: the property to be changed (`IsVisible`), and the new value it should have (`false`). This causes the following SQL to be executed:

```sql
UPDATE [b]
SET [b].[IsVisible] = CAST(0 AS bit)
FROM [Blogs] AS [b]
WHERE [b].[Rating] < 3
```

### Updating multiple properties

`ExecuteUpdate` allows updating multiple properties in a single invocation. For example, to both set `IsVisible` to false and to set Rating to zero, simply chain additional `SetProperty` calls together:

```csharp
context.Blogs
    .Where(b => b.Rating < 3)
    .ExecuteUpdate(setters => setters
        .SetProperty(b => b.IsVisible, false)
        .SetProperty(b => b.Rating, 0));
```

This executes the following SQL:

```sql
UPDATE [b]
SET [b].[Rating] = 0,
    [b].[IsVisible] = CAST(0 AS bit)
FROM [Blogs] AS [b]
WHERE [b].[Rating] < 3
```

### Referencing the existing property value

The above examples updated the property to a new constant value. `ExecuteUpdate` also allows referencing the existing property value when calculating the new value; for example, to increase the rating of all matching Blogs by one, use the following:

```csharp
context.Blogs
    .Where(b => b.Rating < 3)
    .ExecuteUpdate(setters => setters.SetProperty(b => b.Rating, b => b.Rating + 1));
```

Note that the second argument to `SetProperty` is now a lambda function, and not a constant as before. Its `b` parameter represents the `Blog` being updated; within that lambda, `b.Rating` thus contains the rating before any change occurred. This executes the following SQL:

```sql
UPDATE [b]
SET [b].[Rating] = [b].[Rating] + 1
FROM [Blogs] AS [b]
WHERE [b].[Rating] < 3
```

### Navigations and related entities

`ExecuteUpdate` does not currently support referencing navigations within the `SetProperty` lambda. For example, let's say we want to update all the Blogs' ratings so that each Blog's new rating is the average of all its Posts' ratings. We may try to use `ExecuteUpdate` as follows:

```csharp
context.Blogs.ExecuteUpdate(
    setters => setters.SetProperty(b => b.Rating, b => b.Posts.Average(p => p.Rating)));
```

However, EF does allow performing this operation by first using `Select` to calculate the average rating and project it to an anonymous type, and then using `ExecuteUpdate` over that:

```csharp
context.Blogs
    .Select(b => new { Blog = b, NewRating = b.Posts.Average(p => p.Rating) })
    .ExecuteUpdate(setters => setters.SetProperty(b => b.Blog.Rating, b => b.NewRating));
```
