---
id: core-concepts
title: Core Concepts
sidebar_position: 2
---

GraphQL has a few core concepts that are important to understanding how it works. These core concepts are explained here.

## The Schema Definition Language (SDL)

GraphQL has its own type system that’s used to define the schema of an API. The syntax for writing schemas is called Schema Definition Language (SDL). Here is an example of how we can use the SDL to define a simple type called `Person`:

```graphql
type Person {
  name: String!
  age: Int!
}
```

This type has two fields, they’re called `name` and `age` and are respectively of type `String` and `Int`. The `!` following the type means that this field is required. It’s also possible to express relationships between types. In the example of a blogging application, a `Person` could be associated with a `Post`:

```graphql
type Post {
  title: String!
  author: Person!
}
```

Conversely, the other end of the relationship needs to be placed on the `Person` type:

```graphql
type Person {
  name: String!
  age: Int!
  posts: [Post!]!
}
```

This is a one-to-many-relationship between `Person` and `Post` since the `posts` field on `Person` is actually an array of posts.

## Fetching Data with Queries

When working with REST APIs, data is loaded from specific endpoints. Each endpoint has a clearly defined structure of the information that it returns. This means that the data requirements of a client are effectively encoded in the URL that it connects to.

The approach that’s taken in GraphQL is radically different. Instead of having multiple endpoints that return fixed data structures, GraphQL APIs typically only expose a single endpoint. This works because the structure of the data that’s returned is not fixed. Instead, it’s completely flexible and lets the client decide what data is actually needed.

That means that the client needs to send more information to the server to express its data needs - this information is called a query.

### Basic Queries

Let’s take a look at an example query that a client could send to a server:

```graphql
{
  allPersons {
    name
  }
}
```

The `allPersons` field in this query is called the root field of the query. Everything that follows the root field, is called the payload of the query. The only field that’s specified in this query’s payload is `name`.

This query would return a list of all persons currently stored in the database. Here’s an example response:

```json
{
  "allPersons": [
    { "name": "Johnny" },
    { "name": "Sarah" },
    { "name": "Alice" }
  ]
}
```

Notice that each person only has the `name` in the response, but the `age` is not returned by the server. That’s exactly because `name` was the only field that was specified in the query.

If the client also needed the persons’ `age`, all it has to do is slightly adjust the query and include the new field in the query’s payload:

```graphql
{
  allPersons {
    name
    age
  }
}
```

One of the major advantages of GraphQL is that it allows for naturally querying nested information. For example, if you wanted to load all the `posts` that a `Person` has written, you could simply follow the structure of your types to request this information:

```graphql
{
  allPersons {
    name
    age
    posts {
      title
    }
  }
}
```

