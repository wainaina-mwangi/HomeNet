import React, { useState } from "react";
import "./Footer.css";
import { motion } from "framer-motion";
import { FaSquarePhone, FaChevronRight } from "react-icons/fa6";
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <footer className="homenet-footer">
      <div className="footer-main-content">
        <motion.div
          className="footer-top-row"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="brand-section">
            <h2 className="footer-logo">
              Home<span className="accent">Net</span>
            </h2>
            <p className="brand-tagline">Connecting Nairobi's Heartbeat.</p>
          </div>

          <div className="subscription-section">
            <form onSubmit={notify} className="newsletter-form">
              <input
                type="email"
                placeholder="Join our newsletter"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </form>
          </div>
        </motion.div>

        <motion.div
          className="footer-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div className="footer-col about-col" variants={itemVariants}>
            <h3>About HomeNet</h3>
            <p>
              Providing high-speed residential WiFi solutions across Nairobi
              with 99.9% uptime. 20% of installations support local education.
            </p>
            <Link to="/contact" className="touch-link">
              <motion.span
                whileHover={{ x: 5 }}
                className="flex items-center gap-2"
              >
                Get In Touch <FaChevronRight />
              </motion.span>
            </Link>
          </motion.div>

          <motion.div className="footer-col" variants={itemVariants}>
            <h3>Services</h3>
            <ul>
              {[
                "Blazing Speeds",
                "Netflix",
                "Smart Connectivity",
                "24/7 Support",
              ].map((item) => (
                <motion.li
                  key={item}
                  whileHover={{ x: 7, color: "#eb965d" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div className="footer-col" variants={itemVariants}>
            <h3>Quick Links</h3>
            <ul>
              {["About Us", "Our Plans", "FAQs", "Contacts"].map((link) => (
                <motion.li
                  key={link}
                  whileHover={{ x: 7, color: "#eb965d" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link to={`${link.toLowerCase().replace(" ", "")}`}>
                    {link}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        <div className="footer-bottom-bar">
          <motion.div
            className="support-badge-small"
            whileHover={{
              scale: 1.05,
              backgroundColor: "rgba(235, 150, 93, 0.15)",
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <FaSquarePhone className="phone-icon-small" />
            <strong>+254 793 888 552</strong>
          </motion.div>

          <motion.div
            className="footer-copyright"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <p>© {currentYear} HomeNet. Built for the community.</p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
