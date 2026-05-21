// src/components/MobileHeader.tsx
import { motion, useScroll, useSpring } from 'framer-motion';
import { useState } from 'react';

export default function MobileHeader() {
  const [isVersion, setIsVersion] = useState(false);
  const { scrollYProgress } = useScroll();
  
  // Spring physics for the progress bar at the bottom of header
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 w-full z-[100] sm:hidden flex justify-between items-center px-6 h-14 bg-brand-bg/60 backdrop-blur-xl border-b border-gray-100"
    >
      {/* INTERACTIVE BRANDING - Toggles name on tap */}
      <motion.div 
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsVersion(!isVersion)}
        className="cursor-pointer"
      >
        <span className="text-brand-dark font-black tracking-tighter text-sm uppercase flex items-center gap-1.5">
          {isVersion ? (
            <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-brand-primary">
              VER_2.1.0
            </motion.span>
          ) : (
            <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              YUJIN<span className="text-brand-primary italic">.ALMIRA</span>
            </motion.span>
          )}
        </span>
      </motion.div>
      
      {/* MINIMAL INTERACTIVE COUNTER (Fake "Session Data") */}
      <div className="flex flex-col items-end">
        <span className="text-[7px] font-bold text-gray-400 tracking-[0.3em] uppercase mb-0.5">
          SESS_ID
        </span>
        <span className="text-[10px] font-mono text-brand-dark/60 font-black">
          #404X7F
        </span>
      </div>

      {/* PROGRESS BAR - Border that tracks your scroll depth */}
      <motion.div 
        className="absolute bottom-[-1px] left-0 right-0 h-[2px] bg-brand-primary origin-left shadow-[0_0_8px_rgba(228,161,1,0.5)]"
        style={{ scaleX }}
      />
    </motion.div>
  );
}