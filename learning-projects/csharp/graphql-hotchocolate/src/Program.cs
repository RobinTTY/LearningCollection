using GraphQLHotChocolate;
using GraphQLHotChocolate.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);
builder.Services
    .AddDbContext<ApplicationDbContext>(options => options.UseSqlite("Data Source=conferences.db"))
    .AddGraphQLServer()
    .AddQueryType<Query>();

var app = builder.Build();
app.MapGraphQL();
app.Run();

// Database Migration: https://learn.microsoft.com/en-us/ef/core/managing-schemas/migrations/?tabs=dotnet-core-cli
// In real world projects, data models change as features get implemented: new entities or properties are added and
// removed, and database schemas need to be changed accordingly to be kept in sync with the application. The
// migrations feature in EF Core provides a way to incrementally update the database schema to keep it in sync with
// the application's data model while preserving existing data in the database.

// Important Commands:
// Add-Migration <migration-name>
// => Files are added to your project under the Migrations directory:
// => MyContextModelSnapshot.cs - A snapshot of your current model. Used to determine what changed when adding the next migration
// => AddCreatedTimestamp.cs - The main migrations file. Contains the operations necessary to apply the migration (in Up) and to revert it (in Down)
// Update-Database
// => Creates your database and schema from the migration