import React from "react";
import { FaPaperPlane, FaPhoneVolume, FaClock, FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { toast } from "react-toastify";
import "./Contact.css";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    // Web3Forms Access Key
    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      toast.success("Message sent successfully!");
      event.target.reset();
    } else {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <section className="contact-page-section">
      <div className="contact-hero">
        <h1 className="hero-title">Contact <span className="highlight">Us</span></h1>
        <p className="hero-subtitle">Have a question? We'd love to hear from you. Reach out via the form below, call us, or visit our school..</p>
      </div>

      <div className="contact-container">
        <div className="contact-main-grid">
          <div className="contact-visual-side">
            <div className="white-icon-circle">
              <MdEmail className="hero-white-icon" />
            </div>
          </div>

          {/* 3. Right Side: Web3Form */}
          <div className="contact-glass-form">
            <h3 className="form-top-text">Feel free to reach us</h3>
            <form onSubmit={onSubmit}>
              <div className="form-grid">
                <div className="input-box">
                  <input type="text" name="name" required placeholder="Your Name" />
                </div>
                <div className="input-box">
                  <input type="email" name="email" required placeholder="Email Address" />
                </div>
              </div>
              <div className="input-box">
                <input type="text" name="subject" placeholder="Subject" />
              </div>
              <div className="input-box">
                <textarea name="message" required placeholder="How can we help you?"></textarea>
              </div>
              <button type="submit" className="submit-btn">
                Send Message <FaPaperPlane />
              </button>
            </form>
          </div>
        </div>
        <div className="info-details-row">
          <div className="info-card">
            <FaLocationDot className="info-icon" size={50} />
            <h4>Our Address</h4>
            <p>Lucky Summer, Estate Office, Nairobi, Kenya</p>
          </div>
          <div className="info-card">
            <FaClock className="info-icon" size={50} />
            <h4>Working Hours</h4>
            <p>Mon - Sat: 8:00 AM - 6:00 PM</p>
            <p>Sunday: Support Only</p>
          </div>
          <div className="info-card">
            <FaPhoneVolume className="info-icon" size={50} />
            <h4>Quick Call</h4>
            <p>+254 793 888 552</p>
          </div>
        </div>
      </div>
      <div className="map-wrapper">
        <iframe 
          title="HomeNet Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.51590835905!2d36.894273!3d-1.243555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1437340e678b%3A0x6b432924f0c4a4f2!2sLucky%20Summer%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1712345678901!5m2!1sen!2ske" 
          width="100%" 
          height="450" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;