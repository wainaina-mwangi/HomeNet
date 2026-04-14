import React, { useState } from "react";
import { faqData } from "/src/constants/faqData.js"; 
import FaqItem from "./FaqItem";
import './Faq.css';

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        
        <div className="faq-header">
          <h2 className="faq-title">
            Got <span className="highlight">Questions?</span>
          </h2>
          <p className="faq-subtitle">
            Everything you need to know about Nairobi's fastest home internet.
          </p>
        </div>

        <div className="faq-glass-card">
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
          
        </div>
     
      </div>
 
    </section>
  );
};

export default FaqSection;