---
id: useEffect
title: useEffect
sidebar_position: 2
---

The Effect Hook lets you perform side effects in function components. **Data fetching, setting up a subscription, storing data in browser storage, and manually changing the DOM** in React components are all **examples of side effects**. Whether or not you’re used to calling these operations "side effects" (or just "effects"), you’ve likely performed them in your components before.

## Using the effect hook

```jsx
import React, { useState, useEffect } from "react";

function Example() {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```

:::note
You can think of useEffect Hook as `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` combined.
:::

There are two common kinds of side effects in React components: those that don’t require cleanup, and those that do. Let’s look at this distinction in more detail.

### Effects without cleanup

Sometimes, we want to **run some additional code after React has updated the DOM**. Network requests, manual DOM mutations, and logging are common examples of effects that don’t require a cleanup. Thats because we can run them and immediately forget about them. Let’s compare how classes and Hooks let us express such side effects.

#### Example using classes

In React class components, the `render` method itself shouldn’t cause side effects. It would be too early — we typically want to perform our effects after React has updated the DOM.

This is why in React classes, we put side effects into `componentDidMount` and `componentDidUpdate`. Coming back to our example, here is a React counter class component that updates the document title right after React makes changes to the DOM:

```jsx {9-14}
class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    document.title = `You clicked ${this.state.count} times`;
  }
  componentDidUpdate() {
    document.title = `You clicked ${this.state.count} times`;
  }

  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
      </div>
    );
  }
}
```

Note how **we have to duplicate the code between these two lifecycle methods** in class. This is because in many cases we want to perform the same side effect regardless of whether the component just mounted, or if it has been updated. Conceptually, we want it to happen after every render — but React class components don’t have a method like this. We could extract a separate method but we would still have to call it in two places.

#### Example using hooks

We’ve already seen this example at the top of this page, but let’s take a closer look at it:

```jsx {1,6-8}
import React, { useState, useEffect } from "react";

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```

- **What does useEffect do?:** By using this Hook, you tell React that your component needs to do something after render. React will remember the function you passed (we’ll refer to it as our "effect"), and call it later after performing the DOM updates. In this effect, we set the document title, but we could also perform data fetching or call some other imperative API.
- **Why is useEffect called inside a component?:** Placing `useEffect` inside the component lets us access the `count` state variable (or any props) right from the effect. We don’t need a special API to read it — it’s already in the function scope. Hooks embrace JavaScript closures and avoid introducing React-specific APIs where JavaScript already provides a solution.
- **Does useEffect run after every render?:** Yes! By default, it runs both after the first render and after every update. Instead of thinking in terms of "mounting" and "updating", you might find it easier to think that effects happen "after render". React guarantees the DOM has been updated by the time it runs the effects.

