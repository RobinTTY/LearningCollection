---
id: userFacingBackend
title: User-Facing Backend
---

## Aggregation Pipeline

### Example

![Aggregation Pipeline](/img/docs/Databases/MongoDB/M220NMongoDBFor.NetDevelopers/Pipeline.PNG)

### Example of a similar (but not the same) pipeline in C#

```C#
public void CountMovies()
        {
            // This stage finds all movies that have a specific director
            var matchStage = new BsonDocument("$match",
                new BsonDocument("directors", "Rob Reiner"));


            // This stage sorts the results by the number of reviews,
            // in descending order
            var sortStage = new BsonDocument("$sort",
                new BsonDocument("tomatoes.viewer.numReviews", -1));

            // This stage generates the projection we want
            var projectionStage = new BsonDocument("$project",
                new BsonDocument
                    {
                        { "_id", 0 },
                        { "Movie Title", "$title" },
                        { "Year", "$year" },
                        { "Average User Rating", "$tomatoes.viewer.rating" }
                    });

            /* We now put the stages together in a pipeline. Note that a
             * pipeline definition requires us to specify the input and output
             * types. In this case, the input is of type Movie, but because
             * we are using a Projection with custom fields, our output is
             * a generic BsonDocument object. To be really cool, we could
             * create a mapping class for the output type, which is what we've
             * done for you in the MFlix application.
             */

            var pipeline = PipelineDefinition<Movie, BsonDocument>
                .Create(new BsonDocument[] {
                    matchStage,
                    sortStage,
                    projectionStage
                });


            var result = _moviesCollection.Aggregate(pipeline).ToList();
            /* Note: we're making a synchronous Aggregate() call.
             * If you want a challenge, change the line above to make an
             * asynchronous call (hint: you'll need to make 2 changes),
             * and then confirm the unit test still passes.
             */

            Assert.AreEqual(14, result.Count);
            var firstMovie = result[0];
            Assert.AreEqual("The Princess Bride", firstMovie.GetValue("Movie Title").AsString);
            Assert.AreEqual(1987, firstMovie.GetValue("Year").AsInt32);
            Assert.AreEqual(4.0, firstMovie.GetValue("Average User Rating").AsDouble);

            /* We specifically excluded the "Id" field in the projection stage
             * that we built in the code above, so let's make sure that field
             * wasn't included in the resulting BsonDocument. We expect the call
             * to GetValue() to throw a KeyNotFoundException exception if the
             * field doesn't exist.
             */

            Assert.Throws<KeyNotFoundException>(()=> firstMovie.GetValue("Id"));
        }
```

## Faceted Search

