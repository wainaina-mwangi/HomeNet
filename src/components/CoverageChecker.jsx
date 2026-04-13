import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, MapPin, AlertTriangle, Bell } from "lucide-react";
import { toast } from "react-toastify";
import "./CoverageChecker.css";
import { Link } from "react-router-dom";

const CoverageChecker = () => {
  const [address, setAddress] = useState("");
  const [status, setStatus] = useState("idle");
  const [email, setEmail] = useState("");

  const coveredAreas = [
    "Gatheca",
    "mathare",
    "luckysummer",
    "babadogo",
    "riverside",
    "Kasabuni",
    "Sarakasi",
    "Glucola",
    "Mugure",
  ];

  const checkCoverage = (e) => {
    e.preventDefault();
    if (!address) return;

    const isAvailable = coveredAreas.some((area) =>
      address.toLowerCase().includes(area.toLowerCase()),
    );

    if (isAvailable) {
      setStatus("success");
      toast.success(`Great news! HomeNet is available in ${address}`, {
        position: "top-center",
        autoClose: 4000,
      });
    } else {
      setStatus("notify");
      toast.error("Area not covered yet. Sign up for updates!");
    }
  };

  const missingAtSymbol = email.length > 0 && !email.includes("@");

  const handleNotify = () => {
    if (!email || missingAtSymbol) {
      toast.warn("Please enter a valid email address.");
      return;
    }
    toast.info("Thanks! We'll notify you when we reach your street.");
    setEmail("");
    setStatus("idle");
  };

  return (
    <section className="coverage-section">
      <div className="header-container">
        <h2>
          Check <span>Availability</span>
        </h2>
        <p>
          Enter your neighborhood to see if HomeNet internet is in your street.
        </p>
      </div>

      <div className="search-card">
        <form onSubmit={checkCoverage} className="search-form">
          <div className="input-wrapper">
            <MapPin className="map-icon" size={20} />
            <input
              type="text"
              placeholder="Ex: Westlands, Nairobi..."
              className="search-input"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <button type="submit" className="check-button">
            Check Now
          </button>
        </form>
      </div>

      <div className="result-container">
        <AnimatePresence mode="wait">
          {status === "success" && (
            <motion.div
              key="success"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="status-card success"
            >
              <CheckCircle
                className="status-icon"
                style={{ color: "#22c55e" }}
              />
              <h3>You're Covered!</h3>
              <p>
                Ultra-fast fiber is ready for installation at your location.
              </p>
              <Link
                to="/contact"
                className="check-button"
                style={{ marginTop: "24px" }}
              >
                Order Installation
              </Link>
            </motion.div>
          )}

          {status === "notify" && (
            <motion.div
              key="notify"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="status-card notify"
            >
              <AlertTriangle
                className="status-icon"
                style={{ color: "#f59e0b" }}
              />
              <h3>Almost There!</h3>
              <p>
                We haven't reached your street yet, but we are expanding
                rapidly.
              </p>
              <div
                className="notify-form"
                style={{ display: "flex", flexDirection: "column", gap: "8px" }}
              >
                <div style={{ display: "flex", gap: "8px" }}>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className={`search-input ${missingAtSymbol ? "border-orange-500" : ""}`}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <button onClick={handleNotify} className="check-button">
                    <Bell size={18} />
                  </button>
                </div>

                {missingAtSymbol && (
                  <span
                    className="error-text"
                    style={{ color: "#ea580c", fontSize: "12px" }}
                  >
                    Please include an "@" in the email address.
                  </span>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default CoverageChecker;
