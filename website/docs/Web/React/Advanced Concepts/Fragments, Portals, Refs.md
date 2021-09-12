---
id: fragmentsPortalsRefs
title: Fragments, Portals, Refs
sidebar_position: 2
---

:::danger
TODO: breakout into multiple topics
:::

## Fragments

A common pattern in React is for a component to return multiple elements. Fragments let you group a list of children without adding extra nodes to the DOM.

Example:

```jsx
render() {
  return (
    <React.Fragment>
      <ChildA />
      <ChildB />
      <ChildC />
    </React.Fragment>
  );
}
```

### Motivation

A common pattern is for a component to return a list of children. Take this example React snippet:

```jsx
class Table extends React.Component {
  render() {
    return (
      <table>
        <tr>
          <Columns />
        </tr>
      </table>
    );
  }
}
```

`<Columns />` would need to return multiple `<td>` elements in order for the rendered HTML to be valid. If a parent div was used inside the `render()` of `<Columns />`, then the resulting HTML will be invalid.

```jsx
class Columns extends React.Component {
  render() {
    return (
      <div>
        <td>Hello</td>
        <td>World</td>
      </div>
    );
  }
}
```

results in a `<Table />` output of:

```html
<table>
  <tr>
    <div>
      <td>Hello</td>
      <td>World</td>
    </div>
  </tr>
</table>
```

Fragments solve this problem. Fragments also cut down on the number of wrapping divs that have no other use than fulfilling the JSX syntax requirement.

### Short Syntax

There is a new, shorter syntax you can use for declaring fragments. It looks like empty tags:

```jsx
class Columns extends React.Component {
  render() {
    return (
      <>
        <td>Hello</td>
        <td>World</td>
      </>
    );
  }
}
```

You can use `<></>` the same way you’d use any other element except that it doesn’t support keys or attributes.

For more details see: [React Docs](https://reactjs.org/docs/fragments.html)

## Portals

Portals provide a first-class way to render children into a DOM node that exists outside the DOM hierarchy of the parent component.

```js
ReactDOM.createPortal(child, container);
```

The first argument (`child`) is any renderable React child, such as an element, string, or fragment. The second argument (`container`) is a DOM element.

### Usage

Normally, when you return an element from a component’s render method, it’s mounted into the DOM as a child of the nearest parent node:

```jsx
render() {
  // React mounts a new div and renders the children into it
  return (
    <div>
      {this.props.children}
    </div>
  );
}
```

However, sometimes it’s useful to insert a child into a different location in the DOM:

```jsx
render() {
  // React does *not* create a new div. It renders the children into `domNode`.
  // `domNode` is any valid DOM node, regardless of its location in the DOM.
  return ReactDOM.createPortal(
    this.props.children,
    domNode
  );
}
```

A **typical use case** for portals is when a parent component has an `overflow: hidden` or `z-index style`, but you need the **child** to visually **"break out" of its container**. For example, **dialogs**, **hovercards**, and **tooltips**.

**Note:** When working with portals, remember that managing keyboard focus becomes very important.

For modal dialogs, ensure that everyone can interact with them by following the [WAI-ARIA Modal Authoring Practices](https://www.w3.org/TR/wai-aria-practices-1.1/#dialog_modal).

Example: [Codepen](https://codepen.io/gaearon/pen/yzMaBd)

For more details, see: [React Docs](https://reactjs.org/docs/portals.html)

## Refs

Refs provide a way to **access DOM nodes or React elements** created in the render method.

In the typical React dataflow, `props` are the only way that parent components interact with their children. To modify a child, you re-render it with new props. However, **there are a few cases where you need to imperatively modify a child outside of the typical dataflow**. The child to be modified could be an instance of a React component, or it could be a DOM element. For both of these cases, React provides an escape hatch.

### When to use Refs

There are a few good use cases for refs:

- Managing focus, text selection, or media playback
- Triggering imperative animations
- Integrating with third-party DOM libraries

**You should avoid using refs for anything that can be done declaratively.**

For example, instead of exposing `open()` and `close()` methods on a Dialog component, pass an `isOpen` prop to it.

### Creating Refs

Refs are created using `React.createRef()` and attached to React elements via the `ref` attribute. Refs are commonly assigned to an instance property when a component is constructed so they can be referenced throughout the component.

```jsx
const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  render() {
    ...
    <input id="username" type="text" ref={nameInputRef} />
    <input id="age" type="number" ref={ageInputRef} />
    ...
  }
}
```

Using refs in this way makes this component an [uncontrolled component](https://reactjs.org/docs/uncontrolled-components.html). It is generally recommended to use controlled components and let react handle the state of the component.

### Accessing Refs

When a ref is passed to an element in **render**, a reference to the node becomes accessible at the **current** attribute of the ref.

```Js
const enteredUserAge = ageInputRef.current.value;
```
