---
id: assemblyClass
title: Assembly Class
---

- Represents an assembly, which is a reusable, versionable, and self-describing building block of a common language runtime application (in more simple terms: A chunk of (precompiled) code that can be executed by the .NET runtime environment. A .NET program consists of one or more assemblies)
- The following code example shows how to obtain the currently executing assembly, create an instance of a type contained in that assembly, and invoke one of the type's methods with late binding. For this purpose, the code example defines a class named Example, with a method named SampleMethod
  - The constructor of the class accepts an integer, which is used to compute the return value of the method
  - The code example also demonstrates the use of the GetName method to obtain an AssemblyName object that can be used to parse the full name of the assembly
  - The example displays the version number of the assembly, the CodeBase property, and the EntryPoint property

```cs
using System;
using System.Reflection;
using System.Security.Permissions;

[assembly:AssemblyVersionAttribute("1.0.2000.0")]

public class Example
{
    private int factor;
    public Example(int f)
    {
        factor = f;
    }

    public int SampleMethod(int x)
    {
        Console.WriteLine("\nExample.SampleMethod({0}) executes.", x);
        return x * factor;
    }

    public static void Main()
    {
        Assembly assem = typeof(Example).Assembly;

        Console.WriteLine("Assembly Full Name:");
        Console.WriteLine(assem.FullName);

        // The AssemblyName type can be used to parse the full name.
        AssemblyName assemName = assem.GetName();
        Console.WriteLine("\nName: {0}", assemName.Name);
        Console.WriteLine("Version: {0}.{1}",
            assemName.Version.Major, assemName.Version.Minor);

        Console.WriteLine("\nAssembly CodeBase:");
        Console.WriteLine(assem.CodeBase);

        // Create an object from the assembly, passing in the correct number
        // and type of arguments for the constructor.
        Object o = assem.CreateInstance("Example", false,
            BindingFlags.ExactBinding,
            null, new Object[] { 2 }, null, null);

        // Make a late-bound call to an instance method of the object.
        MethodInfo m = assem.GetType("Example").GetMethod("SampleMethod");
        Object ret = m.Invoke(o, new Object[] { 42 });
        Console.WriteLine("SampleMethod returned {0}.", ret);

        Console.WriteLine("\nAssembly entry point:");
        Console.WriteLine(assem.EntryPoint);
    }
}

/* This code example produces output similar to the following:

Assembly Full Name:
source, Version=1.0.2000.0, Culture=neutral, PublicKeyToken=null

Name: source
Version: 1.0

Assembly CodeBase:
file:///C:/sdtree/AssemblyClass/cs/source.exe

Example.SampleMethod(42) executes.
SampleMethod returned 84.

Assembly entry point:
Void Main()
 */

```

## Remarks

- Use the Assembly class to load assemblies, to explore the metadata and constituent parts of assemblies, to discover the types contained in assemblies, and to create instances of those types
- To load assemblies dynamically, the Assembly class provides the following static methods. Assemblies are loaded into the application domain where the load operation occurs.
  - The recommended way to load assemblies is to use the Load method, which identifies the assembly to be loaded by its display name (for example, "System.Windows.Forms, Version=2.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089")
  - The ReflectionOnlyLoad and ReflectionOnlyLoadFrom methods enable you to load an assembly for reflection, but not for execution. For example, an assembly that targets a 64-bit platform can be examined by code that is running on a 32-bit platform
  - The LoadFile and LoadFrom methods are provided for rare scenarios in which an assembly must be identified by path
- To get an Assembly object for the currently executing assembly, use the GetExecutingAssembly method
- Many members of the Assembly class provide information about an assembly. For example:
  - The GetName method returns an AssemblyName object that provides access to the parts of the assembly display name
  - The GetCustomAttributes method lists the attributes applied to the assembly
  - The GetFiles method provides access to the files in the assembly manifest
  - The GetManifestResourceNames method provides the names of the resources in the assembly manifest
- The GetTypes method lists all the types in the assembly.
- The GetExportedTypes method lists the types that are visible to callers outside the assembly.
- The GetType method can be used to search for a particular type in the assembly.
- The CreateInstance method can be used to search for and create instances of types in the assembly.

Taken from: https://docs.microsoft.com/en-us/dotnet/api/system.reflection.assembly?view=netframework-4.7.2
