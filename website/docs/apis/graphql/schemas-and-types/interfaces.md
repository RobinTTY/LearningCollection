---
id: interfaces
title: Interfaces
sidebar_position: 3
---

Like many type systems, GraphQL supports interfaces. An Interface is an abstract type that includes a certain set of fields that a type must include to implement the interface.

For example, you could have an interface Character that represents any character in the Star Wars trilogy:

```gql
interface Character {
  id: ID!
  name: String!
  friends: [Character]
  appearsIn: [Episode]!
}
```

This means that any type that implements Character needs to have these exact fields, with these arguments and return types. For example, here are some types that might implement `Character`:

```gql
type Human implements Character {
  id: ID!
  name: String!
  friends: [Character]
  appearsIn: [Episode]!
  starships: [Starship]
  totalCredits: Int
}

type Droid implements Character {
  id: ID!
  name: String!
  friends: [Character]
  appearsIn: [Episode]!
  primaryFunction: String
}
```

You can see that both of these types have all of the fields from the `Character` interface, but also bring in extra fields, `totalCredits`, `starships` and `primaryFunction`, that are specific to that particular type of character.

Interfaces are useful when you want to return an object or set of objects, but those might be of several different types. To ask for a field on a specific object type, you need to use an inline fragment:

```gql
query HeroForEpisode($ep: Episode!) {
  hero(episode: $ep) {
    name
    ... on Droid {
      primaryFunction
    }
  }
}
```
