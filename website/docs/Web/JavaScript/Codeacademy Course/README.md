---
id: introductionToJavascript
title: Introduction to Javascript
---

## Keywords

Keywords are words that are built into the JavaScript language, so the computer will recognize them and treats them specially.

## The Console

In JavaScript, the `console` keyword refers to an object, a collection of data and actions, that we can use in our code.

One action, or method, that is built into the `console` object is the `.log()` method.

## Data Types

Data types are the classifications we give to the different kinds of data that we use in programming. In JavaScript, there are seven fundamental data types:

- Number (integers or floating point)
- String
- Boolean
- Null: intentional absence of a value
- Undefined: the absence of a value
- Symbol: unique identifiers, useful in more complex coding
- Object

The first 6 types are considererd primitive data types.

## Arithmetic Operators

An operator is a character that performs a task in our code. JavaScript has several built-in in arithmetic operators, that allow us to perform mathematical calculations on numbers. These include the following operators and their corresponding symbols:

- Add (+)
- Substract (-)
- Multiplay (\*)
- Divide (/)
- Remainder (%)

## Built-in Objects

In addition to console, there are other objects built into JavaScript. A list of them can be found [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects).

## Variables

In short, variables label and store data in memory. It is important to distinguish that variables are not values; they contain values and represent them with a name.

### var

There were a lot of changes introduced in the ES6 version of JavaScript in 2015. One of the biggest changes was two new keywords, `let` and `const`, to create, or declare, variables. Prior to the ES6, programmers could only use the `var` keyword to declare variables.

```Javascript
var myName = 'Arya';
console.log(myName);
// Output: Ary
```

`var`, short for variable, is a JavaScript keyword that creates, or declares, a new variable.

### let

The `let` keyword was introduced in ES6. The `let` keyword signals that the variable can be reassigned a different value. we can declare a variable without assigning the variable a value. In such a case, the variable will be automatically initialized with a value of `undefined`.

### const

The `const` keyword was also introduced in ES6, and is short for the word constant. A `const` variable cannot be reassigned because it is constant. If you try to reassign a const variable, you’ll get a `TypeError`. You need to initialize a `const` variable with a value.

### The difference between `var` and `let`

`let` allows you to declare variables that are limited to the scope of a block statement, or expression on which it is used, unlike the `var` keyword, which declares a variable globally, or locally to an entire function regardless of block scope. The other difference between `var` and `let` is that the latter is initialized to a value only when a parser evaluates it.

## String Interpolation

In the ES6 version of JavaScript, we can insert, or interpolate, variables into strings using template literals:

```Javascript
const myPet = 'armadillo';
console.log(`I own a pet ${myPet}.`);
// Output: I own a pet armadillo.
```

One of the biggest benefits to using template literals is the readability of the code.

## `typeof` operator

The `typeof` operator returns a string indicating the type of the unevaluated operand.

```Javascript
let newVariable = 'Playing around with typeof.';

console.log(typeof(newVariable));
// Output: string

newVariable = 1;

console.log(typeof(newVariable));
// Output: number
```

Note: The type of a variable is not fixed in JavaScript!

## Truthy and Falsy

In JavaScript, a _truthy_ value is a value that is considered true when encountered in a Boolean context. All values are truthy unless they are defined as falsy (i.e., except for false, 0, -0, 0n, "", null, undefined, and NaN).

A falsy (sometimes written falsey) value is a value that is considered false when encountered in a Boolean context.

Complete list of falsy values: [MDN](https://developer.mozilla.org/en-US/docs/Glossary/Falsy)

### Assignment via truthy/falsy values

In a boolean condition, JavaScript assigns the truthy value to a variable if you use the `||` operator in your assignment:

```Javascript
let defaultName = username || 'Stranger';
```
