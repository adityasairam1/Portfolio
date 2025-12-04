import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  // Animated gradient blob variants
  const blobVariants1 = {
    animate: {
      x: [0, 100, -50, 0],
      y: [0, -80, 50, 0],
      scale: [1, 1.2, 0.9, 1],
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const blobVariants2 = {
    animate: {
      x: [0, -120, 80, 0],
      y: [0, 100, -60, 0],
      scale: [1, 0.8, 1.3, 1],
      transition: {
        duration: 25,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const blobVariants3 = {
    animate: {
      x: [0, 80, -100, 0],
      y: [0, -120, 80, 0],
      scale: [1, 1.1, 0.9, 1],
      transition: {
        duration: 30,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white relative overflow-hidden">
      {/* Noise texture overlay */}
      <div className="noise-overlay" />
      
      {/* Animated gradient blobs */}
      <motion.div
        variants={blobVariants1}
        animate="animate"
        className="absolute top-20 left-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        variants={blobVariants2}
        animate="animate"
        className="absolute top-1/2 right-20 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        variants={blobVariants3}
        animate="animate"
        className="absolute bottom-20 left-1/3 w-80 h-80 bg-teal-500/20 rounded-full blur-3xl pointer-events-none"
      />

      <Toaster 
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: 'rgba(23, 23, 23, 0.9)',
            color: '#ffffff',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(12px)',
          },
        }}
      />
      
      <div className="relative z-10">
        <Navbar />
        
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <Hero />
            <About />
            <Experience />
            <Skills />
            <Projects />
            <Education />
            <Certifications />
            <Contact />
          </motion.div>
        </main>
        
        <Footer />
      </div>
    </div>
  );
}

export default App;
