import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import WhyProcess from "../components/WhyProcess";
import Services from "../components/Services";
import Plans from "../components/Plans";
import Availability from "../components/CoverageChecker";
import FaqSection from "../components/Faq/FaqSection";
import WhatsAppButton from "../components/WhatsAppButton";

const Home = () => {
  return (
    <div className="overflow-hidden dark:bg-yellow">
      <Hero />
      <Services />
      <About />
      <WhyProcess />
      <Plans />
      <Availability />
      <FaqSection />
       <WhatsAppButton/>
      
    </div>
  );
};

export default Home;
