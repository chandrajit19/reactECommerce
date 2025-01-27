import{ useContext } from 'react'
import style from "./CartProduct.module.css"
import { CartContext } from '../features/ContextProvider'
import PropTypes from 'prop-types'
import Swal from 'sweetalert2'
function CartProduct({cartProduct}) {
  const  { dispatch}=useContext(CartContext)
    const {id, name,  stock,  image, quantity, totalPrice}=cartProduct
               

    const handleDelete = (id) => {
      Swal.fire({
        title: 'Are you sure?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'Cancel',
      }).then((result) => {
        if (result.isConfirmed) {
          dispatch({ type: "REMOVE", id }); // Dispatch the action to reducer
          Swal.fire('Deleted!', 'Your item has been deleted.', 'success');
        } else {
          Swal.fire('Cancelled', 'Your item is safe!', 'info');
        }
      });
    };
    



  return (<>

      <div className={` ${style.cartRow} `}>
     
          <div className=" d-flex align-items-center">
            <img src={image} alt={name} className={`img-fluid ${style.cartImage}`} />
            <h5>{name}</h5>
          </div>

      
          <div className="">
          
            <p className="mb-0">Price: ₹{totalPrice}</p>
          </div>

          <div className="d-flex align-items-center justify-content-between">
            <button className="btn btn-outline-secondary btn-sm"   
            onClick={() => dispatch({ type: "DECREASE", id:id })} disabled={quantity <= 1}>-</button>

            <span className="mx-2">{quantity}</span>

            <button className="btn btn-outline-secondary btn-sm"  
            onClick={() => dispatch({ type: "INCREASE", id:id })}
            disabled={quantity >=stock}>+</button>
          </div>

        
          <div className="text-end">
            <button className="btn btn-danger btn-sm" onClick={()=>
            {
              handleDelete(id)
  
            }}
            >Remove</button>
          </div>
        </div>

       
  </>
  )
}
CartProduct.propTypes={
  cartProduct: PropTypes.object
}
export default CartProduct