---
id: functions
title: Functions
sidebar_position: 3
---

SQL has many built-in functions for performing calculations on data. The names of these functions are not standardized across different dialects of SQL.

## Aggregate functions

An aggregate function performs a calculation on a set of values, and returns a single value.

### `AVG` function

The `AVG()` function returns the average value of a numeric column.

```sql
SELECT AVG(Price)
FROM Products;
```

### `COUNT` function

The `COUNT()` function returns the number of rows that matches a specified criterion.

```sql
SELECT COUNT(*)
FROM employees;
```

The `*` in this case refers to a column name. We don't care about the count of a specific column - we want to know the number of total records so we can use the wildcard `(*)`.

### `SUM` function

The `SUM()` function returns the total sum of a numeric column.

```sql
SELECT SUM(Quantity)
FROM OrderDetails;
```

### `MIN` function

The `MIN()` function returns the smallest value of the selected column.

```sql
SELECT MIN(Price)
FROM Products;
```

### `MAX` function

The `MAX()` function returns the largest value of the selected column.

```sql
SELECT MAX(Price)
FROM Products;
```

## Window Functions

A window function performs a calculation across a set of table rows that are somehow related to the current row. This is comparable to the type of calculation that can be done with an aggregate function.

But unlike regular aggregate functions, use of a window function does not cause rows to become grouped into a single output row — the rows retain their separate identities. Behind the scenes, the window function is able to access more than just the current row of the query result.

The most practical example of this is a running total:

```sql
SELECT duration_seconds,
SUM(duration_seconds) OVER (ORDER BY start_time) AS running_total
FROM films;
```

## Other Functions

### `ROUND` function

The ROUND() function rounds a number to a specified number of decimal places.

```sql
SELECT ROUND(235.415, 2) AS RoundValue;
```

This will return `235.42`.
