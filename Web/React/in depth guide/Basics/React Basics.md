# React Basics

## Creating a new project

To create a new React project we simply use the following command:

```bash
npx create-react-app <app-name>
```

## Structure of a React project

A very basic React project will look something like this:

![ProjectStructure](./resources/ReactProjectStructure.PNG)

### index.js

The entry point of our React application.
Looks something like this:

```JSX
import ReactDOM from 'react-dom';

// would not work in plain javascript, there is no import of css files there
import './index.css';
import App from './App';

// the app component gets inserted into the DOM inside the 'root' element
ReactDOM.render(<App />, document.getElementById('root'));
```

### index.html

Imports our React application and defines the root element where the application will be injected.
Looks something like this:

```HTML
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Web site created using create-react-app"
    />
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <title>React App</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
  </body>
</html>
```

### App.js

Our root React component (a function component to be precise). It looks like this:

```JSX
function App() {
  // JSX syntax
  return (
    <div>
      <h2>Let's get started!</h2>
    </div>
  );
}

export default App;
```

## Creating a custom component

A very basic custom component might look like this:

```JSX
function ExpenseItem() {
  return (
    <div>
      <div>Date</div>
      <div>
        <h2>Title</h2>
        <div>Amount</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
```

**Custom components must start with a capital letter** and are usually saved under a folder named 'components' in the project's src folder.

### Applying css to the component

If we want to add css styling to our component we need to import the css file like this:

```JSX
import ExpenseItem from "./components/ExpenseItem";

function App() {
  return (
    // instead of class we should use className here to reference the css classes.
    <div className="expense-item">
    ...
```

### JSX interpolation

Like with many other languages we can use interpolation with JSX.
This may look something like this:

```JSX
function ExpenseItem() {
  const expenseDate = new Date(2021, 2, 28);
  const expenseTitle = "Car Insurance";
  const expenseAmount = 294.67;

  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
    </div>
  );
}
```

### Using props

Props are arguments passed into React components. Props are passed to components via HTML attributes.
This looks like this:

```JSX
// Inside the parent component (App)
function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      // passing in the props
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseItem>
    </div>
  );
}

// Inside the component which consumes the props (ExpenseItem)
function ExpenseItem(props) {
  return (
    <div className="expense-item">
      // using the props
      <div>{props.date.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}
```
