---
id: object-relational-mapping
title: Object-Relational Mapping (ORM)
sidebar_position: 4
---

An [Object-Relational Mapping](https://en.wikipedia.org/wiki/Object%E2%80%93relational_mapping) or an ORM for short, is a tool that allows you to perform CRUD operations on a database using a traditional programming language. These typically come in the form of a library or framework that you would use in your backend code.

The primary benefit an ORM provides is that it maps your database records to in-memory objects. For example, in C# [Entity Framework](https://en.wikipedia.org/wiki/Entity_Framework) and [Dapper](https://github.com/DapperLib/Dapper) are two popular ORMs.

Using an ORM we might be able to write simple code like this:

```csharp
public class Blog
{
    public int BlogId { get; set; }
    public string Url { get; set; }

    public List<Post> Posts { get; } = new();
}

public class Post
{
    public int PostId { get; set; }
    public string Title { get; set; }
    public string Content { get; set; }

    public int BlogId { get; set; }
    public Blog Blog { get; set; }
}

db.Add(new Blog { Url = "http://blogs.msdn.com/adonet" });
db.SaveChanges();

blog.Posts.Add(new Post { Title = "Hello World", Content = "I wrote an app using EF Core!" });
db.SaveChanges();
```

## Should you use an ORM?

That depends! An ORM typically trades simplicity for control.

Using straight SQL you can take full advantage of the power of the SQL language. Using an ORM, you're limited by whatever functionality the ORM has. If you run into issues with a specific query, it can be harder to debug with an ORM because you have to dig through the framework's code and documentation to figure out how the underlying queries are being generated.
