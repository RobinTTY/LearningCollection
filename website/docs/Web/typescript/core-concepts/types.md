---
id: types
title: Types
sidebar_position: 1
---

Static types systems describe the shapes and behaviors of what our values will be when we run our programs. A type-checker like TypeScript uses that information and tells us when things might be going off the rails.

While we could write a function in JavaScript that looks like this:

```js title=add.js
function add(num1, num2) {
  return num1 + num2;
}
```

With Typescript we can add parameter type annotations so that we immediately get an error if we supply the function with the wrong argument type:

```ts title=add.ts
function add(num1: number, num2: number) {
  return num1 + num2;
}
```

## Primitive Types

JavaScript has three very commonly used primitives: `string`, `number`, and `boolean`. Each has a corresponding type in TypeScript.

:::note
The type names String, Number, and Boolean (starting with capital letters) are legal, but refer to some special built-in types that will very rarely appear in your code. Always use string, number, or boolean for types.
:::

## Object Types

Apart from primitives, the most common sort of type you’ll encounter is an object type. This refers to any JavaScript value with properties, which is almost all of them! To define an object type, we simply list its properties and their types:

```ts {2}
// The parameter's type annotation is an object type
function printCoord(pt: { x: number; y: number }) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 3, y: 7 });
```

Here, we annotated the parameter with a type with two properties - `x` and `y` - which are both of type number. You can use `,` or `;` to separate the properties, and the last separator is optional either way.

## Arrays

To specify the type of an array like `[1, 2, 3]`, you can use the syntax `number[];`. You may also see this written as `Array<number>`, which means the same thing.

## any

TypeScript also has a special type, `any`, that you can use whenever you don’t want a particular value to cause typechecking errors. When a value is of type any, you can access any properties of it (which will in turn be of type `any`), call it like a function, assign it to (or from) a value of any type, or pretty much anything else that’s syntactically legal:

```ts
let obj: any = { x: 0 };
// None of the following lines of code will throw compiler errors.
// Using `any` disables all further type checking, and it is assumed
// you know the environment better than TypeScript.
obj.foo();
obj();
obj.bar = 100;
obj = "hello";
const n: number = obj;
```

The any type is useful when you don’t want to write out a long type just to convince TypeScript that a particular line of code is okay. When you don’t specify a type, and TypeScript can’t infer it from context, the compiler will typically default to `any`.

You usually want to avoid this, though, because any isn’t type-checked. Use the compiler flag [`noImplicitAny`](https://www.typescriptlang.org/tsconfig#noImplicitAny) to flag any implicit any as an error.

## Tuple Types

A tuple type is another sort of `Array` type that knows exactly how many elements it contains, and exactly which types it contains at specific positions.

```ts
type StringNumberPair = [string, number];
```

Here, `StringNumberPair` is a tuple type of `string` and `number`. To the type system, `StringNumberPair` describes arrays whose 0 index contains a `string` and whose 1 index contains a `number`.

## Union Types

A union type is a type formed from two or more other types, representing values that may be any one of those types. We refer to each of these types as the union's members.

Example of a function that can operate on strings or numbers:

```ts
function printId(id: number | string) {
  console.log("Your ID is: " + id);
}
// OK
printId(101);
// OK
printId("202");
```

## Literal Types

In addition to the general types string and number, we can refer to specific strings and numbers in type positions. This is reflected in how TypeScript creates types for literals:

![type-literals-02](/img/docs/Web/typescript/type-literals-02.png)

It’s not much use to have a variable that can only have one value! But by combining literals into unions, you can express a much more useful concept - for example, functions that only accept a certain set of known values:

```ts
function printText(s: string, alignment: "left" | "right" | "center") {
  // ...
}
printText("Hello, world", "left");
// Argument of type '"centre"' is not assignable to parameter of type '"left" | "right" | "center"'
printText("G'day, mate", "centre");
```

Numeric literal types work the same way:

```ts
function compare(a: string, b: string): -1 | 0 | 1 {
  return a === b ? 0 : a > b ? 1 : -1;
}
```
