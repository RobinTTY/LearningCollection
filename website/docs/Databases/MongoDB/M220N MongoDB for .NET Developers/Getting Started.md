---
id: gettingStarted
title: Getting Started
sidebar_position: 2
---

Establishing a connection with the C# MongoDB driver:

```C#
using MongoDB.Driver;
using MongoDB.Bson;

var connString = "<connectionString>";
var client = new MongoClient(connString);
var db = client.GetDatabase("sample_mflix");
var collection = db.GetCollection<BsonDocument>("movies");

// A query
var result = collection.Find(new BsonDocument())
               .SortByDescending(m => m["runtime"])
               .Limit(10)
               .ToList();

foreach (var r in result)
{
   Console.WriteLine(r.GetValue("title"));
}
```
