import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';
import { experience } from '../data/data';
import SpotlightCard from './SpotlightCard';
import SectionHeading from './SectionHeading';
import { fadeInUp, fadeIn } from '../utils/animations';

const Experience = () => {
  return (
    <motion.section
      id="experience"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={fadeIn}
      className="mb-section"
    >
      <SectionHeading>Experience</SectionHeading>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {experience.map((exp, index) => (
          <motion.article
            key={exp.id}
            custom={index}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
          >
            <SpotlightCard className="p-6">
              <div className="flex flex-col gap-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {exp.position}
                  </h3>
                  <h4 className="text-lg text-white/80 mb-3">
                    {exp.company}
                  </h4>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-white/60 mb-4">
                    <div className="flex items-center gap-2">
                      <FaMapMarkerAlt size={12} aria-hidden="true" />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaCalendarAlt size={12} aria-hidden="true" />
                      <span>{exp.startDate} - {exp.endDate}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2" role="list">
                    {exp.technologies.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-white/5 rounded text-xs text-white/70"
                        role="listitem"
                      >
                        {tech}
                      </span>
                    ))}
                    {exp.technologies.length > 5 && (
                      <span className="px-2 py-1 bg-white/5 rounded text-xs text-white/50" aria-label={`${exp.technologies.length - 5} more technologies`}>
                        +{exp.technologies.length - 5}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </SpotlightCard>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
};

export default Experience;
