import React from "react";
import {
  FaPaperPlane,
  FaPhoneVolume,
  FaClock,
  FaLocationDot,
} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
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
      <div className="contact-hero py-12">
        <h1 className="hero-title dark:text-white">
          Contact <span className="highlight dark:text-blue-500">Us</span>
        </h1>
        <p className="hero-subtitle dark:text-slate-400 max-w-2xl mx-auto">
          Have a question? We'd love to hear from you. Reach out via the form
          below, call us, or visit our school.
        </p>
      </div>

      <div className="contact-container px-4">
        <div className="contact-main-grid dark:border-slate-800">
          <div className="contact-visual-side dark:bg-slate-900/50">
            <div className="white-icon-circle dark:bg-blue-600 dark:shadow-blue-900/20">
              <MdEmail className="hero-white-icon dark:text-white" />
            </div>
          </div>

          <div className="contact-glass-form dark:bg-slate-900/80 dark:border-slate-700 dark:shadow-2xl backdrop-blur-md">
            <h3 className="form-top-text dark:text-blue-400 font-semibold">
              Feel free to reach us
            </h3>
            <form onSubmit={onSubmit} className="space-y-4">
              <div className="form-grid gap-4">
                <div className="input-box">
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your Name"
                    className="w-full dark:bg-slate-800 dark:border-slate-700 dark:text-white dark:placeholder-slate-500 dark:focus:border-blue-500 dark:focus:ring-1 dark:focus:ring-blue-500 transition-all"
                  />
                </div>
                <div className="input-box">
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Email Address"
                    className="w-full dark:bg-slate-800 dark:border-slate-700 dark:text-white dark:placeholder-slate-500 dark:focus:border-blue-500 dark:focus:ring-1 dark:focus:ring-blue-500 transition-all"
                  />
                </div>
              </div>
              <div className="input-box">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className="w-full dark:bg-slate-800 dark:border-slate-700 dark:text-white dark:placeholder-slate-500 dark:focus:border-blue-500 transition-all"
                />
              </div>
              <div className="input-box">
                <textarea
                  name="message"
                  required
                  placeholder="How can we help you?"
                  rows="4"
                  className="w-full dark:bg-slate-800 dark:border-slate-700 dark:text-white dark:placeholder-slate-500 dark:focus:border-blue-500 transition-all"
                ></textarea>
              </div>
              <button
                type="submit"
                className="submit-btn w-full flex items-center justify-center gap-2 py-3 dark:bg-blue-600 dark:hover:bg-blue-500 dark:text-white font-bold rounded-lg shadow-lg dark:shadow-blue-900/30 transition-all active:scale-95"
              >
                Send Message <FaPaperPlane />
              </button>
            </form>
          </div>
        </div>

        <div className="info-details-row mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="info-card p-6 text-center border transition-all dark:bg-slate-900 dark:border-slate-800 dark:hover:border-blue-500/50 group">
            <FaLocationDot
              className="info-icon mx-auto mb-4 dark:text-blue-500 group-hover:scale-110 transition-transform"
              size={40}
            />
            <h4 className="dark:text-white font-bold mb-2">Our Address</h4>
            <p className="dark:text-slate-400 text-sm">
              Lucky Summer, Estate Office, Nairobi, Kenya
            </p>
          </div>

          <div className="info-card p-6 text-center border transition-all dark:bg-slate dark:border-slate-800 dark:hover:border-blue-500/50 group">
            <FaClock
              className="info-icon mx-auto mb-4 dark:text-blue-500 group-hover:scale-110 transition-transform"
              size={40}
            />
            <h4 className="dark:text-white font-bold mb-2">Working Hours</h4>
            <p className="dark:text-slate-400 text-sm">
              Mon - Sat: 8:00 AM - 6:00 PM
            </p>
            <p className="dark:text-slate-400 text-sm italic">
              Sunday: Support Only
            </p>
          </div>

          <div className="info-card p-6 text-center border transition-all dark:bg-slate-900 dark:border-slate-800 dark:hover:border-blue-500/50 group">
            <FaPhoneVolume
              className="info-icon mx-auto mb-4 dark:text-blue-500 group-hover:scale-110 transition-transform"
              size={40}
            />
            <h4 className="dark:text-white font-bold mb-2">Quick Call</h4>
            <p className="dark:text-slate-400 text-lg font-mono">
              +254 793 888 552
            </p>
          </div>
        </div>
      </div>

      <div className="map-wrapper mt-16 border-t dark:border-slate-800 dark:grayscale dark:invert-[0.92] dark:contrast-[0.9] dark:opacity-70 transition-all duration-700">
        <iframe
          title="HomeNet Location"
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
