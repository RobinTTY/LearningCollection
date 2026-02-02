---
title: Relationships
---

In relational databases, relationships (also called associations) between tables are defined through foreign keys. A foreign key (FK) is a column or combination of columns that is used to establish and enforce a link between the data in two tables. The foreign key refers to the primary key in another table.

## Types of relationships

There are generally three types of relationships:

- one-to-one
- one-to-many
- many-to-many

### One-to-One

In a one-to-one relationship, the primary key acts additionally as a foreign key and there is no separate foreign key column for either table.

### One-to-Many

One-to-many relationships are used when a single entity is associated with any number of other entities. For example, a `Blog` can have many associated `Posts`, but each `Post` is associated with only one `Blog`.
In a one-to-many relationship, the foreign key is defined on the table that represents the many end of the relationship.

### Many-to-Many

The many-to-many relationship involves defining a third table (called a junction or join table), whose primary key is composed of the foreign keys from both related tables.

## Navigation properties

In Entity Framework, an entity can be related to other entities through an association or relationship. Navigation properties provide a way to navigate an association between two entity types.

- Every object can have a navigation property for every relationship in which it participates
- Navigation properties allow you to navigate and manage relationships in both directions, returning either
  - a reference object (if the multiplicity is either one or zero-or-one)
  - or a collection (if the multiplicity is many).
- You may also choose to have one-way navigation, in which case you define the navigation property on only one of the types that participates in the relationship and not on both

## Mapping relationships

There are two ways of mapping relationships in EF Core:

- [Data Annotations](https://learn.microsoft.com/en-us/ef/ef6/modeling/code-first/data-annotations)
- [Fluent API Relationships](https://learn.microsoft.com/en-us/ef/ef6/modeling/code-first/fluent/relationships)

### One-to-Many

A one to many relationship is declared by a reference from parent to child:

```csharp {6}
public class Author
{
  public int Id { get; set; }
  public string FirstName { get; set; }
  public string LastName { get; set; }
  public List<Book> Books { get; set; }
}
```

The child doesn't need to reference the parent. So properties exist in the data model but not in the entity class. This is also called "Shadow Properties". But it can also be explicitly added in the code:

```csharp {5,6}
public class Book
{
  public int Id { get; set; }
  public string Title { get; set; }
  public Author Author { get; set; }
  public int AuthorId { get; set; }
}
```

Adding it explicitly allows us to navigate from the child object to the parent object. Here we also added the foreign key property `AuthorId`. The uses of having the foreign key property in the class are:

- It can be set without loading the parent entity
- It can be used for queries and updates without loading the parent entity

But usually it's not necessary to add the foreign key property in the class.
