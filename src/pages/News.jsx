import React from "react";
import NewsGallery from "../components/NewsGallery";
import "./News.css";

const News = () => {
  return (
    <section className="news-page-section">
    <div className="news-hero">
  <div className="hero-content">
    <span className="hero-tagline">Making an Impact</span>
    <h1>Our Digital Journey</h1>
    <h4 className="hero-subtitle">
      Community <span className="text-brand-orange">Impact</span> & Network <span className="text-brand-orange">Growth</span>
    </h4>
    <p>
      Witness how affordable connectivity is transforming lives. From new fiber 
      installations to the classrooms we support—every subscription helps 
      bridge the digital divide in Nairobi.
    </p>
    <div className="hero-stats-mini">
      <span>• 30% to Education</span>
      <span>• 100% Community Powered</span>
    </div>
  </div>
</div>

      <NewsGallery />
    </section>
  );
};

export default News;
