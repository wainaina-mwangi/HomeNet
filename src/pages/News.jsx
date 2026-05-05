import React from "react";
import { motion } from "framer-motion";
import NewsGallery from "../components/NewsGallery";
import "./News.css";

const News = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="news-page-section">
      <motion.div
        className="news-hero"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="hero-content">
          <motion.span className="hero-tagline" variants={itemVariants}>
            Making an Impact
          </motion.span>

          <motion.h1 variants={itemVariants}>Our Digital Journey</motion.h1>

          <motion.h4 className="hero-subtitle" variants={itemVariants}>
            Community <span className="text-brand-orange">Impact</span> &
            Network <span className="text-brand-orange">Growth</span>
          </motion.h4>

          <motion.p variants={itemVariants}>
            Witness how affordable connectivity is transforming lives. From new
            fiber installations to the classrooms we support—every subscription
            helps bridge the digital divide in Nairobi.
          </motion.p>

          <motion.div className="hero-stats-mini" variants={itemVariants}>
            <span>• 30% to Education</span>
            <span>• 100% Community Powered</span>
          </motion.div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <NewsGallery />
      </motion.div>
    </section>
  );
};

export default News;
