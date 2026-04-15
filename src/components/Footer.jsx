import React, { useState } from "react";
import "./Footer.css";
import { BsFacebook, BsTwitter, BsInstagram, BsGithub } from "react-icons/bs";
import {
  FaSquarePhone,
  FaLocationDot,
  FaEnvelope,
  FaChevronRight,
} from "react-icons/fa6";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

function Footer() {
  const [email, setEmail] = useState("");
  const currentYear = new Date().getFullYear();

  const notify = (event) => {
    event.preventDefault();
    if (email.trim() === "") return;
    toast.success("Subscribed to HomeNet!");
    setEmail("");
  };

  return (
    <footer className="homenet-footer">
      <div className="footer-contact-strip">
        <div className="strip-container">
          <div className="contact-info-left">
            <span>
              <FaEnvelope /> info@homenet.com
            </span>
            <span>
              <FaLocationDot /> Lucky Summer, Nairobi, KE
            </span>
          </div>
          <div className="social-icons-right">
            <a href="#">
              <BsFacebook />
            </a>
            <a href="#">
              <BsTwitter />
            </a>
            <a href="#">
              <BsInstagram />
            </a>
            <a href="#">
              <BsGithub />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-main-container">
        <div className="footer-middle-row">
          <div className="brand-logo-area">
            <h2 className="footer-logo">
              Home
              <span className="text-brand-orange">Net</span>
            </h2>
          </div>

          <div className="subscription-box">
            <form onSubmit={notify}>
              <div className="input-group">
                <FaEnvelope className="input-icon" />
                <input
                  type="email"
                  placeholder="Enter Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit">Subscribe Now</button>
              </div>
            </form>
          </div>

          <div className="emergency-call">
            <div className="call-icon-circle">
              <FaSquarePhone />
            </div>
            <div className="call-text">
              <small>Call Support</small>
              <strong>+254 793 888 552</strong>
            </div>
          </div>
        </div>

        <hr className="footer-divider" />

        <div className="footer-bottom-grid">
          <div className="footer-col">
            <h3>About HomeNet</h3>
            <p>
              Providing high-speed residential WiFi and digital logistics
              solutions across Nairobi with 99.9% uptime.
            </p>
            <Link to="/contact" className="get-touch-btn">
              Get In Touch <FaChevronRight size={12} />
            </Link>
          </div>

          <div className="footer-col">
            <h3>Our Services</h3>
            <ul>
              <li>Blazing Speeds</li>
              <li>Neflix</li>
              <li>Smart Connectivity</li>
              <li>24/7 Support</li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#plans">Our Plans</a>
              </li>
              <li>
                <a href="#faqs">FAQs</a>
              </li>
              <li>
                <a href="#contact">Contacts</a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>Our Gallery</h3>
            <div className="gallery-grid">
              <div
                className="gallery-item"
                style={{ background: "#333" }}
              ></div>
              <div
                className="gallery-item"
                style={{ background: "#444" }}
              ></div>
              <div
                className="gallery-item"
                style={{ background: "#555" }}
              ></div>
              <div
                className="gallery-item"
                style={{ background: "#222" }}
              ></div>
              <div
                className="gallery-item"
                style={{ background: "#666" }}
              ></div>
              <div
                className="gallery-item"
                style={{ background: "#777" }}
              ></div>
            </div>
          </div>
        </div>

        <div className="footer-copyright">
          <p>© Copyright {currentYear} by HomeNet. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
