---
id: fact-vs-dimension-tables
title: Fact vs Dimension Tables
sidebar_position: 6
---

In Data Warehouse Modeling, a star schema and a snowflake schema consists of Fact and Dimension tables.

## Fact Table

Facts, are the verb. An entry in a fact table marks a discrete event that happens to something from the dimension table. A product sale would be recorded in a fact table. The event of the sale would be noted by what product was sold, which employee sold it, and which customer bought it. Product, Employee, and Customer are all dimensions that describe the event, the sale.

In addition fact tables also typically have some kind of quantitative data. The quantity sold, the price per item, total price, and so on.

- Contains all the primary keys of the dimension and associated facts or measures (is a property on which calculations can be made) like quantity sold, amount sold and average sales

## Dimension Table

It may help to think of dimensions as things or objects. A thing such as a product can exist without ever being involved in a business event. A dimension is your noun. It is something that can exist independent of a business event, such as a sale. Products, employees, equipment, are all things that exist. A dimension either does something, or has something done to it.

Employees sell, customers buy. Employees and customers are examples of dimensions, they do. Products are sold, they are also dimensions as they have something done to them.

- Dimension tables provides descriptive information for all the measurements recorded in fact table
- Dimensions are relatively very small as comparison of fact table
- Commonly used dimensions are people, products, place and time

## Overview

![facts-vs-dimensions](https://i.stack.imgur.com/aB9k9.jpg)
