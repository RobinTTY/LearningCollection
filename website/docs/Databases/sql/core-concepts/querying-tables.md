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

### `SELECT DISTINCT` statement

The `SELECT DISTINCT` statement allows us to retrieve unique values in a column. For example, if we want to get a list of all the unique cities in our `users` table:

```sql
SELECT DISTINCT city FROM users;
```

## `WHERE` clause

We often want to look at specific user data within that table without retrieving all the other records in the table. SQL accepts a `WHERE` clause within a query that allows us to filter the data based on a condition:

```sql
SELECT email FROM users WHERE name = 'John';
```

This will return all the emails of users named John.

### Equality operators

SQL has a few different equality operators:

- `=`: equal to
- `<>` or `!=`: not equal to
- `>`: greater than
- `<`: less than
- `>=`: greater than or equal to
- `<=`: less than or equal to

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

### `BETWEEN` operator

The `BETWEEN` operator allows us to filter data within a range. For example, to get all users with an ID between 1 and 10:

```sql
SELECT name FROM users WHERE id BETWEEN 1 AND 10;
```

### `AND` operator

The `WHERE` clause can contain one or many `AND` operators. The AND operator is used to filter records based on more than one condition, like if you want to return all customers from Spain that starts with the letter 'G':

```sql
SELECT * FROM customers
WHERE country='Spain'
AND customerName LIKE 'G%';
```

### `OR` operator

The `WHERE` clause can contain one or many `OR` operators. The `OR` operator is used to filter records based on more than one condition, like if you want to return all customers from Spain or Mexico:

```sql
SELECT * FROM customers
WHERE country='Spain'
OR country='Mexico';
```

### `IN` operator

The `IN` operator allows you to specify multiple values in a `WHERE` clause. The `IN` operator is a shorthand for multiple `OR` conditions.

```sql
SELECT * FROM customers
WHERE country IN ('Spain', 'Mexico');
```

### `LIKE` operator

The `LIKE` operator is used in a `WHERE` clause to search for a specified pattern in a column. There are two wildcards often used in conjunction with the LIKE operator:

- `%`: The percent sign represents zero, one, or multiple characters
- `_`: The underscore represents a single character

For example, to get all users whose name starts with the letter 'J':

```sql
SELECT * FROM users
WHERE name LIKE 'J%';
```
