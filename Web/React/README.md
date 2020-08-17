# React Tutorial

Following the tutorial from [reactjs.org](https://reactjs.org/).

## Notes

### What Is React

- "declarative, efficient, and flexible JavaScript library for building user interfaces"
- compose complex UIs from small and isolated pieces of code called "components"
- React has a few different kinds of components

### React.Component subclasses

```Js
class ShoppingList extends React.Component {
  render() {
    return (
      <div className="shopping-list">
        <h1>Shopping List for {this.props.name}</h1>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
      </div>
    );
  }
}

// Example usage: <ShoppingList name="Mark" />
```

- ShoppingList is a React component class, or React component type
- A component **takes in parameters, called props** (short for properties)
- A component **returns a hierarchy of views** to display via the render method

### The render method

- render returns a React element, which is a lightweight description of what to render
- React takes the description and displays the result
- Most React developers use a special syntax called “JSX” which makes these structures easier to write
- The ```<div />``` syntax is transformed at build time to ```React.createElement('div')```. The example above is equivalent to:

```Js
return React.createElement('div', {className: 'shopping-list'},
  React.createElement('h1', /* ... h1 children ... */),
  React.createElement('ul', /* ... ul children ... */)
);
```

- The ShoppingList component above only renders built-in DOM components like ```<div />``` and ```<li />```.
- But you can compose and render custom React components too. For example, we can now refer to the whole shopping list by writing ```<ShoppingList />```.
- Each React component is encapsulated and can operate independently; this allows you to build complex UIs from simple components.

### Passing Data Through Props (Tic Tac Toe Example app)

- Passing props is how information flows in React apps, from parents to children.
- Example (value i flows from Board to Square):

```Js
class Board extends React.Component {
  renderSquare(i) {
    return <Square value={i} />;
  }
}
```

```Js
class Square extends React.Component {
  render() {
    return (
      <button className="square">
        {this.props.value}
      </button>
    );
  }
}
```

### Making an Interactive Component

- Adding the feature that a clicked field is filled with a 'X'
- For the component to remember if it has been clicked the component needs to use **state**
- React components can have state by setting ```this.state``` in their constructors
- ```this.state``` should be considered as private to a React component that it’s defined in

```JS
class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }

  render() {
    return (
      <button
        className="square"
        onClick={() => this.setState({value: 'X'})}>
        {this.state.value}
      </button>
    );
  }
}
```

- By calling ```this.setState``` from an ```onClick``` handler in the Square’s ```render``` method, we tell React to re-render that Square whenever its ```<button>``` is clicked.
- When you call ```setState``` in a component, React automatically updates the child components inside of it too.

#### Note

- In JavaScript classes, you need to always call super when defining the constructor of a subclass.
- All React component classes that have a constructor should start with a ```super(props)``` call.

### Lifting State Up

- The Tic Tac Toe game needs to know the state of the fields to determine the current state of the game and to determine a winner
- **Currently**, each Square component maintains the game’s state
- To check for a winner, **we’ll maintain the value of each of the 9 squares in one location**.
- We may think that Board should just ask each Square for the Square’s state. Although this approach is possible in React, it is discouraged because the code becomes difficult to understand, susceptible to bugs, and hard to refactor
- **the best approach is to store the game’s state in the parent Board component instead of in each Square**
- The Board component can tell each Square what to display by passing a prop

#### Summary

- To collect data from multiple children, or to have two child components communicate with each other, you need to declare the shared state in their parent component instead.
- The parent component can pass the state back down to the children by using props; this keeps the child components in sync with each other and with the parent component.

Here is the important example code:

```Js
class Board extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        squares: Array(9).fill(null), // array of 9 nulls
      };
    }

// When we fill the board in later, the this.state.squares
// array will look something like this:
[
  'O', null, 'X',
  'X', 'X', 'O',
  'O', null, null,
]

// We will modify the Board to instruct each individual Square
// about its current value ('X', 'O', or null).
renderSquare(i) {
    return <Square value={this.state.squares[i]} />;
  }
```

- Each Square will now receive a value prop that will either be 'X', 'O', or null for empty squares.
- The Board component now maintains which squares are filled
- We need to create a way for the Square to update the Board’s state
- Since state is considered to be private to a component that defines it, we cannot update the Board’s state directly from Square

### Pass down a function

We’ll pass down a function from the Board to the Square, and we’ll have Square call that function when a square is clicked, because state is private!

We’ll change the renderSquare method in Board to:

```Js
renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }
```

- Now we’re passing down two props from Board to Square: ```value``` and ```onClick```.
- The ```onClick``` prop is a function that ```Square``` can call when clicked

We’ll make the following changes to Square:

- Replace ```this.state.value``` with ```this.props.value``` in Square’s render method
- Replace ```this.setState()``` with ```this.props.onClick()``` in Square’s render method
- Delete the ```constructor``` from Square because Square no longer keeps track of the game’s state

```Js
class Square extends React.Component {
  render() {
    return (
      <button
        className="square"
        onClick={() => this.props.onClick()}
      >
        {this.props.value}
      </button>
    );
  }
}
```

When a Square is clicked, the onClick function provided by the Board is called.

### Defining the click handler

When we try to click a Square, we should get an error because we haven’t defined handleClick yet. We’ll now add handleClick to the Board class:

```Js
class Board extends React.Component {
  constructor(props) {
      ...

    // squares array is handled as immutable object
    // Reason explained in the Immutability section
    handleClick(i) {
    const squares = this.state.squares.slice();
    squares[i] = 'X';
    this.setState({squares: squares});
    }

    renderSquare(i) {
    ...
```

Now the state is stored in the Board component instead of the individual Square components. Keeping the state of all squares in the Board component will allow it to determine the winner in the future.

### Controlled components

- Since the Square components no longer maintain state, the Square components receive values from the Board component
- The Square components inform the Board component when they’re clicked
- In React terms, the Square components are now **controlled components**. The Board has full control over them.

### Why Immutability Is Important

- There are generally two approaches to changing data
  - mutate the data by directly changing the data's values.
  - replace the data with a new copy which has the desired changes.

#### Data Change with Mutation

```Js
var player = {score: 1, name: 'Jeff'};
player.score = 2;
// Now player is {score: 2, name: 'Jeff'}

```

#### Data Change without Mutation

```Js
var player = {score: 1, name: 'Jeff'};

var newPlayer = Object.assign({}, player, {score: 2});
// Now player is unchanged, but newPlayer is {score: 2, name: 'Jeff'}

// Or if you are using object spread syntax proposal, you can write:
// var newPlayer = {...player, score: 2};
```

The end result is the same but by not mutating (or changing the underlying data) directly, we gain several benefits described below.

#### Complex Features Become Simple

- Immutability makes complex features much easier to implement.
- Later in this tutorial, we will implement a “time travel” feature that allows us to review the tic-tac-toe game’s history and “jump back” to previous moves.
- Avoiding direct data mutation lets us keep previous versions of the game’s history intact, and reuse them later

#### Detecting Changes

- Detecting changes in mutable objects is difficult because they are modified directly.
- This detection requires the mutable object to be compared to previous copies of itself and the entire object tree to be traversed.
- Detecting changes in immutable objects is considerably easier, since you can just compare 2 versions of the object

#### Determining When to Re-Render in React

- The main benefit of immutability is that it helps you build **pure components** in React
- Immutable data can easily determine if changes have been made, which helps to determine when a component requires re-rendering
- More information [here](https://reactjs.org/docs/optimizing-performance.html#examples)

### Function Components

- Function components are a simpler way to write components that only contain a render method and don’t have their own state
- Instead of defining a class which extends React.Component, we can write a function that takes props as input and returns what should be rendered
- Function components are less tedious to write than classes, and many components can be expressed this way

```Js
function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}
```

We have changed ```this.props``` to ```props``` both times it appears and ```onClick={() => this.props.onClick()}``` to a shorter ```onClick={props.onClick}```.

### Adding Time Travel

- If we mutated the squares array, implementing time travel would be very difficult.
- However, we used ```slice()``` to create a new copy of the squares array after every move, and treated it as immutable.
- This will allow us to store every past version of the squares array, and navigate between the turns that have already happened.

Storing the array in the history array (nested array):

```Js
history = [
  // Before first move
  {
    squares: [
      null, null, null,
      null, null, null,
      null, null, null,
    ]
  },
  // After first move
  {
    squares: [
      null, null, null,
      null, 'X', null,
      null, null, null,
    ]
  },
  // After second move
  {
    squares: [
      null, null, null,
      null, 'X', null,
      null, null, 'O',
    ]
  },
  // ...
]
```

Because of this we lift up the game state from the Board component to the game component.
