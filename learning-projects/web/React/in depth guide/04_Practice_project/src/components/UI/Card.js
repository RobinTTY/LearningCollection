import classes from "./Card.module.css";

// returns a wrapper div through props.children. Also applies the card styling class and the styling class passed down through props (className prop)
const Card = (props) => {
  return (
    <div className={`${classes.card} ${props.className}`}>{props.children}</div>
  );
};

export default Card;
