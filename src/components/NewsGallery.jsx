import React, { useState } from "react";
import "./NewsGallery.css";
import LiveStats from "../components/LiveStats";

const localGallery = [
  {
    id: 1,
    src: "/images/IMAGE_1.png",
    title: "HomeNet WiFi",
    desc: "High-speed residential connectivity in Nairobi.",
  },
  {
    id: 2,
    src: "/images/IMAGE_1.png",
    title: "A Cleaner Future",
    desc: "Digital logistics for waste management.",
  },
  {
    id: 3,
    src: "/images/IMAGE_1.png",
    title: "A Cleaner Future",
    desc: "Digital logistics for waste management.",
  },
  {
    id: 4,
    src: "/images/IMAGE_1.png",
    title: "A Cleaner Future",
    desc: "Digital logistics for waste management.",
  },
  {
    id: 5,
    src: "/images/IMAGE_1.png",
    title: "A Cleaner Future",
    desc: "Digital logistics for waste management.",
  },
  {
    id: 6,
    src: "/images/IMAGE_1.png",
    title: "A Cleaner Future",
    desc: "Digital logistics for waste management.",
  },
];

export const CoolGallery = () => {
  const [activeImg, setActiveImg] = useState(null);

  return (
    <div className="news-container">
      <div className="gallery-grid">
        {localGallery.map((item) => (
          <div
            className="gallery-card"
            key={item.id}
            onClick={() => setActiveImg(item)}
          >
            <div className="img-wrapper">
              <img src={item.src} alt={item.title} className="zoom-img" />
            </div>
            <div className="card-overlay">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <LiveStats />

      <div className="footer-cta">
        <h2>Have a visionary project in mind?</h2>
        <p>Let's build the future of Nairobi's digital landscape together.</p>
        <button
          className="cta-button"
          onClick={() =>
            (window.location.href = "mailto:wainainaerastus2@gmail.com")
          }
        >
          Let's Collaborate
        </button>
      </div>

      {activeImg && (
        <div className="lightbox" onClick={() => setActiveImg(null)}>
          <div className="lightbox-content">
            <img src={activeImg.src} alt="zoomed" />
            <div className="lightbox-text">
              <h2>{activeImg.title}</h2>
              <p>{activeImg.desc}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CoolGallery;
