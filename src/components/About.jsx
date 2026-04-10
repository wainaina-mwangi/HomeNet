import React from "react";
import { motion } from "framer-motion";
import image_5 from "../assets/IMAGE_5.png";
import "./About.css";
import { Link } from "react-router-dom";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="about-section bg-brand-navy overflow-hidden">
      <div className="container">
        <motion.div
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.span variants={itemVariants} className="subtitle">
            Who We Are
          </motion.span>

          <motion.h2 variants={itemVariants} className="title">
            Empowering people through technology
          </motion.h2>

          <motion.p variants={itemVariants} className="description">
            With over 15 years of experience in the industry, our team is
            dedicated to providing reliable, affordable WiFi solutions tailored
            to your needs. We pride ourselves on offering competitive prices and
            exceptional, 24/7 support.
          </motion.p>

          <motion.div variants={itemVariants}>
            <Link
              to="/plans"
              className="btn font-bold bg-brand-orange hover:bg-brand-orange/70 text-white"
            >
              Sign Up Now
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="about-image"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <img src={image_5} alt="Our team working on technology" />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
