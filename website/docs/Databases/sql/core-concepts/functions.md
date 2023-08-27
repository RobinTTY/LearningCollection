---
id: functions
title: Functions
sidebar_position: 6
---

SQL has many built-in functions for performing calculations on data. The names of these functions are not standardized across different dialects of SQL.

## `COUNT` function

The `COUNT()` function returns the number of rows that matches a specified criterion. Here's an example in SQLite:

```sql
SELECT count(*) from employees;
```

The `*` in this case refers to a column name. We don't care about the count of a specific column - we want to know the number of total records so we can use the wildcard `(*)`.
