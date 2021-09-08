---
id: useContext
title: useContext
sidebar_position: 3
---

The `useContext` Hook provides the same functionality as the [Context API](../Advanced%20Concepts/Context), just packaged up into a simple to use Hook that you can use inside functional components. The hook makes our code more readable and compact.

## Usage

If we were to write our component with the context API, we would consume context like this:

```jsx {3}
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

## Example

### Creating context

To create a context object we use `React.createContext()`:

```jsx title="/store/auth-context.js"
const AuthContext = React.createContext({
    isLoggedIn: false;
});

export default AuthContext;
```

In this example we handle the information whether or not a user is currently logged in.

### Providing Context

To provide context to components at any point down the component tree, we need provide it as a parent to those components. Components will receive the context an arbitrary number of levels down the tree. In this example we provide the context in `index.js` since the authorization context is interesting for all components in our application:

```jsx
import App from "./App";
import { AuthContextProvider } from "./store/auth-context";

ReactDOM.render(
  <AuthContextProvider>
    <App />
  </AuthContextProvider>,
  document.getElementById("root")
);
```

Now we can access the `AuthContext` in any component inside `App`.

### Consuming context
