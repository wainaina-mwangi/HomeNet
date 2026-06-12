import { motion } from "framer-motion";

const CORNER_ARCS = [
  
  { d: "M 0,80 A 80,80 0 0,1 80,0",     delay: 0,    opacity: 0.55 },
  { d: "M 0,140 A 140,140 0 0,1 140,0", delay: 0.2,  opacity: 0.38 },
  { d: "M 0,200 A 200,200 0 0,1 200,0", delay: 0.4,  opacity: 0.22 },
  // top-right
  { d: "M calc(100% - 80px),0 A 80,80 0 0,1 100%,80",     delay: 0.3,  opacity: 0.55 },
  { d: "M calc(100% - 140px),0 A 140,140 0 0,1 100%,140", delay: 0.5,  opacity: 0.38 },
  { d: "M calc(100% - 200px),0 A 200,200 0 0,1 100%,200", delay: 0.7,  opacity: 0.22 },
  // bottom-left
  { d: "M 80,100% A 80,80 0 0,0 0,calc(100% - 80px)",     delay: 0.15, opacity: 0.55 },
  { d: "M 140,100% A 140,140 0 0,0 0,calc(100% - 140px)", delay: 0.35, opacity: 0.38 },
  { d: "M 200,100% A 200,200 0 0,0 0,calc(100% - 200px)", delay: 0.55, opacity: 0.22 },
  // bottom-right
  { d: "M calc(100% - 80px),100% A 80,80 0 0,1 100%,calc(100% - 80px)",     delay: 0.45, opacity: 0.55 },
  { d: "M calc(100% - 140px),100% A 140,140 0 0,1 100%,calc(100% - 140px)", delay: 0.65, opacity: 0.38 },
  { d: "M calc(100% - 200px),100% A 200,200 0 0,1 100%,calc(100% - 200px)", delay: 0.85, opacity: 0.22 },
];

const CornerArc = ({ d, delay, opacity, strokeWidth = 2 }) => (
  <motion.path
    d={d}
    fill="none"
    stroke="white"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    initial={{ pathLength: 0, opacity: 0 }}
    animate={{ pathLength: [0, 1], opacity: [0, opacity, 0] }}
    transition={{
      duration: 2.4,
      delay,
      repeat: Infinity,
      ease: "easeOut",
    }}
  />
);

