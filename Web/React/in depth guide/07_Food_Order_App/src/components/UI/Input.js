import classes from "./Input.module.css";
const Input = (props) => {
  // The {...props.input} on the input element ensures that all kvp in props.input are added as props to input
  // e.g if the input object contains input.type = 'text', then type='text' will be added to the input element
  // Reference: https://reactjs.org/docs/jsx-in-depth.html#spread-attributes, it is recommended to use this
  // pattern sparingly, so you don't add unnecessary or even invalid attributes to the DOM
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input {...props.input} />
    </div>
  );
};

export default Input;
