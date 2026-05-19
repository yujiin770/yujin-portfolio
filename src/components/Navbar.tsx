import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Home, User, Briefcase, Mail } from 'lucide-react';

const navItems = [
  { name: 'Home', id: 'home', icon: <Home size={22} /> },
  { name: 'About', id: 'about', icon: <User size={22} /> },
  { name: 'Work', id: 'work', icon: <Briefcase size={22} /> },
  { name: 'Contact', id: 'contact', icon: <Mail size={22} /> },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(id);
      if (element) {
        const offset = 80; 
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);

    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -40% 0px',
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    navItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <nav 
      className={`fixed left-0 w-full z-[100] transition-all duration-500 
        /* Mobile: Bottom | Desktop: Top */
        bottom-0 sm:bottom-auto sm:top-0 
        ${scrolled ? 'bg-brand-dark/95 backdrop-blur-xl shadow-[0_-10px_30px_rgba(0,0,0,0.3)] sm:shadow-xl' : 'bg-brand-dark'}
      `}
    >
      <div className="max-w-7xl mx-auto px-0 sm:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20 relative">
          
          {/* DESKTOP LOGO (Hidden on Mobile) */}
          <div 
            className="hidden sm:flex items-center gap-3 cursor-pointer group" 
            onClick={() => window.scrollTo({top:0, behavior:'smooth'})}
          >
            <div className="w-10 h-10 bg-brand-primary rounded-xl flex items-center justify-center text-brand-dark font-black text-xl group-hover:rotate-6 transition-transform">
              Y
            </div>
            <span className="text-white font-black tracking-tighter text-xl">
              YUJIN<span className="text-brand-primary">.</span>
            </span>
          </div>

          {/* NAV LINKS (Full width on mobile, centered on desktop) */}
          <div className="flex flex-1 sm:flex-none justify-around sm:gap-12 h-full items-center">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleScrollTo(e, item.id)}
                  className="relative flex-1 sm:flex-none flex flex-col sm:flex-row items-center justify-center h-full group"
                >
                  {/* ICON: Active color logic */}
                  <div className={`sm:hidden transition-all duration-300 ${
                    isActive ? 'text-brand-primary scale-110' : 'text-gray-500 group-active:scale-90'
                  }`}>
                    {item.icon}
                  </div>

                  {/* TEXT LABEL */}
                  <span className={`text-[10px] sm:text-xs font-black sm:uppercase tracking-widest transition-all duration-300 ${
                    isActive ? 'text-brand-primary' : 'text-gray-400 sm:group-hover:text-white'
                  } mt-1 sm:mt-0`}>
                    {item.name}
                  </span>

                  {/* ACTIVE INDICATOR 
                      Mobile: Top of the bar | Desktop: Bottom of the bar 
                  */}
                  {isActive && (
                    <motion.div 
                      layoutId="navIndicator"
                      className="absolute left-0 right-0 h-[3px] bg-brand-primary 
                        top-0 sm:top-auto sm:bottom-0 
                        shadow-[0_0_15px_rgba(228,161,1,0.5)]"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* DESKTOP BUTTON (Hidden on Mobile) */}
          <div className="hidden sm:block">
            <button 
              onClick={(e) => handleScrollTo(e as any, 'contact')} 
              className="bg-brand-primary text-brand-dark px-7 py-2.5 rounded-full font-black text-[10px] uppercase tracking-widest hover:scale-105 transition-transform"
            >
              Contact Me
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
}