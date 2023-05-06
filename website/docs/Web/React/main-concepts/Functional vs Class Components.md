---
id: functionalVsClassComponents
title: Functional vs Class Components
sidebar_position: 4
---

In the world of React, there are two basic ways of writing a React component. One uses a function and the other uses a class. With the introduction of [React hooks](https://reactjs.org/docs/hooks-intro.html), the React team pushes the use of functional components whenever possible (which better follows JavaScript's functional nature).

The [motivation](https://reactjs.org/docs/hooks-intro.html#motivation) behind this move is:

- It’s hard to reuse stateful logic between components
- Complex components become hard to understand
- Classes confuse both people and machines

A functional component with hooks can do [almost](https://reactjs.org/docs/hooks-faq.html#do-hooks-cover-all-use-cases-for-classes) everything a class component can do, without any of the draw backs mentioned above. Where we still need class components is for instance for [error boundaries](https://reactjs.org/docs/error-boundaries.html#introducing-error-boundaries).

## Example

### Functional Component

```jsx
import { Component } from "react";

import User from "./User";
import classes from "./Users.module.css";

const DUMMY_USERS = [
  { id: "u1", name: "John" },
  { id: "u2", name: "Jess" },
  { id: "u3", name: "Lia" },
];

const Users = () => {
  const [showUsers, setShowUsers] = useState(true);

  const toggleUsersHandler = () => {
    setShowUsers((curState) => !curState);
  };

  const usersList = (
    <ul>
      {DUMMY_USERS.map((user) => (
        <User key={user.id} name={user.name} />
      ))}
    </ul>
  );

  return (
    <div className={classes.users}>
      <button onClick={toggleUsersHandler}>
        {showUsers ? "Hide" : "Show"} Users
      </button>
      {showUsers && usersList}
    </div>
  );
};

export default Users;
```

### Class Component

```jsx
import { Component } from "react";

import User from "./User";
import classes from "./Users.module.css";

const DUMMY_USERS = [
  { id: "u1", name: "Max" },
  { id: "u2", name: "Manuel" },
  { id: "u3", name: "Julie" },
];

class Users extends Component {
  constructor() {
    super();
    this.state = {
      showUsers: true,
      more: "Test",
    };
  }

  toggleUsersHandler() {
    // this.state.showUsers = false; // NOT!
    this.setState((curState) => {
      return { showUsers: !curState.showUsers };
    });
  }

  render() {
    const usersList = (
      <ul>
        {DUMMY_USERS.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );

    return (
      <div className={classes.users}>
        <button onClick={this.toggleUsersHandler.bind(this)}>
          {this.state.showUsers ? "Hide" : "Show"} Users
        </button>
        {this.state.showUsers && usersList}
      </div>
    );
  }
}

export default Users;
```
