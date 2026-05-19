import { motion } from 'framer-motion';

export default function MobileHeader() {
  return (
    <motion.div 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 w-full z-[90] sm:hidden flex justify-between items-center px-6 py-4 bg-brand-bg/80 backdrop-blur-md"
    >
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-brand-dark rounded-lg flex items-center justify-center text-brand-primary font-black text-sm">
          Y
        </div>
        <span className="text-brand-dark font-black tracking-tighter text-sm italic">
          YUJIN<span className="text-brand-primary">.</span>
        </span>
      </div>
      
      {/* Small "Status" indicator for a pro look */}
      <div className="flex items-center gap-2 bg-brand-primary/10 px-3 py-1 rounded-full">
        <span className="w-1.5 h-1.5 bg-brand-primary rounded-full animate-pulse" />
        <span className="text-[10px] font-black text-brand-primary uppercase tracking-widest">Online</span>
      </div>
    </motion.div>
  );
}