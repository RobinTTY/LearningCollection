---
id: index-signatures
title: Index Signatures
sidebar_position: 4
---

Sometimes you don’t know all the names of a type’s properties ahead of time, but you do know the shape of the values. In those cases you can use an index signature to describe the types of possible values, for example:

```ts
interface StringArray {
  [index: number]: string;
}
 
const myArray: StringArray = getStringArray();
const secondItem = myArray[1]; // secondItem is a string
```

Above, we have a `StringArray` interface which has an index signature. This index signature states that when a `StringArray` is indexed with a `number`, it will return a `string`.

Only some types are allowed for index signature properties: `string`, `number`, `symbol`, template string patterns, and union types consisting only of these.

## Properties

While string index signatures are a powerful way to describe the “dictionary” pattern, they also enforce that all properties match their return type:

```ts
interface NumberDictionary {
  [index: string]: number;
 
  length: number; // ok
  name: string; // Error: Property 'name' of type 'string' is not assignable to 'string' index type 'number'
}
```

However, properties of different types are acceptable if the index signature is a union of the property types:

```ts
interface NumberOrStringDictionary {
  [index: string]: number | string;
  length: number; // ok, length is a number
  name: string; // ok, name is a string
}
```

Finally, you can make index signatures readonly in order to prevent assignment to their indices:

```ts
interface ReadonlyStringArray {
  readonly [index: number]: string;
}
```

## When to use Index Signatures

Imagine you have 2 objects describing the salary of two employees:

```ts
const salary1 = {
  salary: 55_000,
  bonus: 5_000
};
 
const salary2 = {
  contractSalary: 75_000
};
```

You want to implement a function that returns the total remuneration based on the salary object:

```ts
function totalSalary(salaryObject: ???) {
  let total = 0;
  for (const name in salaryObject) {
    total += salaryObject[name];
  }
  return total;
}
totalSalary(salary1); // => 60 000
totalSalary(salary2); // => 75 000
```

In this case an index signature fits perfectly:

```ts
function totalSalary(salaryObject: { [key: string]: number }) {
  let total = 0;
  for (const name in salaryObject) {
    total += salaryObject[name];
  }
  return total;
}
 
totalSalary(salary1); // => 60 000
totalSalary(salary2); // => 75 000
```
