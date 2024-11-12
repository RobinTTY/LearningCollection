---
title: Migrations
---

In real world projects, data models change as features get implemented: new entities or properties are added and removed, and database schemas need to be changed accordingly to be kept in sync with the application. The migrations feature in EF Core provides a way to incrementally update the database schema to keep it in sync with the application's data model while preserving existing data in the database.

At a high level, migrations function in the following way:

- When a data model change is introduced, the developer uses EF Core tools to add a corresponding migration describing the updates necessary to keep the database schema in sync. EF Core compares the current model against a snapshot of the old model to determine the differences, and generates migration source files; the files can be tracked in your project's source control like any other source file.
- Once a new migration has been generated, it can be applied to a database in various ways. EF Core records all applied migrations in a special history table, allowing it to know which migrations have been applied and which haven't.

![migration-workflow](/img/docs/csharp/efcore/migration-workflow.png)

## Important commands

```bash
dotnet ef migrations add \<migration-name\>
dotnet ef migrations remove
dotnet ef database update
```

## Data seeding

See: [Microsoft Docs](https://learn.microsoft.com/en-us/ef/core/modeling/data-seeding)
