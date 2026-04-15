import React, { useState } from "react";
import "./Footer.css";
import { BsFacebook, BsTwitter, BsInstagram, BsGithub } from "react-icons/bs";
import { FaSquarePhone, FaSquareWhatsapp, FaLocationDot } from "react-icons/fa6";

function Footer() {
  const [email, setEmail] = useState("");
  const currentYear = new Date().getFullYear();

  const handleSubmit = (event) => {
    event.preventDefault(); 
    if (email.trim() === "") {
      alert("Please enter a valid email address.");
      return;
    }
    alert("You have successfully subscribed to our newsletter!");
    setEmail("");
  };

  return (
    <footer className="custom-footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand-section">
            <h2 className="footer-logo">
              Home<span>Net.</span>
            </h2>
            <p>
              Bringing high-speed connectivity to your doorstep with reliability and style.
            </p>
            <div className="social-links">
              <a href="#" aria-label="Facebook"><BsFacebook /></a>
              <a href="#" aria-label="Instagram"><BsInstagram /></a>
              <a href="#" aria-label="Twitter"><BsTwitter /></a>
              
            </div>
          </div>
          <div className="footer-links-grid">
            <div className="link-group">
              <h3>Useful Links</h3>
              <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#whyHomeNet">Why HomeNet</a></li>
                <li><a href="#plans">Plans</a></li>
                <li><a href="#faqs">FAQs</a></li>
              </ul>
            </div>
            <div className="link-group">
              <h3>Support</h3>
              <div className="contact-info">
                <p><FaSquarePhone className="icon" /> +254 793 888 552</p>
                <p><FaSquareWhatsapp className="icon" /> +254 742 651 520</p>
                <p><FaLocationDot className="icon" /> Lucky Summer, Nairobi</p>
              </div>
            </div>
          </div>
          <div className="footer-newsletter">
            <h3>Stay Updated</h3>
            <p>Subscribe for exclusive coverage updates and tech news.</p>
            <form className="newsletter-form" onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit">Join</button>
            </form>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {currentYear} HomeNet Inc. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;