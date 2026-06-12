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

        <motion.div
          className="about-image relative flex justify-center items-center p-8"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
         
          <div className="absolute -bottom-2 -left-2 w-full max-w-md aspect-square md:aspect-[4/3] lg:aspect-square border-2 border-brand-white/30 rounded-2xl pointer-events-none hidden sm:block transform -translate-x-4 translate-y-4" />
    
          <div className="absolute -top-2 -right-2 w-full max-w-md aspect-square md:aspect-[4/3] lg:aspect-square bg-white/5 rounded-2xl pointer-events-none hidden sm:block transform translate-x-4 -translate-y-4" />
          <div className="relative w-full max-w-md aspect-square md:aspect-[4/3] lg:aspect-square overflow-hidden shadow-2xl rounded-2xl border border-white/10 group bg-brand-navy-light">
         
            <img 
              src={image_5} 
              alt="Our team working on technology" 
              className="w-full h-full object-cover group-hover:scale-105 group-hover:rotate-1 transition duration-700 ease-out"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/50 via-transparent to-brand-navy/20 pointer-events-none" />
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default About;
