// import IMAGE_5 from "../assets/IMAGE_5";
import image_5 from "../assets/IMAGE_5.png";
import "./About.css";

const About = () => {
  return (
    <section className="about-section bg-brand-navy">
      <div className="container">
        <div className="about-content">
          <span className="subtitle">Who We Are</span>
          <h2 className="title">Empowering people through technology</h2>
          <p className="description">
            With over 15 years of experience in the industry, our team is
            dedicated to providing reliable, affordable WiFi solutions tailored
            to your needs. We pride ourselves on offering competitive prices and
            exceptional, 24/7 support.
          </p>
          <button className="cta-button">Sign Up Now</button>
        </div>

        <div className="about-image">
          <img src={image_5} alt="Our team working on technology" />
        </div>
      </div>
    </section>
  );
};

export default About;
