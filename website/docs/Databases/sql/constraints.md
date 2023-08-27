---
id: constraints
title: Constratints
sidebar_position: 6
---

A `constraint` is a rule we create on a database that enforces some specific behavior. For example, setting a `NOT NULL` constraint on a column ensures that the column will not accept `NULL` values.

If we try to insert a `NULL` value into a column with the `NOT NULL` constraint, the insert will fail with an error message. Constraints are extremely useful when we need to ensure that certain kinds of data exist within our database.

## Defining a NOT NULL constraint

The `NOT NULL` constraint can be added directly to the `CREATE TABLE` statement.

```sql
CREATE TABLE employees(
    id INTEGER PRIMARY KEY,
    name TEXT UNIQUE,
    title TEXT NOT NULL
);
```
