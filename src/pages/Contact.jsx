import React from "react";
import {
  FaPaperPlane,
  FaPhoneVolume,
  FaClock,
  FaLocationDot,
} from "react-icons/fa6";
import { MdEmail, MdArrowForward } from "react-icons/md";
import { toast } from "react-toastify";
import "./Contact.css";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const apiKey = import.meta.env.VITE_API_KEY;

    if (!apiKey) {
      toast.error("Environment Variable not found!");
      return;
    }

    const formData = new FormData(event.target);
    formData.append("access_key", apiKey);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Message sent successfully!");
        event.target.reset();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error("CORS or Network Error:", error);
      toast.error("Blocked by rate limit. Please wait 5 minutes.");
    }
  };

  return (
    <section className="contact-page-section dark:bg-slate-950 dark:text-slate-200 transition-colors duration-500">
      
      {/* Premium Hero Section */}
      <div className="contact-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content max-w-4xl mx-auto px-4 relative z-10">
          <span className="hero-tagline">Get In Touch</span>
          <h1 className="hero-title">
            Let's build something <span className="highlight">great</span> together
          </h1>
          <p className="hero-subtitle">
            Have an inquiry, project, or just want to say hello? Our team is ready to connect, consult, and build solutions with you.
          </p>
        </div>
      </div>

      <div className="contact-container max-w-6xl mx-auto px-4">
        {/* Main Master Panel */}
        <div className="contact-master-panel">
          
          {/* Elite Info/Visual Sidebar (Left) */}
          <div className="contact-sidebar">
            <div className="sidebar-background-gradient"></div>
            
            <div className="sidebar-header">
              <span className="sidebar-label">Contact Details</span>
              <h2 className="sidebar-heading">Reach us directly</h2>
              <p className="sidebar-description">
                Skip the form if you prefer. Our communications desk is active Monday through Saturday.
              </p>
            </div>

            {/* Quick Connect Items */}
            <div className="sidebar-connect-list">
              <a href="mailto:support@homenet.co.ke" className="sidebar-connect-card">
                <div className="icon-wrapper">
                  <MdEmail size={22} />
                </div>
                <div className="card-details">
                  <span className="card-label">Email Us</span>
                  <span className="card-value">support@homenet.co.ke</span>
                </div>
                <MdArrowForward className="hover-arrow" />
              </a>

              <a href="tel:+254793888552" className="sidebar-connect-card">
                <div className="icon-wrapper">
                  <FaPhoneVolume size={18} />
                </div>
                <div className="card-details">
                  <span className="card-label">Call Support</span>
                  <span className="card-value">+254 793 888 552</span>
                </div>
                <MdArrowForward className="hover-arrow" />
              </a>
            </div>

            {/* Micro branding footer */}
            <div className="sidebar-footer">
              <span className="pulse-indicator"></span>
              <p>Average response time: &lt; 2 hours</p>
            </div>
          </div>

          {/* Elite Premium Form (Right) */}
          <div className="contact-form-panel">
            <div className="form-header">
              <h3>Submit a Request</h3>
              <p>Fields marked with * are required to process your inquiry.</p>
            </div>
            
            <form onSubmit={onSubmit} className="elite-form">
              {/* Row: Name and Email */}
              <div className="form-row">
                <div className="input-group">
                  <label htmlFor="name">Your Name *</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    required
                    placeholder="e.g., Erastus Wainaina"
                    className="form-input"
                  />
                  <span className="input-focus-bar"></span>
                </div>
                <div className="input-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    placeholder="yourname@domain.com"
                    className="form-input"
                  />
                  <span className="input-focus-bar"></span>
                </div>
              </div>

              {/* Subject */}
              <div className="input-group">
                <label htmlFor="subject">Subject</label>
                <input
                  id="subject"
                  type="text"
                  name="subject"
                  placeholder="How can we help you?"
                  className="form-input"
                />
                <span className="input-focus-bar"></span>
              </div>

              {/* Message */}
              <div className="input-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Detail your request here..."
                  rows="5"
                  className="form-textarea"
                ></textarea>
                <span className="input-focus-bar"></span>
              </div>

              {/* Redesigned Premium Button */}
              <button type="submit" className="elite-submit-btn">
                <span>Send Message</span>
                <span className="btn-icon-circle">
                  <FaPaperPlane />
                </span>
              </button>
            </form>
          </div>

        </div>

        {/* Info Cards (Bottom Row) */}
        <div className="info-details-row">
          <div className="info-card">
            <div className="info-card-icon-box">
              <FaLocationDot size={20} />
            </div>
            <h4>Our Headquarters</h4>
            <p>Lucky Summer, Estate Office</p>
            <span className="location-city">Nairobi, Kenya</span>
          </div>

          <div className="info-card">
            <div className="info-card-icon-box">
              <FaClock size={20} />
            </div>
            <h4>Business Hours</h4>
            <p>Mon - Sat: 8:00 AM - 6:00 PM</p>
            <p className="support-special-text">Sunday: Emergency Ticket Support</p>
          </div>

          <div className="info-card">
            <div className="info-card-icon-box">
              <FaPhoneVolume size={18} />
            </div>
            <h4>Direct Lines</h4>
            <p className="phone-accent">+254 793 888 552</p>
            <span className="phone-subtext">Toll-free inside network coverage</span>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="map-wrapper">
        <iframe
          title="Location Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.51590835905!2d36.894273!3d-1.243555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1437340e678b%3A0x6b432924f0c4a4f2!2sLucky%20Summer%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1712345678901!5m2!1sen!2ske"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;
