---
title: Tuples
---

In C#, a tuple is a data structure which organizes data, holding two or more fields of any type. A tuple is typically created by placing 2 or more expressions separated by commas, within a set of parentheses:

```csharp
string boast = "All you need to know";
bool success = !string.IsNullOrWhiteSpace(boast);

// A tuple with three fields (triple)
(bool, int, string) triple = (success, 42, boast);
```

A tuple can be used in assignment and initialization operations, as a return value or a method argument. Fields are extracted using dot syntax. By default, the first field is `Item1`, the second `Item2`, etc. Non-default names are discussed below.

```csharp
// initialization
(int, int, int) vertices = (90, 45, 45);

// assignment
vertices = (60, 60, 60);

//  return value
(bool, int) GetSameOrBigger(int num1, int num2)
{
    return (num1 == num2, num1 > num2 ? num1 : num2);
}

// method argument
int Add((int, int) operands)
{
    return operands.Item1 + operands.Item2;
}
```

Field names Item1 etc. do not make for readable code. The code below shows 2 ways to name the fields of tuples:

```csharp
// name items in declaration
(bool success, string message) results = (true, "well done!");
bool mySuccess = results.success;
string myMessage = results.message;

// name items in creating expression
var results2 = (success: true, message: "well done!");
bool mySuccess2 = results2.success;
string myMessage2 = results2.message;
```

## Use cases of tuples

One of the most common use cases of tuples is as a method return type. That is, instead of defining [out method parameters](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/method-parameters#out-parameter-modifier), you can group method results in a tuple return type, as the following example shows:

```csharp
(int min, int max) FindMinMax(int[] input)
{
    ...
}

var xs = new[] { 4, 7, 9 };
var limits = FindMinMax(xs);
Console.WriteLine($"Limits of [{string.Join(" ", xs)}] are {limits.min} and {limits.max}");

var ys = new[] { -9, 0, 67, 100 };
var (minimum, maximum) = FindMinMax(ys);
Console.WriteLine($"Limits of [{string.Join(" ", ys)}] are {minimum} and {maximum}");
```

- As the preceding example shows, you can work with the returned tuple instance directly or [deconstruct](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/value-tuples#tuple-assignment-and-deconstruction) it into separate variables.
- You can also use tuple types instead of [anonymous types](https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/types/anonymous-types); for example, in LINQ queries. For more information, see [Choosing between anonymous and tuple types](https://learn.microsoft.com/en-us/dotnet/standard/base-types/choosing-between-anonymous-and-tuple).
- Typically, you use tuples to group loosely related data elements. In public APIs, consider defining a [class](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/class) or a [structure](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/struct) type.
