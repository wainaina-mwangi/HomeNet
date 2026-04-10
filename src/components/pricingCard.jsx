import React from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./pricingCard.css";
import {Link} from "react-router-dom";

const PricingCard = ({ plan }) => {
  return (
    <div className="pricing-card">
      <div className="progress-container">
        <CircularProgressbar
          value={plan.iconPercentage}
          styles={buildStyles({
            pathColor: "#00f2fe",
            trailColor: "rgba(255,255,255,0.1)",
            strokeLinecap: "round",
          })}
        />
      </div>

      <p className="package-type">{plan.type}</p>
      <h2 className="speed-display">{plan.speed} Mbps</h2>

      <div className="divider" />

      <ul className="features-list">
        {plan.features.map((feature, index) => (
          <li key={index} className="feature-item">
            <AiOutlineCheckCircle className="feature-icon" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <div className="card-footer">
        <div className="price-box">
          <span className="currency">ksh</span>
          <span className="price-amount">{plan.price}</span>
          <span className="billing-period">/MONTHLY</span>
        </div>

        <p className="disclaimer">
          *Simple, Reliable and Affordable solution for unlimited internet
          access
        </p>

        <Link to="/contact" className="cta-button">
          Get started
        </Link>
      </div>
    </div>
  );
};

export default PricingCard;
