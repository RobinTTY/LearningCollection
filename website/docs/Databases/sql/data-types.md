---
id: data-types
title: Data Types
sidebar_position: 2
---

SQL as a language can support many different data types. However, the datatypes that your database management system (DBMS) supports will vary depending on the specific database you're using. We discuss some of the most basic datatypes here:

- `NULL` - Null value
- `INTEGER` - signed integer
- `REAL` - floating point value
- `TEXT` - text string stored using database encoding such as [UTF-8](https://en.wikipedia.org/wiki/UTF-8)
- `BLOB` - Short for [binary large object](https://en.wikipedia.org/wiki/Binary_large_object), and typically used for images, audio or other multimedia

Depending on the DBMS there are many more data types available.

## NULL Values

In SQL, a cell with a `NULL` value indicates that the value is missing. A `NULL` value is very different from a zero value. When creating a table we can define whether or not a field can or cannot be `NULL`, and that's a kind of constraint.
