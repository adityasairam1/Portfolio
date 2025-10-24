import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaServer, FaCloud, FaDatabase, FaTools, FaLaptopCode } from 'react-icons/fa';
import { skills } from '../data/data';

const Skills = ({ darkMode }) => {
  const skillIcons = {
    "Programming Languages": FaCode,
    "Systems Programming": FaServer,
    "Web Technologies": FaLaptopCode,
    "Cloud & DevOps": FaCloud,
    "Databases": FaDatabase,
    "Tools & Frameworks": FaTools
  };

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

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Skills & Expertise</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and areas of expertise.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          {Object.entries(skills).map(([category, skillList], categoryIndex) => (
            <motion.div
              key={category}
              variants={itemVariants}
              className={`p-8 rounded-2xl ${
                darkMode 
                  ? 'bg-gray-800 border border-gray-700' 
                  : 'bg-white border border-gray-200'
              } shadow-lg`}
            >
              {/* Category Header */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex items-center space-x-4 mb-8"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center"
                >
                  {React.createElement(skillIcons[category], { 
                    className: "text-white text-xl" 
                  })}
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                  {category}
                </h3>
              </motion.div>

              {/* Skills Grid */}
              <motion.div
                variants={containerVariants}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {skillList.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    variants={skillVariants}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className={`p-6 rounded-xl ${
                      darkMode 
                        ? 'bg-gray-700 hover:bg-gray-600' 
                        : 'bg-gray-50 hover:bg-gray-100'
                    } transition-all duration-300 shadow-md hover:shadow-lg`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                        {skill.name}
                      </h4>
                      <span className="text-sm font-medium text-primary-600 dark:text-primary-400">
                        {skill.level}%
                      </span>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2 mb-4">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="h-2 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"
                      />
                    </div>
                    
                    {/* Skill Level Indicator */}
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ 
                            opacity: i < Math.ceil(skill.level / 20) ? 1 : 0.3,
                            scale: i < Math.ceil(skill.level / 20) ? 1 : 0.8
                          }}
                          transition={{ duration: 0.3, delay: skillIndex * 0.1 + i * 0.1 }}
                          className={`w-2 h-2 rounded-full ${
                            i < Math.ceil(skill.level / 20)
                              ? 'bg-primary-500'
                              : 'bg-gray-300 dark:bg-gray-600'
                          }`}
                        />
                      ))}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className={`p-8 rounded-2xl text-center ${
              darkMode 
                ? 'bg-gray-800 border border-gray-700' 
                : 'bg-white border border-gray-200'
            } shadow-lg`}
          >
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              Technical Proficiency Overview
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {Object.entries(skills).map(([category, skillList]) => (
                <motion.div
                  key={category}
                  whileHover={{ scale: 1.05 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                    {skillList.length}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    {category.split(' ')[0]}
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-6 p-4 bg-primary-50 dark:bg-primary-900/20 rounded-lg"
            >
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Total Skills:</strong> {Object.values(skills).flat().length} technologies mastered
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
