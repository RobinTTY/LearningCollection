---
id: web-javascript-core_concepts-variables
title: Variables
sidebar_position: 1
---

Variables in JavaScript can be declared in two ways:

- `var` declares a function-scoped or globally-scoped variable, optionally initializing it to a value
- `let` declares a block-scoped local variable, optionally initializing it to a value

### `var` statement

The scope of a variable declared with var is its current execution context and closures thereof, which is either the enclosing function and functions declared within it, or, for variables declared outside any function, global. Duplicate variable declarations using var will not trigger an error, even in strict mode, and the variable will not lose its value, unless another assignment is performed.

The var keyword is not bad per se, but there is no need to use var in new projects.,

### `let` statement

let allows you to declare variables that are limited to the scope of a block statement, or expression on which it is used, unlike the var keyword, which declares a variable globally, or locally to an entire function regardless of block scope. The other difference between var and let is that the latter is initialized to a value only when a parser evaluates it (see below).
