import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';
import { education } from '../data/data';
import SpotlightCard from './SpotlightCard';

const Education = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  return (
    <motion.section
      id="education"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-12"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-5xl md:text-6xl font-bold mb-8 gradient-text tracking-tighter"
      >
        Education
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-4">
        {education.map((edu, index) => (
          <motion.div
            key={edu.id}
            custom={index}
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <SpotlightCard className="p-6">
              <h3 className="text-xl font-semibold text-white mb-2">
                {edu.degree}
              </h3>
              <h4 className="text-lg text-white/80 mb-3">
                {edu.institution}
              </h4>
              <div className="flex flex-wrap items-center gap-4 text-sm text-white/60 mb-4">
                <div className="flex items-center gap-2">
                  <FaMapMarkerAlt size={12} />
                  <span>{edu.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaCalendarAlt size={12} />
                  <span>{edu.startDate} - {edu.endDate}</span>
                </div>
              </div>
              {edu.gpa && (
                <div className="text-sm text-white/70">
                  GPA: {edu.gpa}
                </div>
              )}
            </SpotlightCard>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Education;
