# Unmanaged constraint

The unmanaged constraint feature __will give language enforcement to the class of types known as "unmanaged types"__ in the C# language spec. This is defined in section 18.2 as a __type which is not a reference type and doesn't contain reference type fields at any level of nesting.__

The primary motivation is to make it easier to author low level interop code in C#.

Interoperability enables you to preserve and take advantage of existing investments in unmanaged code. Code that runs under the control of the common language runtime (CLR) is called managed code, and code that runs outside the CLR is called unmanaged code. COM, COM+, C++ components, ActiveX components, and Microsoft Windows API are examples of unmanaged code.

Unmanaged types are one of the core building blocks for interop code, yet the lack of support in generics makes it impossible to create re-usable routines across all unmanaged types. Instead developers are forced to author the same boiler plate code for every unmanaged type in their library:

```C#
int Hash(Point point) { ... }
int Hash(TimeSpan timeSpan) { ... }
```

To enable this type of scenario the language will be introducing a new constraint: unmanaged:

```C#
void Hash<T>(T value) where T : unmanaged
{
    ...
}
```

This constraint can only be met by types which fit into the unmanaged type definition in the C# language spec. Another way of looking at it is that a type satisfies the unmanaged constraint iff it can also be used as a pointer.

```C#
Hash(new Point()); // Okay
Hash(42); // Okay
Hash("hello") // Error: Type string does not satisfy the unmanaged constraint
```

Type parameters with the unmanaged constraint can use all the features available to unmanaged types: pointers, fixed, etc ...

```C#
void Hash<T>(T value) where T : unmanaged
{
    // Okay
    fixed (T* p = &value)
    {
        ...
    }
}
```

This constraint will also make it possible to have efficient conversions between structured data and streams of bytes. This is an operation that is common in networking stacks and serialization layers:

```C#
Span<byte> Convert<T>(ref T value) where T : unmanaged
{
    ...
}
```

Such routines are advantageous because they are provably safe at compile time and allocation free.

## What is an unmanaged Type

The language will introduce a new constraint named unmanaged. In order to satisfy this constraint a type must be a struct and all the fields of the type must fall into one of the following categories:

- Have the type sbyte, byte, short, ushort, int, uint, long, ulong, char, float, double, decimal, bool, IntPtr or UIntPtr
- Be any enum type
- Be a pointer type
- e a user defined struct that satsifies the unmanaged constraint

Compiler generated instance fields, such as those backing auto-implemented properties, must also meet these constraints.

```C#
// Unmanaged type
struct Point
{
    int X;
    int Y {get; set;}
}

// Not an unmanaged type
struct Student
{
    string FirstName;
    string LastName;
}
```

The unmanaged constraint cannot be combined with struct, class or new(). This restriction derives from the fact that unmanaged implies struct hence the other constraints do not make sense.

The unmanaged constraint is not enforced by CLR, only by the language. To prevent mis-use by other languages, methods which have this constraint will be protected by a mod-req. This will prevent other languages from using type arguments which are not unmanaged types.

The token unmanaged in the constraint is not a keyword, nor a contextual keyword. Instead it is like var in that it is evaluated at that location and will either:

- Bind to user defined or referenced type named unmanaged: This will be treated just as any other named type constraint is treated
- Bind to no type: This will be interpreted as the unmanaged constraint

Another Example:

```C#
unsafe public static byte[] ToByteArray<T>(this T argument) where T : unmanaged
{
    var size = sizeof(T);
    var result = new Byte[size];
    Byte* p = (byte*)&argument;
    for (var i = 0; i < size; i++)
        result[i] = *p++;
    return result;
}
```

The preceding method must be compiled in an unsafe context because it uses the sizeof operator on a type not known to be a built-in type. Without the unmanaged constraint, the sizeof operator is unavailable.

[Reference 1](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/proposals/csharp-7.3/blittable)
[Reference 2](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/generics/constraints-on-type-parameters#unmanaged-constraint)
