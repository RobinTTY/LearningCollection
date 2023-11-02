---
title: Enums
---

An `Enum` type defines a set of constant values. The following `enum` declares constants that define different root vegetables:

```csharp
public enum SomeRootVegetable
{
    HorseRadish,
    Radish,
    Turnip
}
```

You can also define an `enum` to be used in combination as flags. The following declaration declares a set of flags for the four seasons. Any combination of the seasons may be applied, including an `All` value that includes all seasons:

```csharp
[Flags]
public enum Seasons
{
    None = 0,
    Summer = 1,
    Autumn = 2,
    Winter = 4,
    Spring = 8,
    All = Summer | Autumn | Winter | Spring
}
```

The following example shows declarations of both the preceding enums:

```csharp
var turnip = SomeRootVegetable.Turnip;
var spring = Seasons.Spring;
var startingOnEquinox = Seasons.Spring | Seasons.Autumn;
var theYear = Seasons.All;
```
