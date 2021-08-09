---
id: javascriptRefresher
title: Javascript Refresher
---

## let & const

```JavaScript
// use let for values that are variable
let a = 1;
// use const for values that are constant
const b = 1;
```

Note: Variables declared with the `var` keyword are scoped to the immediate function body (hence the function scope) while `let` variables are scoped to the immediate enclosing block denoted by { } (hence the block scope).

### Example let vs var

```JavaScript
function run() {
  var foo = "Foo";
  let bar = "Bar";

  console.log(foo, bar); // Foo Bar

  {
    var moo = "Mooo"
    let baz = "Bazz";
    console.log(moo, baz); // Mooo Bazz
  }

  console.log(moo); // Mooo => initialized with var
  console.log(baz); // ReferenceError => initialized with let
}

run();
```

## Arrow functions

Arrow functions are defined using the '=>' syntax. They are syntactic sugar for the function expression and are more concise. They do have some [limitations](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) though.

### Example

```JavaScript
// traditional function declaration
function printMyName(name) {
    console.log(name);
}

printMyName('Robin');

// arrow function
const printMyName = (name) => {
    console.log(name);
}

printMyName('Robin');

// Special case of only returning (kind of like C#)
const multiply = (number) => number * 2;

console.log(multiply(2));
```

## Exports and Imports (Modules)

A module is essentially a reusable piece of JavaScript which exports specific objects, making them available for other modules to require in their programs.

### Example

```JavaScript
// person.js
const person = {
    name: 'Robin'
}
export default Robin

// utility.js
export const clean = () => { ... }
export const baseDate = 10;

// app.js
import person from './person';  // don't need curly braces since it's the default export
import prs from './person';     // the name we import it as doesn't matter

import { baseData } from './utility.js';        // we need to explicitly target which export we want since we have no default
import { clean as cln } from './utility.js';    // we can also assign an alias here
import * as bundled from './utility.js';        // we can also use the * operator to import everything, access via bundled.clean() for instance
```

If a module defines a default export then you can import that default export by omitting the curly braces.

## Classes

Classes are a template for creating objects. Classes in JS are built on prototypes but also have some syntax and semantics that are not shared with ES5 class-like semantics.

### Example

```JavaScript
// with EcmaScript 6
class Human {
    constructor(){
        this.gender = 'male';
    }

    printGender() {
        console.log(this.gender);
    }
}

class Person extends Human {
    constructor(){
        // super must always be called if a class is being extended
        super();
        this.name = 'Robin';
    }

    printMyName(){
        console.log(this.name);
    }
}

const person = new Person();
person.printMyName();
person.printGender();

// with EcmaScript 7 (proposal) - https://github.com/tc39/proposal-class-fields
class Human {
    // no more 'this' keyword here
    gender = 'male';

    printGender = () => {
        console.log(this.gender);
    }
}

class Person extends Human {
    name = 'Robin';

    printMyName = () => {
        console.log(this.name);
    }
}

const person = new Person();
person.printMyName();
person.printGender();
```

## Spread Operator & Rest Parameters

### The Spread Operator

The spread operator “spreads” the values in an iterable (arrays, strings) across zero or more arguments or elements.

#### Example

```JavaScript
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5, 6];

console.log(arr2); // [1, 2, 3, 4, 5, 6]
```

### Rest Parameters

The rest parameter gives us an easier and cleaner way of working with an indefinite number of parameters.

#### Example

```JavaScript
function sortArgs(...args) {
    return args.sort();
}
```

## Destructuring

The destructuring assignment syntax makes it possible to unpack values from arrays, or properties from objects, into distinct variables.

### Example

```JavaScript
// Array destructuring
let a, b, rest;
[a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(rest);  // [30, 40, 50]

// Object destructuring
let { x, y, ...z } = { x: 10, y: 20, a: 30, b: 40 };
console.log(z); // { a: 30, b: 40 }
```
