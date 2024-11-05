---
title: Tracking Behavior
---

Tracking behavior controls if Entity Framework Core keeps information about an entity instance in its change tracker. If an entity is tracked:

- any changes detected in the entity are persisted to the database during `SaveChanges`.
- navigation properties are fixed up between the entities in a tracking query result and the entities that are in the change tracker.

![entity-tracking](/img/docs/csharp/efcore/entity-tracking.png)

## Tracking queries

By default, queries that return entity types are tracking. A tracking query means any changes to entity instances are persisted by `SaveChanges`. In the following example, the change to the blogs rating is detected and persisted to the database during `SaveChanges`:

```csharp
var blog = context.Blogs.SingleOrDefault(b => b.BlogId == 1);
blog.Rating = 5;
context.SaveChanges();
```

When the results are returned in a tracking query, EF Core checks if the entity is already in the context. If EF Core finds an existing entity, then the same instance is returned, which can potentially use less memory and be faster than a no-tracking query. EF Core doesn't overwrite current and original values of the entity's properties in the entry with the database values. If the entity isn't found in the context, EF Core creates a new entity instance and attaches it to the context. Query results don't contain any entity which is added to the context but not yet saved to the database.

![tracking-workflow](/img/docs/csharp/efcore/tracking-workflow.png)

The entities are just plain objects and don't communicate their changes to the `DbContext`. But the context has its references to these objects and keeps track of their state:

![detect-changes](/img/docs/csharp/efcore/detect-changes.png)

## No-tracking queries

No-tracking queries are useful when the results are used in a read-only scenario. They're generally quicker to execute because there's no need to set up the change tracking information. If the entities retrieved from the database don't need to be updated, then a no-tracking query should be used. An individual query can be set to be no-tracking. A no-tracking query also give results based on what's in the database disregarding any local changes or added entities.

```csharp
var blogs = context.Blogs
    .AsNoTracking()
    .ToList();
```

The default tracking behavior can be changed at the context instance level:

```csharp {1}
context.ChangeTracker.QueryTrackingBehavior = QueryTrackingBehavior.NoTracking;

var blogs = context.Blogs.ToList();
```

## Identity resolution

Since a tracking query uses the change tracker, EF Core does identity resolution in a tracking query. When materializing an entity, EF Core returns the same entity instance from the change tracker if it's already being tracked. If the result contains the same entity multiple times, the same instance is returned for each occurrence. No-tracking queries:

- Don't use the change tracker and don't do identity resolution.
- Return a new instance of the entity even when the same entity is contained in the result multiple times.

Tracking and no-tracking can be combined in the same query. That is, you can have a no-tracking query, which does identity resolution in the results with `AsNoTrackingWithIdentityResolution<TEntity>(IQueryable<TEntity>)`. When the query to use identity resolution is configured with no tracking, a stand-alone change tracker is used in the background when generating query results so each instance is materialized only once. Since this change tracker is different from the one in the context, the results are not tracked by the context. After the query is enumerated fully, the change tracker goes out of scope and garbage collected as required.

```csharp
var blogs = context.Blogs
    .AsNoTrackingWithIdentityResolution()
    .ToList();
```

## Default tracking behavior

If you find yourself changing the tracking behavior for many queries, you may want to change the default instead:

```csharp
protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
{
    optionsBuilder
        .UseSqlServer(@"Server=(localdb)\mssqllocaldb;Database=EFQuerying.Tracking;Trusted_Connection=True;ConnectRetryCount=0")
        .UseQueryTrackingBehavior(QueryTrackingBehavior.NoTracking);
}
```

This makes all your queries no-tracking by default. You can still add `AsTracking` to make specific queries tracking.
