---
id: useCallback
title: useCallback
sidebar_position: 2
---

The `useCallback` hook basically allows us to store a function across component executions. This allows us to avoid the re-creation of the function every time a component is re-executed. The return value of `useCallback` is a [memoized](https://en.wikipedia.org/wiki/Memoization) callback (with it we can reuse the same function across executions).

## Syntax

```jsx
// we wrap the function we want to memoize inside useCallback
const memoizedCallback = useCallback(() => {
  doSomething(a, b);
}, [a, b]);
```

A new function instance will only be generated if any value of the variables inside the dependency array changes between re-renders. If nothing changes, `useCallback` will just return the cached version of the function instance.

:::info
The array of dependencies is not passed as arguments to the callback. Conceptually, though, that’s what they represent: every value referenced inside the callback should also appear in the dependencies array. In the future, a sufficiently advanced compiler could create this array automatically.
:::
