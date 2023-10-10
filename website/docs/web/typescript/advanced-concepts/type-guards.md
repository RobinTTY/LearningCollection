---
id: type-guards
title: Type Guards
sidebar_position: 2
---

Type Guards allow you to narrow down the type of an object within a conditional block.

## `typeof` type guards

As we’ve seen, JavaScript supports a `typeof` operator which can give very basic information about the type of values we have at runtime. TypeScript expects this to return a certain set of strings ("string", "number", etc.). In TypeScript, checking against the value returned by `typeof` is a type guard. `typeof` is used for Typescript built-in types.

### Usage

```ts
var str = "Hello World";
console.log(typeof str); //string
```

## `instanceof` type guards

JavaScript has an operator for checking whether or not a value is an “instance” of another value. More specifically, in JavaScript `x instanceof Foo` checks whether the prototype chain of `x` contains `Foo.prototype`. `instanceof` is used for custom types and "complex" built-in types (e.g. RegExp, Array, Object).

### Usage

```ts {2}
function logValue(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toUTCString());
  } else {
    console.log(x.toUpperCase());
  }
}
```

### Examples

```ts
/regularexpression/ instanceof RegExp; // true
typeof /regularexpression/; // object

[] instanceof Array; // true
typeof []; //object

{} instanceof Object; // true
typeof {}; // object
```

## `in` type guards

JavaScript has an operator for determining if an object has a property with a name: the `in` operator. TypeScript takes this into account as a way to narrow down potential types.

### Usage

```ts
interface A {
  x: number;
}
interface B {
  y: string;
}

function doStuff(q: A | B) {
  if ("x" in q) {
    // q: A
  } else {
    // q: B
  }
}
```
