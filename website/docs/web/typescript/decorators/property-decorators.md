---
id: property-decorators
title: Property Decorators
sidebar_position: 5
---

A Property Decorator is declared just before a property declaration. A property decorator cannot be used in a declaration file, or in any other ambient context (such as in a `declare` class).

The expression for the property decorator will be called as a function at runtime, with the following two arguments:

1. Either the constructor function of the class for a static member, or the prototype of the class for an instance member
2. The name of the member

We can use this information to record metadata about the property, as in the following example:

```ts
class Greeter {
  @format("Hello, %s")
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
  greet() {
    let formatString = getFormat(this, "greeting");
    return formatString.replace("%s", this.greeting);
  }
}
```

We can then define the `@format` decorator and `getFormat` functions using the following function declarations:

```ts
import "reflect-metadata";
const formatMetadataKey = Symbol("format");
function format(formatString: string) {
  return Reflect.metadata(formatMetadataKey, formatString);
}
function getFormat(target: any, propertyKey: string) {
  return Reflect.getMetadata(formatMetadataKey, target, propertyKey);
}
```

The `@format("Hello, %s")` decorator here is a decorator factory. When `@format("Hello, %s")` is called, it adds a metadata entry for the property using the `Reflect.metadata` function from the `reflect-metadata` library. When `getFormat` is called, it reads the metadata value for the format.
