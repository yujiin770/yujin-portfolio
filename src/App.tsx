import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import SplashScreen from './sections/SplashScreen';
import Hero from './sections/Hero';
import About from './sections/about';
import TechStack from './sections/TechStack';
import MobileHeader from './components/MobileHeader';
import Navbar from './components/Navbar';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="bg-brand-bg min-h-screen text-brand-dark">
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
            </main>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;