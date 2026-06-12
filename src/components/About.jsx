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
    <section className="about-section bg-brand-navy overflow-hidden">
      <div className="container">
        {/* ── TEXT SIDE ── */}
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
            Fast, affordable, and built for our community. We provide reliable
            residential internet backed by round-the-clock support and a
            commitment to keeping local neighborhoods connected to global
            opportunities.
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

        {/* ── IMAGE SIDE ── */}
        <motion.div
          className="about-image relative flex items-center justify-center p-10"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Dot grid — top left */}
          <div className="absolute top-2 left-0 grid grid-cols-5 gap-[7px] z-0 pointer-events-none">
            {Array(20)
              .fill(0)
              .map((_, i) => (
                <span
                  key={i}
                  className="w-1 h-1 rounded-full bg-brand-orange/40 block"
                />
              ))}
          </div>

          {/* Dot grid — bottom right */}
          <div className="absolute bottom-4 right-0 grid grid-cols-5 gap-[7px] z-0 pointer-events-none">
            {Array(20)
              .fill(0)
              .map((_, i) => (
                <span
                  key={i}
                  className="w-1 h-1 rounded-full bg-brand-orange/40 block"
                />
              ))}
          </div>

          {/* Ghost layer — back, tilted further */}
          <motion.div
            className="absolute inset-8 rounded-xl border border-brand-orange/20 z-0"
            initial={{ opacity: 0, rotate: 14 }}
            whileInView={{ opacity: 1, rotate: 10 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
          />

          {/* Ghost layer — middle, dashed counter-tilt */}
          <motion.div
            className="absolute inset-8 rounded-xl border border-dashed border-brand-orange/35 z-0"
            initial={{ opacity: 0, rotate: -8 }}
            whileInView={{ opacity: 1, rotate: -4 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
          />

          {/* Image — top layer */}
          <motion.div
            className="relative z-10 rounded-xl overflow-hidden border-[3px] border-brand-orange w-full max-w-sm cursor-pointer"
            style={{ aspectRatio: "4/5" }}
            initial={{ opacity: 0, rotate: 10 }}
            whileInView={{ opacity: 1, rotate: 6 }}
            whileHover={{
              rotate: 0,
              scale: 1.02,
              transition: { duration: 0.4, ease: "easeOut" },
            }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <img
              src={image_5}
              alt="Our team working on technology"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Floating badge */}
          <motion.div
            className="absolute bottom-8 -left-2 z-20 bg-brand-orange text-white text-xs font-semibold px-4 py-2 rounded-xl tracking-wide shadow-lg"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            animate={{ y: [0, -6, 0] }}
          >
            24/7 Support
          </motion.div>
        </motion.div>
        {/* ── END IMAGE SIDE ── */}
        <img
          src={image_5}
          alt="Our team working on technology"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default About;
