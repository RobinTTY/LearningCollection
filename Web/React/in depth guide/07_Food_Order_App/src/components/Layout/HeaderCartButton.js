import { useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const cartContext = useContext(CartContext);

  const numberOfCartItems = cartContext.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${
    btnIsHighlighted ? classes.bump : ""
  }`;

  // handle the button bump effect when an item is added to the cart
  useEffect(() => {
    if (cartContext.items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);
    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    // cleanup function through return
    return () => {
      clearTimeout(timer);
    };
  }, [cartContext.items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
