---
id: input-objects
title: Input Objects
sidebar_position: 3
---

GraphQL defines input object types to allow us to use objects as arguments on our fields.

Input object types can be defined like the following:

```csharp
public class BookInput
{
    public string Title { get; set; }

    public string Author { get; set; }
}

public class Mutation
{
    public async Task<Book> AddBook(BookInput input)
    {
        // Omitted code for brevity
    }
}
```

:::info
If a class is used as an argument to a resolver and it does not end in Input, Hot Chocolate (by default) will append Input to the type name in the resulting schema.
:::

We can also use a class both as an output- and an input-type:

```csharp
public class Book
{
    public string Title { get; set; }

    public string Author { get; set; }
}

public class Mutation
{
    public async Task<Book> AddBook(Book input)
    {
        // Omitted code for brevity
    }
}
```

This will produce the following schema:

```gql
type Book {
  title: String
  author: String
}

input BookInput {
  title: String
  author: String
}

type Mutation {
  addBook(input: BookInput): Book
}
```

:::danger
While it is possible, it is not encouraged, as it complicates future extensions of either type.
:::

## `OneOf` Input Objects

`OneOf` Input Objects are a special variant of Input Objects where the type system asserts that exactly one of the fields must be set and non-null, all others being omitted. This is represented in introspection with the `__Type.oneField: Boolean` field, and in SDL via the `@oneOf` directive on the input object.

This introduces a form of input polymorphism to GraphQL. For example, the following `PetInput` input object lets you choose between a number of potential input types:

```gql
input PetInput @oneOf {
  cat: CatInput
  dog: DogInput
  fish: FishInput
}

input CatInput {
  name: String!
  numberOfLives: Int
}
input DogInput {
  name: String!
  wagsTail: Boolean
}
input FishInput {
  name: String!
  bodyLengthInMm: Int
}

type Mutation {
  addPet(pet: PetInput!): Pet
}
```

Since the OneOf Input Objects RFC is not yet in the draft stage it is still an opt-in feature. In order to activate it set the schema options to enable it:

```csharp
builder.Services
    .AddGraphQLServer()
    ...
    .ModifyOptions(o => o.EnableOneOf = true);
```

Once activate you can create `Oneof` Input Objects like the following:

```csharp
[OneOf]
public class PetInput
{
    public Dog? Dog { get; set; }

    public Cat? Cat { get; set; }
}

public interface IPet
{
    string Name { get; }
}

public class Dog : IPet
{
    public string Name { get; set; }
}

public class Cat : IPet
{
    public string Name { get; set; }
}

public class Mutation
{
    public Task<IPet> CreatePetAsync(PetInput input)
    {
        // Omitted code for brevity
    }
}
```
