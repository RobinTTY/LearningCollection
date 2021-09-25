// We use useReducer since the managed state is a bit more complex (we have to check certain things, etc.)
import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return {
        items: [...state.items, action.item],
        totalAmount: state.totalAmount + action.item.price,
      };
    case "REMOVE":
      return {
        items: state.items.filter((item) => item.id !== action.item.id),
        totalAmount: state.totalAmount - action.item.price,
      };
  }
};

/**
 * Manages the cart context data. Provides the context to the components that need it.
 * @param {*} props
 */
const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({
      type: "ADD",
      item: item,
    });
  };

  const removeItemFromCartHandler = (item) => {
    dispatchCartAction({
      type: "REMOVE",
      item: item,
    });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  // Components that need access to the cart context can be wrapped with the CartProvider component
  // since they are added through props.children as children of the CartContext.Provider component.
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
