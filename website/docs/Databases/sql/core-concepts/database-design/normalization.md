---
id: normalization
title: Normalization
sidebar_position: 4
---

Normalization is the process of organizing data in a database. It includes creating tables and establishing relationships between those tables according to rules designed both to protect the data and to make the database more flexible by eliminating redundancy and inconsistent dependency.

Normalized tables are:

- Easier to understand
- Easier to enhance and extend
- Protected from:
  - Insertion anomalies
  - Update anomalies
  - Deletion anomalies

## Normal Forms

There are a few rules for database normalization. Each rule is called a "normal form." If the first rule is observed, the database is said to be in "first normal form." If the first three rules are observed, the database is considered to be in "third normal form." Although other levels of normalization are possible, third normal form is considered the highest level necessary for most applications.

As with many formal rules and specifications, real world scenarios don't always allow for perfect compliance. In general, normalization requires additional tables.

Following are the various types of Normal forms:

![normalization](/img/docs/Databases/sql/normalization.png)

### First Normal Form (1NF)

The rules for first normal form are:

- Using row order to convey information is not permitted
- Mixing data types within the same column is not permitted
- Having a table without a primary key is not permitted
- Repeating groups are not permitted (e.g. one column containing all items a player has in the inventory)

### Second Normal Form (2NF)

For the second normal form to be satisfied, a table must be in 1NF and **each non-key attribute must depend on the entire primary key**.

- Example 1: { Player_ID, Item_Type } -> { Item_Quantity }
  - The item quantity depends on both the player ID and the item type, so this is a valid dependency
- Example 2: { Player_ID, Item_Type } -> { Player_Rating }
  - The player rating only depends on the player ID, not the item type - so this is not a valid dependency

#### Example

![2NF](/img/docs/Databases/sql/2NF.png)

### Third Normal Form (3NF)

For the third normal form to be satisfied, a table must be in 2NF and **every non-key attribute must depend on the primary key, the whole key, and nothing but the key**. This means there can't be any transitive dependencies. So there shouldn't exist any dependencies like:

- { Player_ID } -> { Player_Skill_Level } -> { Player_Rating }

#### Boyce-Codd Normal Form

A slightly stronger version of 3NF is called Boyce-Codd Normal Form (BCNF). For the BCNF to be satisfied, every attribute in a table should depend on the key, the whole key, and nothing but the key. In real-world applications, it is really rare to ever encounter a table that is in 3NF but not BCNF (only tables with multiple overlapping candidate keys can be in 3NF and not BCNF).

#### Example

![3NF](/img/docs/Databases/sql/3NF.png)

### Fourth Normal Form (4NF)

For the fourth normal form to be satisfied, a table must be in 3NF and **multivalued dependencies in the table must be multivalued dependencies on the key**.

#### Example

![4NF](/img/docs/Databases/sql/4NF.png)

### Fifth Normal Form (5NF)

For the fifth normal form to be satisfied, a table must be in 4NF and **the table can't be describable as the logical result of joining some other tables together**.

#### Example

This design can be joined together from the other tables:

![5NF_1](/img/docs/Databases/sql/5NF_1.png)

This design can't be joined together from the other tables and is therefore in 5NF:

![5NF_2](/img/docs/Databases/sql/5NF_2.png)
