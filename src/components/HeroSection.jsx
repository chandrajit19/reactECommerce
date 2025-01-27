import { NavLink} from "react-router-dom"
import style from "./HeroSection.module.css";

function HeroSection() {
  return (
    <section className={style.heroSection}>
      <div className={`container ${style.heroContent}`}>
        <div className={style.textContent}>
          <h1 className={style.fadeInDown}>Discover the Future</h1>
          <p className={style.fadeInUp}>
            Explore our exclusive collection of premium products tailored to
            meet your every need. Shop now and experience excellence!
          </p>
          <button className=" border border-0 rounded" >
           <NavLink className={`${style.ctaButton} ${style.fadeInUp}`} to={"/products"}>  Explore Now</NavLink>
          </button>
        </div>
        <div className={style.imageContent}>
          <img
            src="././public/future-img.png"
            alt="Hero"
            className={style.image}
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
