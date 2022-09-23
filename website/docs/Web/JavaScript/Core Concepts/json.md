---
id: json
title: JSON
sidebar_position: 3
---

**JSON** (or **JavaScript Object Notation**) is a text-based format for storing and transmitting structured data. It comes from the JavaScript language, but it is still considered to be language-independent: it works with almost any programming language. With JSON's lightweight syntax, you can easily store and send to other apps everything from numbers and strings to arrays and objects. You can also create more complex data structures by linking arrays to each other.

## Basic syntax and structure

JSON text can be built on one of two structures:

- a collection of key:value pairs (associative array)
- an orderly set of values (array or list)

### Example - JSON object

```json
{
  "name": "John",
  "age": 30,
  "city": "New York"
}
```

Keys in an object are always strings, but values can be any of seven types of values, including another object or array.

### Example - Arrays

```js
["night", "street", false, [345, 23, 8, "juice"], "fruit"];
```

## Nested objects

JSON is a highly flexible format. You can nest objects inside other objects as properties:

```json
{
  "persons": [
    {
      "firstName": "Whitney",
      "lastName": "Byrd",
      "age": 20
    },
    {
      "firstName": "Eugene",
      "lastName": "Lang",
      "age": 26
    },
    {
      "firstName": "Sophie",
      "lastName": "Goodwin",
      "age": 34
    }
  ]
}
```

If objects and arrays contain other objects or arrays, the data has a tree-like structure. The nested objects are fully independent and may have different properties:

```json
{
  "persons": [
    {
      "firstName": "Whitney",
      "age": 20
    },
    {
      "firstName": "Eugene",
      "lastName": "Lang"
    }
  ]
}
```

But in practice, such objects often look similar.

## Advantages of JSON

JSON is widely spread for data exchange on the Internet because of its strong advantages:

- compactness
- flexibility
- high readability, even for people far from programming
- most programming languages have functions and libraries for reading and creating JSON structures

The JSON is a general format to pass structured data through the network because after you serialize data to JSON, you can deserialize it back without losing any information. The main advantage of JSON comparing to plain text is the ability to describe relations between objects via nesting and key-value pairs. So, it's high chances that the sites you're often visiting use JSON too. Other popular applications of JSON are data storage and configuration files for other programs.
