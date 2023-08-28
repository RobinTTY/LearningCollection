---
id: database-schema
title: Database Schema
sidebar_position: 2
---

A database's [schema](https://www.ibm.com/topics/database-schema) describes how data is organized within it. Data types, table names, field names, constraints, and the relationships between all of those entities are part of a database's schema.

When designing a database schema there typically isn't a "correct" solution. We do our best to choose a sane set of tables, fields, constraints, etc that will accomplish our project's goals. Like many things in programming, different schema designs come with different tradeoffs.

## Manipulating a database schema

### Creating Tables

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

### Altering Tables

We often need to alter our database schema without deleting it and re-creating it. We can use use the `ALTER TABLE` statement to make changes in place without deleting any data. The following statements are valid for the SQLite Syntax.

#### Renaming a table or column

```sql
ALTER TABLE employees
RENAME TO contractors;

ALTER TABLE contractors
RENAME COLUMN salary TO invoice;
```

#### Adding or droping a column

```sql
ALTER TABLE contractors
ADD COLUMN job_title TEXT;

ALTER TABLE contractors
DROP COLUMN is_manager;
```

## Constraints

A `constraint` is a rule we create on a database that enforces some specific behavior. For example, setting a `NOT NULL` constraint on a column ensures that the column will not accept `NULL` values. Constraints are extremely useful when we need to ensure that certain kinds of data exist within our database.

### NOT NULL constraint

The `NOT NULL` constraint can be added directly to the `CREATE TABLE` statement. If we try to insert a `NULL` value into a column with the `NOT NULL` constraint, the insert will fail with an error message.

```sql {2}
CREATE TABLE employees(
    title TEXT NOT NULL
);
```

### PRIMARY KEY constraint

A key defines and protects relationships between tables. A [primary key](https://en.wikipedia.org/wiki/Primary_key) is a special column that uniquely identifies records within a table. Each table can have one, and only one primary key.

It's very common to have a column named `id` on each table in a database, and that `id` is the primary key for that table. No two rows in that table can share an `id`.

```sql {2}
CREATE TABLE employees(
    id INTEGER PRIMARY KEY,
    title TEXT NOT NULL
);
```

### FOREIGN KEY constraint

Foreign keys are what makes relational databases relational! Foreign keys define the relationships between tables. Simply put, a `FOREIGN KEY` is a field in one table that references another table's `PRIMARY KEY`.

Creating a `FOREIGN KEY` in SQLite for instance happens at table creation. After we define the table fields and constraints we add an additional constraint where we define the `FOREIGN KEY` and its `REFERENCES`.

```sql
CREATE TABLE departments (
    id INTEGER PRIMARY KEY,
    department_name TEXT NOT NULL
);

CREATE TABLE employees (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    department_id INTEGER,
    CONSTRAINT fk_departments
    FOREIGN KEY (department_id)
    REFERENCES departments(id)
);
```

In this example, an `employee` has a `department_id`. The `department_id` must be the same as the id field of a record from the `departments` table.

### Auto Increment

Many dialects of SQL support an `AUTO INCREMENT` feature. When inserting records into a table with `AUTO INCREMENT` enabled, the database will assign the next value automatically. In SQLite an integer `id` field that has the `PRIMARY KEY` constraint will auto increment by default. Different dialects of SQL will implement this feature differently.

#### ID's

Depending on how your database is set up, you may be using traditional ids or you may be using [UUIDs](https://en.wikipedia.org/wiki/Universally_unique_identifier). SQL doesn't support auto incrementing a `uuid` so if your database is using them your server will have to handle the changing uuid's for each record.

## Schema Migrations

In software engineering, a schema migration (also database migration, database change management) refers to the management of version-controlled, incremental and reversible changes to relational database schemas. A schema migration is performed on a database whenever it is necessary to update or revert that database's schema to some newer or older version.

Migrations are performed programmatically by using a schema migration tool. When invoked with a specified desired schema version, the tool automates the successive application or reversal of an appropriate sequence of schema changes until it is brought to the desired state.

Most schema migration tools aim to minimize the impact of schema changes on any existing data in the database. Despite this, preservation of data in general is not guaranteed because schema changes such as the deletion of a database column can destroy data (i.e. all values stored under that column for all rows in that table are deleted). Instead, the tools help to preserve the meaning of the data or to reorganize existing data to meet new requirements. Since meaning of the data often cannot be encoded, the configuration of the tools usually needs manual intervention.

### Risks and benefits

Schema migration allows for fixing mistakes and adapting the data as requirements change. They are an essential part of software evolution, especially in agile environments (see below).

Applying a schema migration to a production database is always a risk. Development and test databases tend to be smaller and cleaner. The data in them is better understood or, if everything else fails, the amount of data is small enough for a human to process. Production databases are usually huge, old and full of surprises. The surprises can come from many sources:

- Corrupt data that was written by old versions of the software and not cleaned properly
- Implied dependencies in the data which no one knows about anymore
- People directly changing the database without using the designated tools
- Bugs in the schema migration tools
- Mistakes in assumptions how data should be migrated

For these reasons, the migration process needs a high level of discipline, thorough testing and a sound backup strategy.

Schema migrations may take a long time to complete and for systems that operate 24/7 it is important to be able to do [database migrations without downtime](https://www.aviransplace.com/post/safe-database-migration-pattern-without-downtime-1). Usually it is done with the help of feature flags and continuous delivery.
