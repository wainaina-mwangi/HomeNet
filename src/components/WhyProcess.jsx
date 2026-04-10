import React from "react";
import { motion } from "framer-motion";
import "./WhyProcess.css";
import image_7 from "../assets/IMAGE_7.jpg";

const steps = [
  {
    number: "1",
    title: "Check Coverage Availability",
    desc: "Verify if our high-speed fiber or wireless network has reached your neighborhood.",
  },
  {
    number: "2",
    title: "Survey Location",
    desc: "Our technical team visits your site to determine the best entry points for maximum signal.",
  },
  {
    number: "3",
    title: "Apply Contract",
    desc: "Choose your preferred package and sign a transparent agreement with no hidden costs.",
  },
  {
    number: "4",
    title: "Installation",
    desc: "Sit back as our experts set up your connection, ensuring you are online within hours.",
  },
];

const WhyProcess = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="process-section p-0 overflow-hidden">
      <div
        className="relative min-h-[100vh] w-full bg-fixed bg-cover bg-center flex items-center justify-center py-20"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${image_7})`,
        }}
      >
        <div className="process-container relative z-10">
          <div className="process-left">
            <span className="process-subtitle">HOW IT WORKS</span>
            <h2 className="process-title text-white">
              Simple Process to <br /> Get You Connected.
            </h2>
            <p className="process-description text-slate-200">
              We’ve streamlined our onboarding to get you from zero to
              high-speed internet in record time. Our team handles the heavy
              lifting.
            </p>
          </div>

          <motion.div
            className="process-right-card"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="step-item"
                variants={itemVariants}
              >
                <div className="step-number-box">
                  <span className="step-label">STEP</span>
                  <div className="step-circle">{step.number}</div>
                </div>
                <div className="step-content">
                  <h3 className="text-white">{step.title}</h3>
                  <p className="text-white/70">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyProcess;
