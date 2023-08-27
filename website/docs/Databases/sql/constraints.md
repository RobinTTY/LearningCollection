---
id: constraints
title: Constratints
sidebar_position: 4
---

A `constraint` is a rule we create on a database that enforces some specific behavior. For example, setting a `NOT NULL` constraint on a column ensures that the column will not accept `NULL` values. Constraints are extremely useful when we need to ensure that certain kinds of data exist within our database.

## NOT NULL constraint

The `NOT NULL` constraint can be added directly to the `CREATE TABLE` statement. If we try to insert a `NULL` value into a column with the `NOT NULL` constraint, the insert will fail with an error message.

```sql {2}
CREATE TABLE employees(
    title TEXT NOT NULL
);
```

## PRIMARY KEY constraint

A key defines and protects relationships between tables. A [primary key](https://en.wikipedia.org/wiki/Primary_key) is a special column that uniquely identifies records within a table. Each table can have one, and only one primary key.

It's very common to have a column named `id` on each table in a database, and that `id` is the primary key for that table. No two rows in that table can share an `id`.

```sql {2}
CREATE TABLE employees(
    id INTEGER PRIMARY KEY,
    title TEXT NOT NULL
);
```

## FOREIGN KEY constraint

Foreign keys are what makes relational databases relational! Foreign keys define the relationships between tables. Simply put, a `FOREIGN KEY` is a field in one table that references another table's `PRIMARY KEY`.

Creating a `FOREIGN KEY` in SQLite for instance happens at table creation. After we define the table fields and constraints we add an additional constraint where we define the `FOREIGN KEY` and its `REFERENCES`.

```sql
CREATE TABLE departments (
    id INTEGER PRIMARY KEY,
    department_name TEXT NOT NULL
);

CREATE TABLE employees (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    department_id INTEGER,
    CONSTRAINT fk_departments
    FOREIGN KEY (department_id)
    REFERENCES departments(id)
);
```

In this example, an `employee` has a `department_id`. The `department_id` must be the same as the id field of a record from the `departments` table.
