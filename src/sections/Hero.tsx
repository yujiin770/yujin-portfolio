import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import profileImg from '../assets/my-profile.png';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center pt-24 pb-32 lg:pt-0 lg:pb-0 px-6 overflow-hidden bg-brand-bg">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-0 h-full">
        
        {/* RIGHT IMAGE AREA (Moved up for better mobile flow) */}
        <div className="order-1 lg:order-2 relative flex justify-center items-center h-[350px] sm:h-[500px] lg:h-screen">
          {/* THE YELLOW BACKGROUND BLOB */}
          <motion.div 
            initial={{ scale: 0, rotate: -20 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 50, delay: 0.4 }}
            className="absolute w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] lg:w-[580px] lg:h-[580px] bg-brand-primary z-0 shadow-2xl"
            style={{ borderRadius: "40% 60% 70% 30% / 40% 50% 60% 70%" }}
          />

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative z-10 w-[280px] sm:w-[480px] lg:w-[650px]"
          >
            <img 
              src={profileImg} 
              alt="Eugene Almira"
              className="w-full h-auto drop-shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000"
            />
          </motion.div>
        </div>

        {/* LEFT CONTENT AREA */}
        <div className="order-2 lg:order-1 z-10 text-center lg:text-left">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl lg:text-[100px] font-black text-brand-dark leading-[0.9] mb-6"
          >
            I'm <span className="text-brand-primary italic">Yujin</span> <br /> 
            Almira<span className="text-brand-primary">.</span>
          </motion.h1>

          <motion.p 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 0.3 }}
             className="text-gray-500 text-sm md:text-xl max-w-lg mb-8 mx-auto lg:mx-0 leading-relaxed font-medium"
          >
            A multidisciplinary <span className="text-brand-dark font-bold">Developer</span> & <span className="text-brand-dark font-bold">Designer</span> creating seamless digital journeys through code and art.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
          >
            {/* VIEW PORTFOLIO */}
            <button className="w-full sm:w-auto group bg-brand-dark hover:bg-black text-white pl-8 pr-3 py-3 rounded-full flex items-center justify-between sm:justify-start gap-6 font-bold transition-all shadow-xl h-14 sm:h-16">
              View My Work
              <div className="bg-brand-primary p-2.5 rounded-full group-hover:rotate-45 transition-transform">
                <ArrowUpRight size={20} className="text-brand-dark" />
              </div>
            </button>
            
            {/* HIRE ME (Restored) */}
            <button className="w-full sm:w-auto px-12 py-4 border-2 border-brand-dark/10 rounded-full font-black text-brand-dark hover:border-brand-primary hover:bg-brand-primary/5 transition-all h-14 sm:h-16 uppercase text-xs tracking-[0.2em]">
              Hire Me
            </button>
          </motion.div>
        </div>
      </div>

      <Ticker />
    </section>
  );
};

function Ticker() {
  const items = ["Software Dev", "UI/UX Designer", "Web Applications", "Desktop Systems"];
  return (
    <div className="absolute bottom-0 sm:-bottom-6 left-0 w-[150%] -translate-x-[10%] bg-brand-primary py-5 sm:py-8 overflow-hidden border-y-[4px] sm:border-y-[6px] border-brand-dark rotate-[-1.5deg] z-30 shadow-2xl">
      <motion.div
        animate={{ x: [0, -1500] }}
        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        className="flex whitespace-nowrap gap-12 items-center"
      >
        {[...Array(10)].map((_, groupIndex) => (
          <div key={groupIndex} className="flex items-center gap-12">
            {items.map((item, i) => (
              <div key={i} className="flex items-center gap-12">
                <span className="text-brand-dark text-3xl md:text-5xl font-black uppercase italic tracking-tighter">
                  {item}
                </span>
                <span className="text-brand-dark text-4xl md:text-5xl font-light">+</span>
              </div>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default Hero;