---
title: Generics
---

- Use generic types to maximize code reuse, type safety, and performance
- The most common use of generics is to create collection classes
- **The .NET Framework class library contains several new generic collection classes in the System.Collections.Generic namespace. These should be used whenever possible instead of classes such as ArrayList in the System.Collections namespace.**
- You can create your own generic interfaces, classes, methods, events and delegates
- Generic classes may be constrained to enable access to methods on particular data types
- Information on the types that are used in a generic data type may be obtained at run-time by using reflection
- Generics introduce to the .NET Framework the concept of type parameters, which make it possible to design classes and methods that defer the specification of one or more types until the class or method is declared and instantiated by client code
- by using a generic type parameter T you can write a single class that other client code can use without incurring the cost or risk of runtime casts or boxing operations

## Introduction to Generics

- Generics are most frequently used with collections and the methods that operate on them
- The following code example shows a simple generic linked-list class for demonstration purposes
  - In most cases, you should use the `List<T>` class provided by the .NET Framework class library instead of creating your own
  - The type parameter T is used in several locations where a concrete type would ordinarily be used to indicate the type of the item stored in the list. It is used in the following ways:
    - As the type of a method parameter in the AddHead method
    - As the return type of the Data property in the nested Node class
    - As the type of the private member data in the nested class
  - When `GenericList<T>` is instantiated with a concrete type, for example as a `GenericList<int>`, each occurrence of T will be replaced with int
