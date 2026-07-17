import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CustomCursor from './components/CustomCursor';
import ParticlesBg from './components/ParticlesBg';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Fake progress loading simulation
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.floor(Math.random() * 20 + 8);
        if (next >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 400);
          return 100;
        }
        return next;
      });
    }, 120);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            key="preloader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 z-[9999] flex flex-col justify-center items-center bg-matte-black"
          >
            {/* Ambient background glow */}
            <div className="absolute w-[250px] h-[250px] bg-coca-red/10 rounded-full blur-[80px] animate-pulse-glow" />

            <div className="z-10 text-center">
              {/* Brand Logo */}
              <motion.h1 
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="font-display font-black text-4xl md:text-6xl tracking-tighter text-white mb-6"
              >
                SARVESH<span className="text-coca-red text-glow">.S</span>
              </motion.h1>
              
              {/* Percentage Counter */}
              <div className="text-coca-red font-display text-xs md:text-sm font-semibold tracking-widest mb-3 uppercase">
                Brewing Coca-Cola Energy... {Math.min(progress, 100)}%
              </div>
              
              {/* Progress Line */}
              <div className="w-56 h-[3px] bg-white/10 rounded-full overflow-hidden mx-auto shadow-inner">
                <div 
                  className="h-full bg-coca-red transition-all duration-150 ease-out shadow-[0_0_8px_#E41E26]"
                  style={{ width: `${Math.min(progress, 100)}%` }}
                />
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="portfolio-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative min-h-screen text-white bg-matte-black overflow-hidden"
          >
            {/* Custom Interactive Elements */}
            <CustomCursor />
            <ParticlesBg />
            
            {/* Header / Navigation */}
            <Navbar />

            {/* Layout Main Container */}
            <main>
              {/* Hero Header */}
              <Hero />
              
              {/* Content sections */}
              <div className="relative z-10">
                <About />
                <Skills />
                <Projects />
                <Education />
                <Certifications />
                <Contact />
              </div>
            </main>

            {/* Footer */}
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
