import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; 
import { faqData } from "/src/constants/faqData.js"; 
import { FaChevronDown } from "react-icons/fa6";
import './Faq.css';

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="faq-section">
      <div className="faq-container">
        
        <motion.div 
          className="faq-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="faq-badge">Support Center</span>
          <h2 className="faq-title">
            Got <span className="highlight">Questions?</span>
          </h2>
          <p className="faq-subtitle">
            Everything you need to know about Nairobi's fastest Home internet.
          </p>
        </motion.div>

        {/* The FAQ List */}
        <div className="faq-list">
          {faqData.map((faq, index) => (
            <motion.div 
              key={faq.id}
              className={`faq-item-wrapper ${openIndex === index ? 'active' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <button 
                className="faq-question-btn"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span>{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaChevronDown className="faq-icon" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="faq-answer-container"
                  >
                    <p className="faq-answer">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;