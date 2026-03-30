import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { GoPaperAirplane } from "react-icons/go";
import { Carousel } from "react-responsive-carousel";
import { motion } from "framer-motion";
import image_4 from "../../assets/IMAGE_4.png";
import image_2 from "../../assets/IMAGE_2.png";
import image_1 from "../../assets/IMAGE_1.png";
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
        {/* Slide 1 */}

        <div className="relative h-100 sm:h-125 md:h-150">
          <img
            src={image_4}
            className="h-full w-full object-cover"
            alt="Ultra-Fast Internet"
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            className="absolute inset-0 bg-linear-to-t from-blue-900/90 via-blue-900/40 to-transparent flex flex-col justify-center items-center text-center px-4 md:px-6"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-2xl sm:text-4xl md:text-6xl font-black text-white tracking-tighter mb-3"
            >
              Ultra-Fast internet that truly <br className="hidden sm:block" />
              <span className="text-blue-400"> feels like Home</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-slate-200 text-sm sm:text-lg md:text-xl max-w-2xl mb-6 md:mb-8 line-clamp-3 sm:line-clamp-none"
            >
              Experience speeds with 99.9% uptime. No hidden fees, just pure
              connectivity.
            </motion.p>

            <div className="flex gap-2">
              <Link
                to="/plans"
                className="btn gap-2 group overflow-hidden transition-all active:scale-95 "
              >
                View Our Plans <GoPaperAirplane />
              </Link>

              <Link
                to="/plans"
                className="btn gap-2 group overflow-hidden transition-all active:scale-95 "
              >
                Browse Plans <GoPaperAirplane />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Slide 2 */}
        <div className="relative h-100 sm:h-125 md:h-150">
          <img
            src={image_2}
            className="h-full w-full object-cover"
            alt="Unlimited Gaming"
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            className="absolute inset-0 bg-linear-to-t from-blue-900/90 via-blue-900/40 to-transparent flex flex-col justify-center items-center md:items-center text-center md:text-center px-6 md:px-20"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-7xl font-black text-white mb-3"
            >
              Built for{" "}
              <span className="text-blue-400 font-outline-2">Gamers</span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-slate-200 text-sm md:text-xl max-w-md mb-6"
            >
              Dominate the leaderboard with ultra-low latency and zero packet
              loss. Whether you're streaming on Twitch or downloading 100GB
              patches, we’ve got your back.
            </motion.p>
             <div className="flex gap-2">
              <Link
                to="/plans"
                className="btn gap-2 group overflow-hidden transition-all active:scale-95 "
              >
                View Our Plans <GoPaperAirplane />
              </Link>

              <Link
                to="/plans"
                className="btn gap-2 group overflow-hidden transition-all active:scale-95 "
              >
                Browse Plans <GoPaperAirplane />
              </Link>
            </div>
            <motion.div variants={fadeInUp} className="flex gap-2"></motion.div>
          </motion.div>
        </div>

        {/* Slide 3 */}
        <div className="relative h-100 sm:h-125 md:h-150">
          <img
            src={image_1}
            className="h-full w-full object-cover"
            alt="Mesh WiFi"
          />
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            className="absolute inset-0 bg-linear-to-t from-blue-900/90 via-blue-900/40 to-transparent  flex flex-col justify-center items-center text-center px-4"
          >
            <h2 className="text-3xl md:text-6xl font-black text-white mb-3">
              Powering Your
              <span className="text-blue-400 font-outline-2">Home Office</span>
            </h2>
            <motion.p
              variants={fadeInUp}
              className="text-slate-200 text-sm md:text-xl max-w-md mb-6"
            >
              Video calls that never freeze. Large files that upload in seconds.
              Business-grade reliability, right in your living room.
            </motion.p>
            <div className="flex gap-2">
              <Link
                to="/plans"
                className="btn gap-2 group overflow-hidden transition-all active:scale-95 "
              >
                View Our Plans <GoPaperAirplane />
              </Link>

              <Link
                to="/plans"
                className="btn gap-2 group overflow-hidden transition-all active:scale-95 "
              >
                Browse Plans <GoPaperAirplane />
              </Link>
            </div>
          </motion.div>
        </div>
      </Carousel>
    </div>
  );
};

export default Couresel;
