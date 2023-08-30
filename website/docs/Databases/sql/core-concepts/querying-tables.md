---
id: querying-tables
title: Querying Tables
sidebar_position: 2
---

## `SELECT` statement

A `SELECT` statement is the most common operation in SQL - often called a "query". `SELECT` retrieves data from one or more tables. Standard `SELECT` statements do not alter the state of the database.

#### Selecting a single field

A `SELECT` statement begins with the keyword `SELECT` followed by the fields you want to retrieve:

```sql
SELECT id from users;
```

After specifying fields, you need to indicate which table you want to pull the records from using the `from` statement followed by the name of the table.

#### Selecting multiple fields

To select multiple fields, we separate them with a comma:

```sql
SELECT id, name from users;
```

#### Selecting all fields

To select all fields, we use the `*` wildcard:

```sql
SELECT * from users;
```

### `SELECT DISTINCT` statement

The `SELECT DISTINCT` statement allows us to retrieve unique values in a column. For example, if we want to get a list of all the unique cities in our `users` table:

```sql
SELECT DISTINCT city FROM users;
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

## `LIMIT` clause

The `LIMIT` keyword can be used at the end of a select statement to reduce the number of records returned.

```sql
SELECT * FROM products
WHERE product_name LIKE '%berry%'
LIMIT 50;
```

The query above retrieves all the records from the `products` table where the name contains the word berry. The `LIMIT` statement only allows the database to return up to 50 records matching the query.

## `ORDER BY` clause

The `ORDER BY` clause is used to sort the result-set in ascending or descending order. By default `ORDER BY` sorts the records in ascending order.

```sql
SELECT * FROM Customers
ORDER BY Country DESC;
```

## `GROUP BY` clause

The `GROUP BY` statement groups rows that have the same values into summary rows, like "find the number of customers in each country".

The `GROUP BY` statement is often used with [aggregate functions](./functions#aggregate-functions) (`COUNT()`, `MAX()`, `MIN()`, `SUM()`, `AVG()`) to group the result-set by one or more columns.

```sql
SELECT COUNT(CustomerID), Country
FROM Customers
GROUP BY Country;
```

## `HAVING` clause

The `HAVING` clause was added to SQL because the `WHERE` keyword could not be used with aggregate functions.
The following SQL statement lists the number of customers in each country. Only include countries with more than 5 customers:

```sql
SELECT COUNT(CustomerID), Country
FROM Customers
GROUP BY Country
HAVING COUNT(CustomerID) > 5;
```

## `JOIN` clause

Joins allow us to make use of the relationships we have set up between our tables. In short, joins allow us to query multiple tables at the same time. There are different types of joins, the most common are `INNER JOIN`, `FULL JOIN`, `LEFT JOIN`, and `RIGHT JOIN`.

![joins](/img/docs/Databases/sql/joins.png)

### `ON` clause

In order to perform a join, we need to tell the database which fields should be "matched up". The `ON` clause is used to specify these columns to join.

### Namespacing on tables

When working with multiple tables, you can specify which table a field exists on using a `.`. For example:

```sql
SELECT students.name, classes.name
FROM students
INNER JOIN classes
ON classes.class_id = students.class_id;
```

The above query returns the `name` field from the `students` table and the `name` field from the `classes` table. You could also define an alias for each table like this:

```sql
SELECT s.name, c.name
FROM students AS s
INNER JOIN classes AS c
ON c.class_id = s.class_id;
```

### `INNER JOIN`

The simplest and most common type of join in SQL is the `INNER JOIN`. By default, a `JOIN` command is an `INNER JOIN`. An `INNER JOIN` returns all of the records in `left_table` that have matching records in `right_table` as demonstrated by the following Venn diagram.

```sql
SELECT *
FROM employees
INNER JOIN departments
ON employees.department_id = departments.id;
```

The query above returns all the fields from both tables. The `INNER` keyword doesn't have anything to do with the number of columns returned - it only affects the number of rows returned.

### `LEFT JOIN`

A `LEFT JOIN` will return every record from `left_table` regardless of whether or not any of those records have a match in `right_table`. A left join will also return any matching records from `right_table`.

```sql
SELECT employees.name, departments.name
FROM employees
LEFT JOIN departments
ON employees.department_id = departments.id;
```

### `RIGHT JOIN`

A `RIGHT JOIN` is, as you may expect, the opposite of a `LEFT JOIN`. It returns all records from `right_table` regardless of matches, and all matching records between the two tables.

```sql
SELECT employees.name, departments.name
FROM employees
RIGHT JOIN departments
ON employees.department_id = departments.id;
```

### `FULL JOIN`

A `FULL JOIN` returns all records from both tables, regardless of whether or not they have a match in the other table.

```sql
SELECT employees.name, departments.name
FROM employees
FULL JOIN departments
ON employees.department_id = departments.id;
```

### Multiple joins

To incorporate data from more than two tables, you can utilize multiple joins to execute more complex queries:

```sql
SELECT *
FROM employees
LEFT JOIN departments
ON employees.department_id = departments.id
INNER JOIN regions
ON departments.region_id = regions.id
```

This will return all the fields from the `employees` table, the `departments` table, and the `regions` table. The `LEFT JOIN` will return all records from the `employees` table, the `INNER JOIN` will return all records from the `departments` table that have a match in the `regions` table.
