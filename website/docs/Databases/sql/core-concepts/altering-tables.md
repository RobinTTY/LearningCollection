---
id: altering-tables
title: Altering Tables
sidebar_position: 3
---

## `INSERT` statement

SQL we can add records to a table using an `INSERT INTO` statement. When using an `INSERT` statement we must first specify the table we are inserting the record into, followed by the fields within that table we want to add `VALUES` to.

```sql
INSERT INTO employees(id, name, title)
VALUES (1, 'Allan', 'Engineer');
```

When working with SQL within a software system, like a backend web application, you'll typically have access to a programming language. For example, a backend server written in Go can use string concatenation to dynamically create SQL statements, and that's usually how it's done:

```go
sqlQuery := fmt.Sprintf(`
INSERT INTO users(name, age, country_code)
VALUES ('%s', %v, %s);
`, user.Name, user.Age, user.CountryCode)
```

### SQL Injection

The example above is an oversimplification of what really happens when you access a database using Go code. In essence, it's correct. String interpolation is how production systems access databases. That said, it must be done carefully to not be a [security vulnerability](https://en.wikipedia.org/wiki/SQL_injection).

## `DELETE` statement

A `DELETE` statement removes a record from a table that match the `WHERE` clause. As an example:

```sql
DELETE from employees WHERE id = 251;
```

This `DELETE` statement removes all records from the `employees` table that have an `id` of `251`.

### Soft Deletes

Deleting data can be a dangerous operation. Once removed, data can be really hard if not impossible to restore! Besides using backups we can use a technique called "soft deletes".

A "soft delete" is when you don't actually delete data from your database, but instead just "mark" the data as deleted. For example, you might set a `deleted_at` date on the row you want to delete. Then, in your queries you ignore anything that has a `deleted_at` date set. The idea is that this allows your application to behave as if it's deleting data, but you can always go back and restore any data that's been removed.

It is important to keep in mind that this will introduce complexity to your application and other concerns such as those related to GDPR regulation about data deletion.

## `UPDATE` statement

The `UPDATE` statement in SQL allows us to update the fields of a record. We can even update many records depending on how we write the statement.

An `UPDATE` statement specifies the table that needs to be updated, followed by the fields and their new values by using the `SET` keyword. Lastly a `WHERE` clause indicates the record(s) to update.

```sql
UPDATE employees
SET job_title = 'Backend Engineer', salary = 150000
WHERE id = 251;
```
