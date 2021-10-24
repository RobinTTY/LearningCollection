---
id: limit
title: Limit
sidebar_position: 1
---

The `Limit` method operates on the `IFindFluent` interface. It limits the number of documents to query from the database.

## Syntax

```cs
IFindFluent<TDocument, TProjection> Limit(int? limit);
```

### Parameters

#### **`limit`** - `int?`

The limit to enforce on the number of documents to return. A limit of 0 will return all documents.

### Returns

#### **`IFindFluent<TDocument, TProjection>`**

TODO

## Example

TODO
