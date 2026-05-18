// src/sections/SplashScreen.tsx
import { motion } from 'framer-motion';
import { useEffect } from 'react';

const SplashScreen = ({ finishLoading }: { finishLoading: () => void }) => {
  useEffect(() => {
    const timer = setTimeout(finishLoading, 2200);
    return () => clearTimeout(timer);
  }, [finishLoading]);

  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ 
        clipPath: "circle(0% at 50% 50%)",
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
      }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-brand-dark"
    >
      <div className="relative flex flex-col items-center">
        {/* Initial Y that pulses */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="w-24 h-24 bg-brand-primary rounded-full flex items-center justify-center mb-6"
        >
          <span className="text-brand-dark text-4xl font-black">Y</span>
        </motion.div>
        
        {/* Modern staggered text reveal */}
        <div className="flex gap-2 overflow-hidden">
          {["YUJIN", "ALMIRA"].map((word, i) => (
            <motion.span
              key={word}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ delay: 0.5 + (i * 0.1), duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
              className="text-white text-3xl font-black tracking-tighter"
            >
              {word}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default SplashScreen;