---
id: querying-tables
title: Querying Tables
sidebar_position: 3
---

## `SELECT` statement

A `SELECT` statement is the most common operation in SQL - often called a "query". `SELECT` retrieves data from one or more tables. Standard `SELECT` statements do not alter the state of the database.

### Selecting a single field

A `SELECT` statement begins with the keyword `SELECT` followed by the fields you want to retrieve:

```sql
SELECT id from users;
```

After specifying fields, you need to indicate which table you want to pull the records from using the `from` statement followed by the name of the table.

### Selecting multiple fields

To select multiple fields, we separate them with a comma:

```sql
SELECT id, name from users;
```

### Selecting all fields

To select all fields, we use the `*` wildcard:

```sql
SELECT * from users;
```

### `AS` keyword

The `AS` keyword allows us to "alias" a piece of data in our query. The alias only exists for the duration of the query.

```sql
SELECT employee_id AS id, employee_name AS name
FROM employees;
```

## `WHERE` clause

We often want to look at specific user data within that table without retrieving all the other records in the table. SQL accepts a `WHERE` clause within a query that allows us to filter the data based on a condition:

```sql
SELECT email FROM users WHERE name = 'John';
```

This will return all the emails of users named John.

### Checking for NULL values

You can use a `WHERE` clause to filter values by whether or not they're `NULL`.

To get values that are `NULL`:

```sql
SELECT name FROM users WHERE first_name IS NULL;
```

To get values that are **not** `NULL`:

```sql
SELECT name FROM users WHERE first_name IS NOT NULL;
```
