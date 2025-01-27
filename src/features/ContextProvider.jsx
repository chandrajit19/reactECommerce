import { createContext, useReducer, useEffect, useState } from "react";
import CartReducer from "./CartReducer";
import PropTypes from "prop-types";
export const CartContext = createContext();

function ContextProvider({ children }) {
  // Cart state
  const initialCart = JSON.parse(localStorage.getItem("cart")) || [];
  const [cart, dispatch] = useReducer(CartReducer, initialCart);

  // Toast state
  const [toast, setToast] = useState({ show: false, message: "" });

  // Update localStorage whenever the cart changes
  useEffect(() => {
    const cartWithTotalPrice = cart.map((item) => ({
      ...item,
      totalPrice: item.price * item.quantity, // Add totalPrice for each item
    }));
    localStorage.setItem("cart", JSON.stringify(cartWithTotalPrice));
  }, [cart]);

  // function to show
  const showToast = (message) => {
    setToast({ show: true, message });
    setTimeout(() => setToast({ show: false, message: "" }), 1500); // 1.5 seconds ke baad hide
  };

  return (
    <CartContext.Provider value={{ cart, dispatch, toast, showToast }}>
      {children}
    </CartContext.Provider>
  );
}

ContextProvider.propTypes={
  children:PropTypes.object
}
export default ContextProvider;
