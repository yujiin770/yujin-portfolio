import { motion } from 'framer-motion';
import { Play, ArrowUpRight } from 'lucide-react';
import profileImg from '../assets/my-profile.png';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 lg:pt-0 lg:pb-0 px-6 overflow-hidden bg-brand-bg">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-0">
        
        {/* LEFT CONTENT */}
        <div className="order-2 lg:order-1 z-10 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-2 border-2 border-dashed border-gray-200 px-4 py-1.5 mb-8 rounded-lg"
          >
            <span className="w-2 h-2 bg-brand-primary rounded-full animate-ping" />
            <span className="text-xs font-black text-gray-400 uppercase tracking-widest">Available for projects</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-6xl md:text-8xl lg:text-[100px] font-black text-brand-dark leading-[0.9] mb-8"
          >
            I'm <span className="text-brand-primary italic">Yujin</span> <br /> 
            Almira<span className="text-brand-primary">.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-500 text-lg md:text-xl max-w-lg mb-10 mx-auto lg:mx-0 leading-relaxed font-medium"
          >
            A multidisciplinary <span className="text-brand-dark font-bold">Developer</span> & <span className="text-brand-dark font-bold">Designer</span> creating seamless digital journeys through code and art.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-5"
          >
            <button className="group bg-brand-dark hover:bg-black text-white pl-8 pr-3 py-3 rounded-full flex items-center gap-6 font-bold transition-all shadow-2xl shadow-brand-dark/20 h-16">
              View Portfolio
              <div className="bg-brand-primary p-2.5 rounded-full group-hover:rotate-45 transition-transform">
                <ArrowUpRight size={20} className="text-brand-dark" />
              </div>
            </button>
            
            <button className="px-10 py-4 border-2 border-brand-dark/10 rounded-full font-bold text-brand-dark hover:border-brand-primary transition-all h-16 uppercase text-sm tracking-widest">
              Hire Me
            </button>
          </motion.div>
        </div>

        {/* RIGHT IMAGE AREA */}
        <div className="order-1 lg:order-2 relative flex justify-center items-center group">
          <motion.div 
            initial={{ scale: 0, rotate: -20 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 50, delay: 0.4 }}
            className="absolute w-[300px] h-[300px] md:w-[450px] md:h-[450px] lg:w-[580px] lg:h-[580px] bg-brand-primary z-0"
            style={{ borderRadius: "40% 60% 70% 30% / 40% 50% 60% 70%" }}
          />

          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
            className="absolute top-10 right-10 md:top-20 md:right-20 z-20 hidden md:block"
          >
            <svg viewBox="0 0 100 100" className="w-32 h-32">
              <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
              <text className="text-[10px] font-black uppercase fill-brand-dark tracking-[2px]">
                <textPath xlinkHref="#circlePath">
                   • Software Developer • UI/UX Designer •
                </textPath>
              </text>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-2 h-2 bg-brand-dark rounded-full" />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative z-10 w-[320px] md:w-[480px] lg:w-[650px] pointer-events-none"
          >
            <img 
              src={profileImg} 
              alt="Eugene"
              className="w-full h-auto drop-shadow-[0_35px_35px_rgba(0,0,0,0.3)] grayscale hover:grayscale-0 transition-all duration-1000"
            />

            <motion.div 
              drag dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute bottom-20 -left-6 md:-left-16 bg-brand-dark text-white px-4 py-2.5 rounded-xl shadow-2xl flex items-center gap-3 cursor-grab active:cursor-grabbing pointer-events-auto"
            >
              <div className="w-2 h-2 bg-brand-primary rounded-full" />
              <span className="text-[10px] md:text-xs font-black uppercase tracking-[2px]">Front-end Dev</span>
            </motion.div>

            <motion.div 
              drag dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute top-1/3 -right-6 md:-right-12 bg-white text-brand-dark px-4 py-2.5 rounded-xl shadow-2xl border border-gray-100 flex items-center gap-3 cursor-grab pointer-events-auto"
            >
              <span className="text-[10px] md:text-xs font-black uppercase tracking-[2px]">UI</span>
              <Play size={10} className="fill-brand-primary text-brand-primary rotate-90" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      <Ticker />
    </section>
  );
};

// --- THIS WAS THE MISSING PART ---
function Ticker() {
  const items = ["Software Dev", "UI/UX Designer", "Web Applications", "Desktop Systems", "Mobile Design"];
  return (
    <div className="absolute -bottom-6 left-0 w-[150%] -translate-x-[10%] bg-brand-primary py-8 overflow-hidden border-y-[6px] border-brand-dark rotate-[-1.5deg] z-30 shadow-2xl">
      <motion.div
        animate={{ x: [0, -2000] }}
        transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
        className="flex whitespace-nowrap gap-12 items-center"
      >
        {[...Array(10)].map((_, groupIndex) => (
          <div key={groupIndex} className="flex items-center gap-12">
            {items.map((item, i) => (
              <div key={i} className="flex items-center gap-12">
                <span className="text-brand-dark text-4xl md:text-5xl font-black uppercase italic tracking-tighter">
                  {item}
                </span>
                <span className="text-brand-dark text-5xl">+</span>
              </div>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
export default Hero;