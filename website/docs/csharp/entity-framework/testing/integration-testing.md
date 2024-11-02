---
title: Integration Testing
---

When doing integration testing for an Entity Framework project it is a common approach to add an `appsettings.json` specific to the integration test environment in the application. While this approach can work, it makes more sense for the application to not have to know anything about the testing environment.

Instead we can override the configuration of the host in the test project to achieve the same result. This way all the testing configuration is in the test project and the application does not need to know anything about the testing environment.

## Example

We override the `ConfigureWebHost` method in the `WebApplicationFactory` class to override the configuration of the host.

```csharp
  protected override void ConfigureWebHost(IWebHostBuilder builder)
  {
      builder.ConfigureTestServices(services =>
      {
          services.RemoveAll<DbContextOptions<AppDbContext>>();
          services.RemoveAll<AppDbContext>();

          services.AddDbContext<AppDbContext>(x =>
              x.UseNpgsql(_dbContainer.GetConnectionString()));
      });
  }
```

:::danger
Never use the `InMemoryDatabase` for integration testing. The behavior is not comparable to the real database since the conversion of the LINQ queries to SQL and translation of data is not tested.
:::

See this [Nick Chapsas Video](https://www.youtube.com/watch?v=K1-n2EoPxiY) for more details.
