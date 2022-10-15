---
id: types
title: Types
sidebar_position: 2
---

JavaScript is a [dynamic](https://en.wikipedia.org/wiki/Dynamic_programming_language) language with [dynamic types](https://en.wikipedia.org/wiki/Type_system#DYNAMIC). **Variables in JavaScript are not directly associated with any particular value type**, and any variable can be assigned (and re-assigned) values of all types:

```js
let foo = 42; // foo is now a number
foo = "bar"; // foo is now a string
foo = true; // foo is now a boolean
```

JavaScript is also a [weakly typed](https://en.wikipedia.org/wiki/Strong_and_weak_typing) language, which means it allows implicit type conversion when an operation involves mismatched types, instead of throwing type errors:

```js
const foo = 42;
const result = foo + "1";
console.log(result); // 421
```

## JavaScript types

The set of types in the JavaScript language consists of [primitive values](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#primitive_values) and [objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#objects):

- [Primitive values](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#primitive_values) (immutable [datum](https://www.oxfordlearnersdictionaries.com/definition/english/datum) represented directly at the lowest level of the language)
  - [Boolean type](#boolean-type)
  - [Null type](#null-type)
  - [Undefined type](#undefined-type)
  - [Number type](#number-type)
  - [BigInt type](#bigint-type)
  - [String type](#string-type)
  - [Symbol type](#symbol-type)
- [Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#objects) (collections of properties)

All types except objects define immutable values (that is, values which can't be changed). For example, Strings are immutable. We refer to values of these types as "primitive values".

### Boolean type

Boolean represents a logical entity and can have two values: `true` and `false`.

### Null type

The Null type has exactly one value: `null`. It represents the intentional absence of any object value. `null` expresses a lack of identification, indicating that a variable points to no object. In APIs, `null` is often retrieved in a place where an object can be expected but no object is relevant.

### Undefined type

A variable that has not been assigned a value is of type `undefined`. A method or statement also returns `undefined` if the variable that is being evaluated does not have an assigned value. A function returns `undefined` if a value was not returned.

### Number type

The `Number` type is a [double-precision 64-bit binary format IEEE 754 value](https://en.wikipedia.org/wiki/Double-precision_floating-point_format). Although a number often represents only its value, JavaScript provides [bitwise operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#bitwise_operators).

### BigInt type

The `BigInt` type is a numeric primitive in JavaScript that can represent integers with arbitrary precision. With BigInts, you can safely store and operate on large integers even beyond the safe integer limit for Numbers. BigInts cannot be operated on interchangeably with Numbers. Instead a TypeError will be thrown.

### String type

JavaScript's `String` type is used to represent textual data. It is a set of "elements" of 16-bit unsigned integer values. Each element in the String occupies a position in the String. The first element is at index 0, the next at index 1, and so on. JavaScript strings are immutable.

### Symbol type

A "symbol" represents a unique identifier. `Symbol` is a built-in object whose constructor returns a symbol [primitive](https://developer.mozilla.org/en-US/docs/Glossary/Primitive) — also called a Symbol value or just a Symbol — that's guaranteed to be unique.

Symbols are often used to add unique property keys to an object that won't collide with keys any other code might add to the object, and which are hidden from any mechanisms other code will typically use to access the object.

## `typeof` operator

We can easily recognize the data type using the `typeof` operator. There are two ways to write this operator:

```js
console.log(typeof(9)); // number
console.log(typeof 9); // number
```