- [Faceted search](http://en.wikipedia.org/wiki/Faceted_search), or faceted navigation, is a way of browsing and searching for items in a set of data by applying filters on various properties (facets) of the items in the collection
- It is increasingly seen as an important part of the UI for many search platforms, and indeed nowadays is pretty much expected in places such as e-commerce websites
- It complements more free-form keyword search by facilitating exploration and discovery and is therefore useful when a user may not know the specific keywords they wish to search on.

Some core functionality that a faceted search feature should provide might include:

- finding the items that match a particular value of a certain facet (e.g. colour:blue)
- finding the items in the intersection of multiple facet values (e.g. colour:blue AND size:medium)
- finding the items in the union of multiple facet values (e.g. colour:blue OR colour:red OR size:large)
- for each possible facet filter combination, display to the user the possible facet values on which it is possible to filter further (“drill down”)
- for each facet value on which it is possible to drill down, display to the user the count of items matching that filter.

For more info see the [MongoDB Blog](https://www.mongodb.com/blog/post/faceted-search-with-mongodb).

### MFlix Functionality

Faceted Search is a way of narrowing down search results by adding search parameters. For example let's say MFlix allows users to filter movies by a rating from 1 to 10, but Kate Winslet has only acted in movies that have a rating of 6 or higher.

If we didn't specify any other search parameters, MFlix would allow us to choose a rating between 1 and 10. But if we first search for "Kate Winslet", MFlix would only let us choose a rating between 6 and 10, because none of the movie documents in the result set have a rating below 6.

To use faceted searches, the application must use the **$facet pipeline stage** of the Aggregation Framework.

**Note:** To see how facets work see the [Aggregation Framework Course](https://university.mongodb.com/courses/M121/about).

## Basic Writes

To add something new to the database we can use the methods `InsertOneAsync` and `InsertManyAsync`.

### Example

```C#
public async Task CreateMovieAsync()
{

    var newTheater = new Theater(27777,
                    "4 Privet Drive",
                    "Little Whinging",
                    "LA",
                    "343434");

    await _theatersCollection.InsertOneAsync(newTheater);


    // Add many
    var theater1 = new Theater(27017, "1 Foo Street", "Dingledongle", "DE", "45678");
    var theater2 = new Theater(27018, "234 Bar Ave.", "Wishywashy", "WY", "87654");
    var theater3 = new Theater(27019, "75 Birthday Road", "Viejo Amigo", "CA", "99887");

    await _theatersCollection.InsertManyAsync(
        new List<Theater>()
        {
            theater1, theater2, theater3
        }
    );
}
```

## Basic Updates

To update something in the database we can use the methods `UpdateOneAsync`, `UpdateManyAsync` and `FindOneAndUpdateAsync`.

### Examples

Updating one document:

```C#
// not type safe
var updateResult = _theatersCollection.UpdateOne(filter,
    new BsonDocument("$set",
        new BsonDocument("location.address.street1", "123 Main St."))
    );

// With the builder
_theatersCollection.UpdateOne(filter,
    Builders<Theater>.Update.Set(t => t.Location.Address.Street1,
        "123 Main St.")
    );

// if you want to do something with the updated document use FindOneAndUpdateAsync
var updatedDoc = await _theatersCollection.FindOneAndUpdateAsync<Theater>(
                filter,
                Builders<Theater>.Update.Set(
                    t => t.Location.Address.Street1,
                    "123 Main St.")
                );
```

Updating many documents:

```C#
var update = Builders<Theater>
                .Update.Set(t => t.Location.Address.City, "Bloomington");

// And then we run UpdateManyAsync:
var result = await _theatersCollection.UpdateManyAsync(
    filter,
    update
    );
```

## Write Concerns

- Write concerns are important when there are more than one data source
- An Atlas replica set is an example where write concerns can be important

### writeConcern: { w: 1 }

- Only requests an acknowledgement that one node applied the write
- This is the default writeConcern in MongoDB

### writeConcern: { w: majority }

- Requests acknowledgement that a majority of nodes in the replica set applied the write
- Takes longer than w: 1
- Is more durable than w: 1
  - Useful for ensuring vital writes are majority-committed
  - e.g. user registration

### writeConcern: { w: 0 }

- Does not request an acknowledgement that any nodes applied the write
  - "Fire and forget"
  - acknowledgement can still indicate network errors or socket exceptions
- Fastest writeConcern level
- Least durable writeConcern

### Example

```C#
await _usersCollection.WithWriteConcern(WriteConcern.WMajority).InsertOneAsync(user, cancellationToken: cancellationToken);
```

## Joins

- Join two collections of data
  - Movies and comments
- Use new expressive $lookup
  - allows us to apply aggregation pipelines to data - before the data is joined
- Build aggregation in Compass, and then export to language

Join comments to movies (this pipeline is executed upon the movies collection):

```C#
// $match stage
{
  year: { "$gte": 1980, "$lt": 1990 }
}

// $lookup stage
// from: collection we are joining from
{
  from: "comments",
  // pipeline has access to fields inside comments collection
  // but not to fields inside the movies collection
  // if we need fields from movies we need to declare them in let
  // this makes _id available in the pipeline as "id"
  // this variable is referred to with the "$$" signs (movies collection)
  // one "$" sign refers to the comments collection!
  let: { "id": "$_id" },
  pipeline: [
    {
      "$match":
      // matches the comment "movie_id" field to the movie "id" field
      { "$expr": { "$eq": [ "$movie_id", "$$id" ]} }
    }
  ],
  // each movie has a new field movie_comments with the comments as array
  as: "movie_comments"
}

// if we only care about how many comments there are, we can add a stage to our pipeline
{
  from: "comments",
  let: { "id": "$_id" },
  pipeline: [
    {
      "$match":
      { "$expr": { "$eq": [ "$movie_id", "$$id" ]} }
    },
    {
      "$count": "count"
    }
  ],
  as: "movie_comments"
}
```

We can also export the pipeline from Compass to C# code:

```C#
new BsonArray
{
    new BsonDocument("$match",
    new BsonDocument("year",
    new BsonDocument
            {
                { "$gte", 1980 },
                { "$lt", 1990 }
            })),
    new BsonDocument("$lookup",
    new BsonDocument
        {
            { "from", "comments" },
            { "let",
    new BsonDocument("id", "$_id") },
            { "pipeline",
    new BsonArray
            {
                new BsonDocument("$match",
                new BsonDocument("$expr",
                new BsonDocument("$eq",
                new BsonArray
                            {
                                "$movie_id",
                                "$$id"
                            })))
            } },
            { "as", "movie_comments" }
        })
}
```

Better approach:

```C#
/* Approach that uses several helpful methods in the driver:
    * Aggregate(), Match(), and Lookup(), each of which is represented
    * in the code above as MQL. The Lookup() method is a bit complex;
    * here is an explanation of each of the parameters:
    *
    *  - The collection from which we want to lookup the values
    *      (in this case, the Comments collection)
    *  - The "key" in the Movies collection that will match a key in
    *      the Comments collection.
    *  - The "key" in the Comments collection that matches the previous
    *      parameter. In both cases, it's the _id of each Movie we match
    *      in the Match state.
    *  - The property in which we want to put the lookup results. We
    *      have already defined a Comments property on the Movie object
    *      for just this purpose, so we specify it here.
    *
    */
var movies = _moviesCollection
    .Aggregate()  // begins a fluent aggregation
    .Match(m => (int)m.Year < 1990 && (int)m.Year >= 1980)
    .Lookup(
        _commentsCollection,
        m => m.Id,
        c => c.MovieId,
        (Movie m)=>m.Comments
        )
    .ToList();

var firstMovie = movies.First();
```

## Basic Deletes

```C#
// delete one document
var filter = Builders<Theater>.Filter.Eq(t => t.TheaterId, 27017);
var result = await _theatersCollection.DeleteOneAsync(filter);

// delete one document but return it
filter = Builders<Theater>.Filter.Eq(t => t.TheaterId, 27018);
var deletedDoc = await _theatersCollection.FindOneAndDeleteAsync(filter);

// delete many
var filter = Builders<Theater>.Filter.Eq(t => t.Location.Address.City, "Movieville");
var result = await _theatersCollection.DeleteManyAsync(filter);
```
