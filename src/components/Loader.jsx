import React from "react";
import { motion } from "framer-motion";

const Loader = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-white z-[9999]">
    <motion.div
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.5, 1, 0.5],
      }}
      transition={{ repeat: Infinity, duration: 1.5 }}
      className="w-16 h-16 bg-blue-600 rounded-full"
    />
  </div>
);

export default Loader ;