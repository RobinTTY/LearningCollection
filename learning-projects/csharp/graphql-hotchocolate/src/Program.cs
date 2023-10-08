using GraphQLHotChocolate.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddDbContext<ApplicationDbContext>(options => options.UseSqlite("Data Source=conferences.db"));
var app = builder.Build();

app.MapGet("/", () => "Hello World!");

app.Run();

// Database Migration: https://learn.microsoft.com/en-us/ef/core/managing-schemas/migrations/?tabs=dotnet-core-cli
// In real world projects, data models change as features get implemented: new entities or properties are added and
// removed, and database schemas need to be changed accordingly to be kept in sync with the application. The
// migrations feature in EF Core provides a way to incrementally update the database schema to keep it in sync with
// the application's data model while preserving existing data in the database.