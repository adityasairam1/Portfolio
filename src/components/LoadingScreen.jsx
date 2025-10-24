import { motion } from 'framer-motion';
import { personalInfo } from '../data/data';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-primary-50 to-accent-50 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ 
            duration: 0.5,
            delay: 0.2,
            type: "spring",
            stiffness: 200
          }}
          className="w-20 h-20 mx-auto mb-8 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full p-1"
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
            <span className="text-2xl font-bold text-white hidden">
              {personalInfo.name.split(' ').map(n => n[0]).join('')}
            </span>
          </div>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-2xl font-bold text-gray-800 dark:text-white mb-2"
        >
          {personalInfo.name}
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-gray-600 dark:text-gray-300 mb-8"
        >
          {personalInfo.title}
        </motion.p>
        
        <div className="loading-dots">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="text-sm text-gray-500 dark:text-gray-400 mt-4"
        >
          Loading portfolio...
        </motion.p>
      </motion.div>
    </div>
  );
};

export default LoadingScreen;
