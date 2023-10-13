---
id: system-text-json
title: System.Text.Json
sidebar_position: 1
---

Provides high-performance, low-allocating, and standards-compliant capabilities to process JavaScript Object Notation (JSON), which includes serializing objects to JSON text and deserializing JSON text to objects, with UTF-8 support built-in.

## Attributes

### `[JsonConverter]`

When placed on a type, the specified converter will be used unless a compatible converter is added to the JsonSerializerOptions.Converters collection or there is another JsonConverterAttribute on a property of the same type.

```csharp
[JsonConverter(typeof(JsonStringEnumConverter))]
public enum RpgClass
{
  Knight = 1,
  Mage = 2,
  Cleric = 3
}
```

In the example above, the `JsonStringEnumConverter` will be used to serialize and deserialize the `RpgClass` enum. The converter will convert the enum to and from a string so that the enum values are serialized as their names instead of their numeric values.
