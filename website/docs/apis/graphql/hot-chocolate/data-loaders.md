---
id: data-loaders
title: Data Loaders
sidebar_position: 6
---

ataLoader is a generic utility to be used as part of the application's data fetching layer to provide a consistent API over various backends and reduce requests to those backends via batching and caching. It helps you to avoid the N+1 problem.

## Context: The N+1 Problem

Every data fetching technology suffers the n+1 problem. Typically, it happens when you structure your code so that you first do a query to get a list of records, then subsequently do another query for each of those records.

### Example

Let's say we have a collection of `Car` objects (database rows), and each `Car` has a collection of `Wheel` objects (also rows). In other words, `Car → Wheel` is a 1-to-many relationship.

Now, let's say we need to iterate through all the cars, and for each one, print out a list of the wheels. The naive implementation would do the following:

```sql
SELECT * FROM Cars;
```

And then for each Car:

```sql
SELECT * FROM Wheel WHERE CarId = ?
```

In other words, you have one select for the Cars, and then N additional selects, where N is the total number of cars. Alternatively, one could get all wheels and perform the lookups in memory:

```sql
SELECT * FROM Wheel;
```

This reduces the number of round-trips to the database from N+1 to 2. Most ORM tools give you several ways to prevent N+1 selects.

### N+1 Problem in GraphQL

The difference between GraphQL and e.g. REST is, that the n+1 problem occurs on the server, rather than on the client. The clear benefit is, that we only have to deal with this problem once on the server, rather than on every client.

To depict the issue that data loaders solve in this context, let assume we have this schema:

```graphql
type Query {
  person(id: ID): Person
}

type Person {
  id: ID
  name: String
  friends: [Person]
}
```

The above schema allows to fetch a person by its internal identifier and each person has a list of friends that is represented by a list of persons. A query against the above schema could look like the following:

```graphql
{
  a: person(id: "a") {
    name
  }

  b: person(id: "b") {
    name
  }
}
```

The problem with the GraphQL backend is that field resolvers are atomic and do not have any knowledge about the query as a whole. So, a field resolver does not know that it will be called multiple times in parallel to fetch similar or equal data from the same data source. **The idea of a dataloader is to batch these two requests into one call to the database.**

Let's look at some code to understand what data loaders are doing. First, let's have a look at how we would write our field resolver without data loaders:

```csharp
public async Task<Person> GetPerson(string id, [Service]IPersonRepository repository)
{
    return await repository.GetPersonById(id);
}
```

## HotChocolate Data Loaders

The above example would result in two calls to the person repository that would then fetch the persons one by one from our data source. Instead of fetching the data from the repository directly, we fetch the data from the data loader. The data loader batches all the requests together into one request to the database:

```csharp {16-23}
// This is one way of implementing a data loader. You will find the different ways of declaring
// data loaders further down the page.
public class PersonBatchDataLoader : BatchDataLoader<string, Person>
{
    private readonly IPersonRepository _repository;

    public PersonBatchDataLoader(
        IPersonRepository repository,
        IBatchScheduler batchScheduler,
        DataLoaderOptions? options = null)
        : base(batchScheduler, options)
    {
        _repository = repository;
    }

    protected override async Task<IReadOnlyDictionary<string, Person>> LoadBatchAsync(
        IReadOnlyList<string> keys,
        CancellationToken cancellationToken)
    {
        // instead of fetching one person, we fetch multiple persons
        var persons =  await _repository.GetPersonByIds(keys);
        return persons.ToDictionary(x => x.Id);
    }
}


public class Query
{
    public async Task<Person> GetPerson(
        string id,
        PersonBatchDataLoader dataLoader)
        => await dataLoader.LoadAsync(id);
}
```

### Execution

With a data loader, you can fetch entities with a key. These are the two generics you have in the class data loaders:

```csharp
public class BatchDataLoader<TId, TEntity>
```

`TId` is used as an identifier of `TEntity`. `TId` is the type of the values you put into `LoadAsync`.

The execution engine of Hot Chocolate tries to batch as much as possible. It executes resolvers until the queue is empty and then triggers the data loader to resolve the data for the waiting resolvers.

### Data Consistency

Dataloaders do not only batch calls to the database, they also cache the database response. A data loader guarantees data consistency in a single request. If you load an entity with a data loader in your request more than once, it is given that these two entities are equivalent.

:::info
Data loaders do not fetch an entity if there is already an entity with the requested key in the cache.
:::
