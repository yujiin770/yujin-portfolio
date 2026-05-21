// src/App.tsx
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Toaster } from 'sonner';
import SplashScreen from './sections/SplashScreen';
import Hero from './sections/Hero';
import About from './sections/about';
import TechStack from './sections/TechStack';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import MobileHeader from './components/MobileHeader';
import Navbar from './components/Navbar';


function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="bg-brand-bg min-h-screen text-brand-dark">
      <Toaster position="top-right" richColors />
      <AnimatePresence mode="wait">
        {loading ? (
          <SplashScreen key="loader" finishLoading={() => setLoading(false)} />
        ) : (
          <div key="content" className="relative">
            <MobileHeader />
            <Navbar />        
            <main>
              <Hero />
              <About />
              <TechStack />
              <Projects />
              <Contact />
            </main>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;