---
id: csharp-coreConcepts-recordTypes
title: Record Types
sidebar_position: 1
---

Introduced in C# 9, [records](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/record) are a new reference type that can be created instead of classses or structs. C# 10 additionally introduced the concept of record structs (record as a value type).

The important things first:

- Records are distinct from classes in that record types use **value-based equality**
  - That means: Two variables of a record type are equal if the record type definitions are identical, and if for every field, the values in both records are equal
- To enforce value semantics, the compiler generates several methods for a record type:
  - An override of [`Object.Equals(Object)`](<https://docs.microsoft.com/en-us/dotnet/api/system.object.equals#system-object-equals(system-object)>)
  - A virtual Equals method whose parameter is the record type
  - An override of [`Object.GetHashCode()`](https://docs.microsoft.com/en-us/dotnet/api/system.object.gethashcode#system-object-gethashcode)
  - Methods for operator `==` and operator `!=`
  - Record types implement [`System.IEquatable<T>`](https://docs.microsoft.com/en-us/dotnet/api/system.iequatable-1)
  - An override of [`Object.ToString()`](https://docs.microsoft.com/en-us/dotnet/api/system.object.tostring#system-object-tostring)

## Example Record

Data and statistics are among the scenarios where you'll want to use records. Let's take the example of daily temperature data and create a struct to represent it:

```cs
public readonly record struct DailyTemperature(double HighTemp, double LowTemp);
```

- The preceding code defines a positional record
  - A **primary constructor** is created by the compiler in this case, which takes the `HighTemp` and `LowTemp` parameters
- The record is a `readonly` record struct, because you don't intend to inherit from it, and it should be immutable
- The `HighTemp` and `LowTemp` properties are init only properties, meaning they can be set in the constructor or using a property initializer (effect of the `readonly` keyword)

The following code creates and initializes several DailyTemperature records:

```cs
private static DailyTemperature[] data = new DailyTemperature[]
{
    // named parameters
    new DailyTemperature(HighTemp: 57, LowTemp: 30),
    // positional parameters
    new DailyTemperature(60, 35),
    new DailyTemperature(63, 33),
    new DailyTemperature(68, 29),
    new DailyTemperature(72, 47),
    new DailyTemperature(75, 55),
    new DailyTemperature(77, 55),
    new DailyTemperature(72, 58),
    new DailyTemperature(70, 47),
    new DailyTemperature(77, 59),
    new DailyTemperature(85, 65),
    new DailyTemperature(87, 65),
    new DailyTemperature(85, 72),
    new DailyTemperature(83, 68),
    new DailyTemperature(77, 65),
    new DailyTemperature(72, 58),
    new DailyTemperature(77, 55),
    new DailyTemperature(76, 53),
    new DailyTemperature(80, 60),
    new DailyTemperature(85, 66)
};
```

You can add your own properties or methods to records, including positional records:

```cs
public readonly record struct DailyTemperature(double HighTemp, double LowTemp)
{
  /// <summary>
  /// Returns the average of the high and low temperatures
  /// </summary>
    public double Mean => (HighTemp + LowTemp) / 2.0;
}
```

If we print the records to console with the following instruction:

```cs
foreach (var item in data)
    Console.WriteLine(item);
```

we get the output:

```cli
DailyTemperature { HighTemp = 57, LowTemp = 30, Mean = 43.5 }
DailyTemperature { HighTemp = 60, LowTemp = 35, Mean = 47.5 }


DailyTemperature { HighTemp = 80, LowTemp = 60, Mean = 70 }
DailyTemperature { HighTemp = 85, LowTemp = 66, Mean = 75.5 }
```

This comes as a result from the automatic compiler override of the `ToString` method.

### Advanced concepts

You can express these formulas as a small hierarchy of record types:

- an abstract degree day type and two concrete types for heating degree days and cooling degree days
  - These types can also be positional records
  - They take a baseline temperature and a sequence of daily temperature records as arguments to the primary constructor

```cs
/// <summary>
/// Shared base class for both the HeatingDegreeDays and CoolingDegreeDays records
/// </summary>
public abstract record DegreeDays(double BaseTemperature, IEnumerable<DailyTemperature> TempRecords);

public sealed record HeatingDegreeDays(double BaseTemperature, IEnumerable<DailyTemperature> TempRecords)
    : DegreeDays(BaseTemperature, TempRecords)
{
    // base record initialization
    public double DegreeDays => TempRecords.Where(s => s.Mean < BaseTemperature).Sum(s => BaseTemperature - s.Mean);
}

public sealed record CoolingDegreeDays(double BaseTemperature, IEnumerable<DailyTemperature> TempRecords)
    : DegreeDays(BaseTemperature, TempRecords)
{
    // base record initialization
    public double DegreeDays => TempRecords.Where(s => s.Mean > BaseTemperature).Sum(s => s.Mean - BaseTemperature);
}
```

- Your derived record declares parameters for all the parameters in the base record primary constructor
  - The base record declares and initializes those properties
  - The derived record doesn't hide them, but only creates and initializes properties for parameters that aren't declared in its base record
  - In this example, the derived records don't add new primary constructor parameters.

If we now declare the following variables and print them:

```cs
var heatingDegreeDays = new HeatingDegreeDays(65, data);
Console.WriteLine(heatingDegreeDays);

var coolingDegreeDays = new CoolingDegreeDays(65, data);
Console.WriteLine(coolingDegreeDays);
```

we get:

```txt
HeatingDegreeDays { BaseTemperature = 65, TempRecords = record_types.DailyTemperature[], DegreeDays = 85 }
CoolingDegreeDays { BaseTemperature = 65, TempRecords = record_types.DailyTemperature[], DegreeDays = 71.5 }
```
