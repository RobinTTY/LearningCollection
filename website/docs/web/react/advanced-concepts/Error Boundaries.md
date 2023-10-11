---
id: errorBoundaries
title: Error Boundaries
sidebar_position: 5
---

Error boundaries are React components that **catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI** instead of the component tree that crashed. Error boundaries catch errors during rendering, in lifecycle methods, and in constructors of the whole tree below them.

:::caution
Error boundaries do **not** catch errors for:

- Event handlers (see [documentation](https://reactjs.org/docs/error-boundaries.html#how-about-event-handlers))
- Asynchronous code (e.g. `setTimeout` or `requestAnimationFrame` callbacks)
- Server side rendering
- Errors thrown in the error boundary itself (rather than its children)

:::

A class component becomes an error boundary if it defines either (or both) of the lifecycle methods `static getDerivedStateFromError()` or `componentDidCatch()`. Use `static getDerivedStateFromError()` to render a fallback UI after an error has been thrown. Use `componentDidCatch()` to log error information. Error boundaries work like a JavaScript `catch {}` block, but for components.

## componentDidCatch()

This lifecycle is invoked after an error has been thrown by a descendant component. It receives two parameters:

- `error` - The error that was thrown
- `info` - An object with a componentStack key containing [information about which component threw the error](https://reactjs.org/docs/error-boundaries.html#component-stack-traces).

`componentDidCatch()` is called during the “commit” phase, so side-effects are permitted. It should be used for things like logging errors.

:::info
Production and development builds of React slightly differ in the way `componentDidCatch()` handles errors. On development, the errors will bubble up to `window`, this means that any `window.onerror` or `window.addEventListener('error', callback)` will intercept the errors that have been caught by `componentDidCatch()`. On production, instead, the errors will not bubble up, which means any ancestor error handler will only receive errors not explicitly caught by `componentDidCatch()`.
:::

### Syntax

```jsx
componentDidCatch(error, info);
```

## static getDerivedStateFromError()

This lifecycle is invoked after an error has been thrown by a descendant component. It receives the error that was thrown as a parameter and should return a value to update state.

:::caution
`getDerivedStateFromError()` is called during the “render” phase, so side-effects are not permitted. For those use cases, use `componentDidCatch()` instead.
:::

### Syntax

```jsx
static getDerivedStateFromError(error);
```

## Example

Define the error boundary:

```jsx
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  // invoked after an error has been thrown by a descendant component
  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    logErrorToMyService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}
```

Then you can use it as a regular component:

```jsx
<ErrorBoundary>
  <MyWidget />
</ErrorBoundary>
```

:::info
Error boundaries [cannot be implemented as functional components](https://reactjs.org/docs/hooks-faq.html#do-hooks-cover-all-use-cases-for-classes) as of today. There is [no timeline](https://github.com/facebook/react/issues/19630#issuecomment-675390931) for the implementation as a hook.
:::
