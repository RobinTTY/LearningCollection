---
id: dbcontext
title: DbContext
sidebar_position: 1
---

## The DbContext lifetime

The lifetime of a `DbContext` begins when the instance is created and ends when the instance is disposed. A DbContext instance is designed to be used for a single [unit-of-work](https://www.martinfowler.com/eaaCatalog/unitOfWork.html). This means that the lifetime of a `DbContext` instance is usually very short.

> A **Unit of Work** keeps track of everything you do during a business transaction that can affect the database. When you're done, it figures out everything that needs to be done to alter the database as a result of your work.

A typical unit-of-work when using Entity Framework Core (EF Core) involves:

- Creation of a `DbContext` instance
- Tracking of entity instances by the context. Entities become tracked by
  - Being [returned from a query](https://learn.microsoft.com/en-us/ef/core/querying/tracking)
  - Being [added or attached to the context](https://learn.microsoft.com/en-us/ef/core/saving/disconnected-entities)
- Changes are made to the tracked entities as needed to implement the business rule
- [`SaveChanges`](https://learn.microsoft.com/en-us/dotnet/api/microsoft.entityframeworkcore.dbcontext.savechanges) or [`SaveChangesAsync`](https://learn.microsoft.com/en-us/dotnet/api/microsoft.entityframeworkcore.dbcontext.savechangesasync) is called. EF Core detects the changes made and writes them to the database.
- The `DbContext` instance is disposed

:::danger

- **DbContext is not thread-safe**. Do not share contexts between threads. Make sure to await all async calls before continuing to use the context instance.
- **It is very important to dispose the `DbContext` after use**. This ensures both that any unmanaged resources are freed, and that any events or other hooks are unregistered so as to prevent memory leaks in case the instance remains referenced.
- An [InvalidOperationException](https://learn.microsoft.com/en-us/dotnet/api/system.invalidoperationexception) thrown by EF Core code can put the context into an unrecoverable state. Such exceptions indicate a program error and are not designed to be recovered from.

:::

## DbContext in dependency injection

In many web applications, each HTTP request corresponds to a single unit-of-work. This makes tying the context lifetime to that of the request a good default for web applications.

### Basic usage

ASP.NET Core applications are [configured using dependency injection](https://learn.microsoft.com/en-us/aspnet/core/fundamentals/startup). EF Core can be added to this configuration using [AddDbContext](https://learn.microsoft.com/en-us/dotnet/api/microsoft.extensions.dependencyinjection.entityframeworkservicecollectionextensions.adddbcontext) in the [ConfigureServices](https://learn.microsoft.com/en-us/aspnet/core/fundamentals/startup#the-configureservices-method) method of Startup.cs. For example:

```csharp
public void ConfigureServices(IServiceCollection services)
{
    services.AddControllers();

    services.AddDbContext<ApplicationDbContext>(
        options => options.UseSqlServer("name=ConnectionStrings:DefaultConnection"));
}
```

This example registers a `DbContext` subclass called `ApplicationDbContext` as a scoped service in the ASP.NET Core application service provider (a.k.a. the dependency injection container). The context is configured to use the SQL Server database provider and will read the connection string from ASP.NET Core configuration. It typically does not matter where in `ConfigureServices` the call to `AddDbContext` is made.

The `ApplicationDbContext` class must expose a public constructor with a `DbContextOptions<ApplicationDbContext>` parameter. This is how context configuration from `AddDbContext` is passed to the `DbContext`. For example:

```csharp
public class ApplicationDbContext : DbContext
{
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
        : base(options)
    {
    }
}
```

The `DbContextOptions` can be created and the constructor can be called explicitly:

```csharp
var contextOptions = new DbContextOptionsBuilder<ApplicationDbContext>()
    .UseSqlServer(@"Server=(localdb)\mssqllocaldb;Database=Test")
    .Options;

using var context = new ApplicationDbContext(contextOptions);
```

### Adding a pooled DbContext

```csharp
builder.Services.AddDbContextPool<MyDbContext>(options =>
{
    options.UseSqlServer(connstr);
});

builder.Services.AddDbContextFactory<MyDbContext>(options =>
{
    options.UseSqlServer(connstr);
});
```

#### `AddDbContextPool` vs `AddDbContextFactory`

Both `AddDbContextPool` and `AddDbContextFactory` return a scoped instance of a `MyDbContext` from the DI.
`AddDbContextFactory` gives you the ability to create and manage DbContext instances yourself:

```csharp
using (var context = _contextFactory.CreateDbContext())
{
    // ...
}
```

That's useful when you don't have an explicit Unit of Work (e.g. request) or you want to keep the Context instance short-lived (during an intensive data pipeline task, as too many operations against the same instance can get very slow).
