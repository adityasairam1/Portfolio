import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCertificate, FaExternalLinkAlt, FaCalendarAlt } from 'react-icons/fa';
import { certifications } from '../data/data';

const Certifications = ({ darkMode }) => {
  const [selectedCert, setSelectedCert] = useState(null);

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

  const getIssuerColor = (issuer) => {
    const colors = {
      'Amazon Web Services': 'from-orange-500 to-yellow-500',
      'Google Cloud': 'from-blue-500 to-green-500',
      'Cloud Native Computing Foundation': 'from-blue-600 to-purple-600',
      'Microsoft': 'from-blue-500 to-blue-600',
      'Oracle': 'from-red-500 to-red-600'
    };
    return colors[issuer] || 'from-primary-500 to-accent-500';
  };

  return (
    <section id="certifications" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Professional certifications that validate my expertise in cloud technologies and software development.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -10 }}
              onClick={() => setSelectedCert(selectedCert === cert.id ? null : cert.id)}
              className={`cursor-pointer p-6 rounded-2xl ${
                darkMode 
                  ? 'bg-gray-800 border border-gray-700' 
                  : 'bg-white border border-gray-200'
              } shadow-lg hover:shadow-2xl transition-all duration-300`}
            >
              {/* Certificate Header */}
              <div className="flex items-start space-x-4 mb-4">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`w-16 h-16 bg-gradient-to-r ${getIssuerColor(cert.issuer)} rounded-full flex items-center justify-center flex-shrink-0`}
                >
                  <FaCertificate className="text-white text-2xl" />
                </motion.div>
                
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2 line-clamp-2">
                    {cert.name}
                  </h3>
                  <p className="text-sm text-primary-600 dark:text-primary-400 font-medium">
                    {cert.issuer}
                  </p>
                </div>
              </div>

              {/* Certificate Details */}
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300">
                  <FaCalendarAlt />
                  <span>{cert.date}</span>
                </div>
                
                <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
                  {cert.description}
                </p>

                {cert.credentialId && (
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    ID: {cert.credentialId}
                  </div>
                )}
              </div>

              {/* Action Button */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-4"
              >
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    darkMode
                      ? 'bg-gray-700 hover:bg-gray-600 text-white'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                  }`}
                  onClick={(e) => e.stopPropagation()}
                >
                  <FaExternalLinkAlt />
                  <span>Verify</span>
                </a>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Certifications Summary */}
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
              Professional Development
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  {certifications.length}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  Certifications
                </div>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  {new Set(certifications.map(cert => cert.issuer)).size}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  Providers
                </div>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  2024
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  Latest Year
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
                <strong>Continuous Learning:</strong> Committed to staying current with industry best practices and emerging technologies.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Modal for Certificate Details */}
        <AnimatePresence>
          {selectedCert && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
              onClick={() => setSelectedCert(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className={`w-full max-w-2xl p-8 rounded-2xl ${
                  darkMode 
                    ? 'bg-gray-800 border border-gray-700' 
                    : 'bg-white border border-gray-200'
                } shadow-2xl`}
              >
                {(() => {
                  const cert = certifications.find(c => c.id === selectedCert);
                  return cert ? (
                    <div>
                      <div className="flex items-start space-x-4 mb-6">
                        <motion.div
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                          className={`w-20 h-20 bg-gradient-to-r ${getIssuerColor(cert.issuer)} rounded-full flex items-center justify-center flex-shrink-0`}
                        >
                          <FaCertificate className="text-white text-3xl" />
                        </motion.div>
                        
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                            {cert.name}
                          </h3>
                          <p className="text-lg text-primary-600 dark:text-primary-400 font-medium mb-2">
                            {cert.issuer}
                          </p>
                          <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300">
                            <FaCalendarAlt />
                            <span>Issued: {cert.date}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                            Description
                          </h4>
                          <p className="text-gray-600 dark:text-gray-300">
                            {cert.description}
                          </p>
                        </div>
                        
                        {cert.credentialId && (
                          <div>
                            <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                              Credential ID
                            </h4>
                            <p className="text-gray-600 dark:text-gray-300 font-mono">
                              {cert.credentialId}
                            </p>
                          </div>
                        )}
                        
                        <div className="flex space-x-4">
                          <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href={cert.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary flex items-center space-x-2"
                          >
                            <FaExternalLinkAlt />
                            <span>Verify Certificate</span>
                          </motion.a>
                        </div>
                      </div>
                    </div>
                  ) : null;
                })()}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Certifications;
