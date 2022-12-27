---
id: nullish-coalescing
title: Nullish Coalescing
sidebar_position: 6
---

The nullish coalescing operator is a feature that goes hand-in-hand with optional chaining. You can think of this feature - the `??` operator - as a way to “fall back” to a default value when dealing with `null` or `undefined`. When we write code like:

```ts
let x = foo ?? bar();
```

this is a new way to say that the value `foo` will be used when it’s “present”; but when it’s `null` or `undefined`, calculate `bar()` in its place.

The above code is equivalent to the following:

```ts
let x = foo !== null && foo !== undefined ? foo : bar();
```

## Advanced Usage

The `??` operator can replace uses of `||` when trying to use a default value. For example, the following code snippet tries to fetch the volume that was last saved in `localStorage` (if it ever was); however, it has a bug because it uses `||`:

```ts
function initializeAudio() {
  let volume = localStorage.volume || 0.5;
  // ...
}
```

When `localStorage.volume` is set to `0`, the page will set the volume to `0.5` which is unintended. `??` avoids some unintended behavior from `0`, `NaN` and `""` being treated as falsy values.
