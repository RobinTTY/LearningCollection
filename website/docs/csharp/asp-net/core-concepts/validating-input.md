---
id: validating-input
title: Validating Input
---

If you ask users to enter information in a page — for example, into a form — it's important to make sure that the values that they enter are valid. For example, you don't want to process a form that's missing critical information. ASP.NET uses annotations for this data validation.

## Data Annotations

Attributes from the `System.ComponentModel.DataAnnotations` namespace can be used to set validation rules for properties on your model. Consider the following model:

```csharp
using System.ComponentModel.DataAnnotations;

public class Product
{
    public int Id { get; set; }
    [Required]
    public string Name { get; set; }
    public decimal Price { get; set; }
    [Range(0, 999)]
    public double Weight { get; set; }
}
```

The `Required` attribute says that the `Name` property must not be null. The `Range` attribute says that `Weight` must be between 0 and 999.

Model validation does not guarantee that client data is safe. Additional validation might be needed in other layers of the application (e.g. the data layer might enforce foreign key constraints).

## Validation Errors

Model validation is done implicitly if a controller has the `[ApiController]` attribute applied to it. It will return errors like the following:

```json
{
  "Message": "The request is invalid.",
  "ModelState": {
    "product": [
      "Required property 'Name' not found in JSON. Path '', line 1, position 17."
    ],
    "product.Name": ["The Name field is required."],
    "product.Weight": ["The field Weight must be between 0 and 999."]
  }
}
```

### Custom error messages

It is possible to adjust the returned error messages. For instance for the `Required` attribute:

```csharp
public class Product
{
    public int Id { get; set; }
    [Required(ErrorMessage = "Please provide a Name value.")]
    public string Name { get; set; }
    public decimal Price { get; set; }
    [Range(0, 999)]
    public double Weight { get; set; }
}
```

## Popular third party solutions

There are some popular libraries that can be used as an alternative to attribute based validation. [`FluentValidation`](https://github.com/FluentValidation/FluentValidation) is the most popular one. It can be advantage for complex applications, since we can separate our models from our validation logic.
