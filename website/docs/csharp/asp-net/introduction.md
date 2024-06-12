---
id: introduction
title: Introduction
---

ASP.NET extends the .NET platform with tools and libraries specifically for building web apps.

These are some things that ASP.NET adds to the .NET platform:

- Base framework for processing web requests
- Libraries for common web patterns, such as Model View Controller (MVC)
- Authentication system that includes libraries, a database, and template pages for handling logins, including multi-factor authentication and external authentication with Google, X, and more.
- Web-page templating syntax, known as Razor, for building dynamic web pages using C#

ASP.NET apps can be developed and run on Windows, Linux, macOS, and Docker.

## Basic ASP.NET application

A basic ASP.NET application `Program.cs` has the following method calls:

```csharp
// Initializes the WebApplicationBuilder class with preconfigured defaults
var builder = WebApplication.CreateBuilder(args);

// Registers everything that is needed for Web API Development
builder.Services.AddControllers();

// Required for minimal APIs
builder.Services.AddEndpointsApiExplorer();

// Adds service for Swagger generation
builder.Services.AddSwaggerGen();

// WebApplicationBuilder implements IApplicationBuilder, which defines a class
// that provides the mechanisms to configure an application's request pipeline
var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    // Creates the swagger spec (json)
    app.UseSwagger();

    // Enables an embedded version of the Swagger UI tool
    app.UseSwaggerUI();
}

// Redirect all HTTP requests to HTTPS
app.UseHttpsRedirection();

// Can be used to authorize a user to access secure resources
app.UseAuthorization();

// Maps attribute routed controllers
app.MapControllers();

// Start the app
app.Run();
```
