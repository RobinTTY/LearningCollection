---
id: sql
title: SQL
sidebar_position: 1
---

Structured Query Language, or SQL, is the primary programming language used to manage and interact with relational databases. SQL can perform various operations such as creating, updating, reading, and deleting records within a database.

SQL is just a query language. You typically use it to interact with a specific database technology. For example:

- [SQLite](https://www.sqlite.org/index.html)
- [PostgreSQL](https://www.postgresql.org/)
- [MySQL](https://www.mysql.com/)
- [PostgreSQL](https://www.cockroachlabs.com/)
- [Oracle](https://www.oracle.com/database/)
- [Microsoft SQL Server](https://www.microsoft.com/en-us/sql-server/sql-server-downloads)
- etc...

Although many different databases use the SQL language, **most of them will have their own dialect**. It's critical to understand that not all databases are created equal. Just because one SQL-compatible database does things a certain way, doesn't mean every SQL-compatible database will follow those exact same patterns.

There are more differences, for instance SQLite is a serverless database management system (DBMS) that has the ability to run within applications, whereas PostgreSQL uses a Client-Server model and requires a server to be installed and listening on a network, similar to an HTTP server.

Some databases like SQLite have a loose type system where you can store any type of data in any column, whereas other databases like PostgreSQL have a strict type system where you must specify the type of data you want to store in a column.
