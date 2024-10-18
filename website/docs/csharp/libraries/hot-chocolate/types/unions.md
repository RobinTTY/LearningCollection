---
id: unions
title: Unions
sidebar_position: 5
---

A union type represents a set of object types. It is very similar to an interface, except that there is no requirement for common fields between the specified types.

Unions can be defined like the following:

```csharp
[UnionType("PostContent")]
public interface IPostContent
{
}

public class TextContent : IPostContent
{
    public string Text { get; set; }
}

public class ImageContent : IPostContent
{
    public string ImageUrl { get; set; }

    public int Height { get; set; }
}

public class Query
{
    public IPostContent GetContent()
    {
        // Omitted code for brevity
    }
}
```

We use a marker interface (or an abstract class) to define object types as part of a union.
