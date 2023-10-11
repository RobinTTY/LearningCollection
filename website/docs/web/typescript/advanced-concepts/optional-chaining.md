---
id: optional-chaining
title: Optional Chaining
sidebar_position: 5
---

optional chaining lets us write code where TypeScript can immediately stop running some expressions if we run into a `null` or `undefined`. We use the `?.` operator for optional property accesses. When we write code like:

```ts
let x = foo?.bar.baz();
```

this is a way of saying that when `foo` is defined, `foo.bar.baz()` will be computed; but when `foo` is `null` or `undefined`, stop what we’re doing and just return `undefined`.

More plainly, that code snippet is the same as writing the following:

```ts
let x = foo === null || foo === undefined ? undefined : foo.bar.baz();
```
