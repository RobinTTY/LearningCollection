---
id: enums
title: Enums
sidebar_position: 2
---

An Enum is a special kind of scalar that is restricted to a particular set of allowed values. It can be used as both an input and an output type.

We can define enums like the following:

```csharp
public enum UserRole
{
    Guest,
    Standard,
    Administrator
}

public class Query
{
    public User[] GetUsers(UserRole role)
    {
        // Omitted code for brevity
    }
}
```
