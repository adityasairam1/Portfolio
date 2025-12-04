import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes, FaDownload } from 'react-icons/fa';
import { navigation, personalInfo } from '../data/data';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const downloadResume = async () => {
    try {
      const response = await fetch(personalInfo.resumeUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${personalInfo.name.replace(/\s+/g, '_')}_Resume.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch {
      window.open(personalInfo.resumeUrl, '_blank');
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#111]/80 backdrop-blur-xl border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => scrollToSection('#home')}
          >
            <span className="font-bold text-lg text-white">
              {personalInfo.name.split(' ')[0]}
            </span>
          </motion.div>

          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <motion.button
                key={item.name}
                whileHover={{ y: -2 }}
                onClick={() => scrollToSection(item.href)}
                className="text-white/70 hover:text-white transition-colors text-sm font-medium"
              >
                {item.name}
              </motion.button>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={downloadResume}
              className="px-4 py-2 rounded-lg bg-white text-[#111] text-sm font-medium hover:bg-white/90 transition-colors flex items-center gap-2"
            >
              <FaDownload size={14} />
              <span>Resume</span>
            </motion.button>
          </div>

          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-white"
          >
            {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </motion.button>
        </div>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 space-y-2"
          >
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left px-4 py-2 text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={downloadResume}
              className="w-full px-4 py-2 rounded-lg bg-white text-[#111] font-medium flex items-center justify-center gap-2"
            >
              <FaDownload size={14} />
              <span>Resume</span>
            </button>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
