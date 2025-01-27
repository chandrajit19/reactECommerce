import Swal from "sweetalert2"
import Footer from "./components/Footer"
import NavBar from "./components/NavBar"
import ToastNotification from "./components/ToastNotification"
import About from "./pages/About"
import Cart from "./pages/Cart"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import Products from "./pages/Products"
import {Routes, Route} from "react-router-dom"

function App() {


  return (<> 
     <NavBar/>   
     <ToastNotification/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/contact"  element={<Contact/>} />
      <Route path="/products"    element={<Products/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/cart"    element={<Cart/>}/>
     </Routes>
     <Footer/>
    </>
  )
}

export default App
