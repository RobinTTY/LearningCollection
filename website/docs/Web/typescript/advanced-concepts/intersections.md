---
id: intersections
title: Intersection Types
sidebar_position: 1
---

`interfaces` allowed us to build up new types from other types by extending them. TypeScript provides another construct called intersection types that is mainly used to **combine existing object types**.

An intersection type is defined using the `&` operator.

```ts
interface Colorful {
  color: string;
}
interface Circle {
  radius: number;
}

type ColorfulCircle = Colorful & Circle;
```

Here, we’ve intersected `Colorful` and `Circle` to produce a new type that has all the members of `Colorful` and `Circle`.

```ts
function draw(circle: Colorful & Circle) {
  console.log(`Color was ${circle.color}`);
  console.log(`Radius was ${circle.radius}`);
}

// okay
draw({ color: "blue", radius: 42 });

// Argument of type '{ color: string; raidus: number; }' is not
// assignable to parameter of type 'Colorful & Circle'.
draw({ color: "red", raidus: 42 });
```

## Intersection of Unions

We can also intersect unions:

```ts
type Combinable = string | number;
type Numeric = number | boolean;

// Universal is of type number since that is the only possible intersection of the two unions
type Universal = Combinable & Numeric;
```

## Interfaces vs. Intersections

With interfaces, we could use an `extends` clause to extend from other types, and we were able to do something similar with intersections and name the result with a type alias. The principle **difference between the two is how conflicts are handled**, and that difference is typically one of the main reasons why you’d pick one over the other between an interface and a type alias of an intersection type.
