---
id: adminBackend
title: Admin Backend
sidebar_position: 5
---

## Read Concerns

- Represent different levels of "read isolation"
  - if data can be read by clients before it has been replicated to a majority of nodes it is considered a low level of "read isolation"
- Can be used to specify a consistent view of the database

### ReadConcern local

- The default read concern level
- Does not check that data has been replicated

### ReadConcern majority

- Allows more durable reads
- Only returns data that has been replicated to a majority of nodes (data might be more stale but more durable)
- Used for mission critical data

### Other concern levels

There are more concern levels available. See [MongoDB Documentation](https://docs.mongodb.com/manual/reference/read-concern/).

## Ticket: User Report (Using group method)

**Task:** Build a pipeline that returns the 20 most frequent commenters on the MFlix site. You can do this by counting the number of occurrences of a user's email in the `comments` collection. In addition, set the ReadConcern on the \_commentsCollection to ensure the most accurate reads occur.

**Solution:**

```cs
var result = await _commentsCollection
  .WithReadConcern(ReadConcern.Majority)
  .Aggregate()
  .Group(x => x.Email, value => new ReportProjection { Id = value.Key, Count = value.Count() })
  .Sort(Builders<ReportProjection>.Sort.Descending(c => c.Count))
  .Limit(20)
  .ToListAsync();

return new TopCommentsProjection(result);
```

## Bulk Writes

- Bulk writes allow database clients to send multiple writes
- Can either be ordered or unordered
- More performant than executing a write operation for each document

### Ordered Bulk Write

- The default setting for bulk writes in MongoDB
- Executes writes sequentially
  - Will end execution after first write failure
- Replica will execute writes in the order they were sent

### Unordered Bulk Write

- Has to be specified with the flag `{ ordered: false }`
- Executes writes in parallel

## Using BulkWriteAsync to update many documents in a specific way

The `BulkWriteAsync` method takes an `IEnumerable` of the `WriteModel` abstract class as input. There are several derived classes of `WriteModel`, which allow you to perform different operations:

|    C# Driver    |                                 MongoDB Shell equivalent                                 |                                      Operation                                      |
| :-------------: | :--------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------: |
| InsertOneModel  |  [insertOne](https://docs.mongodb.com/manual/reference/method/db.collection.insertOne/)  |                                Inserts the document                                 |
| UpdateOneModel  |  [updateOne](https://docs.mongodb.com/manual/reference/method/db.collection.updateOne/)  |               Updates one document that matches the filter definition               |
| UpdateManyModel | [updateMany](https://docs.mongodb.com/manual/reference/method/db.collection.updateMany/) |             Updates all the documents that match the filter definition              |
| ReplaceOneModel | [replaceOne](https://docs.mongodb.com/manual/reference/method/db.collection.replaceOne/) | Replaces one document that matches the filter definition with the document provided |
| DeleteOneModel  |  [deleteOne](https://docs.mongodb.com/manual/reference/method/db.collection.deleteOne/)  |               Deletes one document that matches the filter definition               |
| DeleteManyModel | [deleteMany](https://docs.mongodb.com/manual/reference/method/db.collection.deleteMany/) |             Deletes all the documents that match the filter definition              |

These operations can be passed to the `BulkWriteAsync` method and will be executed. They are equivalent to the MongoDB [db.collection.bulkWrite()](https://docs.mongodb.com/manual/reference/method/db.collection.bulkWrite) shell method.

### Example

```cs
var requests = new List<ReplaceOneModel<Movie>>();
datePipelineResults.ForEach(transformedMovie => requests.Add(new ReplaceOneModel<Movie>(Builders<Movie>.Filter.Where(movie => movie.Id == transformedMovie.Id), transformedMovie)));
var bulkWriteDatesResult = await _moviesCollection.BulkWriteAsync(requests);
```
