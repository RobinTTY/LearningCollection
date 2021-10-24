---
id: mongodbDistinct
title: Distinct
sidebar_position: 2
---

The `Limit` method operates on the `IFindFluent` interface. It limits the number of documents to query from the database.

:::warning
Results must not be larger than the [maximum BSON size](https://docs.mongodb.com/manual/reference/limits/#std-label-limit-bson-document-size) (16 MB). If your results exceed the maximum BSON size, use the aggregation pipeline to retrieve distinct values using the `$group` operator, as described in [Retrieve Distinct Values with the Aggregation Pipeline](https://docs.mongodb.com/manual/reference/operator/aggregation/group/#std-label-aggregation-group-distinct-values).
:::

## Syntax

```cs
IAsyncCursor<TField> Distinct<TField>(
    FieldDefinition<TDocument, TField> field,
    FilterDefinition<TDocument> filter,
    DistinctOptions options = null,
    CancellationToken cancellationToken = null
)
```

### Parameters

#### **`field`** - `FieldDefinition<TDocument, TField>`

The field of the document to operate on.

#### **`filter`** - `FilterDefinition<TDocument>`

The filter to apply to the documents. Same as with the `Find` method.

#### **`options`** - `DistinctOptions` _(optional)_

Options to apply to the `Distinct` operation.

#### **`cancellationToken`** - `CancellationToken` _(optional)_

A cancellation token can be provided to the operation to cancel it prematurely.

### Returns

#### **`IAsyncCursor<TField>`**

TODO

### DistinctOptions

TODO

## Example

```cs
_myCollection.Distinct(document => document.Name, _ => true);
```
