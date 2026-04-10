import React from "react";
import { motion } from "framer-motion";
import PricingCard from "./pricingCard";
import "./plans.css";

const plansData = [
  {
    type: "BASIC PACKAGE",
    speed: "5",
    iconPercentage: 5,
    features: [
      "Speed Up to 5 Mbps",
      "Free Fair Usage Policy (FUP)",
      "WiFi Fiber Modem",
      "IP Dynamic Private",
    ],
    price: "1000",
  },
  {
    type: "PREMIUM PACKAGE",
    speed: "10",
    iconPercentage: 10,
    features: [
      "Speed Up to 10 Mbps",
      "Free Fair Usage Policy (FUP)",
      "WiFi Fiber Modem",
      "IP Dynamic Private",
    ],
    price: "1800",
  },
  {
    type: "HYPE PACKAGE",
    speed: "30",
    iconPercentage: 30,
    features: [
      "Speed Up to 30 Mbps",
      "Free Fair Usage Policy (FUP)",
      "WiFi Fiber Modem",
      "IP Dynamic Private",
    ],
    price: "4500",
  },
];

const Plans = () => {
  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="plans-section">
      <div className="plans-container">
        <motion.div
          className="plans-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={headerVariants}
        >
          <h2 className="plans-title">
            Choose Your <span className="highlight">Perfect Plan</span>
          </h2>
          <p className="plans-subtitle">
            Blazing fast speeds at prices that make sense. Select a package that
            best fits your lifestyle and start enjoying unlimited access today.
          </p>
        </motion.div>

        <motion.div
          className="plans-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {plansData.map((plan, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="grid-item"
            >
              <PricingCard plan={plan} />
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          className="plans-guarantee"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
        >
          100% service Delivery.
        </motion.p>
      </div>
    </section>
  );
};

export default Plans;
