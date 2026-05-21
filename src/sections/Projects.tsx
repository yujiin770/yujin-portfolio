import { useState, useEffect } from 'react';
import { motion, type PanInfo } from 'framer-motion';
import { ChevronLeft, ChevronRight, Lightbulb } from 'lucide-react';
import { PROJECTS } from '../constants/data';

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    if (currentIndex < PROJECTS.length - 1) setCurrentIndex(prev => prev + 1);
  };

  const prevSlide = () => {
    if (currentIndex > 0) setCurrentIndex(prev => prev - 1);
  };

  const handleCardClick = (index: number) => {
    setCurrentIndex(index);
  };

  // SWIPE LOGIC
  const handleDragEnd = (_: any, info: PanInfo) => {
    const swipeThreshold = 50;
    if (info.offset.x < -swipeThreshold) {
      nextSlide();
    } else if (info.offset.x > swipeThreshold) {
      prevSlide();
    }
  };

  const isMobile = windowWidth < 768;
  const cardWidth = isMobile ? 300 : 600;
  const gap = isMobile ? 16 : 40;
  const totalStep = cardWidth + gap;

  return (
    // ID "work" must be on this section tag for the Navbar to see it
    <section
      id="work"  // ✅ This must match 'work' in NavItems
      className="py-24 bg-brand-dark text-white w-screen overflow-hidden relative left-[50%] right-[50%] ml-[-50vw] mr-[-50vw]"
    >

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_-10%,rgba(228,161,1,0.15)_0%,transparent_50%)] pointer-events-none" />

      <div className="w-full relative z-10">
        <div className="flex flex-col items-center text-center mb-16 px-6">
          <div className="w-14 h-14 bg-brand-primary/10 border border-brand-primary/20 rounded-2xl flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(228,161,1,0.1)]">
            <Lightbulb className="text-brand-primary" size={28} />
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter uppercase italic">
            My <span className="text-brand-primary">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl text-base md:text-lg leading-relaxed font-medium">
            A collection of systems and applications built with precision.
          </p>
        </div>

        <div className="relative h-[500px] md:h-[700px] flex items-center overflow-visible">

          {/* NAVIGATION BUTTONS */}
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 md:px-12 z-50 pointer-events-none">
            <button
              onClick={prevSlide}
              className={`w-14 h-14 md:w-20 md:h-20 rounded-full flex items-center justify-center border border-white/10 bg-brand-dark/80 backdrop-blur-xl text-white transition-all pointer-events-auto hover:bg-brand-primary hover:text-brand-dark shadow-2xl active:scale-90 ${currentIndex === 0 ? 'opacity-0 scale-50' : 'opacity-100 scale-100'}`}
            >
              <ChevronLeft size={isMobile ? 24 : 36} strokeWidth={2.5} />
            </button>
            <button
              onClick={nextSlide}
              className={`w-14 h-14 md:w-20 md:h-20 rounded-full flex items-center justify-center border border-white/10 bg-brand-dark/80 backdrop-blur-xl text-white transition-all pointer-events-auto hover:bg-brand-primary hover:text-brand-dark shadow-2xl active:scale-90 ${currentIndex === PROJECTS.length - 1 ? 'opacity-0 scale-50' : 'opacity-100 scale-100'}`}
            >
              <ChevronRight size={isMobile ? 24 : 36} strokeWidth={2.5} />
            </button>
          </div>

          {/* THE MOTION ENGINE WITH SWIPE (drag="x") */}
          <div className="w-full h-full flex items-center justify-center relative cursor-grab active:cursor-grabbing">
            <motion.div
              className="flex items-center"
              style={{ gap: `${gap}px` }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={handleDragEnd}
              animate={{
                x: `calc(50% - ${currentIndex * totalStep + (cardWidth / 2)}px)`
              }}
              transition={{
                type: "spring",
                stiffness: 150,
                damping: 22,
                mass: 1
              }}
            >
              {PROJECTS.map((project, index) => {
                const isCenter = index === currentIndex;

                return (
                  <motion.div
                    key={project.id}
                    onClick={() => handleCardClick(index)}
                    animate={{
                      scale: isCenter ? 1 : 0.82,
                      opacity: isCenter ? 1 : 0.3,
                    }}
                    transition={{ duration: 0.5 }}
                    className={`relative rounded-[2.5rem] overflow-hidden flex-shrink-0 transition-all duration-500 border pointer-events-auto
                      ${isCenter
                        ? 'w-[300px] md:w-[600px] h-[460px] md:h-[640px] z-30 shadow-[0_40px_100px_rgba(0,0,0,0.8)] border-brand-primary/30'
                        : 'w-[300px] md:w-[600px] h-[400px] md:h-[500px] z-10 border-transparent'}
                    `}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 select-none ${isCenter ? 'grayscale-0 scale-100' : 'grayscale scale-110'}`}
                      draggable={false} // Prevents default browser image drag
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/40 to-transparent opacity-100" />

                    <div className={`absolute bottom-0 left-0 p-8 md:p-12 w-full transition-all duration-700 pointer-events-none ${isCenter ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="h-[2px] w-8 bg-brand-primary" />
                        <span className="text-brand-primary text-[10px] font-black uppercase tracking-[0.3em]">
                          {project.category}
                        </span>
                      </div>
                      <h3 className="text-3xl md:text-5xl font-black mb-4 tracking-tighter uppercase italic text-white leading-[0.9]">
                        {project.title}
                      </h3>
                      <p className="text-gray-300 text-sm md:text-base font-medium leading-relaxed max-w-md line-clamp-3">
                        {project.description}
                      </p>
                      <div className="mt-8 flex items-center gap-4 text-white font-black text-[10px] md:text-xs uppercase tracking-widest group/btn">
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-brand-primary/50 flex items-center justify-center group-hover/btn:bg-brand-primary group-hover/btn:text-brand-dark transition-all">
                          <ChevronRight size={20} />
                        </div>
                        View Full Project
                      </div>
                    </div>

                    {isCenter && (
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(228,161,1,0.05)_0%,transparent_70%)] pointer-events-none" />
                    )}
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}