---
id: dlls
title: Dynamic Link Library (DLL)
---

- collection of code and/or data, which may be used by several applications
- for instance common methods to process files, work with GUI components etc. are made available in libraries so several applications may use the same functionality
- This not only reduces the need to build the same stuff multiple times, but it also ensures that e.g. common dialogs are the same between applications
- The library can be loaded on-demand. Instead of loading a mammoth single EXE into memory, the OS can load only the portions needed. Plus if a DLL is shared between applications, the OS can optimize how the library is loaded and share it between apps. This is called dynamic linking
- In some cases the library can be included within the application itself. This is known as static linking. Static linking makes deployment easier at the cost of flexibility as different application will each load the same copy of the DLL.
- However, static linking is not always an option. E.g. you can't statically link a .NET application. The user must have the .NET libraries in order to run a .NET application and libraries (or assemblies as they are called in .NET) are loaded at runtime
- DLLs are created by the same tools used to create applications. The specific details depend very much on the tools used
- "Link": You can link the library to an application so that the logic in the library is not compiled directly into the application.
