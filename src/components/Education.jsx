import { motion } from 'framer-motion';
import { FaGraduationCap, FaMapMarkerAlt, FaCalendarAlt, FaTrophy, FaBook } from 'react-icons/fa';
import { education } from '../data/data';

const Education = ({ darkMode }) => {
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

  return (
    <section id="education" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Education</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My academic journey and the knowledge foundation that shapes my professional work.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className={`p-8 rounded-2xl ${
                darkMode 
                  ? 'bg-gray-800 border border-gray-700' 
                  : 'bg-white border border-gray-200'
              } shadow-lg hover:shadow-xl transition-all duration-300`}
            >
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Left Column - Main Info */}
                <div className="lg:col-span-2">
                  <div className="flex items-start space-x-4 mb-6">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center flex-shrink-0"
                    >
                      <FaGraduationCap className="text-white text-2xl" />
                    </motion.div>
                    
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                        {edu.degree}
                      </h3>
                      <h4 className="text-xl font-semibold text-primary-600 dark:text-primary-400 mb-3">
                        {edu.institution}
                      </h4>
                      
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-300 mb-4">
                        <div className="flex items-center space-x-2">
                          <FaMapMarkerAlt />
                          <span>{edu.location}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <FaCalendarAlt />
                          <span>{edu.startDate} - {edu.endDate}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <FaTrophy />
                          <span>GPA: {edu.gpa}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Achievements */}
                  {edu.achievements && edu.achievements.length > 0 && (
                    <div className="mb-6">
                      <h5 className="text-lg font-semibold text-gray-800 dark:text-white mb-3 flex items-center space-x-2">
                        <FaTrophy />
                        <span>Achievements</span>
                      </h5>
                      <ul className="space-y-2">
                        {edu.achievements.map((achievement, achIndex) => (
                          <motion.li
                            key={achIndex}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: achIndex * 0.1 }}
                            className="flex items-start space-x-3"
                          >
                            <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-600 dark:text-gray-300">
                              {achievement}
                            </span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Right Column - Courses */}
                <div className="lg:col-span-1">
                  <h5 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 flex items-center space-x-2">
                    <FaBook />
                    <span>Relevant Courses</span>
                  </h5>
                  
                  <div className="space-y-3">
                    {edu.courses.map((course, courseIndex) => (
                      <motion.div
                        key={courseIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: courseIndex * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                        className={`p-3 rounded-lg ${
                          darkMode 
                            ? 'bg-gray-700 hover:bg-gray-600' 
                            : 'bg-gray-50 hover:bg-gray-100'
                        } transition-all duration-300`}
                      >
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          {course}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Education Summary */}
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
              Academic Excellence
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  {education.length}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  Degrees Earned
                </div>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  {education.reduce((total, edu) => total + edu.courses.length, 0)}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  Courses Completed
                </div>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  {education.reduce((total, edu) => total + (edu.achievements?.length || 0), 0)}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  Achievements
                </div>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="p-4 bg-primary-50 dark:bg-primary-900/20 rounded-lg"
            >
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Continuous Learning:</strong> Committed to staying current with the latest technologies and methodologies in software engineering.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
