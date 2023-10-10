---
id: generics
title: Generics
sidebar_position: 7
---

Generics are used to create reusable components. They are able to work over a variety of types rather than a single one.

An example of a generic is the type `Array`:

```ts
let list: Array<number> = [1, 2, 3];
```

The `Array` type is generic, so it works over a range of types rather than a single one. Here, we've told TypeScript that `list` should be an array of numbers. We could have also created an array of strings, booleans, or any other type.

## Generic Types

Below we define a generic identity function that works over a range of types. The type of this generic function is just like those of a non-generic function, with the type parameters listed first, similarly to function declarations:

```ts
function identity<T>(arg: T): T {
  return arg;
}

let myIdentity: <T>(arg: T) => T = identity;
```

We could also have used a different name for the generic type parameter in the type, so long as the number of type variables and how the type variables are used line up.

```ts
function identity<Type>(arg: Type): Type {
  return arg;
}

let myIdentity: <Input>(arg: Input) => Input = identity;
```

## Generic Interfaces

The generic type can also be used with the interface. The following is a generic interface.

```ts
interface IProcessor<T>
{
    result: T;
    process(a: T, b: T) => T;
}
```

The above `IProcessor` is a generic interface because we used type variable `<T>`. The `IProcessor` interface includes the generic field `result` and the generic method `process()` that accepts two generic type parameters and returns a generic type.

Another example would be a KeyValuePair interface:

```ts
interface KeyPair<T, U> {
  key: T;
  value: U;
}

let kv1: KeyPair<number, string> = { key: 1, value: "Steve" }; // OK
let kv2: KeyPair<number, number> = { key: 1, value: 12345 }; // OK
```

## Generic Classes

A generic class has a similar shape to a generic interface. Generic classes have a generic type parameter list in angle brackets (`<>`) following the name of the class:

```ts
class GenericNumber<NumType> {
  zeroValue: NumType;
  add: (x: NumType, y: NumType) => NumType;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
  return x + y;
};
```

We could have instead used string or even more complex objects:

```ts
let stringNumeric = new GenericNumber<string>();
stringNumeric.zeroValue = "";
stringNumeric.add = function (x, y) {
  return x + y;
};

console.log(stringNumeric.add(stringNumeric.zeroValue, "test"));
```

## Generic Constraints

You may sometimes want to write a generic function that works on a set of types where you have some knowledge about what capabilities that set of types will have.

Consider the following example:

```ts
function merge<U, V>(obj1: U, obj2: V) {
  return {
    ...obj1,
    ...obj2,
  };
}
```

`merge()` is a generic function that merges two objects like this:

```ts
let person = merge({ name: "John" }, { age: 25 });

console.log(result); // { name: 'John', age: 25 }
```

It works perfectly fine. However, it doesn’t prevent you from passing a non-object like this:

```ts
let person = merge({ name: "John" }, 25);

console.log(result); // { name: 'John' }
```

Instead of working with all types, you may want to add a constraint to the `merge()` function so that it works with objects only:

```ts
function merge<U extends object, V extends object>(obj1: U, obj2: V) {
  return {
    ...obj1,
    ...obj2,
  };
}
```

Because the `merge()` function is now constrained, it will no longer work with all types. Instead, it works with the `object` type only.

### Using Type Parameters in Generic Constraints

We can use the `keyof` operator to declare a type parameter that is constrained by another type parameter. For example, here we’d like to get a property from an object given its name. We’d like to ensure that we’re not accidentally grabbing a property that does not exist on the `obj`, so we’ll place a constraint between the two types:

```ts
function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) {
  return obj[key];
}

let x = { a: 1, b: 2, c: 3, d: 4 };

getProperty(x, "a");
// Error: "m" does not exist on x
getProperty(x, "m");
```
