---
id: performance
title: Performance
sidebar_position: 6
---

## Indexes

An index is an in-memory structure that ensures that queries we run on a database are performant, that is to say, they run quickly. Most database indexes are just [binary trees](https://en.wikipedia.org/wiki/Binary_tree). The binary tree can be stored in ram as well as on disk, and it makes it easy to lookup the location of an entire row.

`PRIMARY KEY` columns are indexed by default, ensuring you can look up a row by its `id` very quickly. However, if you have other columns that you want to be able to do quick lookups on, you'll need to index them.
In terms of Big-O complexity, a binary tree index ensures that lookups are [O(log(n))](https://en.wikipedia.org/wiki/Big_O_notation).

### Creating an index

To create an index, you use the `CREATE INDEX` command:

```sql
CREATE INDEX index_name on table_name (column_name);
```

It's fairly common to name an index after the column it's created on with a suffix of `_idx`.

### Why not index everything?

While indexes make specific kinds of lookups much faster, they also add performance overhead - they can slow down a database in other ways. Think about it, if you index every column, you could have hundreds of binary trees in memory! That needlessly bloats the memory usage of your database. It also means that each time you insert a record, that record needs to be added to many trees - slowing down your insert speed.

The rule of thumb is simple:

> Add an index to columns you know you'll be doing frequent lookups on. Leave everything else un-indexed. You can always add indexes later.

### Multi-column indexes

Multi-column indexes are useful for the exact reason you might think - they speed up lookups that depend on multiple columns.

We can create such an index like so:

```sql
CREATE INDEX first_name_last_name_age_idx
ON users (first_name, last_name, age);
```

A multi-column index is sorted by the first column first, the second column next, and so forth. A lookup on only the first column in a multi-column index gets almost all of the performance improvements that it would get from its own single-column index. However, lookups on only the second or third column will have very degraded performance.

:::note
Unless you have specific reasons to do something special, only add multi-column indexes if you're doing frequent lookups on a specific combination of columns.
:::

## Denormalization

Denormalization is the process of adding redundant data to a database to speed up queries. It's a tradeoff - you're adding more data to your database, but you're making it easier to query that data.

Storing duplicate information can drastically speed up an application that needs to look it up in different ways. For example, if you store a user's country information right on their user record, no expensive join is required to load their profile page. That said, denormalizing data comes at a risk. Denormalizing a database incurs a large risk of inaccurate and buggy data.
