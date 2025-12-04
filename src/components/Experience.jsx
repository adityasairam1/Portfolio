import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';
import { experience } from '../data/data';
import SpotlightCard from './SpotlightCard';

const Experience = () => {
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
      id="experience"
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
        Experience
      </motion.h2>

      <div className="space-y-4">
        {experience.map((exp, index) => (
          <motion.div
            key={exp.id}
            custom={index}
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <SpotlightCard className="p-6">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {exp.position}
                  </h3>
                  <h4 className="text-lg text-white/80 mb-3">
                    {exp.company}
                  </h4>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-white/60 mb-4">
                    <div className="flex items-center gap-2">
                      <FaMapMarkerAlt size={12} />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaCalendarAlt size={12} />
                      <span>{exp.startDate} - {exp.endDate}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-white/5 rounded text-xs text-white/70"
                      >
                        {tech}
                      </span>
                    ))}
                    {exp.technologies.length > 5 && (
                      <span className="px-2 py-1 bg-white/5 rounded text-xs text-white/50">
                        +{exp.technologies.length - 5}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </SpotlightCard>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Experience;
