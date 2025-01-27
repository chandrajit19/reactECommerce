import { useContext, useState } from "react";
import style from "./Product.module.css";
import PropTypes from "prop-types";
import { CartContext } from "../features/ContextProvider";
function Product({ products }) {
  const {name, price, stock, category, image, description } = products;

  // Access cart and dispatch from context
  const { dispatch, showToast } = useContext(CartContext);

  // Local state for quantity
  const [quantity, setQuantity] = useState(1);

  // Handle Increase
  const handleIncrease = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  // Handle Decrease
  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  // const { disp showToast } = useContext(CartContext); // showToast access kara maine

  // const addToCart = () => {
  //   dispatch({type: "Added"})
  //   showToast("Item added to cart!"); // Toast message
  // };
  return (    <>
     
   
   <div className={`card ${style.cardContainer}`}>
      <div className="card-header bg-white">
        {category}
        <img
          src={image}
          className={`card-img-top img-fluid ${style.customImg}`}
          alt="Card image"
        />
      </div>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text">
          Price: ₹{price} <span className="text-decoration-line-through">{price * 2}</span>
        </p>
        <p className="card-text">
          Total stock available: <span>{stock}</span>
        </p>

        <div className={style.quanitySec}>
          <div>Quantity</div>
          <div className={style.buttonToogle}>
            {/* Decrease Button */}
            <button onClick={handleDecrease} disabled={quantity <= 1}>
              -
            </button>

            {/* Display Quantity */}
            <span>{quantity}</span>

            {/* Increase Button */}
            <button onClick={handleIncrease} disabled={quantity >= stock}>
              +
            </button>
          </div>
        </div>
      </div>
      <div className="card-footer text-muted">
        <button
          className="btn btn-dark"
          onClick={() =>{
            dispatch({
              type: "Add",
              products: { ...products, quantity },
              callback: (isUpdated) => {
                if (isUpdated) {
                  showToast("Product quantity updated!");
                  // Show notification for update
                } else {
                  showToast("Item added to cart!"); // Toast message
                  // Show notification for addition
                }
              },
            })
            // addToCart();
          }
          }
        >
          <i className="bi bi-cart4 pe-2"></i>Add to cart
        </button>
      </div>
     
    </div>  
     
  </>
  
  );
}
// prop validation
Product.propTypes={
  products: PropTypes.object,
}

export default Product;
