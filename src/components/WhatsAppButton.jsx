import React from "react";
import { FaWhatsapp } from "react-icons/fa6";
import "./WhatsAppButton.css";

export default function WhatsAppButton() {
  const phoneNumber = "254793888552";

  return (
    <div className="wa-float-container">
      <a
        href={`https://wa.me/${phoneNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="wa-float-button"
      >
        <div className="wa-tooltip">Chat with us</div>
        <FaWhatsapp className="wa-icon" />
       
        <span className="wa-ring"></span>
        <span className="wa-ring"></span>
      </a>
    </div>
  );
}