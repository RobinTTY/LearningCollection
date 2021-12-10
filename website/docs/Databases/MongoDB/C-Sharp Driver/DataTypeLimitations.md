---
id: dataTypeLimitations
title: Data Type Limitations
sidebar_position: 3
---

MongoDB stores data in BSON format. The BSON format has 21 data types.
These data types are documented in the [MongoDB docs](https://docs.mongodb.com/manual/reference/bson-types/).

The MongoDB C# driver has some limitations when writing C# data models to the database.
The driver can't handle all cases of writing unsigned data types like `uint` to the database.
There are two options to handle these unsigned types:

1. Choose a signed data that can fit the unsigned value (e.g. instead of `uint` use `long`)
2. Annotate the property with `BsonRepresentation` which defines the type the property is stored as in the database

Example for option two:

```cs
public class MyDataModel
{
    [BsonRepresentation(BsonType.Int64)]
    public uint Value { get; set; }
}
```

:::danger
Trying to store unsinged values in the database will cause a **runtime exception**.
The exception will look like this:

```none
Unhandled Exception: System.OverflowException: Value was either too large or too small for an Int32.
   at System.Convert.ThrowInt32OverflowException()
   at System.UInt32.System.IConvertible.ToInt32(IFormatProvider provider)
   at MongoDB.Bson.Serialization.Serializers.EnumSerializer`1.Serialize(BsonSerializationContext context, BsonSerializationArgs args, TEnum value)
```

:::
