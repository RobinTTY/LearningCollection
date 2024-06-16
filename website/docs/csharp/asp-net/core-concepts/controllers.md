---
id: controllers
title: Controllers
---

Controllers in a web API are classes that derive from [`ControllerBase`](https://learn.microsoft.com/en-us/dotnet/api/microsoft.aspnetcore.mvc.controllerbase). Controllers are activated and disposed on a per request basis.

## `ControllerBase` class

A controller-based web API consists of one or more controller classes that derive from [`ControllerBase`](https://learn.microsoft.com/en-us/dotnet/api/microsoft.aspnetcore.mvc.controllerbase). The web API project template provides a starter controller:

```csharp
[ApiController]
[Route("[controller]")]
public class WeatherForecastController : ControllerBase
```

Web API controllers should typically derive from `ControllerBase` rather than from `Controller`. Controller derives from `ControllerBase` and adds support for views, so it's for handling web pages, not web API requests.

The `ControllerBase` class provides many properties and methods that are useful for handling HTTP requests. For example, `CreatedAtAction` returns a 201 status code:

```csharp
[HttpPost]
[ProducesResponseType(StatusCodes.Status201Created)]
[ProducesResponseType(StatusCodes.Status400BadRequest)]
public ActionResult<Pet> Create(Pet pet)
{
    pet.Id = _petsInMemoryStore.Any() ?
             _petsInMemoryStore.Max(p => p.Id) + 1 : 1;
    _petsInMemoryStore.Add(pet);

    return CreatedAtAction(nameof(GetById), new { id = pet.Id }, pet);
}
```

## `ApiController` attribute

The `[ApiController]` attribute can be applied to a controller class to enable the following opinionated, API-specific behaviors:

- [Attribute routing requirement](https://learn.microsoft.com/en-us/aspnet/core/web-api/?view=aspnetcore-8.0#attribute-routing-requirement)
- [Automatic HTTP 400 responses](https://learn.microsoft.com/en-us/aspnet/core/web-api/?view=aspnetcore-8.0#automatic-http-400-responses)
- [Binding source parameter inference](https://learn.microsoft.com/en-us/aspnet/core/web-api/?view=aspnetcore-8.0#binding-source-parameter-inference)
- [Multipart/form-data request inference](https://learn.microsoft.com/en-us/aspnet/core/web-api/?view=aspnetcore-8.0#multipartform-data-request-inference)
- [Problem details for error status codes](https://learn.microsoft.com/en-us/aspnet/core/web-api/?view=aspnetcore-8.0#problem-details-for-error-status-codes)

Example:

```csharp
[ApiController]
[Route("[controller]")]
public class WeatherForecastController : ControllerBase
```
