---
title: Introduction
---

Entity Framework (EF) Core is a lightweight, extensible, [open source](https://github.com/dotnet/efcore) and cross-platform version of the Entity Framework data access technology. EF Core can serve as an object-relational mapper (ORM), which:

- Enables .NET developers to work with a database using .NET objects.
- Eliminates the need for most of the data-access code that typically needs to be written.

EF Core supports many database engines, see [Database Providers](https://learn.microsoft.com/en-us/ef/core/providers/) for details.

## Concept Mapping

This diagram illustrates how C# code constructs map to relational database concepts in Entity Framework Core (EF Core):

| C# / .NET         | EF Core Model  | SQL Database |
| ----------------- | -------------- | ------------ |
| Class             | Model          | Table        |
| Object            | Data           | Row          |
| Function / Method | Operation      | SQL (SIUD)   |

SIUD = Select, Insert, Update, Delete

### Usual Flow (Code First)

```
C# Class  ───────▶  EF Core Model  ───────▶  SQL Table
C# Object ───────▶  Model Instance ───────▶  Row
C# Method ───────▶  EF Operation   ───────▶  SQL (Select, Insert, Update, Delete)
```

### CRUD Mapping

| C# Operation               | SQL Equivalent |
| -------------------------- | -------------- |
| Add(entity)                | INSERT         |
| Find(id), First(), Where() | SELECT         |
| Update(entity)             | UPDATE         |
| Remove(entity)             | DELETE         |

## The model

With EF Core, data access is performed using a model. A model is made up of entity classes and a context object that represents a session with the database. The context object allows querying and saving data.

EF supports the following model development approaches:

- Generate a model from an existing database.
- Code a model to match the database.
- Once a model is created, use [EF Migrations](https://learn.microsoft.com/en-us/ef/core/managing-schemas/migrations/) to create a database from the model. Migrations allow evolving the database as the model changes.

```csharp
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace Intro;

public class BloggingContext : DbContext
{
    public DbSet<Blog> Blogs { get; set; }
    public DbSet<Post> Posts { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseSqlServer(@"Server=(localdb)\mssqllocaldb;Database=Blogging;Trusted_Connection=True");
    }
}

public class Blog
{
    public int BlogId { get; set; }
    public string Url { get; set; }
    public int Rating { get; set; }
    public List<Post> Posts { get; set; }
}

public class Post
{
    public int PostId { get; set; }
    public string Title { get; set; }
    public string Content { get; set; }

    public int BlogId { get; set; }
    public Blog Blog { get; set; }
}
```

## Querying

Instances of your entity classes are retrieved from the database using [Language Integrated Query (LINQ)](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/linq/). For more information, see [Querying Data](https://learn.microsoft.com/en-us/ef/core/querying/).

```csharp
using (var db = new BloggingContext())
{
    var blogs = db.Blogs
        .Where(b => b.Rating > 3)
        .OrderBy(b => b.Url)
        .ToList();
}
```

The querying workflow looks like this:

![query-workflow](/img/docs/csharp/efcore/query-workflow.png)

## Saving data

Data is created, deleted, and modified in the database using instances of your entity classes. See [Saving Data](https://learn.microsoft.com/en-us/ef/core/saving/) to learn more.

```csharp
using (var db = new BloggingContext())
{
    var blog = new Blog { Url = "http://sample.com" };
    db.Blogs.Add(blog);
    db.SaveChanges();
}
```

## EF ORM considerations

While EF Core is good at abstracting many programming details, there are some best practices applicable to any ORM that help to avoid common pitfalls in production apps:

- **Knowledge of the underlying database server is essential** to architect, debug, profile, and migrate data in high performance production apps. For example, knowledge of primary and foreign keys, constraints, indexes, normalization, DML and DDL statements, data types, profiling, etc.
- **Functional and integration testing is important** to replicate the production environment as closely as possible to:
  - Find issues in the app that only show up when using a specific versions or edition of the database server.
  - Catch breaking changes when upgrading EF Core and other dependencies. For example, adding or upgrading frameworks like ASP.NET Core, OData, or AutoMapper. These dependencies can affect EF Core in unexpected ways.
- **Performance and stress testing with representative loads.** The naïve usage of some features doesn't scale well. For example, multiple collections Includes, heavy use of lazy loading, conditional queries on non-indexed columns, massive updates and inserts with store-generated values, lack of concurrency handling, large models or an inadequate cache policy.

More advanced considerations:

- **Security review**: For example, handling of connection strings and other secrets, database permissions for non-deployment operation, input validation for raw SQL, encryption for sensitive data.
- Make sure **logging and diagnostics** are sufficient and usable. For example, appropriate logging configuration, query tags, and Application Insights.
- Error recovery. Prepare **contingencies for common failure scenarios** such as version rollback, fallback servers, scale-out and load balancing, DoS mitigation, and data backups.
- **Plan out how migrations are going to be applied during deployment;** doing it at application start can suffer from concurrency issues and requires higher permissions than necessary for normal operation. Use staging to facilitate recovery from fatal errors during migration. For more information, see Applying Migrations.
- **Migrations should be thoroughly tested before being applied to production data.** The shape of the schema and the column types cannot be easily changed once the tables contain production data. For example, on SQL Server, `nvarchar(max)` and `decimal(18, 2)` are rarely the best types for columns mapped to string and decimal properties, but those are the defaults that EF uses because it doesn't have knowledge of your specific scenario.
