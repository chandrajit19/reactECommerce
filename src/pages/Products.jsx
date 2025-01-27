import { useState } from 'react'
import Data from '../../Data.json'
import Product from '../components/Product'
import style from './Products.module.css'
function Products() {
const [products, setProducts]=useState((Data))


return (
    <>
      <div className={`container d-flex justify-content-center ${style.productContainer}`}>
        <div className="row d-flex justify-content-center">
        
          {products.map((object) => (
            <div key={object.id} className="col-md-4 col mb-4 ">
              <Product products={object} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
  
}

export default Products