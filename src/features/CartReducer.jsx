import Swal from "sweetalert2";

const CartReducer = (state, action) => {
  let updatedCart;
  switch (action.type) {
    case "Add":
     { const existingProduct = state.find(item => item.id === action.products.id);
      if (existingProduct) {
       
        updatedCart = state.map(item =>
          item.id === action.products.id
            ? {
                ...item,
                quantity: item.quantity + action.products.quantity,
                totalPrice: (item.quantity + action.products.quantity) * item.price, // Update total price
              }
            : item
        );
        action.callback && action.callback(true); // Notify product updated
      } else {
        updatedCart = [
          ...state,
          {
            ...action.products,
            totalPrice: action.products.quantity * action.products.price, // Add total price
          },
        ];
        action.callback && action.callback(false);
      }
      localStorage.setItem("cart", JSON.stringify(updatedCart)); // Save to localStorage
      return updatedCart;
    }
    case "INCREASE":
      updatedCart = state.map(item =>
        item.id === action.id
          ? {
              ...item,
              quantity: item.quantity + 1,
              totalPrice: (item.quantity + 1) * item.price, // Update total price
            }
          : item
      );
      localStorage.setItem("cart", JSON.stringify(updatedCart)); // Save to localStorage
      return updatedCart;

    case "DECREASE":
      updatedCart = state.map(item =>
        item.id === action.id && item.quantity > 1
          ? {
              ...item,
              quantity: item.quantity - 1,
              totalPrice: (item.quantity - 1) * item.price, // Update total price
            }
          : item
      );
      localStorage.setItem("cart", JSON.stringify(updatedCart)); // Save to localStorage
      return updatedCart;

    case "REMOVE":
      
      updatedCart = state.filter(item => item.id !== action.id);
      localStorage.setItem("cart", JSON.stringify(updatedCart)); // Save to localStorage
      return updatedCart;


    default:
      return state;
  }
};

export default CartReducer;
