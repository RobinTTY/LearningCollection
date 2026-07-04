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

## Complex and Owned Types

### Owned Types

EF Core allows you to model entity types that can only ever appear on navigation properties of other entity types. These are called owned entity types. The entity containing an owned entity type is its owner.

Owned entities are essentially a part of the owner and cannot exist without it, they are conceptually similar to [aggregates](https://martinfowler.com/bliki/DDD_Aggregate.html). This means that the owned entity is by definition on the dependent side of the relationship with the owner.

#### Example

```csharp
public class StreetAddress
{
    public string Street { get; set; }
    public string City { get; set; }
}

public class Order
{
    public int Id { get; set; }
    public StreetAddress ShippingAddress { get; set; }
}

protected override void OnModelCreating(ModelBuilder modelBuilder)
{
    modelBuilder.Entity<Order>(b =>
    {
        b.OwnsOne(o => o.ShippingAddress)
            .ToTable("Addresses");
    });
}
```

Event if the owned type is stored in a separate table, it is still considered as part of the owner entity. This means that when the owner entity is deleted, the owned entity is also deleted. When querying for the owner entity, the owned entity is also loaded by default (no include necessary).

### Complex Types

Objects saved to the database can be split into three broad categories:

- Objects that are unstructured and hold a single value. For example, `int`, `Guid`, `string`, `IPAddress`. These are (somewhat loosely) called “primitive types”.
- Objects that are structured to hold multiple values, and where the identity of the object is defined by a key value. For example, `Blog`, `Post`, `Customer`. These are called “entity types”.
- Objects that are structured to hold multiple values, but the object has no key defining identity. For example, `Address`, `Coordinate`

Prior to EF8, there was no good way to map the third type of object. EF8 added support for “Complex Types” to cover this third type of object. Complex type objects:

- Are not identified or tracked by key value.
- Must be defined as part of an entity type. (In other words, you cannot have a DbSet of a complex type.)
- Can be either .NET value types or reference types.
- Can share the same instance across multiple properties.

#### Example

One of the most straightforward examples is an `Order` with a `ShippingAddress` and a `BillingAddress`. Instead of repeating all address properties twice in the `Order`, we create a complex type `Address` and use it in the `Order`:

```csharp
public class Order
{
    public int OrderId { get; set; }
    public DateTime OrderDate { get; set; }
    public Address ShippingAddress { get; set; }
    public Address BillingAddress { get; set; }
}

public class Address
{
    public string Street { get; set; }
    public string City { get; set; }
    public string State { get; set; }
    public string Country { get; set; }
    public string PostalCode { get; set; }
}

protected override void OnModelCreating(ModelBuilder modelBuilder)
{
	modelBuilder.Entity<Order>(x => {
		   x.ComplexProperty(y => y.ShippingAddress, y => { y.IsRequired(); });
		   x.ComplexProperty(y => y.BillingAddress, y => { y.IsRequired(); });
	 });
	base.OnModelCreating(modelBuilder);
}

var shippingAddress = new Address() { Street = "Saint-Hubert", City = "Laval", State = "Quebec", Country = "Canada", PostalCode = "H7G 2Y2"};
var billingAddress = new Address() { Street = "Saint-Hubert", City = "Laval", State = "Quebec", Country = "Canada", PostalCode = "H7G 2Y2"};
var order = new Order() { OrderDate = DateTime.Now, ShippingAddress = shippingAddress, BillingAddress = billingAddress };
```

### Differences

- Owned types can be stored in a separate table
- Owned types are considered as an Entity Type
- Complex types can be reused within the same entity or other entity
- Complex types have no identity / is not tracked

With EF Core 8 re-introducing complex types, they just filled a gap they had with EF6 by allowing them to share an instance of an object that is not tracked.