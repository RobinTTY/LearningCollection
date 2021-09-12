---
id: useContext
title: useContext
sidebar_position: 3
---

The `useContext` Hook provides the same functionality as the [Context API](../Advanced%20Concepts/Context), just packaged up into a simple to use Hook that you can use inside functional components. The hook makes our code more readable and compact.

## useContext hook vs classic API

If we were to write our component with the context API, we would consume context like this:

```jsx {3,9}
const Book = ({ item }) => {
  return (
    <CurrencyContext.Consumer>
      {(currency) => (
        <li>
          {item.title} - {item.price} {currency}
        </li>
      )}
    </CurrencyContext.Consumer>
  );
};
```

If we are using the useContext hook instead, it looks like this:

```jsx {2,6}
const Book = ({ item }) => {
  const currency = React.useContext(CurrencyContext);

  return (
    <li>
      {item.title} - {item.price} {currency}
    </li>
  );
};
```

React's `useContext` Hook takes the Context as parameter to retrieve the value from it. Using the React Hook instead of the Consumer component makes the code more readable, less verbose, and doesn't introduce a component (here Consumer component) in between.

A component calling `useContext` will always re-render when the context value changes. If re-rendering the component is expensive, you can [optimize it by using memoization](https://github.com/facebook/react/issues/15156#issuecomment-474590693).

## Creating context

To create a context object we use `React.createContext()`:

```jsx title="/store/auth-context.js"
const AuthContext = React.createContext({
    isLoggedIn: false;
});

export default AuthContext;
```

In this example we handle the information whether or not a user is currently logged in. We provide the default value `false` which will only be used if when there is no provider. Otherwise we need to define the default value in the provider.

## Providing Context

To provide context to components at any point down the component tree, we need provide it as a parent to those components. Components will receive the context an arbitrary number of levels down the tree. In this example we provide the context in `App.js` since the authorization context is interesting for all components in our application:

```jsx title="App.js" {6-10,16}
import AuthContext from './store/auth-context';

...

return (
    <AuthContext.Provider
      value={{
        isLoggedIn: false,
      }}
    >
      <MainHeader onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </AuthContext.Provider>
  );
```

Now we can access the `AuthContext` in any component inside `App`. The initial value will be `false`.

:::info
You need the provider component to be able to change the context value. If you don't have a provider, consumers will always consume the default value specified through the `createContext` hook.
:::

## Consuming context

There are two ways to consume the provided context. Either we use the `Consumer` component or we use the `useContext` Hook. Usually we will want to use the hook.

### Example with a consumer component

Before React 16.8 the only way to consume the context was through the `Consumer` component, like this:

```jsx title="components/MainHeader/Navigation.js" {8-9,13,18,23,28,32}
import React, { useContext } from "react";

import AuthContext from "../../store/auth-context";
import classes from "./Navigation.module.css";

const Navigation = (props) => {
  return (
    <AuthContext.Consumer>
      {(context) => {
        return (
          <nav className={classes.nav}>
            <ul>
              {context.isLoggedIn && (
                <li>
                  <a href="/">Users</a>
                </li>
              )}
              {context.isLoggedIn && (
                <li>
                  <a href="/">Admin</a>
                </li>
              )}
              {context.isLoggedIn && (
                <li>
                  <button onClick={props.onLogout}>Logout</button>
                </li>
              )}
            </ul>
          </nav>
        );
      }}
    </AuthContext.Consumer>
  );
};

export default Navigation;
```

### Example with the useContext hook

Using the `useContext` hook to consume the context makes our code a little bit more concise:

```jsx title="components/MainHeader/Navigation.js" {7,12,17,22}
import React, { useContext } from "react";

import AuthContext from "../../store/auth-context";
import classes from "./Navigation.module.css";

const Navigation = (props) => {
  const context = useContext(AuthContext);

  return (
    <nav className={classes.nav}>
      <ul>
        {context.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {context.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {context.isLoggedIn && (
          <li>
            <button onClick={props.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
```
