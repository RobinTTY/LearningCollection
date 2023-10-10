---
id: class-decorators
title: Class Decorators
sidebar_position: 2
---

A Class Decorator is declared just before a class declaration. The class decorator is applied to the constructor of the class and can be **used to observe, modify, or replace a class definition**. A class decorator cannot be used in a declaration file, or in any other ambient context (such as on a `declare` class).

The expression for the class decorator will be called as a function at runtime, with the constructor of the decorated class as its only argument. If the class decorator returns a value, it will replace the class declaration with the provided constructor function.

he following is an example of a class decorator (`@sealed`) applied to a `BugReport` class:

```ts
@sealed
class BugReport {
  type = "report";
  title: string;

  constructor(t: string) {
    this.title = t;
  }
}
```

We can define the `@sealed` decorator using the following function declaration:

```ts
function sealed(constructor: Function) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
}
```

When `@sealed` is executed, it will seal both the constructor and its prototype, and will therefore prevent any further functionality from being added to or removed from this class during runtime by accessing `BugReport.prototype` or by defining properties on `BugReport` itself (note that ES2015 classes are really just syntactic sugar to prototype-based constructor functions). This decorator does not prevent classes from sub-classing `BugReport`.

Next we have an example of how to override the constructor to set new defaults:

```ts
function reportableClassDecorator<T extends { new (...args: any[]): {} }>(
  constructor: T
) {
  return class extends constructor {
    reportingURL = "http://www...";
  };
}

@reportableClassDecorator
class BugReport {
  type = "report";
  title: string;

  constructor(t: string) {
    this.title = t;
  }
}

const bug = new BugReport("Needs dark mode");
console.log(bug.title); // Prints "Needs dark mode"
console.log(bug.type); // Prints "report"

// Note that the decorator _does not_ change the TypeScript type
// and so the new property `reportingURL` is not known
// to the type system:
bug.reportingURL; // Property 'reportingURL' does not exist on type 'BugReport'.
```
