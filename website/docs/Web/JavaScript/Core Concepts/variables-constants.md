---
id: variables-and-constants
title: Variables and Constants
sidebar_position: 1
---

Variables in JavaScript can be declared in two ways:

- `var` declares a function-scoped or globally-scoped variable, optionally initializing it to a value
- `let` declares a block-scoped local variable, optionally initializing it to a value

Constants are declared via the keyword `const`.

## `var` keyword

The scope of a variable declared with `var` is its current execution context and closures thereof, which is either the enclosing function and functions declared within it, or, for variables declared outside any function, global. Duplicate variable declarations using `var` will not trigger an error, even in strict mode, and the variable will not lose its value, unless another assignment is performed.

The var keyword is not bad per se, but there is no need to use var in new projects.

## `let` keyword

`let` allows you to declare variables that are limited to the scope of a block statement, or expression on which it is used, unlike the var keyword, which declares a variable globally, or locally to an entire function regardless of block scope. The other difference between var and `let` is that the latter is initialized to a value only when a parser evaluates it (see below).

## `const` keyword

`const` declares a constant whose value you want to forbid overwriting. Constants are block-scoped, much like variables declared using the `let` keyword. If a constant is an object or array its properties or items can still be updated or removed.

## Variables without a keyword

Variables can also be declared without a keyword:

```js
age = 21;
```

When this is done, the variable is implicitly declared [globally](https://developer.mozilla.org/en-US/docs/Glossary/Global_variable). This is bad practice and should be avoided.
