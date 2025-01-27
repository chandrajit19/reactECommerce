import { Link } from "react-router-dom"
import style from "./Footer.module.css"

function Footer() {
  return (<>

<footer className={`bg-dark text-white  ${style.footerContainer}`}>

  <div className="container">
    <div className="row">
  
      <div className="col-md-3 col-sm-6 mb-4">
        <h5>About Us</h5>
        <p className="small">
          We are dedicated to providing the best services and products to our customers. Our mission is to deliver quality and innovation in every aspect of our work.
        </p>
      </div>

  
      <div className="col-md-3 col-sm-6 mb-4">
        <h5>Quick Links</h5>
        <ul className="list-unstyled">
          <li><Link to={"/"} className="text-white text-decoration-none">Home</Link></li>
          <li><Link to={"/products"} className="text-white text-decoration-none">Services</Link></li>
          <li><Link to={"/about"} className="text-white text-decoration-none">About</Link></li>
          <li><Link to={"/contact"} className="text-white text-decoration-none">Contact</Link></li>
        </ul>
      </div>

    
      <div className="col-md-3 col-sm-6 mb-4">
        <h5>Contact Us</h5>
        <ul className="list-unstyled">
          <li><i className="bi bi-telephone pe-2"></i><a href="tel:+917525890345">+917525890345</a></li>
          <li><i className="bi bi-envelope pe-2"></i><a href="mailto:chandrajit127@.com">chandrajit127@.com</a></li>
          <li><i className="bi bi-geo-alt pe-2"></i>123 Main Street, Haridwar, India</li>
        </ul>
      </div>


      <div className="col-md-3 col-sm-6 mb-4">
        <h5>Subscribe to Our Newsletter</h5>
        <form>
          <div className="input-group d-flex ">
            <input type="email" className="me-4 mb-2 border rounded" placeholder="Enter your email" aria-label="Email" required aria-describedby="subscribe-btn" />
            <button className="btn btn-primary mb-2 rounded" type="button" id="subscribe-btn">Subscribe</button>
          </div>
        </form>
      </div>
    </div>

  
    <div className="text-center pt-3">
      <p className="small mb-0">
      
      © 2025 Copyright all right reserved | Developed By <a href="https://chandrajit19.github.io/My-portfolio/" 
      style={{fontFamily:"cursive"}}>Chandrajit</a>

      </p>
    </div>
  </div>
</footer>


  </>
  )
}

export default Footer