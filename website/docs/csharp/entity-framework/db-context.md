---
title: DbContext
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

A `DbContext` is generally a light object: creating and disposing one doesn't involve a database operation, and most applications can do so without any noticeable impact on performance.

However, each context instance does set up various internal services and objects necessary for performing its duties, and the overhead of continuously doing so may be significant in high-performance scenarios.

For these cases, EF Core can pool your context instances: when you dispose your context, EF Core resets its state and stores it in an internal pool; when a new instance is next requested, that pooled instance is returned instead of setting up a new one. Context pooling allows you to pay context setup costs only once at program startup, rather than continuously.

:::info
Context pooling is orthogonal to database connection pooling, which is managed at a lower level in the database driver.
:::

To enable context pooling, simply replace `AddDbContext` with `AddDbContextPool`:

```csharp
builder.Services.AddDbContextPool<MyDbContext>(options =>
{
    options.UseSqlServer(connstr);
});
```

The `poolSize` parameter of [AddDbContextPool](https://learn.microsoft.com/en-us/dotnet/api/microsoft.extensions.dependencyinjection.entityframeworkservicecollectionextensions.adddbcontextpool) sets the maximum number of instances retained by the pool (defaults to 1024). Once `poolSize` is exceeded, new context instances are not cached and EF falls back to the non-pooling behavior of creating instances on demand.

#### `AddDbContextPool` vs `AddDbContextFactory`

Both `AddDbContextPool` and `AddDbContextFactory` return a scoped instance of a `MyDbContext` from the DI.
`AddDbContextFactory` gives you the ability to create and manage DbContext instances yourself:

```csharp
builder.Services.AddDbContextFactory<MyDbContext>(options =>
{
    options.UseSqlServer(connstr);
});

using (var context = _contextFactory.CreateDbContext())
{
    // ...
}
```

That's useful when you don't have an explicit Unit of Work (e.g. request) or you want to keep the Context instance short-lived (during an intensive data pipeline task, as too many operations against the same instance can get very slow).

## `DbContextOptions`

The starting point for all `DbContext` configuration is [DbContextOptionsBuilder](https://learn.microsoft.com/en-us/dotnet/api/microsoft.entityframeworkcore.dbcontextoptionsbuilder). There are three ways to get this builder:

- In `AddDbContext` and related methods
- In `OnConfiguring`
- Constructed explicitly with `new`

Examples of each of these are shown in the preceding sections. The same configuration can be applied regardless of where the builder comes from. In addition, `OnConfiguring` is always called regardless of how the context is constructed. This means `OnConfiguring` can be used to perform additional configuration even when `AddDbContext` is being used.

### Configuring the database provider

Each `DbContext` instance must be configured to use one and only one database provider. (Different instances of a `DbContext` subtype can be used with different database providers, but a single instance must only use one.) A database provider is configured using a specific `Use*` call. For example, to use the SQL Server database provider:

```csharp
public class ApplicationDbContext : DbContext
{
    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseSqlServer(@"Server=(localdb)\mssqllocaldb;Database=Test");
    }
}
```

These `Use*` methods are extension methods implemented by the database provider. This means that the database provider NuGet package must be installed before the extension method can be used. For more information on connection strings see the [Microsoft Documentation](https://learn.microsoft.com/en-us/ef/core/miscellaneous/connection-strings).

Optional configuration specific to the database provider is performed in an additional provider-specific builder. For example, using [EnableRetryOnFailure](https://learn.microsoft.com/en-us/dotnet/api/microsoft.entityframeworkcore.infrastructure.sqlserverdbcontextoptionsbuilder.enableretryonfailure) to configure retries for connection resiliency when connecting to Azure SQL:

```csharp
public class ApplicationDbContext : DbContext
{
    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder
            .UseSqlServer(
                @"Server=(localdb)\mssqllocaldb;Database=Test",
                providerOptions => { providerOptions.EnableRetryOnFailure(); });
    }
}
```

### Other DbContext configuration

Other `DbContext` configuration can be chained either before or after (it makes no difference which) the `Use*` call. For example, to turn on sensitive-data logging:

```csharp
public class ApplicationDbContext : DbContext
{
    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder
            .EnableSensitiveDataLogging()
            .UseSqlServer(@"Server=(localdb)\mssqllocaldb;Database=Test");
    }
}
```

The following table contains examples of common methods called on `DbContextOptionsBuilder`:

| DbContextOptionsBuilder method                                                                                                                              | What it does                                               | Learn more                                                                                                |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| [UseQueryTrackingBehavior](https://learn.microsoft.com/en-us/dotnet/api/microsoft.entityframeworkcore.dbcontextoptionsbuilder.usequerytrackingbehavior)     | Sets the default tracking behavior for queries             | [Query Tracking Behavior](https://learn.microsoft.com/en-us/ef/core/querying/tracking)                    |
| [LogTo](https://learn.microsoft.com/en-us/dotnet/api/microsoft.entityframeworkcore.dbcontextoptionsbuilder.logto)                                           | A simple way to get EF Core logs                           | [Logging, Events, and Diagnostics](https://learn.microsoft.com/en-us/ef/core/logging-events-diagnostics/) |
| [UseLoggerFactory](https://learn.microsoft.com/en-us/dotnet/api/microsoft.entityframeworkcore.dbcontextoptionsbuilder.useloggerfactory)                     | Registers an Microsoft.Extensions.Logging factory          | [Logging, Events, and Diagnostics](https://learn.microsoft.com/en-us/ef/core/logging-events-diagnostics/) |
| [EnableSensitiveDataLogging](https://learn.microsoft.com/en-us/dotnet/api/microsoft.entityframeworkcore.dbcontextoptionsbuilder.enablesensitivedatalogging) | Includes application data in exceptions and logging        | [Logging, Events, and Diagnostics](https://learn.microsoft.com/en-us/ef/core/logging-events-diagnostics/) |
| [EnableDetailedErrors](https://learn.microsoft.com/en-us/dotnet/api/microsoft.entityframeworkcore.dbcontextoptionsbuilder.enabledetailederrors)             | More detailed query errors (at the expense of performance) | [Logging, Events, and Diagnostics](https://learn.microsoft.com/en-us/ef/core/logging-events-diagnostics/) |
| [ConfigureWarnings](https://learn.microsoft.com/en-us/dotnet/api/microsoft.entityframeworkcore.dbcontextoptionsbuilder.configurewarnings)                   | Ignore or throw for warnings and other events              | [Logging, Events, and Diagnostics](https://learn.microsoft.com/en-us/ef/core/logging-events-diagnostics/) |
| [AddInterceptors](https://learn.microsoft.com/en-us/dotnet/api/microsoft.entityframeworkcore.dbcontextoptionsbuilder.addinterceptors)                       | Registers EF Core interceptors                             | [Logging, Events, and Diagnostics](https://learn.microsoft.com/en-us/ef/core/logging-events-diagnostics/) |
| [UseLazyLoadingProxies](https://learn.microsoft.com/en-us/dotnet/api/microsoft.entityframeworkcore.proxiesextensions.uselazyloadingproxies)                 | Use dynamic proxies for lazy-loading                       | [Lazy Loading](https://learn.microsoft.com/en-us/ef/core/querying/related-data/lazy)                      |
| [UseChangeTrackingProxies](https://learn.microsoft.com/en-us/dotnet/api/microsoft.entityframeworkcore.proxiesextensions.usechangetrackingproxies)           | Use dynamic proxies for change-tracking                    | Coming soon...                                                                                            |

### `DbContextOptions` vs `DbContextOptions<TContext>`

Most `DbContext` subclasses that accept a `DbContextOptions` should use the generic `DbContextOptions<TContext>` variation. For example:

```csharp
public sealed class SealedApplicationDbContext : DbContext
{
    public SealedApplicationDbContext(DbContextOptions<SealedApplicationDbContext> contextOptions)
        : base(contextOptions)
    {
    }
}
```

This ensures that the correct options for the specific `DbContext` subtype are resolved from dependency injection, even when multiple `DbContext` subtypes are registered. Your `DbContext` does not need to be sealed, but sealing is best practice to do so for classes not designed to be inherited from.

However, if the `DbContext` subtype is itself intended to be inherited from, then it should expose a protected constructor taking a non-generic `DbContextOptions`. For example:

```csharp
public abstract class ApplicationDbContextBase : DbContext
{
    protected ApplicationDbContextBase(DbContextOptions contextOptions)
        : base(contextOptions)
    {
    }
}
```

This allows multiple concrete subclasses to call this base constructor using their different generic `DbContextOptions<TContext>` instances. For example:

```csharp
public sealed class ApplicationDbContext1 : ApplicationDbContextBase
{
    public ApplicationDbContext1(DbContextOptions<ApplicationDbContext1> contextOptions)
        : base(contextOptions)
    {
    }
}

public sealed class ApplicationDbContext2 : ApplicationDbContextBase
{
    public ApplicationDbContext2(DbContextOptions<ApplicationDbContext2> contextOptions)
        : base(contextOptions)
    {
    }
}
```

Notice that this is exactly the same pattern as when inheriting from `DbContext` directly. That is, the `DbContext` constructor itself accepts a non-generic `DbContextOptions` for this reason. A `DbContext` subclass intended to be both instantiated and inherited from should expose both forms of constructor. For example:

```csharp
public class ApplicationDbContext : DbContext
{
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> contextOptions)
        : base(contextOptions)
    {
    }

    protected ApplicationDbContext(DbContextOptions contextOptions)
        : base(contextOptions)
    {
    }
}
```
