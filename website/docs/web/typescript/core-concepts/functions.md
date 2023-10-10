---
id: functions
title: Functions
sidebar_position: 3
---

Functions are the basic building block of any application, whether they’re local functions, imported from another module, or methods on a class. They’re also values, and just like other values, TypeScript has many ways to describe how functions can be called.

## Type Expressions

The simplest way to describe a function is with a function type expression. These types are syntactically similar to arrow functions:

```ts
function greeter(fn: (a: string) => void) {
  fn("Hello, World");
}

function printToConsole(s: string) {
  console.log(s);
}

greeter(printToConsole);
```

The syntax `(a: string) => void` means “a function with one parameter, named `a`, of type string, that doesn’t have a return value”. Just like with function declarations, if a parameter type isn’t specified, it’s implicitly `any`.

Of course, we can use a type alias to name a function type:

```ts
type GreetFunction = (a: string) => void;
function greeter(fn: GreetFunction) {
  // ...
}
```

## Rest Parameters

When a function has a rest parameter, it is treated as if it were an infinite series of optional parameters. This is unsound from a type system perspective, but from a runtime point of view the idea of an optional parameter is generally not well-enforced since passing `undefined` in that position is equivalent for most functions.

A rest parameter appears after all other parameters, and uses the `...` syntax:

```ts
function multiply(n: number, ...m: number[]) {
  return m.map((x) => n * x);
}
// 'a' gets value [10, 20, 30, 40]
const a = multiply(10, 1, 2, 3, 4);
```

In TypeScript, the type annotation on these parameters is implicitly `any[]` instead of `any`, and any type annotation given must be of the form `Array<T>` or `T[]`, or a tuple type.

With tuples it is possible to limit the number of elements in the rest parameter:

```ts
function multiply(n: number, ...m: [number, number, number]) {
  return m.map((x) => n * x);
}
// 'a' gets value [10, 20, 30]
const a = multiply(10, 1, 2, 3);
```

## Overloads

Some JavaScript functions can be called in a variety of argument counts and types. For example, you might write a function to produce a `Date` that takes either a timestamp (one argument) or a month/day/year specification (three arguments).

In TypeScript, we can specify a function that can be called in different ways by writing overload signatures:

```ts
function makeDate(timestamp: number): Date;
function makeDate(m: number, d: number, y: number): Date;
function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
  if (d !== undefined && y !== undefined) {
    return new Date(y, mOrTimestamp, d);
  } else {
    return new Date(mOrTimestamp);
  }
}
const d1 = makeDate(12345678);
const d2 = makeDate(5, 5, 5);
// Error if we do this:
const d3 = makeDate(1, 3);
```

In this example, we wrote two overloads: one accepting one argument, and another accepting three arguments. These first two signatures are called the overload signatures.

Then, we wrote a function implementation with a compatible signature (for all overload signature). Functions have an implementation signature, but this signature can’t be called directly. Even though we wrote a function with two optional parameters after the required one, it can’t be called with two parameters!