const Loader = () => (
  <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-brand-orange overflow-hidden">

    {/* Scan lines */}
    <motion.div
      className="absolute w-full h-px bg-white/25"
      animate={{ y: ["-100px", "100px"], opacity: [0, 0.25, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.div
      className="absolute h-full w-px bg-white/20"
      animate={{ x: ["-150px", "150px"], opacity: [0, 0.2, 0] }}
      transition={{ duration: 4, delay: 1, repeat: Infinity, ease: "easeInOut" }}
    />

    {/* Corner arcs — SVG fills the whole screen */}
    <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
      {/* top-left */}
      {[
        { d: "M 0,80 A 80,80 0 0,1 80,0",     delay: 0,   o: 0.55, sw: 2.5 },
        { d: "M 0,140 A 140,140 0 0,1 140,0",  delay: 0.2, o: 0.38, sw: 2   },
        { d: "M 0,200 A 200,200 0 0,1 200,0",  delay: 0.4, o: 0.22, sw: 1.5 },
      ].map((a, i) => (
        <motion.path key={`tl${i}`} d={a.d} fill="none" stroke="white" strokeWidth={a.sw} strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: [0,1], opacity: [0, a.o, 0] }}
          transition={{ duration: 2.4, delay: a.delay, repeat: Infinity, ease: "easeOut" }}
        />
      ))}
      {/* top-right — mirrored via transform */}
      <g transform="translate(100%) scale(-1,1)">
        {[
          { d: "M 0,80 A 80,80 0 0,1 80,0",     delay: 0.3, o: 0.55, sw: 2.5 },
          { d: "M 0,140 A 140,140 0 0,1 140,0",  delay: 0.5, o: 0.38, sw: 2   },
          { d: "M 0,200 A 200,200 0 0,1 200,0",  delay: 0.7, o: 0.22, sw: 1.5 },
        ].map((a, i) => (
          <motion.path key={`tr${i}`} d={a.d} fill="none" stroke="white" strokeWidth={a.sw} strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: [0,1], opacity: [0, a.o, 0] }}
            transition={{ duration: 2.4, delay: a.delay, repeat: Infinity, ease: "easeOut" }}
          />
        ))}
      </g>
      {/* bottom-left */}
      <g transform="translate(0,100%) scale(1,-1)">
        {[
          { d: "M 0,80 A 80,80 0 0,1 80,0",     delay: 0.15, o: 0.55, sw: 2.5 },
          { d: "M 0,140 A 140,140 0 0,1 140,0",  delay: 0.35, o: 0.38, sw: 2   },
          { d: "M 0,200 A 200,200 0 0,1 200,0",  delay: 0.55, o: 0.22, sw: 1.5 },
        ].map((a, i) => (
          <motion.path key={`bl${i}`} d={a.d} fill="none" stroke="white" strokeWidth={a.sw} strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: [0,1], opacity: [0, a.o, 0] }}
            transition={{ duration: 2.4, delay: a.delay, repeat: Infinity, ease: "easeOut" }}
          />
        ))}
      </g>
      {/* bottom-right */}
      <g transform="translate(100%,100%) scale(-1,-1)">
        {[
          { d: "M 0,80 A 80,80 0 0,1 80,0",     delay: 0.45, o: 0.55, sw: 2.5 },
          { d: "M 0,140 A 140,140 0 0,1 140,0",  delay: 0.65, o: 0.38, sw: 2   },
          { d: "M 0,200 A 200,200 0 0,1 200,0",  delay: 0.85, o: 0.22, sw: 1.5 },
        ].map((a, i) => (
          <motion.path key={`br${i}`} d={a.d} fill="none" stroke="white" strokeWidth={a.sw} strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: [0,1], opacity: [0, a.o, 0] }}
            transition={{ duration: 2.4, delay: a.delay, repeat: Infinity, ease: "easeOut" }}
          />
        ))}
      </g>
    </svg>

    {/* Centre — ripples + orbiting dots + core */}
    <div className="relative flex items-center justify-center w-40 h-40">
      {[0, 0.8, 1.6].map((delay, i) => (
        <motion.div key={i}
          className="absolute rounded-full border border-white"
          style={{ width: 20, height: 20 }}
          animate={{ scale: [1, 7], opacity: [0.6, 0] }}
          transition={{ duration: 2.4, delay, repeat: Infinity, ease: "easeOut" }}
        />
      ))}

      {/* orbit close */}
      <motion.div className="absolute" style={{ originX: "50%", originY: "50%" }}
        animate={{ rotate: 360 }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "linear" }}>
        <div className="w-3 h-3 rounded-full bg-white" style={{ transform: "translateX(42px)" }} />
      </motion.div>

      {/* orbit far */}
      <motion.div className="absolute"
        animate={{ rotate: -360 }}
        transition={{ duration: 3.4, repeat: Infinity, ease: "linear" }}>
        <div className="w-2 h-2 rounded-full bg-white/60" style={{ transform: "translateX(60px)" }} />
      </motion.div>

      {/* core */}
      <motion.div className="w-5 h-5 rounded-full bg-white"
        animate={{ scale: [1, 1.4, 1], opacity: [1, 0.7, 1] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>

    {/* Label */}
    <motion.p
      className="absolute bottom-12 text-[11px] tracking-[0.22em] uppercase font-medium text-white/70"
      animate={{ opacity: [0.3, 1, 0.3] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    >
      Connecting
    </motion.p>
  </div>
);

export default Loader;
