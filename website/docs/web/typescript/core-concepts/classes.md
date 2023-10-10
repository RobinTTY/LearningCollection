---
id: classes
title: Classes
sidebar_position: 4
---

As with other JavaScript language features, TypeScript adds type annotations and other syntax to allow you to express relationships between classes and other types.

## Class Members

Here’s the most basic class - an empty one:

```ts
class Point {}
```

### Fields

A field declaration creates a public writeable property on a class:

```ts
class Point {
  x: number;
  y: number;
}

const pt = new Point();
pt.x = 0;
pt.y = 0;
```

Fields can also have initializers; these will run automatically when the class is instantiated:

```ts
class Point {
  x = 0;
  y = 0;
}

const pt = new Point();
// Prints 0, 0
console.log(`${pt.x}, ${pt.y}`);
```

:::note
The `strictPropertyInitialization` setting controls whether class fields need to be initialized in the constructor.
:::

#### readonly

Fields may be prefixed with the `readonly` modifier. This prevents assignments to the field outside of the constructor.

#### Member Visibility

You can use TypeScript to control whether certain methods or properties are visible to code outside the class.

- `public` - the default, a public member can be accessed anywhere
- `protected` - a protected member can be accessed within the class and its subclasses
- `private` - a private member can only be accessed within the class

### Constructors

Class constructors are very similar to functions. You can add parameters with type annotations, default values, and overloads:

```ts
class Point {
  x: number;
  y: number;

  // Normal signature with defaults
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }
}
```

There are just a few differences between class constructor signatures and function signatures:

- Constructors can’t have type parameters - these belong on the outer class declaration
- Constructors can’t have return type annotations - the class instance type is always what’s returned

#### Parameter Properties

TypeScript offers special syntax for turning a constructor parameter into a class property with the same name and value. These are called parameter properties and are created by prefixing a constructor argument with one of the visibility modifiers `public`, `private`, `protected`, or `readonly`. The resulting field gets those modifier(s):

```ts
class Params {
  constructor(
    public readonly x: number,
    protected y: number,
    private z: number
  ) {
    // No body necessary
  }
}

const a = new Params(1, 2, 3);
```

#### Super Calls

Just as in JavaScript, if you have a base class, you’ll need to call `super();` in your constructor body before using any `this` members.

### Methods

A function property on a class is called a method. Methods can use all the same type annotations as functions and constructors:

```ts
class Point {
  x = 10;
  y = 10;

  scale(n: number): void {
    this.x *= n;
    this.y *= n;
  }
}
```

Other than the standard type annotations, TypeScript doesn’t add anything else new to methods.

### Getters / Setters

Classes can also have accessors:

```ts
class C {
  _length = 0;
  get length() {
    return this._length;
  }
  set length(value) {
    this._length = value;
  }
}
```

:::note
Note that a field-backed get/set pair with no extra logic is very rarely useful in JavaScript. It’s fine to expose public fields if you don’t need to add additional logic during the get/set operations.
:::

TypeScript has some special inference rules for accessors:

- If `get` exists but no `set`, the property is automatically `readonly`
- If the type of the setter parameter is not specified, it is inferred from the return type of the getter
- Getters and setters must have the same [Member Visibility](https://www.typescriptlang.org/docs/handbook/2/classes.html#member-visibility)

## Static Members

Classes may have `static` members. These members aren’t associated with a particular instance of the class. They can be accessed through the class constructor object itself:

```ts
class MyClass {
  static x = 0;
  static printX() {
    console.log(MyClass.x);
  }
}

console.log(MyClass.x);
MyClass.printX();
```

Static members can also use the same `public`, `protected`, and `private` visibility modifiers. Static members are also inherited.

## Class Heritage

Like other languages with object-oriented features, classes in JavaScript can inherit from base classes.

### `implements` clauses

You can use an `implements` clause to check that a class satisfies a particular `interface`. An error will be issued if a class fails to correctly implement it:

```ts
interface Pingable {
  ping(): void;
}

class Sonar implements Pingable {
  ping() {
    console.log("ping!");
  }
}

class Ball implements Pingable {
  // Class 'Ball' incorrectly implements interface 'Pingable'.
  // Property 'ping' is missing in type 'Ball' but required in type 'Pingable'.
  pong() {
    console.log("pong!");
  }
}
```

Classes may also implement multiple interfaces, e.g. `class C implements A, B`.

### `extends` clauses

Classes may `extend` from a base class. A derived class has all the properties and methods of its base class, and also define additional members:

```ts
class Animal {
  move() {
    console.log("Moving along!");
  }
}

class Dog extends Animal {
  woof(times: number) {
    for (let i = 0; i < times; i++) {
      console.log("woof!");
    }
  }
}

const d = new Dog();
// Base class method
d.move();
// Derived class method
d.woof(3);
```

#### Overriding Methods

A derived class can also override a base class field or property. You can use the `super.` syntax to access base class methods. TypeScript enforces that a derived class is always a subtype of its base class.

For example, here’s a legal way to override a method:

```ts
class Base {
  greet() {
    console.log("Hello, world!");
  }
}

class Derived extends Base {
  greet(name?: string) {
    if (name === undefined) {
      super.greet();
    } else {
      console.log(`Hello, ${name.toUpperCase()}`);
    }
  }
}

const d = new Derived();
d.greet();
d.greet("reader");
```

It’s important that a derived class follow its base class contract. Remember that it’s very common (and always legal!) to refer to a derived class instance through a base class reference:

```ts
// Alias the derived instance through a base class reference
const b: Base = d;
// No problem
b.greet();
```

### `abstract` Classes and Members

An abstract method or abstract field is one that **hasn’t had an implementation provided**. These members **must exist inside an abstract class**, which **cannot be directly instantiated**.

The role of abstract classes is to **serve as a base class for subclasses** which do implement all the abstract members. When a class doesn’t have any abstract members, it is said to be concrete.

```ts
abstract class Base {
  abstract getName(): string;

  printName() {
    console.log("Hello, " + this.getName());
  }
}

// Error: Cannot create an instance of an abstract class.
const b = new Base();
```

We can’t instantiate `Base` with `new` because it’s abstract. Instead, we need to make a derived class and implement the abstract members:

```ts
class Derived extends Base {
  getName() {
    return "world";
  }
}

const d = new Derived();
d.printName();
```
