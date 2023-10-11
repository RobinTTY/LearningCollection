---
id: reactMemo
title: React.memo
sidebar_position: 4
---

If your component renders the same result given the same props, you can wrap it in a call to `React.memo` for a performance boost in some cases by memoizing the result. This means that React will skip rendering the component, and reuse the last rendered result.

`React.memo` only checks for prop changes. If your function component wrapped in `React.memo` has a `useState`, `useReducer` or `useContext` Hook in its implementation, it will still rerender when state or context change.

This method only exists as a [performance optimization](https://reactjs.org/docs/optimizing-performance.html). Do not rely on it to "prevent" a render, as this can lead to bugs.

## Syntax

```jsx
const MyComponent = React.memo(function MyComponent(props) {
  /* render using props */
});
```

By default this will only shallowly compare complex objects in the props object. For more control over the comparison, you can also provide a custom comparison function as the second argument:

```jsx
function MyComponent(props) {
  /* render using props */
}

function areEqual(prevProps, nextProps) {
  /*
  return true if passing nextProps to render would return
  the same result as passing prevProps to render,
  otherwise return false
  */
}

export default React.memo(MyComponent, areEqual);
```

By default `React.memo` will only shallowly compare complex objects in the props object. If you want control over the comparison, you can also provide a custom comparison function as the second argument.

:::warning
If we pass functions as props, `React.memo` will not be enough to prevent unneeded re-renders. Since the function is redefined with every re-execution of the parent component, `React.memo` will always detect a difference between the current and previous props. See [Caveats when using React.memo](#caveats-when-using-reactmemo).
:::

### Example areEqual function

The `areEqual` function may look like this (the function can be named differently of course):

```jsx
function areEqual(prevMovie, nextMovie) {
  return (
    prevMovie.title === nextMovie.title &&
    prevMovie.releaseDate === nextMovie.releaseDate
  );
}
```

### Caveats when using React.memo

If one of the passed props of the component to memoize is a function, the memoization will not work out of the box. This is due to the fact that the passed down function is redefined with every re-execution of the parent component. Therefore we need to preserve the function in the parent component, this allows us to properly use `React.memo`.

The preserving of the function can be achieved via the `useCallback` hook. For details on how to use `useCallback` see [useCallback](../hooks/advanced-hooks/useCallback).

## When to use React.memo

There are no hard rules. Things, that affect `React.memo` negatively:

- component often re-renders with props, that have changed
  - In this case, `React.memo` cannot prevent a re-render, but had to do additional calculations
- component is cheap to re-render
  - Added comparison cost is not worth it for a "simple" component in terms of render, reconcile, DOM change and side-effect costs
- comparison function is expensive to perform
  - The more props, the more calculations are performed

So in these cases `React.memo` is not the best choice. Otherwise it might be a good idea if you want to optimize performance.
