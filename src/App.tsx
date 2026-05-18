import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import SplashScreen from './sections/SplashScreen';
import Hero from './sections/Hero';
import Navbar from './components/Navbar';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white">
      <AnimatePresence mode="wait">
        {loading ? (
          // Important: unique key so Framer Motion knows when it leaves
          <SplashScreen key="loader" finishLoading={() => setLoading(false)} />
        ) : (
          <div key="content">
            <Navbar />
            <Hero />
            {/* Add next sections here */}
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;