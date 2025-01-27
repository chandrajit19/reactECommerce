import 'bootstrap-icons/font/bootstrap-icons.css';
import style from './NavBar.module.css'
import { Link } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { CartContext } from '../features/ContextProvider';
function NavBar() {

  const {cart}=useContext(CartContext)
 
  useEffect(() => {
    const options = {
      strings: ["Live Better!", "Stay Young!"], // Text to display
      typeSpeed: 80, // Typing speed
      loop: true,    // Loop the animation
    };

    const typed = new Typed("#type-it", options);

    // Cleanup the Typed instance on component unmount
    return () => {
      typed.destroy();
    };
  }, []);
   
 
  return (
    <>
      <div className="container">
        <nav className={`navbar navbar-expand-sm bg-dark navbar-dark fixed-top  ${style.navContainer}`}>
          <div className="container-fluid">
            {/* Navbar Brand or Title */}
            <p className="text-white m-0" >Shop Smart, <span id="type-it">Live Better!</span></p>

            {/* Toggle Button for Mobile */}
            <button
              className="navbar-toggler"
              data-bs-toggle="collapse"
              data-bs-target="#myNav"
              type="button"
              
            >
              <span className="navbar-toggler-icon" ></span>
            </button>

            {/* Collapsible Navigation Menu */}
            <div id="myNav" className="collapse navbar-collapse justify-content-end">
              <ul className={`navbar-nav d-flex align-items-center ${style.navigation}`}>
                <li className="nav-item">
                  <Link to={"/"} className="nav-link">
                    Home
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to={"/about"} className="nav-link">
                    About
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to={"/contact"} className="nav-link">
                    Contact
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to={"/products"} className="nav-link">
                    Products
                  </Link>
                </li>

                {/* Cart Icon */}
                <li className="nav-item ">
                  <Link to={"/cart"} className={`nav-link `}>
                    <i className={`bi bi-cart2 fs-2 position-relative`}></i>
                     <span className={style.cartBadge}>{cart.length}</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default NavBar;