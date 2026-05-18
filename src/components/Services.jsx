// import { FaHeadset } from "react-icons/fa"; 



import React from "react";
import { FiWifi, FiTv } from "react-icons/fi";
import { BiSolidZap } from "react-icons/bi";
 import { FaHeadset } from "react-icons/fa"; 
import { FaHeadset as FaHeadsetIcon } from "react-icons/fa"; 
import "./Service.css";

const ServicesBar = () => {
  const services = [
    { id: 1, title: "INTERNET", icon: <FiWifi /> },
    { id: 2, title: "NETFLIX", icon: <FiTv /> },
    { id: 3, title: "24/7 SUPPORT", icon: <FaHeadsetIcon /> },
    { id: 4, title: "BLAZING SPEEDS", icon: <BiSolidZap /> },
  ];

  return (
    <section className="services-container font-sans">
      <div className="marquee-track">
        <div className="marquee-group">
          {services.map((service) => (
            <div key={`first-${service.id}`} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <span className="service-text">{service.title}</span>
            </div>
          ))}
        </div>
        <div className="marquee-group" aria-hidden="true">
          {services.map((service) => (
            <div key={`second-${service.id}`} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <span className="service-text">{service.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesBar;
