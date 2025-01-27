import Swal from "sweetalert2";
import HeroSection from "../components/HeroSection"
function Home() {

  window.onload = function () {
    // Check if 'visited' key exists in localStorage
    if (!localStorage.getItem('visited')) {
      // Show SweetAlert2 pop-up
      Swal.fire({
        title: '<i>You can visit my portfolio </i>',
        html: '<a href="https://chandrajit19.github.io/My-portfolio/"><b>Here<b/></a>',
        imageUrl: './public/chandrajit.png',
        imageWidth: 50,
        imageHeight: 50,
        width: '40%',
      });
  
      // Set 'visited' key in localStorage
      localStorage.setItem('visited', true);
    }
  };
  

  return (<>
          <HeroSection/>
  </>
  )
}

export default Home