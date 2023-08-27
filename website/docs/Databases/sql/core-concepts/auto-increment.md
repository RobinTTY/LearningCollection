---
id: auto-increment
title: Auto Increment
sidebar_position: 6
---

Many dialects of SQL support an `AUTO INCREMENT` feature. When inserting records into a table with `AUTO INCREMENT` enabled, the database will assign the next value automatically. In SQLite an integer `id` field that has the `PRIMARY KEY` constraint will auto increment by default! Different dialects of SQL will implement this feature differently.

## ID's

Depending on how your database is set up, you may be using traditional ids or you may be using [UUIDs](https://en.wikipedia.org/wiki/Universally_unique_identifier). SQL doesn't support auto incrementing a `uuid` so if your database is using them your server will have to handle the changing uuid's for each record.
