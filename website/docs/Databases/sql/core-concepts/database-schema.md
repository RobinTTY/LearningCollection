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

## Fact Tables and Dimension Tables

In Data Warehouse Modeling, a star schema and a snowflake schema consists of Fact and Dimension tables.

### Fact Table

Facts, are the verb. An entry in a fact table marks a discrete event that happens to something from the dimension table. A product sale would be recorded in a fact table. The event of the sale would be noted by what product was sold, which employee sold it, and which customer bought it. Product, Employee, and Customer are all dimensions that describe the event, the sale.

In addition fact tables also typically have some kind of quantitative data. The quantity sold, the price per item, total price, and so on.

- Contains all the primary keys of the dimension and associated facts or measures (is a property on which calculations can be made) like quantity sold, amount sold and average sales

### Dimension Table

It may help to think of dimensions as things or objects. A thing such as a product can exist without ever being involved in a business event. A dimension is your noun. It is something that can exist independent of a business event, such as a sale. Products, employees, equipment, are all things that exist. A dimension either does something, or has something done to it.

Employees sell, customers buy. Employees and customers are examples of dimensions, they do. Products are sold, they are also dimensions as they have something done to them.

- Dimension tables provides descriptive information for all the measurements recorded in fact table
- Dimensions are relatively very small as comparison of fact table
- Commonly used dimensions are people, products, place and time

![facts-vs-dimensions](https://i.stack.imgur.com/aB9k9.jpg)

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
