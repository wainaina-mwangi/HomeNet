import React from "react";
import { motion } from "framer-motion";
import image_5 from "../assets/IMAGE_5.webp";
import "./About.css";
import { Link } from "react-router-dom";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    // Section wrapper turns relative to host the background layout sequence
    <section className="about-section relative bg-brand-navy overflow-hidden py-20 md:py-32 min-h-[550px] flex items-center">
      
      {/* 1. Full-Canvas Background Image Layer */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <img 
          src={image_5} 
          alt="Our team working on technology layout background" 
          className="w-full h-full object-cover object-center lg:object-right opacity-80 lg:opacity-100"
        />
        {/* Ambient base dark tint to prevent background image bleed */}
        <div className="absolute inset-0 bg-black/30 lg:bg-transparent" />
      </div>

      {/* 2. Left-to-Right Horizontal Gradient Scrim Layer */}
      {/* Acts as a protective barrier ensuring text has stellar contrast */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-brand-navy via-brand-navy/95 sm:via-brand-navy/85 to-transparent w-full lg:w-[65%]" />

      {/* 3. The Content Layer container (Z-indexed securely over background fields) */}
      <div className="container mx-auto px-6 relative z-20 grid grid-cols-1 lg:grid-cols-2 items-center">
        
        {/* Content Column wrapper */}
        <motion.div
          className="about-content max-w-xl"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.span variants={itemVariants} className="subtitle text-brand-orange font-bold tracking-wider uppercase block mb-2">
            Who We Are
          </motion.span>

          <motion.h2 variants={itemVariants} className="title text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
            Empowering people through technology
          </motion.h2>

          <motion.p variants={itemVariants} className="description text-gray-200 mb-8 leading-relaxed text-base md:text-lg">
            Fast, affordable, and built for our community. We provide reliable residential internet backed by round-the-clock support and a commitment to keeping local neighborhoods connected to global opportunities.
          </motion.p>

          <motion.div variants={itemVariants}>
            <Link
              to="/plans"
              className="btn font-bold bg-brand-orange hover:bg-brand-orange/80 text-white px-8 py-3.5 rounded-md transition dynamic-shadow inline-block"
            >
              Sign Up Now
            </Link>
          </motion.div>
        </motion.div>

        {/* Empty Column right side handles fluid balance since background fills it */}
        <div className="hidden lg:block h-1" />
        
      </div>
    </section>
  );
};

export default About;
