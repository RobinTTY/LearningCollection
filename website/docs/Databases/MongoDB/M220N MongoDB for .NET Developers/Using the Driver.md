---
id: usingTheDriver
title: Using the Driver
---

## mflix project structure

![project structure](/img/docs/Databases/MongoDB/M220NMongoDBFor.NetDevelopers/2021-06-14.png)

## Approaches to working with data

The MongoDB driver supports many different approaches to working with your data. For instance you can read data in 4 different ways using the driver:

```C#
// Using MQL as a string -> NOT TYPE SAFE
var filter = "{ price: { $gt: 400 } }";
var expensiveGuitars = guitarsCollection.Find(filter);

// Using BsonDocument object -> NOT TYPE SAFE
var filter = new BsonDocument("price", new BsonDocument("$gt", 400));
var expensiveGuitars = guitarsCollection.Find(filter);

// Using the Builders class -> Only field names NOT type safe
var builder = Builders<BsonDocument>.Filter;
var filter = builder.Gt("price", 400) & builder.Lt("price", 600);
var midrangeGuitars = guitarsCollection.Find(filter);

// Using Mapping Classes and LINQ -> TPYE SAFE
class Guitar
{
    [BsonID]
    public int Id { get; set; }
    public string Make { get; set; }
    public string Model { get; set; }
    public double Price { get; set; }
}

var guitars = new List<Guitar>();
var expensiveGuitars = guitars.Where(g => g.Price > 400).ToList();
```

## Async Programming Principles

### Synchronous

- Request arrives
- Thread from Thread pool is assigned
- Thread makes request to external resource and waits for response
- Thread can not handle any other requests until response is received

![Synchronous](/img/docs/Databases/MongoDB/M220NMongoDBFor.NetDevelopers/synchronous.gif)

### Asynchronous

- Request arrives
- Thread from Thread pool is assigned
- Thread makes request to external resource and returns immediately to the thread pool
- When the external ressource returns the response, ASP.NET grabs any available thread to handle the call

![Asynchronous](/img/docs/Databases/MongoDB/M220NMongoDBFor.NetDevelopers/asynchronous.gif)

## How to use the asynchronous model

### Synchronous

```C#
public ActionResult GetMovie(string movieId) { ... }
```

### Asynchronous

```C#
public async Task<ActionResult> GetMovieAsync(string movieId, CancellationToken cancellationToken = default) { ... }
```

### Asynchronous Repository Method

```C#
public async Task<Movie> FetchMovieAsync(string movieId, CancellationToken cancellationToken = default)
{
    return await _movies.Collection
        .Find.(Builders<Movie>.Filter.Empty)
        .FirstOrDefaultAsync(cancellationToken);
}
```

## Using Projections with the driver

To limit the amount of data that MongoDB sends to applications, you can include a projection document to specify or restrict fields to return. With the C# driver we do it like this:

```C#
var projectionFilter = Builders<Movie>.Projection
    .Include(m => m.Title)
    .Include(m => m.Year)
    .Include(m => m.Cast)
    .Include(m => m.Id)
```

## Advanced Read Examples

Sorting first, limiting the results, and skipping so we get different results for each page:

```C#
var sortByYearDescending = Builders<Movie>.Sort.Ascending(m => m.Year);
var movies = await _moviesCollection.Find<Movie>(Builders<Movie>.Filter.Empty)
    .Sort(sortByYearDescending)
    .Limit(moviesPerPage)
    .Skip(pageNumber * moviesPerPage)
    .ToListAsync();
```

Search for any match between two arrays:

```C#
public async Task<IReadOnlyList<MovieByCountryProjection>> GetMoviesByCountryAsync(
    CancellationToken cancellationToken = default,
    params string[] countries
    )
{
    var project = Builders<Movie>.Projection.Include(movie => movie.Title);

    return await _moviesCollection
        .Find(Builders<Movie>.Filter.AnyIn(movie => movie.Countries, countries))
        .SortByDescending(m => m.Title)
        .Project<MovieByCountryProjection>(project)
        .ToListAsync(cancellationToken);
}
```
