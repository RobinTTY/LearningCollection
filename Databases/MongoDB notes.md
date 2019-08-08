# Notes on MongoDB

## ObjectId

If you have a column named Id, id or _id, in your strongly typed TDocument class (the item type in a collection), then a column named "_id" will be generated in Mongo. It will also create an index for that column. You get a duplicate key error exception if trying to insert an item with a key that already exists.

```C#
public ObjectId Id { get; set; }
```

will use the type generator for ObjectId and it will look like _id: ObjectId("57ade20771e59f422cc652d9").

```C#
public Guid _id { get; set; }
```

will use the Guid generator to produce something like "_id" : BinData(3,"s2Td7qdghkywlfMSWMPzaA==").

```C#
public int Id { get; set; }
public string id { get; set; }
public byte[] _id { get; set; }
```

will also be index columns using the defaults for each type if not specified.

The Id property is required for mapping the Common Language Runtime (CLR) object to the MongoDB collection.

## [BsonId]

Designates this property as the document's primary key.
Gives you the flexibility of naming that index any way you want.

```C#
[BsonId] public Guid SmthElseOtherThanId { get; set; }
[BsonId] public string StringId { get; set; }
```

will be indexes.

```C#
public Guid SmthElseOtherThanId { get; set; }
public string StringId { get; set; }
```

won't be indexes. MongoDB will still use _id internally.

```C#
public ObjectId SmthElseOtherThanId {get; set;}
```

with no [BsonId] decoration also won't be an index column.

## [BsonRepresentation]

Lets you juggle with the Mongo type vs the internal .Net type, if there's a conversion between them.

```C#
[BsonId]
[BsonRepresentation(BsonType.ObjectId)]
public ObjectId Id { get; set; }
```

is identical to

```C#
public ObjectId Id { get; set; }
```

This is different however:

```C#
[BsonId]
[BsonRepresentation(BsonType.ObjectId)]
public string Id { get; set; }
```

Mongo will auto generate object ids by itself, however you will be able to use strings in .net, filter queries etc., because there is a conversion between object id and string.

```C#
[BsonId]
[BsonRepresentation(BsonType.ObjectId)]
public byte[] Id { get; set; }
```

or

```C#
[BsonId]
[BsonRepresentation(BsonType.ObjectId)]
public int Id { get; set; }
```

will fail with a ObjectId not a valid representation for a ByteArraySerializer / Int32Serializer message.

But

```C#
[BsonId]
[BsonRepresentation(BsonType.String)]
public int StringId { get; set; }
```

will be just fine.

## [BsonElement]

The attribute's value represents the property name in the MongoDB collection.

Example:

```C#
[BsonElement("Pressure")]
public double Pressure { get; set; }
```
