---
id: formatters
title: Formatters
---

ASP.NET Core MVC supports data exchange in Web APIs using input and output formatters. Input formatters are used by Model Binding. Output formatters are used to format responses.

### Output Formatters

Output formatters deal with transforming the models of the application to the chosen representation. The user choses the representation through content negotiation. The default representation is JSON.

The default representation can be changed by modifying the order of the formatters in the configuration. The first formatter in the list will be used by default:

```csharp
builder.Services.AddControllers(options => {
    options.OutputFormatters.Clear();
    options.OutputFormatters.Add(new XmlMediaTypeFormatter());
    config.Formatters.Add(new JsonMediaTypeFormatter());
})
```

#### Content negotiation

Content negotiation is the process of selecting the best representation for a given response when there are multiple representations available.

The media type(s) is/are passed through via the Accept header of the request, e.g.:

- `application/json`
- `application/xml`

By default, if the consumer of the API requests a content type that isn't supported, the application will still return a response but not with the content type that was requested. This is often unwanted behavior and can be changed:

```csharp
builder.Services.AddControllers(options => {
    options.ReturnHttpNotAcceptable = true;
});
```

When the API consumer now requests a non supported content type, the API will respond with a 406 (Not Acceptable) status code.

### Supporting additional content types

Serialization for additional content types can be added through custom output formatters. For XML ASP.NET already provides such a formatter. It can be added through the following code:

```csharp
builder.Services.AddControllers().
    AddXmlDataContractSerializerFormatters();
```

### Input Formatters

Input formatters deal with transforming the input to requests to the models in the application through a process called model binding. It:

- Retrieves data from various sources such as route data, form fields, and query strings.
- Provides the data to controllers in method parameters and public properties.
- Converts string data to .NET types.
- Updates properties of complex types.
