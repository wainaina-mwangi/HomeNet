import React from "react";
import { FiWifi, FiTv,  } from "react-icons/fi";
import { BiSolidZap } from "react-icons/bi";
import { FaHeadset } from "react-icons/fa"; 
import "./Service.css";

const ServicesBar = () => {
  const services = [
    { id: 1, title: "INTERNET", icon: <FiWifi /> },
    { id: 2, title: "NETFLIX", icon: <FiTv /> },
    { id: 3, title: "24/7 SUPPORT", icon: <FaHeadset /> },
    { id: 4, title: "BLAZING SPEEDS", icon: <BiSolidZap /> },
  ];

  return (
    <section className="services-container">
      {services.map((service) => (
        <div key={service.id} className="service-card">
          <div className="service-icon">{service.icon}</div>
          <span className="service-text">{service.title}</span>
        </div>
      ))}
    </section>
  );
};

export default ServicesBar;