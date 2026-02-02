---
title: Data Seeding
---

EF 9 introduced `UseSeeding` and `UseAsyncSeeding` methods, which provide a convenient way of seeding the database with initial data. They provide one clear location where all the data seeding code can be placed.

The new seeding methods are called as part of `EnsureCreated` operation, `Migrate` and `dotnet ef database update` command, even if there are no model changes and no migrations were applied.

Example:

```csharp
protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    => optionsBuilder
        .UseSqlServer(@"Server=(localdb)\mssqllocaldb;Database=EFDataSeeding;Trusted_Connection=True;ConnectRetryCount=0")
        .UseSeeding((context, _) =>
        {
            var testBlog = context.Set<Blog>().FirstOrDefault(b => b.Url == "http://test.com");
            if (testBlog == null)
            {
                context.Set<Blog>().Add(new Blog { Url = "http://test.com" });
                context.SaveChanges();
            }
        })
        .UseAsyncSeeding(async (context, _, cancellationToken) =>
        {
            var testBlog = await context.Set<Blog>().FirstOrDefaultAsync(b => b.Url == "http://test.com", cancellationToken);
            if (testBlog == null)
            {
                context.Set<Blog>().Add(new Blog { Url = "http://test.com" });
                await context.SaveChangesAsync(cancellationToken);
            }
        });
```

:::tip
Using `UseSeeding` and `UseAsyncSeeding` is the recommended way of seeding the database with initial data when working with EF Core.
:::

See: [Microsoft Docs](https://learn.microsoft.com/en-us/ef/core/modeling/data-seeding)

## Model managed data

Data can also be associated with an entity type as part of the model configuration. Then, EF Core migrations can automatically compute what insert, update or delete operations need to be applied when upgrading the database to a new version of the model.

As an example, this will configure managed data for a Country in `OnModelCreating`:

```csharp
modelBuilder.Entity<Country>(b =>
{
    b.Property(x => x.Name).IsRequired();
    b.HasData(
        new Country { CountryId = 1, Name = "USA" },
        new Country { CountryId = 2, Name = "Canada" },
        new Country { CountryId = 3, Name = "Mexico" });
});
```
