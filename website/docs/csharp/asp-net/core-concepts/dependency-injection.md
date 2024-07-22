---
id: dependency-injection
title: Dependency Injection
---

ASP.NET Core supports the dependency injection (DI) software design pattern, which is a technique for achieving [Inversion of Control (IoC)](https://learn.microsoft.com/en-us/dotnet/architecture/modern-web-apps-azure/architectural-principles#dependency-inversion) between classes and their dependencies.

Dependency injection is basically providing the objects that an object needs (its dependencies) instead of having it construct them itself. It's a very useful technique for testing, since it allows dependencies to be mocked or stubbed out. Dependencies can be injected into objects by many means (such as constructor injection or setter injection).

## How it works in ASP.NET

Examine the following `MyDependency` class with a `WriteMessage` method that other classes depend on:

```csharp
public class MyDependency
{
    public void WriteMessage(string message)
    {
        Console.WriteLine($"MyDependency.WriteMessage called. Message: {message}");
    }
}
```

A class can create an instance of the `MyDependency` class to make use of its `WriteMessage` method. In the following example, the `MyDependency` class is a dependency of the `IndexModel` class:

```csharp
public class IndexModel : PageModel
{
    private readonly MyDependency _dependency = new MyDependency();

    public void OnGet()
    {
        _dependency.WriteMessage("IndexModel.OnGet");
    }
}
```

The class creates and directly depends on the `MyDependency` class. Code dependencies, such as in the previous example, are problematic and should be avoided for the following reasons:

- To replace `MyDependency` with a different implementation, the `IndexModel` class must be modified.
- If `MyDependency` has dependencies, they must also be configured by the `IndexModel` class. In a large project with multiple classes depending on `MyDependency`, the configuration code becomes scattered across the app.
- This implementation is difficult to unit test.

Dependency injection addresses these problems through:

- The use of an interface or base class to abstract the dependency implementation.
- Registration of the dependency in a service container. ASP.NET Core provides a built-in service container, [`IServiceProvider`](https://learn.microsoft.com/en-us/dotnet/api/system.iserviceprovider). Services are typically registered in the app's `Program.cs` file.
- Injection of the service into the constructor of the class where it's used. The framework takes on the responsibility of creating an instance of the dependency and disposing of it when it's no longer needed.

### Using dependency injection

In the sample app, the `IMyDependency` interface defines the `WriteMessage` method:

```csharp
public interface IMyDependency
{
    void WriteMessage(string message);
}
```

This interface is implemented by a concrete type, `MyDependency`:

```csharp
public class MyDependency : IMyDependency
{
    public void WriteMessage(string message)
    {
        Console.WriteLine($"MyDependency.WriteMessage Message: {message}");
    }
}
```

The sample app registers the `IMyDependency` service with the concrete type `MyDependency`. The [`AddScoped`](https://learn.microsoft.com/en-us/dotnet/api/microsoft.extensions.dependencyinjection.servicecollectionserviceextensions.addscoped) method registers the service with a scoped lifetime. Service lifetimes are described in the following section.

```csharp
using DependencyInjectionSample.Interfaces;
using DependencyInjectionSample.Services;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddRazorPages();

builder.Services.AddScoped<IMyDependency, MyDependency>();

var app = builder.Build();
```

In the sample app, the `IMyDependency` service is requested and used to call the `WriteMessage` method:

```csharp
public class Index2Model : PageModel
{
    private readonly IMyDependency _myDependency;

    public Index2Model(IMyDependency myDependency)
    {
        _myDependency = myDependency;
    }

    public void OnGet()
    {
        _myDependency.WriteMessage("Index2Model.OnGet");
    }
}
```

It's not unusual to use dependency injection in a chained fashion. Each requested dependency in turn requests its own dependencies. The container resolves the dependencies in the graph and returns the fully resolved service. The collective set of dependencies that must be resolved is typically referred to as a **dependency tree**, **dependency graph**, or object graph.

## Lifetime and registration options

Services can be registered with one of the following lifetimes:

- Transient
- Scoped
- Singleton

By default, in the development environment, resolving a service from another service with a longer lifetime throws an exception. For more information, see [Scope validation](https://learn.microsoft.com/en-us/dotnet/core/extensions/dependency-injection#scope-validation).

### Transient

Transient lifetime services are **created each time they're requested** from the service container. To register a service as transient, call `AddTransient`. In apps that process requests, transient services are disposed at the end of the request. This lifetime incurs per/request allocations, as services are resolved and constructed every time.

These services are useful when each operation requires a clean and independent instance.

### Scoped

For web applications, a scoped lifetime indicates that services are created once per client request (connection). Register scoped services with `AddScoped`. In apps that process requests, scoped services are disposed at the end of the request.

When using Entity Framework Core, the `AddDbContext` extension method registers `DbContext` types with a scoped lifetime by default.

### Singleton

Singleton lifetime services are created either:

- The first time they're requested.
- By the developer, when providing an implementation instance directly to the container. This approach is rarely needed.

Every subsequent request of the service implementation from the dependency injection container uses the same instance. Register singleton services with `AddSingleton`. Singleton services must be thread safe and are often used in stateless services.

In apps that process requests, singleton services are disposed when the ServiceProvider is disposed on application shutdown. Because memory is not released until the app is shut down, consider memory use with a singleton service
