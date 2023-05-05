---
id: important-annotations
title: Important Annotations
sidebar_position: 4
---

This page lists the most important annotations used in Hot Chocolate.

## `[GraphQLDeprecated]`

Instead of removing a field immediately and possibly breaking existing consumers of our API, fields can be marked as deprecated in our schema. This signals to consumers that the field will be removed in the future and they need to adapt before then.

```csharp
public class Query
{
    [GraphQLDeprecated("Use the `authors` field instead")]
    public User[] GetUsers()
    {
        // Omitted code for brevity
    }
}
```
