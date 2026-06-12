import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-brand-orange overflow-hidden">
      
      {/* Centre Layout — Ripples, Orbiting Nodes, and Core */}
      <div className="relative flex items-center justify-center w-40 h-40">
        
        {/* Expanding Echo Rings */}
        {[0, 0.8, 1.6].map((delay, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border border-white"
            style={{ width: 20, height: 20 }}
            animate={{ scale: [1, 7], opacity: [0.6, 0] }}
            transition={{ duration: 2.4, delay, repeat: Infinity, ease: "easeOut" }}
          />
        ))}

        {/* Inner Fast Orbiting Node */}
        <motion.div 
          className="absolute" 
          style={{ originX: "50%", originY: "50%" }}
          animate={{ rotate: 360 }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "linear" }}
        >
          <div className="w-3 h-3 rounded-full bg-white" style={{ transform: "translateX(42px)" }} />
        </motion.div>

        {/* Outer Counter-Orbiting Node */}
        <motion.div 
          className="absolute"
          animate={{ rotate: -360 }}
          transition={{ duration: 3.4, repeat: Infinity, ease: "linear" }}
        >
          <div className="w-2 h-2 rounded-full bg-white/60" style={{ transform: "translateX(60px)" }} />
        </motion.div>

        {/* Pulsing Central Hub Core */}
        <motion.div 
          className="w-5 h-5 rounded-full bg-white"
          animate={{ scale: [1, 1.4, 1], opacity: [1, 0.7, 1] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Brand Identity Label */}
      <motion.p
        className="absolute bottom-12 text-xs tracking-[0.25em] uppercase font-bold text-white text-center px-4"
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        Welcome to HomeNet...
      </motion.p>
      
    </div>
  );
};

export default Loader;
