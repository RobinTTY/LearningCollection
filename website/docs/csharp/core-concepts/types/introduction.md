---
title: Introduction
---

A type defines the structure and behavior of any data in C#. The declaration of a type may include its members, base type, interfaces it implements, and operations permitted for that type. A variable is a label that refers to an instance of a specific type.

There are two kinds of types in C#: value types and reference types:

- Variables of value types directly contain their data.
- Variables of reference types store references to their data, the latter being known as objects.

With reference types, it's possible for two variables to reference the same object and possible for operations on one variable to affect the object referenced by the other variable. With value types, the variables each have their own copy of the data, and it isn't possible for operations on one to affect the other (except for `ref` and `out` parameter variables).

C#'s value types are further divided into:

- simple types
- enum types
- struct types
- nullable value types
- tuple value types

C#'s reference types are further divided into:

- class types
- interface types
- array types
- delegate types.

## Type System

The following outline provides an overview of C#'s type system:

- [Value types](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/value-types)
  - [Simple types](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/value-types#built-in-value-types)
    - [Signed integral](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/integral-numeric-types): `sbyte`, `short`, `int`, `long`
    - [Unsigned integral](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/integral-numeric-types): `byte`, `ushort`, `uint`, `ulong`
    - [Unicode characters](https://learn.microsoft.com/en-us/dotnet/standard/base-types/character-encoding-introduction): `char`, which represents a UTF-16 code unit
    - [IEEE binary floating-point](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/floating-point-numeric-types): float, double
    - [High-precision decimal floating-point](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/floating-point-numeric-types): decimal
    - Boolean: `bool`, which represents Boolean values—values that are either `true` or `false`
  - [Enum types](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/enum)
    - User-defined types of the form `enum E {...}`. An `enum` type is a distinct type with named constants. Every `enum` type has an underlying type, which must be one of the eight integral types. The set of values of an `enum` type is the same as the set of values of the underlying type.
  - [Struct types](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/struct)
    - User-defined types of the form struct `S {...}`
  - [Nullable value types](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/nullable-value-types)
    - Extensions of all other value types with a `null` value
  - [Tuple value types](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/value-tuples)
    - User-defined types of the form `(T1, T2, ...)`
- [Reference types](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/reference-types)
  - [Class types](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/class)
    - Ultimate base class of all other types: `object`
    - [Unicode strings](https://learn.microsoft.com/en-us/dotnet/standard/base-types/character-encoding-introduction): `string`, which represents a sequence of UTF-16 code units
    - User-defined types of the form `class C {...}`
  - [Interface types](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/interface)
    - User-defined types of the form `interface I {...}`
  - [Array types](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/arrays)
    - Single-dimensional, multi-dimensional, and jagged. For example: `int[]`, `int[,]`, and `int[][]`
  - [Delegate types](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/reference-types#the-delegate-type)
    - User-defined types of the form `delegate int D(...)`

C# programs use type declarations to create new types. A type declaration specifies the name and the members of the new type. Six of C#'s categories of types are user-definable:

- Class types
- Struct types
- Interface types
- Enum types
- Delegate types
- Tuple value types

You can also declare `record` types, either `record struct`, or `record class`. Record types have compiler-synthesized members. You use records primarily for storing values, with minimal associated behavior.

### Classes

A `class` type defines a data structure that contains data members (fields) and function members (methods, properties, and others). Class types support single inheritance and polymorphism, mechanisms whereby derived classes can extend and specialize base classes.

### Structs

A `struct` type is similar to a class type in that it represents a structure with data members and function members. However, unlike classes, structs are value types and don't typically require heap allocation. Struct types don't support user-specified inheritance, and all struct types implicitly inherit from type `object`.

### Interfaces

An `interface` type defines a contract as a named set of public members. A `class` or `struct` that implements an `interface` must provide implementations of the interface's members. An `interface` may inherit from multiple base interfaces, and a `class` or `struct` may implement multiple interfaces.

### Delegates

A `delegate` type represents references to methods with a particular parameter list and return type. Delegates make it possible to treat methods as entities that can be assigned to variables and passed as parameters. Delegates are analogous to function types provided by functional languages. They're also similar to the concept of function pointers found in some other languages. Unlike function pointers, delegates are object-oriented and type-safe.

### Enums

An enumeration type (or enum type) is a value type defined by a set of named constants of the underlying integral numeric type.

### Tuples

The tuples feature provides concise syntax to group multiple data elements in a lightweight data structure.

### Unified Type System

C#'s type system is unified such that a value of any type can be treated as an `object`. Every type in C# directly or indirectly derives from the `object` class type, and `object` is the ultimate base class of all types. Values of reference types are treated as objects simply by viewing the values as type `object`. Values of value types are treated as objects by performing boxing and unboxing operations. In the following example, an `int` value is converted to `object` and back again to `int`.

```csharp
int i = 123;
object o = i;    // Boxing
int j = (int)o;  // Unboxing
```

When a value of a value type is assigned to an `object` reference, a "box" is allocated to hold the value. That box is an instance of a reference type, and the value is copied into that box. Conversely, when an `object` reference is cast to a value type, a check is made that the referenced `object` is a box of the correct value type. If the check succeeds, the value in the box is copied to the value type.

C#'s unified type system effectively means that value types are treated as `object` references "on demand." Because of the unification, general-purpose libraries that use type `object` can be used with all types that derive from `object`, including both reference types and value types.

### Variables

There are several kinds of variables in C#, including fields, array elements, local variables, and parameters. Variables represent storage locations. Every variable has a type that determines what values can be stored in the variable, as shown below:

- Non-nullable value type
  - A value of that exact type
- Nullable value type
  - A `null` value or a value of that exact type
- object
  - A `null` reference, a reference to an object of any reference type, or a reference to a boxed value of any value type
- Class type
  - A `null` reference, a reference to an instance of that class type, or a reference to an instance of a class derived from that class type
- Interface type
  - A `null` reference, a reference to an instance of a class type that implements that interface type, or a reference to a boxed value of a value type that implements that interface type
- Array type
  - A `null` reference, a reference to an instance of that array type, or a reference to an instance of a compatible array type
- Delegate type
  - A `null` reference or a reference to an instance of a compatible delegate type
