import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-brand-navy overflow-hidden">
      
      {/* Animated ring */}
      <div className="relative flex items-center justify-center mb-8">
        <motion.div
          className="absolute w-24 h-24 rounded-full border-2 border-[#d6671c]/20"
          animate={{ scale: [1, 1.35, 1], opacity: [0.4, 0, 0.4] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-16 h-16 rounded-full border-2 border-[#d6671c]/30"
          animate={{ scale: [1, 1.5, 1], opacity: [0.6, 0, 0.6] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
        />

        {/* Spinning arc */}
        <motion.div
          className="w-14 h-14 rounded-full border-2 border-transparent border-t-[#d6671c] border-r-[#d6671c]/40"
          animate={{ rotate: 360 }}
          transition={{ duration: 1.1, repeat: Infinity, ease: "linear" }}
        />

        {/* Inner dot */}
        <motion.div
          className="absolute w-3 h-3 rounded-full bg-[#d6671c]"
          animate={{ scale: [1, 1.3, 1], opacity: [1, 0.6, 1] }}
          transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <motion.p
        className="mt-10 text-2xl font-semibold text-white text-xs tracking-[0.25em] uppercase  text-white text-center px-4"
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
     Welcome to HomeNet...
      </motion.p>
      
    </div>
  );
};

export default Loader;
