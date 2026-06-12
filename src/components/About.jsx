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
    <section className="about-section bg-brand-navy overflow-hidden py-16 md:py-24">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side Content Column */}
        <motion.div
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.span variants={itemVariants} className="subtitle text-brand-orange font-bold tracking-wider uppercase block mb-2">
            Who We Are
          </motion.span>

          <motion.h2 variants={itemVariants} className="title text-3xl md:text-4xl font-extrabold text-white mb-6">
            Empowering people through technology
          </motion.h2>

          <motion.p variants={itemVariants} className="description text-gray-300 mb-8 leading-relaxed">
            Fast, affordable, and built for our community. We provide reliable residential internet backed by round-the-clock support and a commitment to keeping local neighborhoods connected to global opportunities.
          </motion.p>

          <motion.div variants={itemVariants}>
            <Link
              to="/plans"
              className="btn font-bold bg-brand-orange hover:bg-brand-orange/80 text-white px-6 py-3 rounded-md transition dynamic-shadow"
            >
              Sign Up Now
            </Link>
          </motion.div>
        </motion.div>

        {/* Right Side Image Column with Cool Shape and Ambient Glow */}
        <motion.div
          className="about-image relative flex justify-center items-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          
          {/* Background Gradient Ring 1 — Smooth Floating Morph Mask */}
          <motion.div 
            className="absolute w-[85%] h-[85%] bg-gradient-to-tr from-brand-orange/30 to-blue-500/20 blur-2xl rounded-full"
            animate={{
              scale: [1, 1.08, 1],
              rotate: [0, 90, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Background Accent Shape 2 — Soft Sharp Contrast */}
          <div className="absolute inset-0 border border-white/10 rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%] scale-105 pointer-events-none hidden md:block" />

          {/* Core Masked Frame Container */}
          <div className="relative w-full max-w-md aspect-square md:aspect-[4/3] lg:aspect-square overflow-hidden shadow-2xl transition duration-500 group
                          rounded-[30%_70%_70%_30%_/_30%_40%_60%_70%] hover:rounded-[40%_60%_50%_50%_/_50%_30%_70%_50%]">
            
            {/* The Image itself */}
            <img 
              src={image_5} 
              alt="Our team working on technology" 
              className="w-full h-full object-cover scale-105 group-hover:scale-100 transition duration-700 ease-out"
            />
            
            {/* Fine overlay overlay scrim inside the custom frame boundary */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/40 to-transparent pointer-events-none" />
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default About;
