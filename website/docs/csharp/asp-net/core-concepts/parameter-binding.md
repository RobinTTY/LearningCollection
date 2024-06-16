---
id: parameter-binding
title: Parameter Binding
---

An API often wants to be able to accept certain data with a request. For instance to retrieve a book from the following endpoint, we need to provide the `bookId`:

```csharp
[HttpGet("{id}")]
public ActionResult<Book> Get(int bookId)
{
    ...
}
```

There are different ways we can accept these parameters, they are called binding sources.

## Binding source

A binding source attribute defines the location at which an action parameter's value is found. The following binding source attributes exist:

| Attribute        | Binding Source                                                                                                            |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `[FromBody]`     | Request body                                                                                                              |
| `[FromForm]`     | Form data in the request body                                                                                             |
| `[FromHeader]`   | Request header                                                                                                            |
| `[FromQuery]`    | Request query string parameter                                                                                            |
| `[FromRoute]`    | Route data from the current request                                                                                       |
| `[FromServices]` | The request service injected as an action parameter                                                                       |
| `[AsParameters]` | [Method parameters](https://learn.microsoft.com/en-us/aspnet/core/fundamentals/minimal-apis?view=aspnetcore-8.0#asparam7) |

### Binding source parameter inference

The `[ApiController]` attribute applies inference rules for the default data sources of action parameters. These rules save you from having to identify binding sources manually by applying attributes to the action parameters. The binding source inference rules behave as follows:

- `[FromServices]` is inferred for complex type parameters registered in the DI Container.
- `[FromBody]` is inferred for complex type parameters not registered in the DI Container. An exception to the `[FromBody]` inference rule is any complex, built-in type with a special meaning, such as `IFormCollection` and `CancellationToken`. The binding source inference code ignores those special types.
- `[FromForm]` is inferred for action parameters of type `IFormFile` and `IFormFileCollection`. It's not inferred for any simple or user-defined types.
- `[FromRoute]` is inferred for any action parameter name matching a parameter in the route template. When more than one route matches an action parameter, any route value is considered `[FromRoute]`.
- `[FromQuery]` is inferred for any other action parameters.

There are some more particularities with parameter inference which can be found [here](https://learn.microsoft.com/en-us/aspnet/core/web-api/?view=aspnetcore-8.0#binding-source-parameter-inference).
