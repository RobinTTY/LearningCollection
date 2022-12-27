---
id: type-assertions
title: Type Assertions
sidebar_position: 6
---

TypeScript allows you to override its inferred and analyzed view of types in any way you want to. This is done by a mechanism called "type assertion". TypeScript's type assertion is purely you telling the compiler that you know about the types better than it does, and that it should not second guess you.

```ts
let someValue: any = "this is a string";
// We assert that someValue is a string
let strLength: number = (<string>someValue).length;
```

However, there is an ambiguity in the language grammar when using `<assertion>` style assertions in JSX:

```jsx
var foo = <string>bar;
</string>
```

Therefore it is now recommended that you just use the `as` keyword for consistency:

```ts
var foo = {} as string;
```

Type assertions can be useful when we for instance reference HTML elements in our code:

```ts
// Typescript only knows that input is of type HTMLElement
const input = document.getElementById("input") as HTMLInputElement;
```

## Type Assertion vs. Casting

The reason why it's not called "type casting" is that casting generally implies some sort of runtime support. However, type assertions are purely a compile time construct and a way for you to provide hints to the compiler on how you want your code to be analyzed.
