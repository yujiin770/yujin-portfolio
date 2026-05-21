import { motion } from 'framer-motion';
import { FaFacebook, FaLine } from 'react-icons/fa';
import { SiTiktok, SiX } from 'react-icons/si';

const Footer = () => {
  // Your Portfolio Content
  const tickerText = "BSIT DEVELOPER // BUILDING DIGITAL EXPERIENCES // UI/UX ENTHUSIAST // SOFTWARE ARCHITECTURE // LET'S CREATE SOMETHING AMAZING // ";

  return (
    <footer id="main-footer" className="relative bg-brand-bg pt-32 pb-12 overflow-hidden w-full mt-20 border-t border-gray-200">
      
      {/* 1. THE YELLOW RIBBON - Enhanced Contrast */}
      <div className="absolute top-0 sm:top-10 left-[-5%] w-[110%] py-3 sm:py-5 bg-brand-primary border-y-[4px] border-brand-dark -rotate-2 z-10 flex items-center shadow-xl">
        
        {/* WARNING BLOCK - Fixed and highly visible */}
        <motion.div 
          animate={{ opacity: [1, 0, 1] }}
          transition={{ repeat: Infinity, duration: 0.6 }}
          className="pl-6 sm:pl-24 pr-4 sm:pr-8 border-r-4 border-brand-dark flex-shrink-0 bg-brand-primary relative z-20"
        >
          <span className="text-brand-dark font-black text-2xl sm:text-4xl italic uppercase tracking-tighter">
            HTTPS://
          </span>
        </motion.div>

        {/* MARQUEE */}
        <div className="flex-grow overflow-hidden flex items-center">
          <motion.div
            animate={{ x: [0, -1200] }}
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
            className="flex whitespace-nowrap"
          >
            {[...Array(8)].map((_, i) => (
              <span key={i} className="text-brand-dark font-black text-lg sm:text-3xl italic mx-6">
                {tickerText}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto max-w-7xl px-8 flex flex-col md:flex-row justify-between items-center gap-16 mt-20 sm:mt-28 relative z-20">
        
        {/* 2. OFFICIAL NETWORK STAMPS - NEW SHAPE */}
        <div className="flex flex-col items-center">
          <p className="text-brand-dark font-black text-[11px] tracking-[0.5em] mb-5 opacity-80 uppercase">
            Official Account
          </p>
          <div className="flex gap-8">
            <div className="relative group drop-shadow-[0_10px_10px_rgba(0,0,0,0.1)]">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
                className="w-16 h-16 sm:w-20 sm:h-20 bg-brand-dark"
                // 8-Point Official Seal Shape
                style={{ clipPath: "polygon(50% 0%, 63% 15%, 85% 15%, 85% 37%, 100% 50%, 85% 63%, 85% 85%, 63% 85%, 50% 100%, 37% 85%, 15% 85%, 15% 63%, 0% 50%, 15% 37%, 15% 15%, 37% 15%)" }}
              />
              <div className="absolute inset-0 flex items-center justify-center text-brand-primary">
                <SiX size={24} />
              </div>
            </div>

            <div className="relative group drop-shadow-[0_10px_10px_rgba(228,161,1,0.2)]">
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
                className="w-16 h-16 sm:w-20 sm:h-20 bg-brand-primary"
                // 8-Point Official Seal Shape
                style={{ clipPath: "polygon(50% 0%, 63% 15%, 85% 15%, 85% 37%, 100% 50%, 85% 63%, 85% 85%, 63% 85%, 50% 100%, 37% 85%, 15% 85%, 15% 63%, 0% 50%, 15% 37%, 15% 15%, 37% 15%)" }}
              />
              <div className="absolute inset-0 flex items-center justify-center text-brand-dark">
                <SiTiktok size={24} />
              </div>
            </div>
          </div>
        </div>

        {/* 3. SHARE SECTION */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="relative">
            <h2 className="text-6xl md:text-8xl font-black text-black uppercase italic tracking-tighter select-none leading-none ">
              SHARE
            </h2>
          </div>

          <div className="flex gap-8 items-center py-4 px-10 bg-gray-50 border-2 border-gray-200 rounded-full hover:border-brand-primary transition-all shadow-sm">
            <motion.a whileHover={{ scale: 1.2 }} href="#" className="text-brand-dark">
              <SiX size={26} />
            </motion.a>
            <motion.a whileHover={{ scale: 1.2 }} href="#" className="text-brand-dark">
              <FaFacebook size={26} />
            </motion.a>
            <motion.a whileHover={{ scale: 1.2 }} href="#" className="text-brand-dark">
              <FaLine size={26} />
            </motion.a>
          </div>
        </div>
      </div>

      {/* 4. FOOTER CREDITS */}
      <div className="mt-20 px-8 text-center border-t border-gray-100 pt-10">
        <div className="flex justify-center items-center gap-3 mb-4">
           <span className="w-2 h-2 bg-brand-primary rounded-full animate-pulse shadow-[0_0_8px_rgba(228,161,1,1)]" />
           <p className="text-[11px] text-gray-600 font-bold uppercase tracking-[0.4em]">
             SYSTEM.STATUS: ACTIVE // USER: YUJIN.ADMIN
           </p>
        </div>
        <p className="text-[12px] text-brand-dark font-black uppercase tracking-[0.2em] italic opacity-90">
          COPYRIGHT © {new Date().getFullYear()} YUJIN ALMIRA PORTFOLIO. ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
};

export default Footer;