---
id: scalars
title: Scalars
sidebar_position: 1
---

Scalar types are the primitives of our schema and can hold a specific type of data. They are leaf types, meaning we cannot use e.g. `{ fieldName }` to further drill down into the type. The main purpose of a scalar is to define how a value is serialized and deserialized.

Besides basic scalars like `String` and `Int`, we can also create custom scalars like `CreditCardNumber` or `SocialSecurityNumber`. These custom scalars can greatly enhance the expressiveness of our schema and help new developers to get a grasp of our API.

## GraphQL scalars

The GraphQL specification defines the following scalars.

### String

This scalar represents an UTF-8 character sequence. It is automatically inferred from the usage of the .NET `string` type.

### Boolean

This scalar represents a Boolean value, which can be either `true` or `false`. It is automatically inferred from the usage of the .NET `bool` type.

### Int

This scalar represents a signed 32-bit numeric non-fractional value. It is automatically inferred from the usage of the .NET `int` type.

### Float

This scalar represents double-precision fractional values, as specified by IEEE 754. It is automatically inferred from the usage of the .NET `float` or `double` type.

:::info
There is a separate `Decimal` scalar to handle `decimal` values.
:::

### ID

This scalar is used to facilitate technology-specific Ids, like `int`, `string` or `Guid`. It is not automatically inferred and the `IdType` needs to be [explicitly specified](https://chillicream.com/docs/hotchocolate/defining-a-schema/object-types#explicit-types).

`ID` values are always represented as a String in client-server communication, but can be coerced to their expected type on the server.

```csharp
public class Product
{
    [GraphQLType(typeof(IdType))]
    public int Id { get; set; }
}

public class Query
{
    public Product GetProduct([GraphQLType(typeof(IdType))] int id)
    {
        // Omitted code for brevity
    }
}
```

Notice how our code uses `int` for the `Id`, but in a request/response it would be serialized as a `string`. This allows us to switch the CLR type of our `Id`, without affecting the schema and our clients.
