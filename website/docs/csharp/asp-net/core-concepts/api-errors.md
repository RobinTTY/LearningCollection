---
id: api-errors
title: API Errors
---

For communicating the errors and exceptions to our API clients, we should specify a response format. In some cases, we would also like to let our users know what actually happened when something went wrong, instead of just telling them it was a 404 or 500 error. [IETF RFC 7807](https://datatracker.ietf.org/doc/html/rfc7807) addresses this topic and creates a standardized format by specifying the `Problem Details` object.

## `ProblemDetails` structure

An instance of the ProblemDetails object serialized to json can for example look like this:

```json
{
  "type": "https://tools.ietf.org/html/rfc9110#section-15.5.5",
  "title": "Not Found",
  "status": 404,
  "traceId": "55de454e-4875-4530-ba00-0e772b83a8ad"
}
```

## Modifying problem details

It is possible to adjust the returned problem details. To do that we can adjust the service registration:

```csharp
builder.Services.AddProblemDetails(options => {
    options.CustomizeProblemDetails = ctx => {
        ctx.ProblemDetails.Extensions.Add("server", Environment.MachineName);
    }
});
```
