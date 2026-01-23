import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes, FaDownload } from 'react-icons/fa';
import { navigation, personalInfo } from '../data/data';
import { scrollToSection, downloadResume } from '../utils/helpers';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId);
    setIsOpen(false);
  };

  const handleResumeClick = () => {
    downloadResume(personalInfo.resumeUrl, personalInfo.name);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-bg-secondary/80 backdrop-blur-xl border-b border-white/5'
          : 'bg-transparent'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={() => handleNavClick('#home')}
            className="flex items-center focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-bg-secondary rounded px-2"
            aria-label="Go to home"
          >
            <img 
              src="/Logo.png" 
              alt={personalInfo.name}
              className="h-12 md:h-14 w-auto brightness-110 contrast-110"
            />
          </motion.button>

          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <motion.button
                key={item.name}
                whileHover={{ y: -2 }}
                onClick={() => handleNavClick(item.href)}
                className="text-white/70 hover:text-white transition-colors text-sm font-medium focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-bg-secondary rounded px-2 py-1"
                aria-label={`Navigate to ${item.name} section`}
              >
                {item.name}
              </motion.button>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleResumeClick}
              className="px-4 py-2 rounded-lg bg-white text-bg-primary text-sm font-medium hover:bg-white/90 transition-colors flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2"
              aria-label="Download resume"
            >
              <FaDownload size={14} aria-hidden="true" />
              <span>Resume</span>
            </motion.button>
          </div>

          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-white focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-bg-secondary rounded"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <FaTimes size={20} aria-hidden="true" /> : <FaBars size={20} aria-hidden="true" />}
          </motion.button>
        </div>

        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 space-y-2"
          >
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className="block w-full text-left px-4 py-3 text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-white/20"
                aria-label={`Navigate to ${item.name} section`}
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={handleResumeClick}
              className="w-full px-4 py-3 rounded-lg bg-white text-bg-primary font-medium flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-white/20"
              aria-label="Download resume"
            >
              <FaDownload size={14} aria-hidden="true" />
              <span>Resume</span>
            </button>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
