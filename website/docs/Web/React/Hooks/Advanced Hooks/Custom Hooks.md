---
id: customHooks
title: Custom Hooks
sidebar_position: 4
---

A custom Hook is a JavaScript function whose name starts with ”use” and that may call other Hooks.
Building your own Hooks lets you extract component logic into reusable functions.
**When you have component logic that needs to be used by multiple components and uses Hooks, we can extract that logic to a custom Hook.**

## Example

Imagine we have a component `ForwardCounter.js` which displays a counter which slowly counts up.

```jsx title="ForwardCounter.js"
import { useState, useEffect } from "react";

import Card from "./Card";

const ForwardCounter = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <Card>{counter}</Card>;
};

export default ForwardCounter;
```

Now imagine we need basically the exact same logic in our component `BackwardCounter.js` that does the same thing only that it decrements the counter. Instead of duplicating the code, we can extract it to a custom Hook:

```jsx title="useCounter.js"
import { useState, useEffect } from "react";

const useCounter = (forwards = true) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (forwards) {
        setCounter((prevCounter) => prevCounter + 1);
      } else {
        setCounter((prevCounter) => prevCounter - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [forwards]);

  return counter;
};

export default useCounter;
```

Now we can use the hook in the `ForwardCounter.js` and `BackwardCounter.js` component:

```jsx title="ForwardCounter.js"
import Card from "./Card";
import useCounter from "../hooks/use-counter";

const ForwardCounter = () => {
  const counter = useCounter();

  return <Card>{counter}</Card>;
};

export default ForwardCounter;
```

```jsx title="BackwardCounter.js"
import Card from "./Card";
import useCounter from "../hooks/use-counter";

const BackwardCounter = () => {
  const counter = useCounter(false);

  return <Card>{counter}</Card>;
};

export default BackwardCounter;
```
