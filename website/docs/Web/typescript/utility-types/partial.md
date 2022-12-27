---
id: partial
title: Partial<Type>
sidebar_position: 1
---

Constructs a type with all properties of `Type` set to optional. This utility will return a type that represents all subsets of a given type.

We could for example us that to support an update operation for a `Todo` type:

```ts
type Todo {
  title: string;
  description: string;
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate };
}

const todo1 = {
  title: "organize desk",
  description: "clear clutter",
};

const todo2 = updateTodo(todo1, {
  description: "throw out trash",
});
```
