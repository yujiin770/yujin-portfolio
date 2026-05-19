import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import SplashScreen from './sections/SplashScreen';
import Hero from './sections/Hero';
import About from './sections/about'; 
import MobileHeader from './components/MobileHeader'; // Import the new header

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
              {/* These IDs MUST match the 'id' field in your Navbar.tsx navItems array */}
              <section id="home">
                <Hero />
              </section>

              <section id="about">
                <About />
              </section>

            
            </main>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;