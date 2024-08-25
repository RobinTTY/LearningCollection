---
id: configuration
title: Configuration
---

Application configuration in ASP.NET Core is performed using one or more configuration providers. Configuration providers read configuration data from key-value pairs using a variety of configuration sources:

- Settings files, such as `appsettings.json`
- Environment variables
- Command-line arguments
- Custom providers, installed or created
- Directory files
- In-memory .NET objects
- Azure Key Vault

This article provides information on configuration in ASP.NET Core. For information on using configuration in console apps, see [.NET Configuration](https://learn.microsoft.com/en-us/dotnet/core/extensions/configuration).

## Application and Host Configuration

ASP.NET Core apps configure and launch a host. The host is responsible for app startup and lifetime management. The ASP.NET Core templates create a WebApplicationBuilder which contains the host. While some configuration can be done in both the host and the application configuration providers, generally, only configuration that is necessary for the host should be done in host configuration.

### Default application configuration sources

ASP.NET Core web apps created with dotnet new or Visual Studio generate the following code:

```csharp
var builder = WebApplication.CreateBuilder(args);
```

`WebApplication.CreateBuilder` initializes a new instance of the WebApplicationBuilder class with pre-configured defaults. The initialized `WebApplicationBuilder` (builder) provides default configuration for the app in the following order, from highest to lowest priority:

- Command-line arguments using the [Command-line configuration provider](https://learn.microsoft.com/en-us/aspnet/core/fundamentals/configuration#command-line).
- Non-prefixed environment variables using the [Non-prefixed environment variables configuration provider](https://learn.microsoft.com/en-us/aspnet/core/fundamentals/configuration#evcp).
- [User secrets](https://learn.microsoft.com/en-us/aspnet/core/security/app-secrets) when the app runs in the `Development` environment.
- `appsettings.{Environment}.json` using the [JSON configuration provider](https://learn.microsoft.com/en-us/aspnet/core/fundamentals/configuration#jcp).
- `appsettings.json` using the [JSON configuration provider](https://learn.microsoft.com/en-us/aspnet/core/fundamentals/configuration#jcp).
- A fallback to the [host configuration](https://learn.microsoft.com/en-us/aspnet/core/fundamentals/configuration#host) described in the next section.

### Default host configuration sources

The following list contains the default host configuration sources from highest to lowest priority for `WebApplicationBuilder`:

- Command-line arguments using the [Command-line configuration provider](https://learn.microsoft.com/en-us/aspnet/core/fundamentals/configuration#command-line).
- `DOTNET_`-prefixed environment variables using the [Environment variables configuration provider](https://learn.microsoft.com/en-us/dotnet/api/microsoft.extensions.configuration.environmentvariables.environmentvariablesconfigurationprovider).
- `ASPNETCORE_`-prefixed environment variables using the [Environment variables configuration provider](https://learn.microsoft.com/en-us/dotnet/api/microsoft.extensions.configuration.environmentvariables.environmentvariablesconfigurationprovider).

For the [.NET Generic Host](https://learn.microsoft.com/en-us/aspnet/core/fundamentals/host/generic-host) and [Web Host](https://learn.microsoft.com/en-us/aspnet/core/fundamentals/host/web-host), the default host configuration sources from highest to lowest priority is:

- `ASPNETCORE_`-prefixed environment variables using the [Environment variables configuration provider](https://learn.microsoft.com/en-us/dotnet/api/microsoft.extensions.configuration.environmentvariables.environmentvariablesconfigurationprovider).
- Command-line arguments using the [Command-line configuration provider](https://learn.microsoft.com/en-us/aspnet/core/fundamentals/configuration#command-line).
  `DOTNET_`-prefixed environment variables using the [Environment variables configuration provider](https://learn.microsoft.com/en-us/dotnet/api/microsoft.extensions.configuration.environmentvariables.environmentvariablesconfigurationprovider).

When a configuration value is set in host and application configuration, the application configuration is used.

### Host variables

The following variables are locked in early when initializing the host builders and can't be influenced by application config:

- [Application name](https://learn.microsoft.com/en-us/aspnet/core/fundamentals/minimal-apis#change-the-content-root-application-name-and-environment)
- [Environment name](https://learn.microsoft.com/en-us/aspnet/core/fundamentals/environments), for example `Development`, `Production`, and `Staging`
- [Content root](https://learn.microsoft.com/en-us/aspnet/core/fundamentals#content-root)
- [Web root](https://learn.microsoft.com/en-us/aspnet/core/fundamentals#web-root)
- Whether to scan for [hosting startup assemblies](https://learn.microsoft.com/en-us/aspnet/core/fundamentals/host/platform-specific-configuration) and which assemblies to scan for.
- Variables read by app and library code from [HostBuilderContext.Configuration](https://learn.microsoft.com/en-us/dotnet/api/microsoft.extensions.hosting.hostbuildercontext.configuration#microsoft-extensions-hosting-hostbuildercontext-configuration) in [IHostBuilder.ConfigureAppConfiguration](https://learn.microsoft.com/en-us/dotnet/api/microsoft.extensions.hosting.ihostbuilder.configureappconfiguration) callbacks.

Every other host setting is read from application config instead of host config.

`URLS` is one of the many common host settings that is not a bootstrap setting. Like every other host setting not in the previous list, `URLS` is read later from application config. Host config is a fallback for application config, so host config can be used to set `URLS`, but it will be overridden by any configuration source in application config like `appsettings.json`.

For more information, see [Change the content root, app name, and environment](https://learn.microsoft.com/en-us/aspnet/core/migration/50-to-60-samples#change-the-content-root-app-name-and-environment) and [Change the content root, app name, and environment by environment variables or command line](https://learn.microsoft.com/en-us/aspnet/core/migration/50-to-60-samples#change-the-content-root-app-name-and-environment-by-environment-variables-or-command-line)

## Application configuration providers

### `appsettings.json`

Consider the following `appsettings.json` file:

```json
{
  "Position": {
    "Title": "Editor",
    "Name": "Joe Smith"
  },
  "MyKey": "My appsettings.json Value",
  "Logging": {
    "LogLevel": {
      "Default": "Information",
      "Microsoft": "Warning",
      "Microsoft.Hosting.Lifetime": "Information"
    }
  },
  "AllowedHosts": "*"
}
```

The following code from the [sample download](https://github.com/dotnet/AspNetCore.Docs/tree/main/aspnetcore/fundamentals/configuration/index/samples/6.x/ConfigSample) displays several of the preceding configurations settings:

```csharp
public class TestModel : PageModel
{
    // requires using Microsoft.Extensions.Configuration;
    private readonly IConfiguration Configuration;

    public TestModel(IConfiguration configuration)
    {
        Configuration = configuration;
    }

    public ContentResult OnGet()
    {
        var myKeyValue = Configuration["MyKey"];
        var title = Configuration["Position:Title"];
        var name = Configuration["Position:Name"];
        var defaultLogLevel = Configuration["Logging:LogLevel:Default"];


        return Content($"MyKey value: {myKeyValue} \n" +
                       $"Title: {title} \n" +
                       $"Name: {name} \n" +
                       $"Default Log Level: {defaultLogLevel}");
    }
}
```

The default [JsonConfigurationProvider](https://learn.microsoft.com/en-us/dotnet/api/microsoft.extensions.configuration.json.jsonconfigurationprovider) loads configuration in the following order:

1. `appsettings.json`
2. `appsettings.{Environment}.json`: For example, the `appsettings.Production.json` and `appsettings.Development.json` files. The environment version of the file is loaded based on the [`IHostingEnvironment.EnvironmentName`](https://learn.microsoft.com/en-us/dotnet/api/microsoft.extensions.hosting.ihostingenvironment.environmentname). For more information, see [Use multiple environments in ASP.NET Core](https://learn.microsoft.com/en-us/aspnet/core/fundamentals/environments?view=aspnetcore-8.0).

:::warning
`appsettings.{Environment}.json` values override keys in `appsettings.json`.
:::

Using the default configuration, the `appsettings.json` and `appsettings.{Environment}.json` files are enabled with `reloadOnChange: true`. Changes made to the `appsettings.json` and `appsettings.{Environment}.json` file after the app starts are read by the JSON configuration provider.

#### Comments in appsettings.json

Comments in `appsettings.json` and `appsettings.{Environment}.json` files are supported using JavaScript or C# style comments.
