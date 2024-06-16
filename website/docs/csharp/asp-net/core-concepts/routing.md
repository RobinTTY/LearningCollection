---
id: routing
title: Routing
---

Routing is responsible for matching incoming HTTP requests and dispatching those requests to the app's executable endpoints.

- Endpoints are the app's units of executable request-handling code.
- Endpoints are defined in the app and configured when the app starts.
- The endpoint matching process can extract values from the request's URL and provide those values for request processing.
- Using endpoint information from the app, routing is also able to generate URLs that map to endpoints.

Apps can configure routing using:

- Controllers
- SignalR
- gRPC Services
- Endpoint-enabled middleware such as [Health Checks](https://learn.microsoft.com/en-us/aspnet/core/host-and-deploy/health-checks?view=aspnetcore-8.0)
- Delegates and lambdas registered with routing
- Razor Pages

## Routing basics

The following code shows a basic example of routing:

```csharp
var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.MapGet("/", () => "Hello World!");

app.Run();
```

Routing uses a pair of middleware, registered by `UseRouting` and `UseEndpoints`:

- `UseRouting` adds route matching to the middleware pipeline. This middleware looks at the set of endpoints defined in the app, and selects the best match based on the request.
- `UseEndpoints` adds endpoint execution to the middleware pipeline. It runs the delegate associated with the selected endpoint.

Apps typically don't need to call `UseRouting` or `UseEndpoints`. `WebApplicationBuilder` configures a middleware pipeline that wraps middleware added in `Program.cs` with `UseRouting` and `UseEndpoints`. However, apps can change the order in which `UseRouting` and `UseEndpoints` run by calling these methods explicitly.

Also by explicitly calling these, you could also register middleware to reroute requests after initial routing but before execution.

## Types of Routing

In ASP.NET Core, Routing determines how an HTTP request matches a controller action. There are two primary approaches to routing in ASP.NET Core: **Attribute Routing** and **Conventional Routing**.

### Attribute routing

REST APIs should use attribute routing to model the app's functionality as a set of resources where operations are represented by [HTTP verbs](https://learn.microsoft.com/en-us/aspnet/core/mvc/controllers/routing?view=aspnetcore-8.0#verb). Attribute routing uses a set of attributes to map actions directly to route templates.

An example of Attribute routing looks like this:

```csharp
[Route("customers/{customerId}/orders")]
public IEnumerable<Order> GetOrdersByCustomer(int customerId) { ... }
```

This attribute will match the URI `/customers/1/orders`.

### Conventional routing

Conventional routing is used with controllers and views. The default route looks like this:

```csharp
app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");
```

The preceding is an example of a conventional route. It's called conventional routing because it establishes a convention for URL paths:

- The first path segment, `{controller=Home}`, maps to the controller name.
- The second segment, `{action=Index}`, maps to the action name.
- The third segment, `{id?}` is used for an optional `id`. The `?` in `{id?}` makes it optional. `id` is used to map to a model entity.

Using this `default` route, the URL path:

- `/Products/List` maps to the `ProductsController.List` action.
- `/Blog/Article/17` maps to `BlogController.Article` and typically model binds the `id` parameter to `17`.

This mapping:

- Is based on the controller and action names only.
- Isn't based on namespaces, source file locations, or method parameters.

Unfortunately, convention-based routing makes it hard to support certain URI patterns that are common in RESTful APIs. For example, resources often contain child resources: Customers have orders, movies have actors, books have authors, and so forth. It's natural to create URIs that reflect these relations:

`/customers/1/orders`

This type of URI is difficult to create using convention-based routing. Although it can be done, the results don't scale well if you have many controllers or resource types.

## Attribute Routing in detail

### HTTP Methods

Web API also selects actions based on the HTTP method of the request (GET, POST, etc). By default, Web API looks for a case-insensitive match with the start of the controller method name. For example, a controller method named `PutCustomers` matches an HTTP PUT request.

You can override this convention by decorating the method with any of the following attributes:

- `[HttpDelete]`
- `[HttpGet]`
- `[HttpHead]`
- `[HttpOptions]`
- `[HttpPatch]`
- `[HttpPost]`
- `[HttpPut]`

In the following example, Web API maps the `CreateBook` method to HTTP POST requests:

```csharp
[Route("api/cities")]
[HttpGet]
public IActionResult GetCities() { ... }
```

A route can also be set on the controller level to apply to all actions in the controller:

```csharp
[ApiController]
[Route("api/cities")]
public class CitiesController : ControllerBase
{
    [HttpGet]
    public IActionResult GetCities() { ... }
}
```

The controller name can also be automatically picked up by the route by defining the route as `[Route("api/[controller]")]`. This will result in the same route as the previous example.

### Route Parameters and Constraints

The string `"customers/{customerId}/orders"` is the URI template for a route. Web API tries to match the request URI to the template. In this example, `"customers"` and `"orders"` are literal segments, and `"{customerId}"` is a variable parameter. The following URIs would match this template:

- `http://localhost/customers/1/orders`
- `http://localhost/customers/bob/orders`
- `http://localhost/customers/1234-5678/orders`

Route constraints let you restrict how the parameters in the route template are matched. The general syntax is `{parameter:constraint}`. For example:

```csharp
[Route("users/{id:int}")]
public User GetUserById(int id) { ... }

[Route("users/{name}")]
public User GetUserByName(string name) { ... }
```

Here, the first route will only be selected if the "id" segment of the URI is an integer. Otherwise, the second route will be chosen.
