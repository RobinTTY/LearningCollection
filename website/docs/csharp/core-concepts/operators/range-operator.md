---
title: Range Operator (..)
---

The `..` operator specifies the start and end of a range of indices as its operands. The range operator is used to specify the start and end of a range for a sequence.

```csharp
var people = new string[] { "Jane", "Jean", "Grey", "Marcus", "Theophilus", "Keje" };
var all = people[..];           // contains all elements
var firstFour = people[..4];    // contains the first four elements
var lastTwo = people[4..];      // contains "Theophilus" and "Keje"
```

The following table shows various ways to express collection ranges:

| Range operator expression | Description                                                                      |
| ------------------------- | -------------------------------------------------------------------------------- |
| `..`                      | All values in the collection.                                                    |
| `..end`                   | Values from the `start` to the `end` exclusively.                                |
| `start..`                 | Values from the `start` to the `end` inclusively.                                |
| `start..end`              | Values from the `start` inclusively to the `end` exclusively.                    |
| `^start..`                | Values from the `start` inclusively to the end counting from the `end`.          |
| `..^end`                  | Values from the `start` to the end exclusively counting from the `end`.          |
| `start..^end`             | Values from `start` inclusively to `end` exclusively counting from the end.      |
| `^start..^end`            | Values from `start` inclusively to `end` exclusively both counting from the end. |

The following example demonstrates the effect of using all the ranges presented in the preceding table:

```csharp
int[] oneThroughTen = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };

Write(oneThroughTen, ..);
Write(oneThroughTen, ..3);
Write(oneThroughTen, 2..);
Write(oneThroughTen, 3..5);
Write(oneThroughTen, ^2..);
Write(oneThroughTen, ..^3);
Write(oneThroughTen, 3..^4);
Write(oneThroughTen, ^4..^2);

static void Write(int[] values, Range range) =>
    Console.WriteLine($"{range}:\t{string.Join(", ", values[range])}");
// Sample output:
//      0..^0:      1, 2, 3, 4, 5, 6, 7, 8, 9, 10
//      0..3:       1, 2, 3
//      2..^0:      3, 4, 5, 6, 7, 8, 9, 10
//      3..5:       4, 5
//      ^2..^0:     9, 10
//      0..^3:      1, 2, 3, 4, 5, 6, 7
//      3..^4:      4, 5, 6
//      ^4..^2:     7, 8
```
