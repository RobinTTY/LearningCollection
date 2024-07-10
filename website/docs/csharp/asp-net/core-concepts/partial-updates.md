---
id: partial-updates
title: Partial updates
---

There are often times when we want to only update certain parts of an entity. It is therefore not ideal that we need to supply all data of an entity with every update. Instead it would be better to just provide the partial data that we want to update. The [JSON Patch standard](https://datatracker.ietf.org/doc/html/rfc6902/) solves this problem by describing changes to a JSON document.

## How it works

A JSON Patch document is just a JSON file containing an array of patch operations. The patch operations supported by JSON Patch are “add”, “remove”, “replace”, “move”, “copy” and “test”. The operations are applied in order: if any of them fail then the whole patch operation should abort.

### Original document

```json
{
  "baz": "qux",
  "foo": "bar"
}
```

### The patch document

```json
[
  { "op": "replace", "path": "/baz", "value": "boo" },
  { "op": "add", "path": "/hello", "value": ["world"] },
  { "op": "remove", "path": "/foo" }
]
```

### The result

```json
{
  "baz": "boo",
  "hello": ["world"]
}
```

## Using JSON Patch

The functionality of JSON patch documents in .NET is provided by the `Microsoft.AspNetCore.JsonPatch` library for NewtonsoftJson and [`JsonPatch.Net`](https://www.nuget.org/packages/JsonPatch.Net/) for System.Text.Json. Microsoft may add official patch support to System.Text.Json at some point... ([see here](https://github.com/dotnet/aspnetcore/issues/24333)).

The following describes the procedure using `Microsoft.AspNetCore.JsonPatch`. We also need the package `Microsoft.AspNetCore.Mvc.NewtonsoftJson`. First we register the service:

```csharp
builder.Services
    .AddControllers()
    .AddNewtonsoftJson();
```

An example controller using the patch method can look like this:

```csharp
[HttpPatch("{pointofinterestid}")]
public ActionResult PartiallyUpdatePointOfInterest(int cityId, int pointOfInterestId,
    JsonPatchDocument<UpdatePointOfInterestDto> patchDocument)
{
    var city = GetCityById(cityId);
    if (city == null)
    {
        return NotFound();
    }

    var pointOfInterest = city.PointsOfInterest.FirstOrDefault(p => p.Id == pointOfInterestId);
    if (pointOfInterest == null) return NotFound();

    var pointOfInterestToPatch = new UpdatePointOfInterestDto
    {
        Name = pointOfInterest.Name,
        Description = pointOfInterest.Description
    };

    // The patch document could try to update a property that doesn't exist on the object
    // For this reason we pass the ModelState to the ApplyTo method
    // With this option, you can get error messages in responses e.g.
    /* { "Customer": [
            "The current value 'John' at path 'customerName' != test value 'Nancy'."
        ]}
    */
    patchDocument.ApplyTo(pointOfInterestToPatch, ModelState);

    if (!TryValidateModel(pointOfInterestToPatch))
    {
        return ValidationProblem(ModelState);
    }

    pointOfInterest.Name = pointOfInterestToPatch.Name;
    pointOfInterest.Description = pointOfInterestToPatch.Description;

    return NoContent();
}
```
