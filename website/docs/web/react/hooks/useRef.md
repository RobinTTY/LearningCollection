---
id: useRef
title: useRef
sidebar_position: 5
---

Refs provide a way to **access DOM nodes or React elements** created in the render method.

In the typical React dataflow, `props` are the only way that parent components interact with their children. To modify a child, you re-render it with new props. However, **there are a few cases where you need to imperatively modify a child outside of the typical dataflow**. The child to be modified could be an instance of a React component, or it could be a DOM element. For both of these cases, React provides an escape hatch.

## Syntax

```jsx
const refContainer = useRef(initialValue);
```

`useRef` returns a mutable ref object whose `.current` property is initialized to the passed argument `(initialValue)`. The returned object will persist for the full lifetime of the component.

### Basic Usage

```jsx
const myRef = useRef(null);
```

In the above example we have created a ref called `myRef` and set its default value to `null`. This means that `myRef` is now equal to an object that looks like this:

```jsx
{
  current: null;
}
```

This is because a ref is always an object with a single `.current` property which is set to the current value of the ref. If we were to instead create a ref with a default value of `0` it would look like this:

```jsx
const myRef = useRef(0);
console.log(myRef);
// { current: 0 }
```

What makes refs powerful is the fact that they are persisted between renders. Refs are in that sense similar to state, since they persist between renders, but refs do not cause a component to re-render when changed.

Imagine that we want to count the number of times a component re-renders. Here is the code to do so with state and refs:

#### State

```jsx {2}
function State() {
  const [rerenderCount, setRerenderCount] = useState(0);

  useEffect(() => {
    setRerenderCount((prevCount) => prevCount + 1);
  });

  return <div>{rerenderCount}</div>;
}
```

#### Refs

```jsx {2}
function Ref() {
  const rerenderCount = useRef(0);

  useEffect(() => {
    rerenderCount.current = rerenderCount.current + 1;
  });

  return <div>{rerenderCount.current}</div>;
}
```

Both of these components will correctly display the number of times a component has been re-rendered, but in **the state example the component will infinitely re-render itself** since setting the state causes the component to re-render. The ref example on the other hand will only render once since setting the value of a ref does not cause any re-renders.

So in short, a ref is used to store a value that persists between renders.

## Common uses

There are a few good use cases for refs:

- Managing focus, text selection, or media playback
- Triggering imperative animations
- Integrating with third-party DOM libraries

**You should avoid using refs for anything that can be done declaratively.**

For example, instead of exposing `open()` and `close()` methods on a Dialog component, pass an `isOpen` prop to it.

### Reference a DOM element (access a child imperatively)

The most common use case for refs in React is to reference a DOM element. Because of how common this use case is every DOM element has a `ref` property you can use for setting a ref to that element. For example, if you wanted to focus an input element whenever a button was clicked you could use a ref to do that:

```jsx
function TextInputWithFocusButton() {
  const inputRef = useRef(null);
  const onButtonClick = () => {
    // `current` points to the mounted text input element
    inputRef.current.focus();
  };
  return (
    <>
      <input ref={inputRef} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
}
```

We use the `ref` property on the `input` element to set the current value of `inputRef` to the input element. Now when we click the button it will call `onButtonClick` which uses the current value of the `inputRef` variable to set the focus on the `input` element.

Being able to access any DOM element directly with a ref is really useful for doing things like setting focus or managing other attributes that you cannot directly control in React, but refs shouldn't be overused.

:::warning
In custom components, ref needs to be forwarded, see: [React Documentation](https://reactjs.org/docs/forwarding-refs.html).
:::

### Storing the previous value of a state variable

Refs can also be used for any form of storage that is persisted across component renders. A very common use case for this would be storing the previous value of a state variable:

```jsx {3,5-7}
function Counter() {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef();

  useEffect(() => {
    prevCountRef.current = count;
  });
  const prevCount = prevCountRef.current;

  return (
    <h1>
      Now: {count}, before: {prevCount}
    </h1>
  );
}
```

The above code will update the `previousName` ref every time the name changes so that it always has the previous value of the name variable stored in it.

You can extract the functionality into its own hook:

```jsx
function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}
```

and then use it in `useEffect`:

```jsx {5}
function Counter() {
  const [count, setCount] = useState(0);

  const calculation = count + 100;
  const prevCalculation = usePrevious(calculation);
  // ...
```

It’s possible that in the future React will provide a `usePrevious` Hook out of the box since it’s a relatively common use case.
