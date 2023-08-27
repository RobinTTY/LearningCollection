---
id: table-administration
title: Table Administration
sidebar_position: 7
---

## Creating Tables

The `CREATE TABLE` statement is used to create a new table in a database.

```sql
CREATE TABLE employees (id INTEGER, name TEXT, age INTEGER, is_manager BOOLEAN, salary INTEGER);
```

Each field name is followed by its datatype.
It's also acceptable and common to break up the `CREATE TABLE` statement with some whitespace like this:

```sql
CREATE TABLE employees(
    id INTEGER,
    name TEXT,
    age INTEGER,
    is_manager BOOLEAN,
    salary INTEGER
);
```

## Altering Tables

We often need to alter our database schema without deleting it and re-creating it. We can use use the `ALTER TABLE` statement to make changes in place without deleting any data. The following statements are valid for the SQLite Syntax.

### Renaming a table or column

```sql
ALTER TABLE employees
RENAME TO contractors;

ALTER TABLE contractors
RENAME COLUMN salary TO invoice;
```

### Adding or droping a column

```sql
ALTER TABLE contractors
ADD COLUMN job_title TEXT;

ALTER TABLE contractors
DROP COLUMN is_manager;
```

##
