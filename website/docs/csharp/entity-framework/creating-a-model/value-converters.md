---
title: Value Converters
---

Value converters allow property values to be converted when reading from or writing to the database. This conversion can be

- from one value to another of the **same type** (for example, encrypting strings).
- or from a value of one type to a value of **another type** (for example, converting enum values to and from strings in the database).

Value converters are specified in terms of a `ModelClrType` and a `ProviderClrType`:

- The model type is the .NET type of the property in the entity type. 
- The provider type is the .NET type understood by the database provider.

## Configuring a value converter

Value conversions are configured in `DbContext.OnModelCreating`. For example, consider an enum and entity type defined as:

```csharp
public class Rider
{
    public int Id { get; set; }
    public EquineBeast Mount { get; set; }
}

public enum EquineBeast
{
    Donkey,
    Mule,
    Horse,
    Unicorn
}

protected override void OnModelCreating(ModelBuilder modelBuilder)
{
    modelBuilder
        .Entity<Rider>()
        .Property(e => e.Mount)
        .HasConversion(
            v => v.ToString(),
            v => (EquineBeast)Enum.Parse(typeof(EquineBeast), v));
}
```

## The ValueConverter class

Calling `HasConversion` as shown above will create a `ValueConverter<TModel,TProvider>` instance and set it on the property. The `ValueConverter` can instead be created explicitly. For example:

```csharp
protected override void OnModelCreating(ModelBuilder modelBuilder)
{
    var converter = new ValueConverter<EquineBeast, string>(
        v => v.ToString(),
        v => (EquineBeast)Enum.Parse(typeof(EquineBeast), v));

    modelBuilder
        .Entity<Rider>()
        .Property(e => e.Mount)
        .HasConversion(converter);
}
```

This can be useful when multiple properties use the same conversion.

## Built-in converters

EF Core ships with a set of pre-defined `ValueConverter<TModel,TProvider>` classes, found in the `Microsoft.EntityFrameworkCore.Storage.ValueConversion` namespace. In many cases EF will choose the appropriate built-in converter based on the type of the property in the model and the type requested in the database.

For example, using `.HasConversion<int>()` on a `bool` property will cause EF Core to convert `bool` values to numerical zero and one values:

```csharp
protected override void OnModelCreating(ModelBuilder modelBuilder)
{
    modelBuilder
        .Entity<User>()
        .Property(e => e.IsActive)
        .HasConversion<int>();
}
```

This is functionally the same as creating an instance of the built-in `BoolToZeroOneConverter<TProvider>` and setting it explicitly:

```csharp
protected override void OnModelCreating(ModelBuilder modelBuilder)
{
    var converter = new BoolToZeroOneConverter<int>();

    modelBuilder
        .Entity<User>()
        .Property(e => e.IsActive)
        .HasConversion(converter);
}
```

A list of the built-in converters can be found in the [Microsoft Docs](https://learn.microsoft.com/en-us/ef/core/modeling/value-conversions?tabs=fluent-api#built-in-converters).
