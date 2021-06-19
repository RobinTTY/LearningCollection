# User-Facing Backend

## Aggregation Pipeline

### Example

![Aggregation Pipeline](resources/Pipeline.PNG)

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

To add something new to the database we can use the methods ``InsertOneAsync`` and ``InsertManyAsync``.

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

To update something in the database we can use the methods ``UpdateOneAsync``, ``UpdateManyAsync`` and ``FindOneAndUpdateAsync``.

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
