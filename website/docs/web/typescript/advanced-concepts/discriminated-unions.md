---
id: discriminated-unions
title: Discriminated Unions
sidebar_position: 3
---

If you have a class with a literal member (e.g. string literal) then you can use that property to discriminate between union members.

As an example consider the union of a `Square` and `Rectangle`, here we have a member `kind` that exists on both union members and is of a particular literal type:

```ts
interface Square {
  kind: "square";
  size: number;
}

interface Rectangle {
  kind: "rectangle";
  width: number;
  height: number;
}

type Shape = Square | Rectangle;
```

If you use a type guard style check (==, ===, !=, !==) or switch on the discriminant property (here `kind`) TypeScript will realize that the object must be of the type that has that specific literal and do a type narrowing for you:

```ts
function area(s: Shape) {
  if (s.kind === "square") {
    // Now TypeScript *knows* that `s` must be a square
    return s.size * s.size;
  } else {
    // Wasn't a square? So TypeScript will figure out that it must be a Rectangle
    return s.width * s.height;
  }
}
```
