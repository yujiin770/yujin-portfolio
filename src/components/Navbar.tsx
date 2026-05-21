import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Home, User, Briefcase, Mail, Code } from 'lucide-react';

const navItems = [
  { name: 'Home', id: 'home', icon: <Home size={20} /> },
  { name: 'About', id: 'about', icon: <User size={20} /> },
  { name: 'Tech', id: 'tech', icon: <Code size={20} /> },
  { name: 'Projects', id: 'work', icon: <Briefcase size={20} /> },
  { name: 'Contact', id: 'contact', icon: <Mail size={20} /> },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const isScrollingRef = useRef(false);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    isScrollingRef.current = true;
    setActiveSection(id);
    
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(id);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
    
    // Reset scrolling flag after animation completes
    setTimeout(() => {
      isScrollingRef.current = false;
    }, 1000);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Don't update active section while programmatically scrolling
      if (isScrollingRef.current) return;
      
      // Get all sections
      const sections = ['home', 'about', 'tech', 'work', 'contact'];
      
      // Find which section is currently most visible
      let currentSection = '';
      let maxVisibility = 0;
      
      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          const viewportHeight = window.innerHeight;
          
          // Calculate how much of the section is visible (as a percentage)
          const visibleTop = Math.max(0, rect.top);
          const visibleBottom = Math.min(viewportHeight, rect.bottom);
          const visibleHeight = Math.max(0, visibleBottom - visibleTop);
          const visibilityPercentage = visibleHeight / rect.height;
          
          // Also check if the section's top is near the top of viewport (for large sections)
          const distanceFromTop = Math.abs(rect.top - 100); // 100px offset for navbar
          const proximityScore = Math.max(0, 1 - distanceFromTop / 500);
          
          // Combined score
          const score = visibilityPercentage * 0.7 + proximityScore * 0.3;
          
          if (score > maxVisibility) {
            maxVisibility = score;
            currentSection = sectionId;
          }
        }
      });
      
      if (currentSection && maxVisibility > 0.1) {
        setActiveSection(currentSection);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    // Initial call to set active section on page load
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Mobile Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 w-full z-[100] bg-brand-dark/95 backdrop-blur-xl shadow-[0_-10px_30px_rgba(0,0,0,0.3)] sm:hidden">
        <div className="flex justify-around items-center h-16 px-4">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleScrollTo(e, item.id)}
                className="relative flex flex-col items-center justify-center flex-1 py-2 group"
              >
                <div className={`transition-all duration-300 ${isActive ? 'text-brand-primary scale-110' : 'text-gray-400'
                  }`}>
                  {item.icon}
                </div>
                <span className={`text-[10px] font-black tracking-widest transition-all duration-300 ${isActive ? 'text-brand-primary' : 'text-gray-400'
                  } mt-1`}>
                  {item.name}
                </span>
                {isActive && (
                  <motion.div
                    layoutId="navIndicator"
                    className="absolute top-0 left-0 right-0 h-[3px] bg-brand-primary shadow-[0_0_15px_rgba(228,161,1,0.5)]"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </div>
      </nav>

      {/* Desktop Top Navigation */}
      <nav
        className={`fixed left-0 w-full z-[100] transition-all duration-500 hidden sm:block
          top-0 ${scrolled ? 'bg-brand-dark/95 backdrop-blur-xl shadow-xl' : 'bg-brand-dark'}
        `}
      >
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex justify-between items-center h-20 relative">
            {/* DESKTOP LOGO */}
            <div
              className="flex items-center gap-3 cursor-pointer group"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <div className="w-10 h-10 bg-brand-primary rounded-xl flex items-center justify-center text-brand-dark font-black text-xl group-hover:rotate-6 transition-transform">
                Y
              </div>
              <span className="text-white font-black tracking-tighter text-xl">
                YUJIN<span className="text-brand-primary">.</span>
              </span>
            </div>

            {/* NAV LINKS */}
            <div className="flex gap-12 h-full items-center">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => handleScrollTo(e, item.id)}
                    className="relative flex flex-col items-center justify-center h-full group"
                  >
                    <span className={`text-xs font-black uppercase tracking-widest transition-all duration-300 ${isActive ? 'text-brand-primary' : 'text-gray-400 group-hover:text-white'
                      }`}>
                      {item.name}
                    </span>
                    {isActive && (
                      <motion.div
                        layoutId="navIndicatorDesktop"
                        className="absolute bottom-0 left-0 right-0 h-[3px] bg-brand-primary shadow-[0_0_15px_rgba(228,161,1,0.5)]"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                  </a>
                );
              })}
            </div>

            {/* DESKTOP BUTTON */}
            <button
              onClick={(e) => handleScrollTo(e as any, 'contact')}
              className="bg-brand-primary text-brand-dark px-7 py-2.5 rounded-full font-black text-[10px] uppercase tracking-widest hover:scale-105 transition-transform"
            >
              Contact Me
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}