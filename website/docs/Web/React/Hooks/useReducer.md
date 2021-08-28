---
id: useReducer
title: useReducer
---

The `useReducer` hook is an alternative to `useState`. `useReducer` is usually preferable to `useState` **when you have complex state logic** that involves multiple sub-values or when the next state depends on the previous one. `useReducer` also lets you optimize performance for components that trigger deep updates because [you can pass dispatch down instead of callbacks](https://reactjs.org/docs/hooks-faq.html#how-to-avoid-passing-callbacks-down).

## Syntax

```jsx
const [state, dispatchFn] = useReducer(reducerFn, initialState, initFn);
```

### state

The state snapshot used in the component re-render/re-evaluation cycle.

### dispatchFn

A function that can be used to dispatch a new action (i.e. trigger an update of the state).

### reducerFn

Accepts a function in the form of:

```jsx
(prevState, action) => newState;
```

A function that is triggered automatically once an action is dispatched (via `dispatchFn`). It receives the latest state snapshot and should return the new, updated state.

### initialState

The initial state.

### initFn

A function to set the initial state programmatically.

## Using useState and useReducer

Take this component which currently uses the `useState` hook:

```jsx
function Counter({ initialCount }) {
  const [count, setCount] = useState(initialCount);
  return (
    <>
      Count: {count}
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>-</button>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>+</button>
    </>
  );
}
```

We can rewrite this using `useReducer`:

```jsx
const initialState = { count: 0 };

// The reducer function can be created outside of the component since they don't need to interact
// with anything from inside the component, instead only with the passed down parameters
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
    </>
  );
}
```

The reducer function will accept the previous app state and the action being dispatched, calculate the next state, and return the new object.

:::note
While `useState` works just fine for this example and is preferable since its easier to use, `useReducer` can be used to handle more complex state logic.
:::

### Specifying the initial state

There are two different ways to initialize `useReducer` state. You may choose either one depending on the use case. The simplest way is to pass the initial state as a second argument:

```jsx
const [state, dispatch] = useReducer(reducer, { count: initialCount });
```

### Lazy initialization

You can also create the initial state lazily. To do this, you can pass an `init` function as the third argument. The initial state will be set to `init(initialArg)`.

It lets you extract the logic for calculating the initial state outside the reducer. This is also handy for resetting the state later in response to an action:

```jsx {1-3,11-12,19,24}
function init(initialCount) {
  return { count: initialCount };
}

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return init(action.payload);
    default:
      throw new Error();
  }
}

function Counter({ initialCount }) {
  const [state, dispatch] = useReducer(reducer, initialCount, init);
  return (
    <>
      Count: {state.count}
      <button
        onClick={() => dispatch({ type: "reset", payload: initialCount })}
      >
        Reset
      </button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
    </>
  );
}
```

## A more complex example

Consider this Login component:

```jsx {2-5,25,29}
const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);

    setFormIsValid(
      event.target.value.includes("@") && enteredPassword.trim().length > 6
    );
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);

    setFormIsValid(
      enteredEmail.includes("@") && event.target.value.trim().length > 6
    );
  };

  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes("@"));
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(enteredEmail, enteredPassword);
  };

  return (
    // ...
    <input
      type="email"
      id="email"
      value={enteredEmail}
      onChange={emailChangeHandler}
      onBlur={validateEmailHandler}
    />
    // ...
    <input
    type="password"
    id="password"
    value={enteredPassword}
    onChange={passwordChangeHandler}
    onBlur={validatePasswordHandler}
    />
    // ...
  );
};
```

In this component we have multiple related pieces of state, like `enteredEmail`, `emailIsValid`, `enteredPassword` and `passwordIsValid`. While it might not cause many problems, accessing for instance the `enteredEmail` state inside the `setEmailIsValid` function is not a good practice, because it involves two separate states. The `enteredEmail` state might not be the most current one (due to the way React updates it), so we should consider using `useReducer` to combine these states:

```jsx {1-20,29-37,59,68,74,78}
const emailReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return { value: action.val, isValid: action.val.includes('@') };
  }
  if (action.type === 'INPUT_BLUR') {
    // if the element loses focus the value should remain => state.value
    return { value: state.value, isValid: state.value.includes('@') };
  }
  return { value: '', isValid: false };
};

const passwordReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return { value: action.val, isValid: action.val.trim().length > 6 };
  }
  if (action.type === 'INPUT_BLUR') {
    return { value: state.value, isValid: state.value.trim().length > 6 };
  }
  return { value: '', isValid: false };
};

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  // second parameter is the initial value of the state
  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: null,
  });
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: null,
  });

  // this object destructuring isn't really necessary, we could also just use emailState.isValid
  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;

  // this affects the styling and only needs to execute if validity changes, so we can use useEffect
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

  const emailChangeHandler = (event) => {
    // through the change handler an action is passed through the dispatch function
    // second parameter is the payload (the value we want to update the state with)
    dispatchEmail({ type: "USER_INPUT", val: event.target.value });

    // it's better to not validate this on every character change, so we do this in the useEffect hook
    // setFormIsValid(
    //   event.target.value.includes('@') && passwordState.isValid
    // );
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: "USER_INPUT", val: event.target.value });

    // setFormIsValid(emailState.isValid && event.target.value.trim().length > 6);
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: "INPUT_BLUR" });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: "INPUT_BLUR" });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, passwordState.value);
  };

  return (
    // ...
    <input
    type="email"
    id="email"
    value={emailState.value}
    onChange={emailChangeHandler}
    onBlur={validateEmailHandler}
    />
    // ...
    <input
    type="password"
    id="password"
    value={passwordState.value}
    onChange={passwordChangeHandler}
    onBlur={validatePasswordHandler}
    />
    // ...
  );
};
```

Now we have combined the 4 states into 2 state objects called `emailState` and `passwordState`. The `emailChangeHandler` for instance calls the dispatch function, which in turn updates the combined state via the `emailReducer` function. Note that we also could have used only one state object here, since the logic is very similar.

## When to use useState vs useReducer

| useState                                                              | useReducer                                            |
| --------------------------------------------------------------------- | ----------------------------------------------------- |
| The default state management "tool"                                   | If you need to handle mor complex state               |
| Great for independent pieces of state/data                            | Great if you have related pieces of state/data        |
| Great if state updates are easy and limited to a few kinds of updates | Can be helpful if you have more complex state updates |

:::note
Related pieces of state can also be combined into an object to handle via `useState`, so you don't necessarily need `useReducer` in this case. `useReducer` can still be helpful for complex state updates!
:::

## More info

:::info
Another good summary with examples can be found here: [WebDevSimplified](https://blog.webdevsimplified.com/2020-06/use-reducer/)
:::
