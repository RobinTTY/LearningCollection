---
id: advancedCrudOperations
title: Advanced CRUD operations
sidebar_position: 5
---

## MQL Operators

### Update Operators

Example: \$inc, \$set, \$unset  
Enable us to modify data in the database.

### $ Operator

The $ operator has multiple uses:

- precedes MQL operators
- precedes aggregation pipeline stages
- allows access to field values

### Query Operators

Provide additional ways to locate data within the database.

#### Comparison Operators

- `$eq` `(==)`: **Eq**ual to
- `$ne` `(!=)`: **N**ot **e**qual to
- `$gt` `(>)`: **G**reater **t**han
- `$lt` `(<)`: **L**ess **t**han
- `$gte` `(>=)`: **G**reater **t**han or **e**qual to
- `$lte` `(<=)`: **L**ess **t**han or **e**qual to

Syntax to use them:

```c
{ <field>: { <operator>: <value> } }

// Example:

{ "tripduration": { "$lte" : 60 } }

// 2 Conditions:

{ "tripduration": { "$lte" : 60 }, "usertype": { "$ne": "Subscriber" } }
```

With mongodb shell we can query like this:

```c
db.trips.find({ "tripduration": { "$lte" : 70 },
                "usertype": { "$eq": "Customer" }}).pretty()

// This is equivalent to (implicit equality operator):

db.trips.find({ "tripduration": { "$lte" : 70 },
                "usertype": "Customer" }).pretty()
```

### Logic Operators

- **`$and`:** Match all of the specified query clauses
- **`$or`:** At least one of the query clauses is matched
- **`$nor`:** Fail to match both given clauses

Syntax:

```c
{ <operator> : [ { statement1 }, { statement2 }, ... ] }
```

- **$not:** Negates the query requirement

Syntax:

```c
{ $not: { statement } }
```

#### $and is the default operator

A query like this:

```c
{ "tripduration": 60, "usertype": "Subscriber" }
```

already contains an implicit $and. The explicit typing looks like this:

```c
{ "$and": [{ "tripduration": 60 }, { "usertype": "Subscriber" }] }
```

Another example:

![implicitAnd](/img/docs/Databases/MongoDB/M001MongoDBBasics/implicitAnd.png)

**Note:** Explicitly use \$and when you need to include the same operator more than once in a query

![and](/img/docs/Databases/MongoDB/M001MongoDBBasics/and.png)

```c
db.routes.find({ "$and": [ { "$or" :[ { "dst_airport": "KZN" },
                                    { "src_airport": "KZN" } ]
                           },
                          { "$or" :[ { "airplane": "CR2" },
                                     { "airplane": "A81" } ]
                          }
                         ]}).pretty()
```

#### Quizzes

##### Quiz 1

How many zips in the sample_training.zips dataset are neither over-populated nor under-populated?

In this case, we consider population of more than 1,000,000 to be over- populated and less than 5,000 to be under-populated.

```json
{ "pop": { "$lt": 1000000 }, "pop": { "$gt": 5000 } }
```

##### Quiz 2

How many companies in the sample_training.companies dataset were

either founded in 2004

- [and] either have the social category_code [or] web category_code,

[or] were founded in the month of October

- [and] also either have the social category_code [or] web category_code?

```json
{
  "$or": [
    {
      "$and": [
        { "founded_year": 2004 },
        { "$or": [{ "category_code": "social" }, { "category_code": "web" }] }
      ]
    },
    {
      "$and": [
        { "founded_month": 10 },
        { "$or": [{ "category_code": "social" }, { "category_code": "web" }] }
      ]
    }
  ]
}
```

### Expressive query operator

- $expr allows the use of aggregation expressions withing the query language
- $expr allows us to use variables and conditional statements
- Reminder: $ denotes the use of an operator or addresses the field value

Syntax:

```c
{ $expr: { <expression> } }
```

Example:

Find all documents where the trip started and ended at the same station:

```c
{ "$expr": { "$eq": [ "$end station id", "$start station id"] } }
```

This allows us to compare values that vary from document to document instead of one specific value.

#### MQL syntax vs aggregation syntax

![aggregation](/img/docs/Databases/MongoDB/M001MongoDBBasics/aggregation.PNG)

