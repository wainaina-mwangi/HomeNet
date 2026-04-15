import React, { useState } from "react";
import "./Footer.css";
import { motion } from "framer-motion";
import { BsFacebook, BsTwitter, BsInstagram, BsGithub } from "react-icons/bs";
import {
  FaSquarePhone,
  FaSquareWhatsapp,
  FaLocationDot,
} from "react-icons/fa6";

function Footer() {
  const [email, setEmail] = useState("");
  const currentYear = new Date().getFullYear();

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email.trim() === "") return;
    alert("You have successfully subscribed!");
    setEmail("");
  };

  return (
    <footer className="custom-footer">
      <div className="footer-bg-glow"></div>

      <motion.div
        className="footer-container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <div className="footer-top">
          <motion.div className="footer-brand-section" variants={fadeInUp}>
            <h2 className="footer-logo">
              Home<span>Net.</span>
            </h2>
            <p>
              Bringing high-speed connectivity to your doorstep with reliability
              and style.
            </p>
            <div className="social-links">
              {[BsFacebook, BsInstagram, BsTwitter].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ y: -5, scale: 1.2, color: "#35ce4e" }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div className="footer-links-grid" variants={fadeInUp}>
            <div className="link-group">
              <h3>Useful Links</h3>
              <ul>
                {["About", "Why HomeNet", "Plans", "FAQs"].map((link) => (
                  <motion.li key={link} whileHover={{ x: 7 }}>
                    <a href={`#${link.replace(/\s/g, "")}`}>{link}</a>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="link-group">
              <h3>Support</h3>
              <div className="contact-info">
                <p>
                  <FaSquarePhone className="icon" /> +254 793 888 552
                </p>
                <p>
                  <FaSquareWhatsapp className="icon" /> +254 742 651 520
                </p>
                <p>
                  <FaLocationDot className="icon" /> Lucky Summer, Nairobi
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div className="footer-newsletter" variants={fadeInUp}>
            <h3>Stay Updated</h3>
            <p>Subscribe for exclusive coverage updates.</p>
            <form className="newsletter-form" onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <motion.button
                type="submit"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 0px 15px rgba(235, 150, 93, 0.5)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                Join
              </motion.button>
            </form>
          </motion.div>
        </div>

        <motion.div className="footer-bottom" variants={fadeInUp}>
          <p>&copy; {currentYear} HomeNet Inc. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
}

export default Footer;
