---
id: queryingCreatingUpdatingDeleting
title: Querying, Creating, Updating and Deleting documents with Mongo shell
sidebar_position: 4
---

## Querying data

```c
// show all dbs in current cluster
show dbs

// select a database
use <databaseName>

// show all collections inside database
show collections

// execute a query in the current db
db.zips.find({"state": "NY"})

// iterate through a cursor
it
// count the number of results for a query
db.zips.find(<query>).count()

// return documents that match the given query formatted for ease of reading
db.zips.find(<query>).pretty()

// get a random document
db.zips.findOne()
```

### Queries

A query looks like this:

```JSON
{"state": "NY", "city": "ALBANY"}
```

Here we search for all data with `state = "NY"` and `city = "ALBANY"`

## Creating and Manipulating documents

```c
// insert a document
db.inspections.insert({
    "_id" : ObjectId("56d61033a378eccde8a8354f"),
    "id" : "10021-2015-ENFO",
    ...
})

// Insert three documents
db.inspections.insert([ { "test": 1 }, { "test": 2 }, { "test": 3 } ])

// Insert multiple documents specifying the _id values, and using the "ordered": false option.
db.inspections.insert([{ "_id": 1, "test": 1 },{ "_id": 1, "test": 2 },
                       { "_id": 3, "test": 3 }],{ "ordered": false })

// Insert multiple documents with _id: 1 with the default "ordered": true setting
// nothing will be inserted if document with _id=1 already exists
db.inspection.insert([{ "_id": 1, "test": 1 },{ "_id": 3, "test": 3 }])

```

## Updating documents

Operators: $inc, $set, $unset

```c
// Update a single document in the zips collection where the zip field is equal to "12534"
// by setting the value of the "pop" field to 17630
db.zips.updateOne({ "zip": "12534" }, { "$set": { "pop": 17630 } })

// Update all documents in the zips collection where the city field is equal to "HUDSON"
// by adding 10 to the current value of the "pop" field
db.zips.updateMany({ "city": "HUDSON" }, { "$inc": { "pop": 10 } })

// Update one document in the grades collection where the student_id is ``250``,
// and the class_id field is 339 , by adding a document element to the "scores" array
db.grades.updateOne({ "student_id": 250, "class_id": 339 },
                    { "$push": { "scores": { "type": "extra credit",
                                             "score": 100 }
                                }
                     })
```

## Deleting documents

```c
// Delete one document that has test field equal to 3
db.inspections.deleteOne({ "test": 3 })

// Delete all the documents that have test field equal to 1
db.inspections.deleteMany({ "test": 1 })

// Drop the inspection collection
db.inspection.drop()
```
