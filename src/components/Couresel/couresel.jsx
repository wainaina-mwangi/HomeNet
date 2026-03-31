import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { GoPaperAirplane } from "react-icons/go";
import { Carousel } from "react-responsive-carousel";
import { motion } from "framer-motion";
import image_4 from "../../assets/IMAGE_4.png";
import image_1 from "../../assets/IMAGE_1.png";
import image_2 from "../../assets/IMAGE_2.png";
import { Link } from "react-router-dom";

const Couresel = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    visible: { transition: { staggerChildren: 0.2 } },
  };

  return (
    <div className="carousel-wrapper relative overflow-hidden shadow-2xl mx-4 md:mx-auto max-w-7xl mt-6 md:mt-10">
      <Carousel
        autoPlay
        infiniteLoop
        showIndicators={true}
        showStatus={false}
        showThumbs={false}
        interval={5000}
        stopOnHover={false}
        className="main-carousel"
      >
        {/* --- SLIDE 1 --- */}
       {/* --- SLIDE 1: SPEED --- */}
        <div className="relative h-100 sm:h-125 md:h-150">
          <img src={image_4} className="h-full w-full object-cover" alt="Ultra-Fast Internet" />
          <motion.div
            initial="hidden" whileInView="visible" variants={staggerContainer}
            className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-slate-900/60 to-transparent flex flex-col justify-center items-center text-center px-4 md:px-6"
          >
            <motion.h1 variants={fadeInUp} className="text-3xl sm:text-5xl md:text-7xl font-black text-white tracking-tighter mb-4">
              Ultra-Fast Internet that <br/> <span className="text-brand-orange">feels like Home</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-slate-200 text-sm sm:text-lg md:text-xl max-w-2xl mb-8">
              Experience blazing speeds with 99.9% uptime. No hidden fees, no data caps—just pure connectivity.
            </motion.p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/plans" className="btn flex items-center gap-2 bg-brand-orange hover:bg-brand-orange/70 text-white font-bold py-3 px-8 rounded-2xl transition-all active:scale-95 ">
                View Our Plans <GoPaperAirplane />
              </Link>
              <Link to="/contact" className="btn flex items-center gap-2 bg-white/10 hover:bg-white/20  text-white border border-white/30 font-bold py-3 px-8 rounded-2xl transition-all active:scale-95">
                Check Coverage
              </Link>
            </div>
          </motion.div>
        </div>

        {/* --- SLIDE 2 --- */}
        {/* --- SLIDE 2: RELIABILITY --- */}
        <div className="relative h-100 sm:h-125 md:h-150">
          <img src={image_2} className="h-full w-full object-cover" alt="Reliable Connection" />
          <motion.div
            initial="hidden" whileInView="visible" variants={staggerContainer}
            className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-slate-900/60 to-transparent flex flex-col justify-center items-center text-center px-4 md:px-6"
          >
            <motion.h1 variants={fadeInUp} className="text-3xl sm:text-5xl md:text-7xl font-black text-white tracking-tighter mb-4">
              Work & Stream <br/> Without <span className="text-brand-orange">The Buffer</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-slate-200 text-sm sm:text-lg md:text-xl max-w-2xl mb-8">
              Video calls that never freeze and large files that upload in seconds. Business-grade reliability at home.
            </motion.p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/plans" className="btn flex items-center gap-2 bg-brand-orange hover:bg-brand-orange/70 text-white font-bold py-3 px-8 rounded-2xl transition-all active:scale-95">
                Get Connected <GoPaperAirplane />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* --- SLIDE 3 --- */}
        {/* --- SLIDE 3: LOCAL SUPPORT --- */}
        <div className="relative h-100 sm:h-125 md:h-150">
          <img src={image_1} className="h-full w-full object-cover" alt="Nairobi Local Support" />
          <motion.div
            initial="hidden" whileInView="visible" variants={staggerContainer}
            className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-slate-900/60 to-transparent flex flex-col justify-center items-center text-center px-4"
          >
            <motion.h1 variants={fadeInUp} className="text-3xl md:text-7xl font-black text-white mb-4 tracking-tighter">
              Nairobi's Most <br/> <span className="text-brand-orange">Trusted Network</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-slate-200 text-sm md:text-xl max-w-md mb-8">
              We’re your neighbors. Enjoy 24/7 local support and expert setup within 24 hours.
            </motion.p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/plans" className="btn flex items-center gap-2 bg-brand-orange hover:bg-brand-orange/70 text-white font-bold py-3 px-8 rounded-2xl transition-all active:scale-95">
                Join homeNet <GoPaperAirplane />
              </Link>
              <Link to="/contact" className="btn flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 font-bold py-3 px-8 rounded-2xl transition-all active:scale-95">
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </Carousel>
    </div>
  );
};

export default Couresel;
