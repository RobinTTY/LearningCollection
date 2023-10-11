---
id: introduction
title: Introduction
sidebar_position: 1
---

With the introduction of Classes in TypeScript and ES6, there now exist certain scenarios that require additional features to support annotating or modifying classes and class members. **Decorators provide a way to add both annotations and a meta-programming syntax for class declarations and members.**

:::info
Decorators are an experimental feature that may change in future releases.
To use the feature set the `experimentalDecorators` compiler option to `true` either on the command line or in your `tsconfig.json`.
:::

## Capabilities

A Decorator is a special kind of declaration that can be attached to a class declaration, method, accessor, property, or parameter. Decorators use the form `@expression`, where `expression` must evaluate to a function that will be called at runtime with information about the decorated declaration.

For example, given the decorator `@sealed` we might write the `sealed` function as follows:

```ts
function sealed(target) {
  // do something with 'target' ...
}
```

Decorators have three primary capabilities:

1. They can replace the value that is being decorated with a matching value that has the same semantics. (e.g. a decorator can replace a method with another method, a field with another field, a class with another class, and so on).
2. They can provide access to the value that is being decorated via accessor functions which they can then choose to share.
3. They can initialize the value that is being decorated, running additional code after the value has been fully defined. In cases where the value is a member of class, then initialization occurs once per instance.

Essentially, decorators can be used to metaprogram and add functionality to a value, without fundamentally changing its external behavior.

## Decorator Factories

If we want to **customize how a decorator is applied to a declaration**, we can write a decorator factory. A Decorator Factory is simply a **function that returns the expression that will be called** by the decorator at runtime.

We can write a decorator factory in the following fashion:

```ts
// this is the decorator factory, it sets up
// the returned decorator function
function color(value: string) {
  return function (target) {
    // this is the decorator
    // do something with 'target' and 'value'...
  };
}
```

## Decorator Composition

Multiple decorators can be applied to a declaration, for example on a single line:

```ts
@f @g x
```

On multiple lines:

```ts
@f
@g
x
```

The following steps are performed when evaluating multiple decorators on a single declaration in TypeScript:

1. The expressions for each decorator are evaluated top-to-bottom
2. The results are then called as functions from bottom-to-top

If we were to use decorator factories, we can observe this evaluation order with the following example:

```ts
function first() {
  console.log("first(): factory evaluated");
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log("first(): called");
  };
}

function second() {
  console.log("second(): factory evaluated");
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log("second(): called");
  };
}

class ExampleClass {
  @first()
  @second()
  method() {}
}
```

Which would print this output to the console:

```bash
first(): factory evaluated
second(): factory evaluated
second(): called
first(): called
```
