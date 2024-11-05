---
title: Deleting Data
---

To remove an entity from the database we can do the following:

```csharp
var authorToDelete = _context.Authors.Find(1);
if (authorToDelete != null)
{
  _context.Authors.Remove(authorToDelete);
  _context.SaveChanges();
}
```

## Efficient deleting with `ExecuteDelete`

Let's assume that you need to delete all Blogs with a rating below a certain threshold. The traditional `SaveChanges()` approach requires you to do the following:

```csharp
foreach (var blog in context.Blogs.Where(b => b.Rating < 3))
{
    context.Blogs.Remove(blog);
}

context.SaveChanges();
```

This is quite an inefficient way to perform this task: we query the database for all Blogs matching our filter, and then we query, materialize and track all those instances; the number of matching entities could be huge. We then tell EF's change tracker that each Blog needs to be removed, and apply those changes by calling `SaveChanges()`, which generates a `DELETE` statement for each and every one of them.

Here is the same task performed via the ExecuteDelete API:

```csharp
context.Blogs.Where(b => b.Rating < 3).ExecuteDelete();
```

This uses the familiar LINQ operators to determine which Blogs should be affected - just as if we were querying them - and then tells EF to execute a SQL `DELETE` against the database:

```sql
DELETE FROM [b]
FROM [Blogs] AS [b]
WHERE [b].[Rating] < 3
```

**Aside from being simpler and shorter, this executes very efficiently in the database, without loading any data from the database or involving EF's change tracker.** Note that you can use arbitrary LINQ operators to select which Blogs you'd like to delete - these are translated to SQL for execution at the database, just as if you were querying those Blogs out.
