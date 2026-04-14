import React, { useState } from "react";
import { motion } from "framer-motion"; 
import { faqData } from "/src/constants/faqData.js"; 
import FaqItem from "./FaqItem";
import './Faq.css';

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };


  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1, 
      },
    },
  };

  return (
    <section className="faq-section">
      <motion.div 
        className="faq-container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        
    
        <motion.div 
          className="faq-header"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="faq-title">
            Got <span className="highlight">Questions?</span>
          </h2>
          <p className="faq-subtitle">
            Everything you need to know about Nairobi's fastest Home internet.
          </p>
        </motion.div>

    
        <motion.div 
          className="faq-glass-card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
          whileHover={{ boxShadow: "0 30px 60px rgba(0,0,0,0.4)" }} // Subtle lift on hover
        >
          <div className="faq-list">
            {faqData.map((faq, index) => (
              <FaqItem
                key={faq.id}
                question={faq.question}
                answer={faq.answer}
                
                isOpen={openIndex === index}
                toggle={() => handleToggle(index)}
              />
            ))}
          </div>
        </motion.div>
     
      </motion.div>
    </section>
  );
};

export default FaqSection;