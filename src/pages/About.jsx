
import style from "./About.module.css";

function About() {
  return (
    <div className={style.aboutContainer}>
      {/* Hero Section */}
      <section className={style.heroSection}>
        <div className={style.heroContent}>
          <h1 className={`${style.fadeInDown}`}>About Us</h1>
          <p className={`${style.fadeInUp}`}>
            We are passionate about delivering innovative solutions that make a
            difference.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className={style.missionSection}>
        <div className={`container ${style.missionContent}`}>
          <div className="row">
            <div className="col-md-6 text-center mt-5">
              <h2 className={`${style.fadeInLeft}`}>Our Mission</h2>
              <p className={`${style.fadeInLeft}`}>
                Our mission is to empower individuals and businesses with
                top-notch solutions tailored to meet their needs. We strive for
                excellence and innovation in every project we undertake.
              </p>
            </div>
            <div className="col-md-6 text-center mt-5">
              <img
               src="././public/our-mission.png"
                alt="Our Mission"
                className={`${style.image} ${style.fadeInRight}`}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className={style.teamSection}>
        <div className={`container ${style.teamContent}`}>
          <h2 className={`${style.fadeInDown}`}>Meet Our Team</h2>
          <div className={`row ${style.teamRow}`}>
            <div className={`col-md-4 ${style.teamMember}`}>
              <img
                src="././public/person-3.png"
                alt="Team Member"
                className={style.image}
              />
              <h5>Er. Chandrajit</h5>
              <p>CEO & Founder</p>
            </div>
            <div className={`col-md-4 ${style.teamMember}`}>
              <img
                src="././public/person-4.png"
                alt="Team Member"
                className={style.image}
              />
              <h5>Er. Ayush</h5>
              <p>CTO</p>
            </div>
            <div className={`col-md-4 ${style.teamMember}`}>
              <img
                src="././public/person-2.png"
                alt="Team Member"
                className={style.image}
              />
              <h5>Sr. Devesh</h5>
              <p>Head of Design</p>
            </div>
          </div>
        </div>
      </section>

    
    </div>
  );
}




export default About