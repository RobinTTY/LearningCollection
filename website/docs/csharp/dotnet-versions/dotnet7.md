---
id: dotnet7
title: .Net 7
sidebar_position: 3
---

This page covers the most important changes introduced in .Net 7 (in my view).
For the full breakdown see the [official documentation](https://learn.microsoft.com/en-us/dotnet/core/whats-new/dotnet-7) and [Blog Post Features](https://devblogs.microsoft.com/dotnet/announcing-dotnet-7/) and [Blog Post Performance](https://devblogs.microsoft.com/dotnet/performance_improvements_in_net_7/).

## New Features in .Net 7

- Introduced [JSON contracts](https://learn.microsoft.com/en-us/dotnet/standard/serialization/system-text-json/custom-contracts) to System.Text.Json which allow for more control over the serialization process.
- [Built-in Container support](https://devblogs.microsoft.com/dotnet/announcing-builtin-container-support-for-the-dotnet-sdk/) via `dotnet publish`
- [.NET library improvements:](https://learn.microsoft.com/en-us/dotnet/core/whats-new/dotnet-7#net-libraries)
  - Support for microseconds and nanoseconds in `TimeSpan`, `TimeOnly`, `DateTime`, and `DateTimeOffset` types
  - APIs for reading, writing, archiving, and extracting Tar archives
  - Rate limiting APIs to protect a resource by keeping traffic at a safe level
  - New type converters for DateOnly, TimeOnly, Int128, UInt128, and Half
  - APIs to get and set Unix file permissions
  - APIs to interop with JavaScript when running in the browser or other WebAssembly architectures
- [NET MAUI](https://devblogs.microsoft.com/dotnet/dotnet-maui-dotnet-7) is now part of .NET 7

### New Features in C# 11

.NET 7 also brings with it a new version of the C# language. The most important changes are:

- Support for [static virtual members](https://learn.microsoft.com/en-us/dotnet/csharp/whats-new/tutorials/static-virtual-interface-members) in interfaces
- Pattern matching: [List patterns](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/proposals/csharp-11.0/list-patterns). With list patterns you can apply patterns recursively to the individual elements of list-like input – or to a range of them.
- Added the [require modifier](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/required). Indicates that the field or property it's applied to must be initialized by an [object initializer](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/object-and-collection-initializers).
- Introduced [generic math](https://learn.microsoft.com/en-us/dotnet/standard/generics/math) operations, which allow you to perform mathematical operations generically—that is, without having to know the exact type you're working with (e.g. double/decimal/etc.)

## Performance Improvements in .Net 7

- With .NET 7 the performance on Arm64 has been improved. [Many Micro benchmarks improved by 10~60%](https://devblogs.microsoft.com/dotnet/arm64-performance-improvements-in-dotnet-7/#impact).
- [Native AOT](https://learn.microsoft.com/en-us/dotnet/core/deploying/native-aot/) produces a standalone executable in the target platform's file format with no external dependencies. It's entirely native, with no IL or JIT, and provides fast startup time and a small, self-contained deployment. In .NET 7, Native AOT focuses on console apps and requires apps to be trimmed.
- and many more improvements (see the [blog post](https://devblogs.microsoft.com/dotnet/performance_improvements_in_net_7/))
