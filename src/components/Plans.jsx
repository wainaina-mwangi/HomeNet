import React from "react";
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
  return (
    <section className="bg-[#2a2d9b] plans min-h-screen py-20 px-6 font-sans mt-20 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center text-center py-20 mb-20">
          <h2 className="text-white text-4xl md:text-3xl font-black tracking-tighter mb-4">
            Choose Your <span className="text-brand-orange">Perfect Plan</span>
          </h2>
          <p className="text-slate-300 text-lg md:text-xl max-w-2xl leading-relaxed">
            Blazing fast speeds at prices that make sense. Select a package that
            best fits your lifestyle and start enjoying unlimited access today.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-30 mb-16">
          {plansData.map((plan, index) => (
            <PricingCard key={index} plan={plan} />
          ))}
        </div>
        <p className="text-center text-white/80 text-lg font-medium tracking-wide">
          100% money-back guarantee for your first 30 days.
        </p>
      </div>
    </section>
  );
};

export default Plans;
