# Styling React Components

## Dynamic styling

We can dynamically apply styles to components using the className property:

Styles in `CourseInput.css`:

```CSS
.form-control.invalid input {
  border-color: red;
  background: #ffd7d7;
}

.form-control.invalid label {
  color: red;
}
```

Applying it inside the JSX through the className property:

```JSX
const CourseInput = (props) => {
  ...

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!isValid ? "invalid" : ""}`}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};
```

## Isolating styles to a component using Styled Components

The library [Styled Components](https://github.com/styled-components/styled-components) allows you to scope styles to a component. Instead of using a css file like this:

```CSS
.button {
  font: inherit;
  padding: 0.5rem 1.5rem;
  border: 1px solid #8b005d;
  color: white;
  background: #8b005d;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
  cursor: pointer;
}

.button:focus {
  outline: none;
}

.button:hover,
.button:active {
  background: #ac0e77;
  border-color: #ac0e77;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
}
```

You just write you CSS directly in the js file:

```JSX
import styled from "styled-components";

// tagged template literal (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
// for details on how this works see: https://styled-components.com/docs
const Button = styled.button`
  font: inherit;
  padding: 0.5rem 1.5rem;
  border: 1px solid #8b005d;
  color: white;
  background: #8b005d;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &:hover,
  &:active {
    background: #ac0e77;
    border-color: #ac0e77;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
  }
`;

// old component syntax
// const Button = props => {
//   return (
//     <button type={props.type} className="button" onClick={props.onClick}>
//       {props.children}
//     </button>
//   );
// };

export default Button;

```

### Using dynamic styles

We can also dynamically apply styles based upon props on the elements with the "Styled Components" library. This is done like this:

```JSX
const FormControl = styled.div`
  margin: 0.5rem 0;

  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
    color: ${(props) => (props.invalid ? "red" : "black")};
  }

  & input {
    display: block;
    width: 100%;
    border: 1px solid ${(props) => (props.invalid ? "red" : "#ccc")};
    background: ${(props) => (props.invalid ? "#ffd7d7" : "transparent")};
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
  }

  & input:focus {
    outline: none;
    background: #fad0ec;
    border-color: #8b005d;
  }

  // We don't need these anymore since we dynamically apply the styles above
  // &.invalid input {
  //   border-color: red;
  //   background: #ffd7d7;
  // }

  // &.invalid label {
  //   color: red;
  // }
`;

// here we set the invalid prop
const CourseInput = (props) => {
  ...
  return (
    <form onSubmit={formSubmitHandler}>
      <FormControl invalid={!isValid}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </FormControl>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};
```

## Isolating styles to a component using CSS Modules

Another way to scope styles to a component is to use [CSS Modules](https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/). In this approach we keep our CSS in a separate file and import it into our JSX file in a special way:

```JSX
// We name our file with the .module extension
import styles from "./Button.module.css";

// then we can use the style in our component
const Button = (props) => {
  return (
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};
```

In the DOM the component now looks like this:

```HTML
<button type="submit" class="Button_button__plK1F">Add Goal</button>
```

The style is applied through the class "Button_button\_\_plK1F". The naming consists of "\<component-name>\_\<style-name>\_\_\<unique-hash>".

If you have styles in your CSS with names like "form-control" where a dash is in the name, you need to access them like this: `styles["form-control"]`.

Adding a conditional style can be done like this:

```JSX
return (
  <form onSubmit={formSubmitHandler}>
    <div
      className={`${styles["form-control"]} ${!isValid ? styles.invalid : ""}`}
    >
      <label>Course Goal</label>
      <input type="text" onChange={goalInputChangeHandler} />
    </div>
    <Button type="submit">Add Goal</Button>
  </form>
);
```
