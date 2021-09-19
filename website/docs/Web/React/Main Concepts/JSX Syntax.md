---
id: jsxSyntax
title: JSX Syntax
sidebar_position: 1
---

JSX is an **XML-like syntax extension to ECMAScript** without any defined semantics. It's intended to be used by various preprocessors (transpilers) to transform these tokens into standard ECMAScript.

## JSX in React

Consider this variable declaration:

```jsx
const element = <h1>Hello, world!</h1>;
```

The used syntax is called JSX, and it is a syntax extension to JavaScript. JSX is used to produce React "elements".

### Why JSX?

React embraces the fact that rendering logic is inherently coupled with other UI logic: how events are handled, how the state changes over time, and how the data is prepared for display.

Instead of artificially separating technologies by putting markup and logic in separate files, React separates concerns with loosely coupled units called "components" that contain both.

React [doesn’t require using JSX](https://reactjs.org/docs/react-without-jsx.html), but most people find it helpful as a visual aid when working with UI inside the JavaScript code. It also allows React to show more useful error and warning messages.

### Embedding expressions in JSX

In the example below, we declare a variable called `name` and then use it inside JSX by wrapping it in curly braces:

```jsx {1-2}
const name = "Josh Perez";
const element = <h1>Hello, {name}</h1>;

ReactDOM.render(element, document.getElementById("root"));
```

You can put any valid JavaScript expression inside the curly braces in JSX.

### JSX is an expression too

After compilation, JSX expressions become regular JavaScript function calls and evaluate to JavaScript objects.

This means that you can use JSX inside of `if` statements and `for` loops, assign it to variables, accept it as arguments, and return it from functions:

```jsx {3,5}
function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}
```

### Specifying attributes with JSX

You may use quotes to specify string literals as attributes:

```jsx
const element = <div tabIndex="0"></div>;
```

You may also use curly braces to embed a JavaScript expression in an attribute:

```jsx
const element = <img src={user.avatarUrl}></img>;
```

Don’t put quotes around curly braces when embedding a JavaScript expression in an attribute. You should either use quotes (for string values) or curly braces (for expressions), but not both in the same attribute.

:::caution
Since JSX is closer to JavaScript than to HTML, React DOM uses camelCase property naming convention instead of HTML attribute names.

For example, `class` becomes `className` in JSX, and `tabindex` becomes `tabIndex`.
:::

### Specifying children with JSX

If a tag is empty, you may close it immediately with `/>`, like XML:

```jsx
const element = <img src={user.avatarUrl} />;
```

JSX tags may contain children:

```jsx
const element = (
  <div>
    <h1>Hello!</h1>
    <h2>Good to see you here.</h2>
  </div>
);
```

### JSX prevents injection attacks

It is safe to embed user input in JSX:

```jsx
const title = response.potentiallyMaliciousInput;
// This is safe:
const element = <h1>{title}</h1>;
```

By default, React DOM escapes any values embedded in JSX before rendering them. Thus it ensures that you can never inject anything that’s not explicitly written in your application. Everything is converted to a string before being rendered. This helps prevent [XSS (cross-site-scripting)](https://en.wikipedia.org/wiki/Cross-site_scripting) attacks.

### JSX represents objects

Babel compiles JSX down to `React.createElement()` calls. These two examples are identical:

```jsx
const element = <h1 className="greeting">Hello, world!</h1>;
```

```jsx
const element = React.createElement(
  "h1",
  { className: "greeting" },
  "Hello, world!"
);
```

`React.createElement()` performs a few checks to help you write bug-free code but essentially it creates an object like this:

```jsx
// Note: this structure is simplified
const element = {
  type: "h1",
  props: {
    className: "greeting",
    children: "Hello, world!",
  },
};
```

These objects are called "React elements". You can think of them as descriptions of what you want to see on the screen. React reads these objects and uses them to construct the DOM and keep it up to date.

:::tip
It is recommended to use the ["Babel" language definition](https://babeljs.io/docs/en/editors) for your editor of choice so that both ES6 and JSX code is properly highlighted.
:::

### TODO

TODO: [This information seems good to know](https://reactjs.org/docs/jsx-in-depth.html)
