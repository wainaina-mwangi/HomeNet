import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './CookieConsent.css'; 

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('homenet-cookies');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('homenet-cookies', 'true');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="cookie-wrapper"
        >
          <div className="cookie-card">
            <div className="cookie-content">
              <div className="cookie-icon-box">
                <span className="cookie-emoji">🍪</span>
              </div>
              <div className="cookie-text-stack">
                <h3 className="cookie-title">Cookies & Privacy</h3>
                <p className="cookie-description">
                  HomeNet uses cookies to improve your experience and measure our impact with the 
                  <span className="cookie-highlight">Smallest Library in Africa</span>.
                </p>
              </div>
            </div>

            <div className="cookie-actions">
              <button onClick={handleAccept} className="btn-primary">
                Accept All
              </button>
              <button onClick={() => setIsVisible(false)} className="btn-secondary">
                Essentials Only
              </button>
            </div>
            
            <p className="cookie-footer">
              By clicking "Accept", you agree to our <u>Privacy Policy</u>.
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}