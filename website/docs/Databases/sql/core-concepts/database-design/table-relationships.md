---
id: table-relationships
title: Table Relationships
sidebar_position: 3
---

Relational databases are powerful because of the relationships between the tables. These relationships help us to keep our databases clean and efficient. A relationship between tables assumes that one of these tables has a `foreign key` that references the `primary key` of another table.

## Types of relationships

There are 3 primary types of relationships in a relational database:

- One-to-one
- One-to-many
- Many-to-many

![relations](/img/docs/Databases/sql/relations.png)

### One-to-one

A one-to-one relationship most often manifests as a field or set of fields on a row in a table. For example, a user will have exactly one password.

### One-to-many

A one-to-many relationship is probably the most commonly used relationship. A one-to-many relationship occurs when a single record in one table is related to potentially many records in another table.

#### Examples

- A `customers` table and a `orders` table. Each customer has 0, 1, or many orders that they've placed
- A `users` table and a `transactions` table. Each user has 0, 1, or many transactions that taken part in.

### Many-to-many

A many-to-many relationship occurs when multiple records in one table can be related to multiple records in another table.

#### Examples

- A `products` table and a `suppliers` table - Products may have 0 to many suppliers, and suppliers can supply 0 to many products.
- A `classes` table and a `students` table - Students can take potentially many classes and classes can have many students enrolled.
