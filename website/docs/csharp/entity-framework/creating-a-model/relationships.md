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
