import CartContext from "./cart-context";

/**
 * Manages the cart context data. Provides the context to the components that need it.
 * @param {*} props
 */
const CartProvider = (props) => {
  const addItemToCartHandler = (item) => {};

  const removeItemFromCartHandler = (item) => {};

  const cartContext = {
    items: [],
    totalAmount: 0,
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
