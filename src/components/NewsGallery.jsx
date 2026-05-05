import React, { useState } from "react";
import "./NewsGallery.css";
import LiveStats from "../components/LiveStats";
import { Link } from "react-router-dom";

const localGallery = [
  {
    id: 1,
    src: "/images/IMPACT_1.jpg",
    title: "Connectivity with Purpose",
    desc: "Affordable high-speed internet designed for the heart of the community.",
  },
  {
    id: 2,
    src: "/images/IMPACT_2.jpg",
    title: "The 30% Pledge",
    desc: "30% of every subscription directly funds school fees for local children.",
  },
  {
    id: 3,
    src: "/images/IMPACT_3.jpg",
    title: "Digital Classrooms",
    desc: "Transforming local homes into hubs of learning and global opportunity.",
  },
  {
    id: 4,
    src: "/images/IMPACT_4.jpg",
    title: "Empowering Futures",
    desc: "Meet the students whose education is powered by your connectivity.",
  },
  {
    id: 5,
    src: "/images/IMPACT_5.jpg",
    title: "Bridging the Gap",
    desc: "Bringing world-class infrastructure to underserved neighborhoods.",
  },
  {
    id: 6,
    src: "/images/IMPACT_6.jpg",
    title: "Community Growth",
    desc: "When you browse, they learn. Together, we build a smarter tomorrow.",
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
       <div>
         <Link to="/contact" className="mail-button">Let's Collaborate</Link>
       </div>
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