From [Github](https://github.com/Automattic/mongoose/issues/6453):

> If all you need to do is grab a set of documents, or specific paths from documents, find is the way to go. Aggregation provides a set of operations ( stages ) which allow you to transform the data before it's returned from the server. The decision of which to use ultimately boils down to whether or not you need/want to reshape the data before returning it from the db or just returning what exists in the db as is.

#### Quiz

How many companies in the sample_training.companies collection have the same permalink as their twitter_username?

```json
{ "$expr": { "$eq": ["$permalink", "$twitter_username"] } }
```

### Array Operators

To work with array fields we can use the $all operator:

```c
db.listingsAndReviews.find({ "amenities": {
                                  "$size": 20,
                                  "$all": [ "Internet", "Wifi",  "Kitchen",
                                           "Heating", "Family/kid friendly",
                                           "Washer", "Dryer", "Essentials",
                                           "Shampoo", "Hangers",
                                           "Hair dryer", "Iron",
                                           "Laptop friendly workspace" ]
                                         }
                            }).pretty()
```

This will find all documents with exactly 20 amenities which include all the amenities listed in the query array.

#### Lab 1

What is the name of the listing in the sample_airbnb.listingsAndReviews dataset that accommodates more than 6 people and has exactly 50 reviews?

```json
{ "$and": [{ "accommodates": { "$gt": 6 } }, { "reviews": { "$size": 50 } }] }
```

#### Lab 2

Using the sample_airbnb.listingsAndReviews collection find out how many documents have the "property_type" "House", and include "Changing table" as one of the "amenities"?

```json
{
  "$and": [
    { "property_type": "House" },
    { "amenities": { "$all": ["Changing table"] } }
  ]
}
```

### Projection

By default, queries in MongoDB return all fields in matching documents. To limit the amount of data that MongoDB sends to applications, you can include a projection document to specify or restrict fields to return.

Syntax:

```c
db.<collection>.find({ <query> }, { <projection> })
```

- 1: include the field
- 0: exclude the field
- Use only 1s or only 0s (other than excluding the \_id while specifying included fields)

Example:

Find all documents with exactly 20 amenities which include all the amenities listed in the query array, and **display their price and address**:

```c
db.listingsAndReviews.find({ "amenities":
        { "$size": 20, "$all": [ "Internet", "Wifi",  "Kitchen", "Heating",
                                 "Family/kid friendly", "Washer", "Dryer",
                                 "Essentials", "Shampoo", "Hangers",
                                 "Hair dryer", "Iron",
                                 "Laptop friendly workspace" ] } },
                            {"price": 1, "address": 1}).pretty()
```

### $elemMatch

Matches documents that contain an array field with at least one element that matches the specified query criteria **or** projects only the array elements with at least one element that matches the specified criteria.

Syntax:

```c
{ <field>: { "$elemMatch": { <field>: <value> } } }
```

Example:

Find all documents where the student in **class 431** received a **grade higher than 85** for any type of assignment:

```c
db.grades.find({ "class_id": 431 },
               { "scores": { "$elemMatch": { "score": { "$gt": 85 } } }
             }).pretty()
```

Example 2:

Given the following documents in the scores collection:

```c
{ _id: 1, results: [ 82, 85, 88 ] }
{ _id: 2, results: [ 75, 88, 89 ] }
```

The following query matches only those documents where the results array contains at least one element that is both greater than or equal to 80 and is less than 85:

```c
db.scores.find(
   { results: { $elemMatch: { $gte: 80, $lt: 85 } } }
)
```

The query returns the following document since the element 82 is both greater than or equal to 80 and is less than 85:

```c
{ "_id" : 1, "results" : [ 82, 85, 88 ] }
```

#### Lab

How many companies in the sample_training.companies collection have offices in the city of Seattle?

```c
{ "offices.city": "Seattle"  }
```

or $elemMatch operator allows us to specify multiple criteria on an array of embedded documents such that at least one embedded document satisfies all the specified criteria:

```c
{ "offices": { $elemMatch: { city: "Seattle" } } }
```

#### IMPORTANT

**\$elemMatch is not the same logic as dot notation.** $elemMatch requires the same nested elements to have the values. Using dot notation allows for any nested elements to have these values.

Example:

```c
{ _id : 1 , array : [ { a : 1 , b : 2 } , { a : 3 , b : 3 } ] }
{ _id : 2 , array : [ { a : 1 , b : 3 } , { a : 3 , b : 4 } ] }
```

```c
find( { array.a : 1 , array.b : 3 } ) // will find both documents.
find( { array : { $elemMatch : { a : 1 , b : 3 } } } ) // will only find _id:2.
```

More info here: [Documentation](https://docs.mongodb.com/manual/tutorial/query-array-of-documents/)

### Array Operators and Sub-Documents

- Dot-notation is used to access sub documents
- With this notation we can access arbitrarily deep nested fields

Examples:

```c
// 1 level deep
db.trips.findOne({ "start station location.type": "Point" })

// 4 levels deep (0 indicates first array element in this case)
db.companies.find({ "relationships.0.person.last_name": "Zuckerberg" },
                  { "name": 1 }).pretty()
```

#### Lab 1

How many trips in the sample_training.trips collection started at stations that are to the west of the -74 longitude coordinate?

```c
{ "start station location.coordinates.0": {"$lt": -74} }
```

#### Lab 2

How many inspections from the sample_training.inspections collection were conducted in the city of NEW YORK?

```c
{ "address.city": "NEW YORK" }
```
