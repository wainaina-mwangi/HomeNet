import React from "react";
import {
  FaPaperPlane,
  FaPhoneVolume,
  FaClock,
  FaLocationDot,
} from "react-icons/fa6";
import { MdEmail, MdOutlineContactSupport } from "react-icons/md";
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
    <section className="contact-page-section dark:bg-slate-950 dark:text-slate-200 transition-colors duration-500 py-16">
      {/* Header Section */}
      <div className="contact-hero text-center mb-16 px-4">
        <h1 className="hero-title text-4xl md:text-5xl font-extrabold tracking-tight dark:text-white mb-4">
          Contact <span className="highlight text-blue-500 dark:text-blue-500">Us</span>
        </h1>
        <p className="hero-subtitle text-lg dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Have a question? We'd love to hear from you. Reach out via the form
          below, call us, or visit our offices.
        </p>
      </div>

      <div className="contact-container max-w-6xl mx-auto px-4">
        {/* Main Grid: Visual Side + Form */}
        <div className="contact-main-grid grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Redesigned Visual Side (Left) */}
          <div className="contact-visual-side lg:col-span-5 flex flex-col justify-between p-8 rounded-2xl relative overflow-hidden border dark:border-slate-800/80 dark:bg-slate-900/40 backdrop-blur-md">
            {/* Background Decorative Blur */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
            
            <div className="relative z-10">
              <div className="white-icon-circle w-14 h-14 rounded-xl flex items-center justify-center dark:bg-blue-600/10 dark:border dark:border-blue-500/20 mb-8">
                <MdOutlineContactSupport className="hero-white-icon text-2xl dark:text-blue-400" />
              </div>
              <h2 className="text-3xl font-bold dark:text-white mb-4 leading-tight">
                Let's start a <br />
                <span className="text-blue-500">conversation</span>
              </h2>
              <p className="dark:text-slate-400 text-sm leading-relaxed mb-8">
                Tell us about your needs or ask any question. Our team will get back to you in less than 24 hours.
              </p>
            </div>

            {/* Micro details at bottom of visual card */}
            <div className="relative z-10 pt-6 border-t dark:border-slate-800/80 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full flex items-center justify-center dark:bg-blue-500/10">
                <MdEmail className="dark:text-blue-400" size={20} />
              </div>
              <div>
                <p className="text-xs dark:text-slate-500 uppercase tracking-wider font-semibold">Direct Email</p>
                <p className="text-sm dark:text-slate-300 font-medium">support@homenet.co.ke</p>
              </div>
            </div>
          </div>

          {/* Redesigned Form Card (Right) */}
          <div className="contact-glass-form lg:col-span-7 p-8 rounded-2xl border dark:bg-slate-900/80 dark:border-slate-800 dark:shadow-2xl backdrop-blur-md flex flex-col justify-center">
            <h3 className="form-top-text dark:text-blue-400 font-semibold text-lg mb-6">
              Send us a Message
            </h3>
            
            <form onSubmit={onSubmit} className="space-y-5">
              {/* Row: Name and Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="input-box relative">
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your Name"
                    className="w-full px-4 py-3.5 rounded-lg border dark:bg-slate-950/40 dark:border-slate-800 dark:text-white dark:placeholder-slate-500 dark:focus:border-blue-500 dark:focus:ring-2 dark:focus:ring-blue-500/20 transition-all outline-none text-sm"
                  />
                </div>
                <div className="input-box relative">
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Email Address"
                    className="w-full px-4 py-3.5 rounded-lg border dark:bg-slate-950/40 dark:border-slate-800 dark:text-white dark:placeholder-slate-500 dark:focus:border-blue-500 dark:focus:ring-2 dark:focus:ring-blue-500/20 transition-all outline-none text-sm"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="input-box relative">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className="w-full px-4 py-3.5 rounded-lg border dark:bg-slate-950/40 dark:border-slate-800 dark:text-white dark:placeholder-slate-500 dark:focus:border-blue-500 dark:focus:ring-2 dark:focus:ring-blue-500/20 transition-all outline-none text-sm"
                />
              </div>

              {/* Message */}
              <div className="input-box relative">
                <textarea
                  name="message"
                  required
                  placeholder="How can we help you?"
                  rows="4"
                  className="w-full px-4 py-3.5 rounded-lg border dark:bg-slate-950/40 dark:border-slate-800 dark:text-white dark:placeholder-slate-500 dark:focus:border-blue-500 dark:focus:ring-2 dark:focus:ring-blue-500/20 transition-all outline-none text-sm resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="submit-btn w-full flex items-center justify-center gap-2 py-3.5 dark:bg-blue-600 dark:hover:bg-blue-500 dark:text-white font-bold rounded-lg shadow-lg dark:shadow-blue-900/20 transition-all active:scale-[0.98]"
              >
                Send Message <FaPaperPlane className="text-xs" />
              </button>
            </form>
          </div>

        </div>

        {/* Info Cards (Bottom Row) */}
        <div className="info-details-row mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="info-card p-6 rounded-xl text-center border transition-all dark:bg-slate-900/40 dark:border-slate-800/80 dark:hover:border-blue-500/30 group">
            <FaLocationDot
              className="info-icon mx-auto mb-4 dark:text-blue-500 group-hover:translate-y-[-4px] transition-transform"
              size={32}
            />
            <h4 className="dark:text-white font-bold mb-2 text-base">Our Address</h4>
            <p className="dark:text-slate-400 text-sm">
              Lucky Summer, Estate Office, Nairobi, Kenya
            </p>
          </div>

          <div className="info-card p-6 rounded-xl text-center border transition-all dark:bg-slate-900/40 dark:border-slate-800/80 dark:hover:border-blue-500/30 group">
            <FaClock
              className="info-icon mx-auto mb-4 dark:text-blue-500 group-hover:translate-y-[-4px] transition-transform"
              size={32}
            />
            <h4 className="dark:text-white font-bold mb-2 text-base">Working Hours</h4>
            <p className="dark:text-slate-400 text-sm">
              Mon - Sat: 8:00 AM - 6:00 PM
            </p>
            <p className="dark:text-slate-500 text-xs italic mt-1">
              Sunday: Support Only
            </p>
          </div>

          <div className="info-card p-6 rounded-xl text-center border transition-all dark:bg-slate-900/40 dark:border-slate-800/80 dark:hover:border-blue-500/30 group">
            <FaPhoneVolume
              className="info-icon mx-auto mb-4 dark:text-blue-500 group-hover:translate-y-[-4px] transition-transform"
              size={32}
            />
            <h4 className="dark:text-white font-bold mb-2 text-base">Quick Call</h4>
            <p className="dark:text-blue-400 text-lg font-mono font-semibold">
              +254 793 888 552
            </p>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="map-wrapper mt-20 border-t dark:border-slate-900 dark:grayscale dark:invert-[0.92] dark:contrast-[0.9] dark:opacity-50 transition-all duration-700">
        <iframe
          title="HomeNet Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.51590835905!2d36.894273!3d-1.243555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1437340e678b%3A0x6b432924f0c4a4f2!2sLucky%20Summer%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1712345678901!5m2!1sen!2ske"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;
