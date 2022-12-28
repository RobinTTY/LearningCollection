---
id: method-decorators
title: Method Decorators
sidebar_position: 3
---

A Method Decorator is declared just before a method declaration. The decorator is applied to the Property Descriptor for the method, and can be used to observe, modify, or replace a method definition. A method decorator cannot be used in a declaration file, on an overload, or in any other ambient context (such as in a `declare` class).

The expression for the method decorator will be called as a function at runtime, with the following three arguments:

1. Either the constructor function of the class for a static member, or the prototype of the class for an instance member
2. The name of the member
3. The Property Descriptor for the member

If the method decorator returns a value, it will be used as the Property Descriptor for the method.

The following is an example of a method decorator (`@enumerable`) applied to a method on the `Greeter` class:

```ts
class Greeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }

  @enumerable(false)
  greet() {
    return "Hello, " + this.greeting;
  }
}
```

We can define the `@enumerable` decorator using the following function declaration:

```ts
function enumerable(value: boolean) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    descriptor.enumerable = value;
  };
}
```

The `@enumerable(false)` decorator here is a decorator factory. When the `@enumerable(false)` decorator is called, it modifies the enumerable property of the property descriptor.
