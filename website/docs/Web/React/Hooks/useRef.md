---
id: useRef
title: useRef
sidebar_position: 5
---

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
