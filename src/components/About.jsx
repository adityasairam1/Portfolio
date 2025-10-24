import { motion } from 'framer-motion';
import { FaCode, FaRocket, FaUsers, FaLightbulb } from 'react-icons/fa';
import { personalInfo } from '../data/data';

const About = ({ darkMode }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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

  const values = [
    {
      icon: FaCode,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and well-documented code that follows industry best practices."
    },
    {
      icon: FaRocket,
      title: "Performance",
      description: "Optimizing applications for speed and efficiency, ensuring the best user experience."
    },
    {
      icon: FaUsers,
      title: "Collaboration",
      description: "Working effectively in teams, mentoring others, and contributing to a positive work environment."
    },
    {
      icon: FaLightbulb,
      title: "Innovation",
      description: "Embracing new technologies and finding creative solutions to complex problems."
    }
  ];

  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Get to know more about my background, values, and what drives me as a software engineer.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Column - Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className={`w-full h-96 rounded-2xl ${
                  darkMode ? 'bg-gray-800' : 'bg-gray-100'
                } flex items-center justify-center relative overflow-hidden`}
              >
                <div className="w-64 h-64 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 p-1">
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
                    <div className="text-6xl font-bold gradient-text hidden">
                      {personalInfo.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <motion.div
                  animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute top-4 right-4 w-16 h-16 bg-primary-500/20 rounded-full blur-sm"
                />
                <motion.div
                  animate={{ 
                    rotate: [360, 0],
                    scale: [1, 0.9, 1]
                  }}
                  transition={{ 
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute bottom-4 left-4 w-12 h-12 bg-accent-500/20 rounded-full blur-sm"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                Hello! I'm {personalInfo.name.split(' ')[0]}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                {personalInfo.summary}
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                <span className="text-gray-700 dark:text-gray-300">
                  <strong>Location:</strong> {personalInfo.location}
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                <span className="text-gray-700 dark:text-gray-300">
                  <strong>Experience:</strong> 4+ years in software development
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                <span className="text-gray-700 dark:text-gray-300">
                  <strong>Specialization:</strong> Systems Programming & Cloud Architecture
                </span>
              </div>
            </div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className={`p-6 rounded-xl ${
                darkMode 
                  ? 'bg-gray-800 border border-gray-700' 
                  : 'bg-white border border-gray-200'
              } shadow-lg`}
            >
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                What I Do
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                I specialize in building high-performance, scalable applications using modern technologies. 
                My expertise spans from low-level systems programming to cloud-native architectures, 
                with a focus on creating solutions that are both efficient and maintainable.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16"
        >
          <motion.h3
            variants={itemVariants}
            className="text-3xl font-bold text-center mb-12"
          >
            <span className="gradient-text">My Values</span>
          </motion.h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className={`p-6 rounded-xl text-center ${
                  darkMode 
                    ? 'bg-gray-800 border border-gray-700' 
                    : 'bg-white border border-gray-200'
                } shadow-lg hover:shadow-xl transition-all duration-300`}
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center"
                >
                  <value.icon className="text-white text-xl" />
                </motion.div>
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                  {value.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
