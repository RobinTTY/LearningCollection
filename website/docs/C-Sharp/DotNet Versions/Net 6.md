---
id: dotnet6
title: .Net 6
sidebar_position: 2
---

This page convers the most important updates introduced in .Net 6 (in my view).

## New Features in .Net 6

### Performance Improvements

There were a lot of performance improvements introduced in .Net 6. They are documented in [this blog post](https://devblogs.microsoft.com/dotnet/performance-improvements-in-net-6/). The achievable performance improvements are dependent on the used language features. For instance, the `FileStream` class has been entirely rewritten, which results in performance gains of over 100% in reading a file (.Net 6 vs .Net 5).

Overall these improvements can make a significant difference in the performance of the application. See these examples:

- [How .NET 6.0 boosted Ais.Net performance by 20%](https://endjin.com/blog/2022/01/how-dotnet-6-boosted-ais-dotnet-performance-by-20-percent-for-free)
- [.NET 6 vs .NET 5: up to 40% speedup!](https://alexyakunin.medium.com/net-6-vs-net-5-up-to-40-speedup-ceca9112d298)

### C# 10

Version 10 of the C# Language has been introduced with .Net 6. Changes are discussed in [this blogpost](https://devblogs.microsoft.com/dotnet/welcome-to-csharp-10/). TODO: Reference own writeup

### Global using directives

Global using directives let you specify a using directive just once and have it applied to every file that you compile.

Syntax:

```cs
global using System;
global using static System.Console;
global using Env = System.Environment;
```

Commonly used namespaces can now also be included by default by including implicit usings via MSBuild:

```xml
<ImplicitUsings>enable</ImplicitUsings>
```

### File-scoped namespaces

Namespaces now don't need to nest the encapsulating code in a block statement, if they apply for the whole file. Instead they can be declared like this:

```cs
namespace MyNamespace;

class MyClass { ... } // Not indented
```

### Hot Reload

Hot Reload enables you to make a wide variety of code edits to a running application, collapsing the time you need to spend waiting for apps to rebuild, restart, or to re-navigate to the same spot where you were after making a code change.

Instead of restarting the application it will detect changes on saving a file and almost instant-reload the changed application automatically.

### Arm64

.Net 6 supports development on the ARM64 architecture on Windows, Linux and MacOS. New Apple M1 chips are also supported

### Single-file Apps

In .NET 6, in-memory single file apps have been enabled for Windows and macOS. Before that they were only possible on Linux.

### `DateOnly` and `TimeOnly` structs

- Each represent one half of a DateTime, either only the date part, or only the time part
- `DateOnly` is ideal for birthdays, anniversary days, and business days
- `TimeOnly` is ideal for recurring meetings, alarm clocks, and weekly business hours
- Complements existing date/time types (`DateTime`, `DateTimeOffset`, `TimeSpan`, `TimeZoneInfo`).
