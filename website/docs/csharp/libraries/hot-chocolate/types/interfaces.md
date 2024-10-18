---
id: interfaces
title: Interfaces
sidebar_position: 4
---

An interface is an abstract type that defines a certain set of fields that an object type or another interface must include to implement the interface. Interfaces can only be used as output types, meaning we can't use interfaces as arguments or as fields on input object types.

Interfaces can be defined like the following:

```csharp
public interface IMessage
{
    User Author { get; set; }

    DateTime CreatedAt { get; set; }
}

public class TextMessage : IMessage
{
    public User Author { get; set; }

    public DateTime CreatedAt { get; set; }

    public string Content { get; set; }
}

public class Query
{
    public IMessage[] GetMessages()
    {
        // Omitted code for brevity
    }
}
```

:::info
We have to explicitly register the interface implementations: `services.AddGraphQLServer().AddType<TextMessageType>()`
:::
