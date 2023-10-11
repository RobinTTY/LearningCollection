---
id: conditional-rendering
title: Conditional Rendering
sidebar_position: 5
---

Your components will often need to display different things depending on different conditions. In React, you can conditionally render JSX using JavaScript syntax like `if` statements,`&&`, and `? :` operators.

## Conditionally returning JSX

Let’s say you have a `PackingList` component rendering several `Item`s, which can be marked as packed or not:

```jsx
function Item({ name, isPacked }) {
  return <li className="item">{name}</li>;
}

export default function PackingList() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item 
          isPacked={true} 
          name="Space suit" 
        />
        <Item 
          isPacked={true} 
          name="Helmet with a golden leaf" 
        />
        <Item 
          isPacked={false} 
          name="Photo of Tam" 
        />
      </ul>
    </section>
  );
}
```

Notice that some of the `Item` components have their `isPacked` prop set to `true` instead of `false`. You want to add a checkmark (✔) to packed items if `isPacked={true}`. You can write this as an [if/else statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else) like so:

```jsx
if (isPacked) {
  return <li className="item">{name} ✔</li>;
}
return <li className="item">{name}</li>;
```

If the `isPacked` prop is `true`, this code returns a different JSX tree. With this change, some of the items get a checkmark at the end:

```jsx
function Item({ name, isPacked }) {
  if (isPacked) {
    return <li className="item">{name} ✔</li>;
  }
  return <li className="item">{name}</li>;
}

export default function PackingList() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item 
          isPacked={true} 
          name="Space suit" 
        />
        <Item 
          isPacked={true} 
          name="Helmet with a golden leaf" 
        />
        <Item 
          isPacked={false} 
          name="Photo of Tam" 
        />
      </ul>
    </section>
  );
}
```

Try editing what gets returned in either case, and see how the result changes! Notice how you’re creating branching logic with JavaScript’s `if` and `return` statements. In React, control flow (like conditions) is handled by JavaScript.

## Conditionally returning nothing with `null`

In some situations, you won’t want to render anything at all. For example, say you don’t want to show packed items at all. A component must return something. In this case, you can return `null`:

```jsx
if (isPacked) {
  return null;
}
return <li className="item">{name}</li>;
```

If `isPacked` is true, the component will return nothing, `null`. Otherwise, it will return JSX to render.

```jsx
function Item({ name, isPacked }) {
  if (isPacked) {
    return null;
  }
  return <li className="item">{name}</li>;
}

export default function PackingList() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item 
          isPacked={true} 
          name="Space suit" 
        />
        <Item 
          isPacked={true} 
          name="Helmet with a golden leaf" 
        />
        <Item 
          isPacked={false} 
          name="Photo of Tam" 
        />
      </ul>
    </section>
  );
}
```

In practice, returning `null` from a component isn’t common because it might surprise a developer trying to render it. More often, you would conditionally include or exclude the component in the parent component’s JSX. Here’s how to do that!

## Conditionally including JSX

In the previous example, you controlled which (if any!) JSX tree would be returned by the component. You may already have noticed some duplication in the render output:

```jsx
<li className="item">{name} ✔</li>
```

is very similar to

```jsx
<li className="item">{name}</li>
```

Both of the conditional branches return `<li className="item">...</li>`:

```jsx
if (isPacked) {
  return <li className="item">{name} ✔</li>;
}
return <li className="item">{name}</li>;
```

While this duplication isn’t harmful, it could make your code harder to maintain. What if you want to change the `className`? You’d have to do it in two places in your code! In such a situation, you could conditionally include a little JSX to make your code more [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself).

## Conditional (ternary) operator (`? :`)

JavaScript has a compact syntax for writing a conditional expression — the [conditional operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator) or “ternary operator”. Instead of this:

```jsx
if (isPacked) {
  return <li className="item">{name} ✔</li>;
}
return <li className="item">{name}</li>;
```

You can write this:

```jsx
return (
  <li className="item">
    {isPacked ? name + ' ✔' : name}
  </li>
);
```

You can read it as “if `isPacked` is true, then (`?`) render `name + ' ✔'`, otherwise (`:`) render `name”`.

Now let’s say you want to wrap the completed item’s text into another HTML tag, like `<del>` to strike it out. You can add even more newlines and parentheses so that it’s easier to nest more JSX in each of the cases:

```jsx
function Item({ name, isPacked }) {
  return (
    <li className="item">
      {isPacked ? (
        <del>
          {name + ' ✔'}
        </del>
      ) : (
        name
      )}
    </li>
  );
}

export default function PackingList() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item 
          isPacked={true} 
          name="Space suit" 
        />
        <Item 
          isPacked={true} 
          name="Helmet with a golden leaf" 
        />
        <Item 
          isPacked={false} 
          name="Photo of Tam" 
        />
      </ul>
    </section>
  );
}
```

This style works well for simple conditions, but use it in moderation. If your components get messy with too much nested conditional markup, consider extracting child components to clean things up. In React, markup is a part of your code, so you can use tools like variables and functions to tidy up complex expressions.

## Logical AND operator (`&&`)

Another common shortcut you’ll encounter is the logical AND (`&&`) operator. Inside React components, it often comes up when you want to render some JSX when the condition is true, or render nothing otherwise. With `&&`, you could conditionally render the checkmark only if `isPacked` is `true`:

```jsx
return (
  <li className="item">
    {name} {isPacked && '✔'}
  </li>
);
```

You can read this as “if `isPacked`, then (`&&`) render the checkmark, otherwise, render nothing”. Here it is in action:

```jsx
function Item({ name, isPacked }) {
  return (
    <li className="item">
      {name} {isPacked && '✔'}
    </li>
  );
}

export default function PackingList() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item 
          isPacked={true} 
          name="Space suit" 
        />
        <Item 
          isPacked={true} 
          name="Helmet with a golden leaf" 
        />
        <Item 
          isPacked={false} 
          name="Photo of Tam" 
        />
      </ul>
    </section>
  );
}
```
