import React from "react";
import { BiSolidZap } from "react-icons/bi";
import { TbInfinity } from "react-icons/tb";
import { FaHeadset } from "react-icons/fa";
import "./About.css";

const About = () => {
  const homeNet = [
    {
      id: "01",
      title: "Blazing Fiber Speeds",
      description:
        "Say goodbye to buffering. HomeNet provides ultra-low latency fiber connections perfect for 4K streaming and competitive gaming.",
      icon: <BiSolidZap className="w-6 h-6" />,
      image:
        "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=600",
    },
    {
      id: "02",
      title: "Truly Unlimited Data",
      description:
        "No data caps, no throttling, and no hidden overage fees. Use as much data as you want, whenever you want, with total freedom.",
      icon: <TbInfinity className="w-6 h-6" />,
      image:
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=600",
    },
    {
      id: "03",
      title: "Local 24/7 Support",
      description:
        "Our support team is based right here in the community. If you have an issue, a real person is ready to help any time of day.",
      icon: <FaHeadset className="w-6 h-6" />,
      image:
        "https://images.unsplash.com/photo-1549923746-c502d488b3ea?auto=format&fit=crop&q=80&w=600",
    },
  ];

  return (
  <section className="homenet-section bg-brand-navy">
  <div className="container">
    <h2 className="section-title">Why Choose <span className="text-brand-orange">HomeNet?</span> </h2>
    <p className="text-center text-brand-white"> "HomeNet is more than just an internet provider—we’re your gateway to a faster world."</p>
    <div className="homenet-grid">
      {homeNet.map((item) => (
        <div key={item.id} className="homenet-card">
          <div className="image-wrapper">
            <img src={item.image} alt={item.title} />
            <div className="hover-overlay">
              <div className="icon-box">{item.icon}</div>
            </div>
          </div>

          <div className="content-box">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
  );
};

export default About;
