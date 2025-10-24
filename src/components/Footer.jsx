import { motion } from 'framer-motion';
import { FaHeart, FaArrowUp, FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';
import { personalInfo, socialLinks } from '../data/data';

const Footer = ({ darkMode }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <footer className={`${
      darkMode 
        ? 'bg-gray-900 border-t border-gray-800' 
        : 'bg-gray-50 border-t border-gray-200'
    }`}>
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-12"
        >
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Brand Section */}
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full p-0.5"
                >
                  <div className="w-full h-full rounded-full overflow-hidden bg-white dark:bg-gray-800 flex items-center justify-center">
                    <img 
                      src={personalInfo.profileImage} 
                      alt={personalInfo.name}
                      className="w-full h-full object-cover rounded-full"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <span className="text-white font-bold text-sm hidden">
                      {personalInfo.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                </motion.div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                    {personalInfo.name}
                  </h3>
                  <p className="text-primary-600 dark:text-primary-400 font-medium">
                    {personalInfo.title}
                  </p>
                </div>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-md">
                {personalInfo.summary}
              </p>
              
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                      darkMode
                        ? 'bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white'
                        : 'bg-white hover:bg-gray-100 text-gray-600 hover:text-gray-800'
                    } shadow-md hover:shadow-lg`}
                  >
                    {social.name === 'LinkedIn' && <FaLinkedin size={16} />}
                    {social.name === 'GitHub' && <FaGithub size={16} />}
                    {social.name === 'Email' && <FaEnvelope size={16} />}
                    {social.name === 'Phone' && <FaPhone size={16} />}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants}>
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <motion.a
                      whileHover={{ x: 5 }}
                      href={link.href}
                      className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={itemVariants}>
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
                Contact Info
              </h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <FaEnvelope className="text-primary-600 dark:text-primary-400" />
                  <span className="text-gray-600 dark:text-gray-300 text-sm">
                    {personalInfo.email}
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <FaPhone className="text-primary-600 dark:text-primary-400" />
                  <span className="text-gray-600 dark:text-gray-300 text-sm">
                    {personalInfo.phone}
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-primary-600 dark:text-primary-400">📍</span>
                  <span className="text-gray-600 dark:text-gray-300 text-sm">
                    {personalInfo.location}
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Section */}
          <motion.div
            variants={itemVariants}
            className="border-t border-gray-200 dark:border-gray-700 pt-8"
          >
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                <span>© {currentYear} {personalInfo.name}. Made with</span>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <FaHeart className="text-red-500" />
                </motion.div>
                <span>and lots of Tea.</span>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToTop}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                  darkMode
                    ? 'bg-gray-800 hover:bg-gray-700 text-gray-300'
                    : 'bg-white hover:bg-gray-100 text-gray-600'
                } shadow-md hover:shadow-lg`}
              >
                <FaArrowUp />
                <span>Back to Top</span>
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
