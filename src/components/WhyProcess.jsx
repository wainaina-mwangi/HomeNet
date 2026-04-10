import React from "react";
import image_7 from "../../src/assets/IMAGE_7.jpg";
import { Link } from "react-router-dom";
import { GoPaperAirplane } from "react-icons/go";

const WhyProcess = () => {
  return (
    <section className="w-full overflow-hidden">
      
      <div 
        className="relative min-h-[70vh] md:min-h-[80vh] w-full bg-fixed bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${image_7})` }}
      >
        
        <div className="relative z-10 flex flex-col justify-center items-center text-center px-6 py-20 max-w-7xl">
          <h1 className="text-3xl sm:text-5xl md:text-5xl font-black text-white tracking-tighter leading-tight mb-6">
            A Simple, Reliable and Affordable <br className="hidden sm:block" />
            <span className="text-brand-orange">
              Unlimited Internet Access
            </span>
          </h1>

          <p className="text-slate-200 text-base sm:text-lg md:text-xl max-w-2xl mb-10 opacity-90">
            We prioritize a "plug-and-play" experience that eliminates technical
            hurdles. By stripping away hidden fees, we make high-speed, infinite
            connectivity a reality for every home.
          </p>

          <div className="flex flex-col items-center sm:flex-row sm:justify-center gap-4 w-full">
            <Link
              to="/plans"
              className="btn flex justify-center items-center gap-2 bg-brand-orange hover:bg-brand-orange/70 text-white font-bold py-4 px-12 rounded-2xl transition-all active:scale-95 w-full sm:w-auto"
            >
              View Our Plans <GoPaperAirplane />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyProcess;