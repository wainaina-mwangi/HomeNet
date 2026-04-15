import React, { useState } from "react";
import "./Footer.css";
import { motion } from "framer-motion";
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

  
  const galleryImages = [
    "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=300&q=80", // Server/Network
    "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&w=300&q=80", // Fiber Optics
    "https://images.unsplash.com/photo-1551703599-6b3e8379aa8c?auto=format&fit=crop&w=300&q=80", // Modern Router
    "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=300&q=80", // Tech Circuit
    "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=300&q=80", // Cybersecurity/Data
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=300&q=80", // Digital Globe
  ];

  const notify = (event) => {
    event.preventDefault();
    if (email.trim() === "") return;
    toast.success("Subscribed to HomeNet!");
    setEmail("");
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <footer className="homenet-footer">
      <motion.div
        className="footer-contact-strip"
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        transition={{ duration: 0.8, ease: "anticipate" }}
      >
        <div className="strip-container">
          <div className="contact-info-left">
            <span><FaEnvelope /> info@homenet.com</span>
            <span><FaLocationDot /> Lucky Summer, Nairobi, KE</span>
          </div>
          <div className="social-icons-right">
            {[BsFacebook, BsTwitter, BsInstagram, BsGithub].map((Icon, idx) => (
              <motion.a
                key={idx}
                href="#"
                whileHover={{ scale: 1.3, color: "#eb965d" }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon />
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>

      <div className="footer-main-container">
        <div className="footer-middle-row">
          <motion.div
            className="brand-logo-area"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            <h2 className="footer-logo">
              Home<span className="text-brand-orange">Net</span>
            </h2>
          </motion.div>

          <motion.div
            className="subscription-box"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <form onSubmit={notify}>
              <div className="input-group">
                <FaEnvelope className="input-icon" />
                <input
                  type="email"
                  placeholder="Enter Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <motion.button
                  type="submit"
                  whileHover={{ backgroundColor: "#1d4ed8", color: "#fff" }}
                  whileTap={{ scale: 0.95 }}
                >
                  Subscribe Now
                </motion.button>
              </div>
            </form>
          </motion.div>

          <motion.div className="emergency-call" whileHover={{ scale: 1.05 }}>
            <div className="call-icon-circle">
              <FaSquarePhone />
            </div>
            <div className="call-text">
              <small>Call Support</small>
              <strong>+254 793 888 552</strong>
            </div>
          </motion.div>
        </div>

        <hr className="footer-divider" />

        <motion.div
          className="footer-bottom-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div className="footer-col" variants={itemVariants}>
            <h3>About HomeNet</h3>
            <p>Providing high-speed residential WiFi solutions across Nairobi with 99.9% uptime.</p>
            <Link to="/contact">
              <motion.button className="get-touch-btn" whileHover={{ x: 5 }}>
                Get In Touch <FaChevronRight size={12} />
              </motion.button>
            </Link>
          </motion.div>

          <motion.div className="footer-col" variants={itemVariants}>
            <h3>Our Services</h3>
            <ul>
              {["Blazing Speeds", "Netflix", "Smart Connectivity", "24/7 Support"].map((item) => (
                <motion.li key={item} whileHover={{ x: 5, color: "#eb965d" }}>{item}</motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div className="footer-col" variants={itemVariants}>
            <h3>Quick Links</h3>
            <ul>
              {["About Us", "Our Plans", "FAQs", "Contacts"].map((link) => (
                <motion.li key={link} whileHover={{ x: 5, color: "#eb965d" }}>
                  <a href={`#${link.toLowerCase().replace(" ", "")}`}>{link}</a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div className="footer-col" variants={itemVariants}>
            <h3>Our Gallery</h3>
            <div className="gallery-grid">
              {galleryImages.map((src, i) => (
                <motion.div
                  key={i}
                  className="gallery-item"
                  whileHover={{ scale: 1.1, zIndex: 10 }}
                  style={{ 
                    backgroundImage: `url(${src})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="footer-copyright"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <p>© Copyright {currentYear} by HomeNet. All Rights Reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;