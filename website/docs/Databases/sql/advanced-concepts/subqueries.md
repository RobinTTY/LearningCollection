---
id: subqueries
title: Subqueries
sidebar_position: 1
---

Subqueries (also known as inner queries or nested queries) are a tool for performing operations in multiple steps. For example, if you wanted to take the sums of several columns, then average all of those values, you'd need to do each aggregation in a distinct step.

Subqueries can be used in several places within a query, but it's easiest to start with the `FROM` statement. Here's an example of a basic subquery:

```sql
SELECT sub.*
  FROM (
        SELECT *
          FROM tutorial.sf_crime_incidents_2014_01
         WHERE day_of_week = 'Friday'
       ) sub
 WHERE sub.resolution = 'NONE'
```

Let's break down what happens when you run the above query. First, the database runs the "inner query" (the part between the parentheses). If you were to run this on its own, it would produce a result set like any other query. Once the inner query runs, the outer query will run using the results from the inner query as its underlying table:

```sql
SELECT sub.*
  FROM (
       <<results from inner query go here>>
       ) sub
 WHERE sub.resolution = 'NONE'
```

Subqueries are required to have names, which are added after parentheses the same way you would add an alias to a normal table. In this case, we've used the name "sub."

The above example doesn't really require a subquery. We solve a problem that could also have been solved by adding multiple conditions to the `WHERE` clause.

### Another example

Let's look at another example:

```sql
SELECT id, song_name, artist_id
FROM songs
WHERE artist_id IN (
    SELECT id
    FROM artists
    WHERE artist_name LIKE 'Rick%'
);
```

In this hypothetical database, the query above selects all of the song_ids, song_names, and artist_ids from the songs table that are written by artists whose name starts with "Rick". Notice that the subquery allows us to use information from a different table - in this case the artists table.

### Using subqueries to aggregate in multiple stages

What if you wanted to figure out how many incidents get reported on each day of the week? Better yet, what if you wanted to know how many incidents happen, on average, on a Friday in December? In January? There are two steps to this process: counting the number of incidents each day (inner query), then determining the monthly average (outer query):

```sql
SELECT LEFT(sub.date, 2) AS cleaned_month,
       sub.day_of_week,
       AVG(sub.incidents) AS average_incidents
  FROM (
        SELECT day_of_week,
               date,
               COUNT(incidnt_num) AS incidents
          FROM tutorial.sf_crime_incidents_2014_01
         GROUP BY 1,2
       ) sub
 GROUP BY 1,2
 ORDER BY 1,2
```
