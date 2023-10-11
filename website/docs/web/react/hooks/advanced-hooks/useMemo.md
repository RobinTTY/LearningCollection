---
id: useMemo
title: useMemo
sidebar_position: 3
---

The `useMemo` hook allows us to avoid heavy calculations. It memoizes a calculation result between a function's calls and between renders. While `useCallback` memoizes functions, `useMemo` memoizes any computed value.

## Syntax

```jsx
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```

The parameters of `useMemo` are a 'create' function and an array of dependencies. `useMemo` will only recompute the memoized value when one of the dependencies has changed. This optimization helps to avoid expensive calculations on every render. If no array is provided, a new value will be computed on every render.

:::warning
You may rely on useMemo as a performance optimization, not as a semantic guarantee. In the future, React may choose to "forget" some previously memoized values and recalculate them on next render, e.g. to free memory for offscreen components. Write your code so that it still works without `useMemo` — and then add it to optimize performance
:::

## When to use useMemo

You will want to memorize data if it would be performance-intensive to recalculate something based on it. Otherwise it might not really be worth it because you always have to store data with `useMemo`, this storing functionality also takes up some performance. So we shouldn't use `useMemo` for every value but for instance if we do some resource intensive sorting, etc.
