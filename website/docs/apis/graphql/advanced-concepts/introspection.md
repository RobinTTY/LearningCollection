---
id: introspection
title: Introspection
sidebar_position: 2
---

The designers of the schema already know what the schema looks like but how can clients discover what is accessible through a GraphQL API? We can ask GraphQL for this information by querying the `__schema` meta-field, which is always available on the root type of a Query per the spec.

```graphql
query {
  __schema {
    types {
      name
    }
  }
}
```

Take this schema definition for example:

```graphql
type Query {
  author(id: ID!): Author
}

type Author {
  posts: [Post!]!
}

type Post {
  title: String!
}
```

If we were to send the introspection query mentioned above, we would get the following result:

```json
{
  "data": {
    "__schema": {
      "types": [
        {
          "name": "Query"
        },
        {
          "name": "Author"
        },
        {
          "name": "Post"
        },
        {
          "name": "ID"
        },
        {
          "name": "String"
        },
        {
          "name": "__Schema"
        },
        {
          "name": "__Type"
        },
        {
          "name": "__TypeKind"
        },
        {
          "name": "__Field"
        },
        {
          "name": "__InputValue"
        },
        {
          "name": "__EnumValue"
        },
        {
          "name": "__Directive"
        },
        {
          "name": "__DirectiveLocation"
        }
      ]
    }
  }
}
```

As you can see, we queried for all types on the schema. We get both the object types we defined and scalar types. We can even introspect the introspection types!

There’s much more than name available on introspection types. Here’s another example:

```graphql
{
  __type(name: "Author") {
    name
    description
  }
}
```

In this example, we query a single type using the `__type` meta-field and we ask for its name and description. Here’s the result for this query:

```json
{
  "data": {
    "__type": {
      "name": "Author",
      "description": "The author of a post.",
    }
  }
}
```

Introspection is an extremely powerful feature of GraphQL. The specification goes into much more detail about what fields and types are available in the introspection schema.

A lot of tools available in the GraphQL ecosystem use the introspection system to provide amazing features. For example documentation browsers, autocomplete and code generation.
