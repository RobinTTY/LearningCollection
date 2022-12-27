---
id: readonly
title: Readonly<Type>
sidebar_position: 2
---

Constructs a type with all properties of Type set to readonly, meaning the properties of the constructed type cannot be reassigned.

Example:

```ts
interface Todo {
  title: string;
}

const todo: Readonly<Todo> = {
  title: "Delete inactive users",
};

todo.title = "Hello"; // Cannot assign to 'title' because it is a read-only property.
```

This utility is useful for representing assignment expressions that will fail at runtime (i.e. when attempting to reassign properties of a [frozen object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze)).