:::note
Unlike `componentDidMount` or `componentDidUpdate`, effects scheduled with useEffect don’t block the browser from updating the screen. This makes your app feel more responsive. The majority of effects don’t need to happen synchronously. In the uncommon cases where they do (such as measuring the layout), there is a separate [useLayoutEffect](https://reactjs.org/docs/hooks-reference.html#uselayouteffect) Hook with an API identical to `useEffect`.
:::

### Effects with cleanup

Some effects require cleanup. For example, **we might want to set up a subscription** to some external data source. In that case, it is important to clean up so that we don’t introduce a memory leak! Let’s compare how we can do it with classes and with Hooks.

#### Example using classes

In a React class, you would typically set up a subscription in `componentDidMount`, and clean it up in `componentWillUnmount`. For example, let’s say we have a `ChatAPI` module that lets us subscribe to a friend’s online status. Here’s how we might subscribe and display that status using a class:

```jsx {8-24}
class FriendStatus extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOnline: null };
    this.handleStatusChange = this.handleStatusChange.bind(this);
  }

  componentDidMount() {
    ChatAPI.subscribeToFriendStatus(
      this.props.friend.id,
      this.handleStatusChange
    );
  }
  componentWillUnmount() {
    ChatAPI.unsubscribeFromFriendStatus(
      this.props.friend.id,
      this.handleStatusChange
    );
  }
  handleStatusChange(status) {
    this.setState({
      isOnline: status.isOnline,
    });
  }

  render() {
    if (this.state.isOnline === null) {
      return "Loading...";
    }
    return this.state.isOnline ? "Online" : "Offline";
  }
}
```

Notice how `componentDidMount` and `componentWillUnmount` need to mirror each other. Lifecycle methods force us to split this logic even though conceptually code in both of them is related to the same effect.

#### Example using hooks

Code for adding and removing a subscription is so tightly related that `useEffect` is designed to keep it together. If your effect returns a function, React will run it when it is time to clean up:

```jsx {6-15}
import React, { useState, useEffect } from "react";

function FriendStatus(props) {
  const [isOnline, setIsOnline] = useState(null);

  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }
    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
    // Specify how to clean up after this effect:
    return function cleanup() {
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    };
  });

  if (isOnline === null) {
    return "Loading...";
  }
  return isOnline ? "Online" : "Offline";
}
```

- **Why did we return a function from our effect?**: This is the optional cleanup mechanism for effects. Every effect may return a function that cleans up after it. This lets us keep the logic for adding and removing subscriptions close to each other. They’re part of the same effect!
- **When exactly does React clean up an effect?** React performs the cleanup when the component unmounts. However, as we learned earlier, effects run for every render and not just once. This is why React also cleans up effects from the previous render before running the effects next time. This helps avoid bugs and can be opted out of in case it creates performance issues later.

:::note
We don’t have to return a named function from the effect (like we did here with `effect`). We can also return an arrow function or call it something different.
:::

## Tips for using effects

### Use multiple effects to separate concerns

Class lifecycle methods often contain unrelated logic, but related logic gets broken up into several methods. Here is a component that combines the counter and the friend status indicator logic from the previous examples:

```jsx
class FriendStatusWithCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0, isOnline: null };
    this.handleStatusChange = this.handleStatusChange.bind(this);
  }

  componentDidMount() {
    document.title = `You clicked ${this.state.count} times`;
    ChatAPI.subscribeToFriendStatus(
      this.props.friend.id,
      this.handleStatusChange
    );
  }

  componentDidUpdate() {
    document.title = `You clicked ${this.state.count} times`;
  }

  componentWillUnmount() {
    ChatAPI.unsubscribeFromFriendStatus(
      this.props.friend.id,
      this.handleStatusChange
    );
  }

  handleStatusChange(status) {
    this.setState({
      isOnline: status.isOnline
    });
  }
  // ...
```

Note how the logic that sets `document.title` is split between `componentDidMount` and `componentDidUpdate`. The subscription logic is also spread between `componentDidMount` and `componentWillUnmount`. And `componentDidMount` contains code for both tasks.

So, how can Hooks solve this problem? Just like you can use the State Hook more than once, you can also use several effects. This lets us separate unrelated logic into different effects:

```jsx {3,8}
function FriendStatusWithCounter(props) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  const [isOnline, setIsOnline] = useState(null);
  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }

    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    };
  });
  // ...
}
```

**Hooks let us split the code based on what it is doing** rather than a lifecycle method name. React will apply every effect used by the component, in the order they were specified.

### Optimizing performance by skipping effects

In some cases, **cleaning up or applying the effect after every render might create a performance problem**. You can tell React to skip applying an effect if certain values haven’t changed between re-renders. To do so, pass an array as an optional second argument to `useEffect`:

```tsx {3}
useEffect(() => {
  document.title = `You clicked ${count} times`;
}, [count]); // Only re-run the effect if count changes
```

In the example above, we pass `[count]` as the second argument. What does this mean? If the `count` is `5`, and then our component re-renders with `count` still equal to `5`, React will compare `[5]` from the previous render and `[5]` from the next render. Because all items in the array are the same `(5 === 5)`, React would skip the effect. If there are multiple items in the array, React will re-run the effect even if just one of them is different.

This also works for effects that have a cleanup phase:

```jsx {10}
useEffect(() => {
  function handleStatusChange(status) {
    setIsOnline(status.isOnline);
  }

  ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
  return () => {
    ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
  };
}, [props.friend.id]); // Only re-subscribe if props.friend.id changes
```

If you want to run an effect and clean it up only once (on mount and unmount), you can pass an empty array (`[]`) as a second argument.

:::note
Make sure the array includes **all values from the component scope (such as props and state) that change over time and that are used by the effect.** Otherwise, your code will reference stale values from previous renders. Using the [eslint-hooks-plugin](https://www.npmjs.com/package/eslint-plugin-react-hooks#installation) is recommended to warn against incorrectly applied dependencies.
:::

### Using timeouts to optimize performance

If we still run into performance problems after specifying dependencies, we can use timeouts to try and eliminate these problems. This is useful for instance if an effect is run repeatedly, due to user interaction. For example, we can use a timeout to run the effect only after 500ms and if the user triggers the effect again in that time period, the execution of the last one will be cancelled and the new one will wait 500ms again before executing.

Here is a small example used for form validation:

```jsx {3,6,10}
// ...
useEffect(() => {
  const identifier = setTimeout(() => {
    console.log("Checking form validity!");
    setFormIsValid(emailIsValid && passwordIsValid);
  }, 500);

  return () => {
    console.log("CLEANUP");
    clearTimeout(identifier);
  };
}, [emailIsValid, passwordIsValid]);
// ...
```

The cleanup method of the effect will run before the effect is re-executed, therefore canceling the form validation by clearing the timeout. If the user stops changing both fields (email and password) the validation will run after 500ms. For cases like basic form validation this optimization is not necessary but it can become interesting for more performance hungry effects, which shouldn't be executed too often.
