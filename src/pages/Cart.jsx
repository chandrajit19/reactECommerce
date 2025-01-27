import { useContext } from "react";
import { CartContext } from "../features/ContextProvider";
import CartProduct from "../components/CartProduct";
import style from "./Cart.module.css";

function Cart() {
  const { cart } = useContext(CartContext);

  // Calculating subtotal
  const subtotal = cart.reduce((acc, item) => acc + item.totalPrice, 0);
  const tax = 70;
  const finalTotal = subtotal + tax;

  return (
    <>
      <div className={`container ${style.cartContainer}`}>
      
        {cart.length === 0 ? (
          <div className={`text-center alert  mt-5 mb-5 ${style.alertBox}`}>
            <h4>Your cart is empty!</h4>
            <p>Add some products to see them here.</p>
          </div>
        ) : (
         
          cart.map((p) => (
            <div key={p.id}>
              <CartProduct cartProduct={p} />
            </div>
          ))
        )}
      </div>

  
      {cart.length > 0 && (
        <div className={`container ${style.summaryBox}`}>
          <div className="row d-flex justify-content-end mb-5 mt-5">
            <div className="col-md-6 col-sm-6 bg-dark-subtle p-4">
              <p>Selected total product summary</p>
              <div className="d-flex justify-content-between">
                <span>Sub total:</span>
                <span>₹{subtotal}</span>
              </div>
              <div className="d-flex justify-content-between">
                <span>Tax:</span>
                <span>₹{tax}</span>
              </div>
              <hr />
              <div className="d-flex justify-content-between">
                <span>Final total:</span>
                <span>₹{finalTotal}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Cart;
