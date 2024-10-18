---
id: unions
title: Unions
sidebar_position: 4
---

Union types share similarities with interfaces; however, they lack the ability to define any shared fields among the constituent types.

```gql
union SearchResult = Human | Droid | Starship
```

Wherever we return a `SearchResult` type in our schema, we might get a `Human`, a `Droid`, or a `Starship`. Note that members of a union type need to be concrete object types; you can’t create a union type out of interfaces or other unions.

In this case, if you query a field that returns the `SearchResult` union type, you need to use an inline fragment to be able to query any fields at all:

```gql
{
  search(text: "an") {
    __typename
    ... on Human {
      name
      height
    }
    ... on Droid {
      name
      primaryFunction
    }
    ... on Starship {
      name
      length
    }
  }
}
```

The `__typename` field resolves to a `string` which lets you differentiate different data types from each other on the client.
