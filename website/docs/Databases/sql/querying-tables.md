---
id: querying-tables
title: Querying Tables
sidebar_position: 2
---

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
