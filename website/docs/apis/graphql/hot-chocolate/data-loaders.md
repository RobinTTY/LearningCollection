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
