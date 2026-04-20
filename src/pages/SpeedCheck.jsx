import React from "react";
import { FaGaugeHigh, FaWifi, FaSignal, FaCircleCheck } from "react-icons/fa6";
import "./SpeedCheck.css";

const SpeedCheck = () => {
  const handleSpeedTest = (e) => {
    e.preventDefault();
    window.open("https://fast.com", "_blank", "noopener,noreferrer");
  };

  return (
    <section className="speed-page-container">
      <div className="speed-content-wrapper">
        <header className="speed-hero">
          <div className="live-badge">
            <span className="pulse-dot"></span>
            System Live: Nairobi Node
          </div>
          <h1 className="speed-title">
            Network <span className="highlight">Diagnostics</span>
          </h1>
          <p className="speed-subtitle">
            Verify your HomeNet connection speed in real-time. We use
            industry-standard engines to ensure you get the most accurate
            results.
          </p>
        </header>

        <div className="speed-action-card">
          <h3>Ready to test?</h3>
          <p>Click below to launch the Fast.com speed engine.</p>
          <button onClick={handleSpeedTest} className="launch-btn">
            Launch Speed Test
          </button>
        </div>

        <div className="speed-tips-grid">
          <div className="tip-card">
            <FaWifi className="tip-icon" />
            <h4>Router Placement</h4>
            <p>
              Ensure your router is in a central, open location for the best
              signal distribution.
            </p>
          </div>
          <div className="tip-card">
            <FaSignal className="tip-icon" />
            <h4>Interference</h4>
            <p>
              Keep your router away from other electronics like microwaves to
              avoid signal drops.
            </p>
          </div>
          <div className="tip-card">
            <FaCircleCheck className="tip-icon" />
            <h4>Ethernet vs Wi-Fi</h4>
            <p>
              For maximum speed, especially during gaming, use a wired LAN
              connection.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpeedCheck;
