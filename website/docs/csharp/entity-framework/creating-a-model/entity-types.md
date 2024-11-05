---
title: Entity types
---

Including a `DbSet` of a type on your context means that it is included in EF Core's model; we usually refer to such a type as an entity. EF Core can read and write entity instances from/to the database, and if you're using a relational database, EF Core can create tables for your entities via migrations.

![entity-tracking](/img/docs/csharp/efcore/entities.png)

## Including types in the model

By convention, types that are exposed in DbSet properties on your context are included in the model as entities. Entity types that are specified in the `OnModelCreating` method are also included, as are any types that are found by recursively exploring the navigation properties of other discovered entity types.

In the code sample below, all types are included:

- `Blog` is included because it's exposed in a DbSet property on the context.
- `Post` is included because it's discovered via the `Blog.Posts` navigation property.
- `AuditEntry` because it is specified in OnModelCreating.

```csharp
internal class MyContext : DbContext
{
    public DbSet<Blog> Blogs { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<AuditEntry>();
    }
}

public class Blog
{
    public int BlogId { get; set; }
    public string Url { get; set; }

    public List<Post> Posts { get; set; }
}

public class Post
{
    public int PostId { get; set; }
    public string Title { get; set; }
    public string Content { get; set; }

    public Blog Blog { get; set; }
}

public class AuditEntry
{
    public int AuditEntryId { get; set; }
    public string Username { get; set; }
    public string Action { get; set; }
}
```

### Table name

By convention, each entity type will be set up to map to a database table with the same name as the `DbSet` property that exposes the entity. If no `DbSet` exists for the given entity, the class name is used.

You can manually configure the table name:

```csharp {2,12-13}
/// via annotations
[Table("blogs")]
public class Blog
{
    public int BlogId { get; set; }
    public string Url { get; set; }
}

/// via fluent API
protected override void OnModelCreating(ModelBuilder modelBuilder)
{
    modelBuilder.Entity<Blog>()
        .ToTable("blogs");
}
```

### Table schema

When using a relational database, tables are by convention created in your database's default schema. For example, Microsoft SQL Server will use the `dbo` schema (SQLite does not support schemas).

You can configure tables to be created in a specific schema as follows:

```csharp {2,12-13}
/// via annotations
[Table("blogs", Schema = "blogging")]
public class Blog
{
    public int BlogId { get; set; }
    public string Url { get; set; }
}

/// via fluent API
protected override void OnModelCreating(ModelBuilder modelBuilder)
{
    modelBuilder.Entity<Blog>()
        .ToTable("blogs", schema: "blogging");
}
```

Rather than specifying the schema for each table, you can also define the default schema at the model level with the fluent API:

```csharp {3}
protected override void OnModelCreating(ModelBuilder modelBuilder)
{
    modelBuilder.HasDefaultSchema("blogging");
}
```

### Table comments

You can set an arbitrary text comment that gets set on the database table, allowing you to document your schema in the database:

```csharp {2,12-13}
/// via annotations
[Comment("Blogs managed on the website")]
public class Blog
{
    public int BlogId { get; set; }
    public string Url { get; set; }
}

/// via fluent API
protected override void OnModelCreating(ModelBuilder modelBuilder)
{
    modelBuilder.Entity<Blog>().ToTable(
        tableBuilder => tableBuilder.HasComment("Blogs managed on the website"));
}
```

## Excluding types from the model

If you don't want a type to be included in the model, you can exclude it:

```csharp
/// via annotations
[NotMapped]
public class BlogMetadata
{
    public DateTime LoadedFromDatabase { get; set; }
}

/// via fluent API
protected override void OnModelCreating(ModelBuilder modelBuilder)
{
    modelBuilder.Ignore<BlogMetadata>();
}
```

### View mapping

Entity types can be mapped to database views using the Fluent API. EF will assume that the referenced view already exists in the database, it will not create it automatically in a migration.

```csharp
modelBuilder.Entity<Blog>()
    .ToView("blogsView", schema: "blogging");
```

Mapping to a view will remove the default table mapping, but the entity type can also be mapped to a table explicitly. In this case the query mapping will be used for queries and the table mapping will be used for updates.

## Excluding from migrations

It is sometimes useful to have the same entity type mapped in multiple `DbContext` types. This is especially true when using [bounded contexts](https://www.martinfowler.com/bliki/BoundedContext.html), for which it is common to have a different `DbContext` type for each bounded context.

```csharp
protected override void OnModelCreating(ModelBuilder modelBuilder)
{
    modelBuilder.Entity<IdentityUser>()
        .ToTable("AspNetUsers", t => t.ExcludeFromMigrations());
}
```

With this configuration migrations will not create the `AspNetUsers` table, but `IdentityUser` is still included in the model and can be used normally.

If you need to start managing the table using migrations again then a new migration should be created where `AspNetUsers` is not excluded. The next migration will now contain any changes made to the table.
