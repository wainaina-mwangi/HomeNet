import React from "react";
import NewsGallery from "../components/NewsGallery";
import "./News.css";

const News = () => {
  return (
    <section className="news-page-section">
      <div className="news-hero">
        <h1>Latest Updates</h1>
        <h4>
          Multimedia <span className="text-brand-orange">Gallery</span>{" "}
        </h4>
        <p>
          Explore our classrooms, activities, and events through high-quality
          photos and engaging social media videos.
        </p>
      </div>

      <NewsGallery />
    </section>
  );
};

export default News;
