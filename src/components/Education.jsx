import { motion } from 'framer-motion';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { education } from '../data/data';
import SpotlightCard from './SpotlightCard';
import SectionHeading from './SectionHeading';
import { fadeInUp, fadeIn } from '../utils/animations';

const Education = () => {
  return (
    <motion.section
      id="education"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={fadeIn}
      className="mb-section"
    >
      <SectionHeading>Education</SectionHeading>

      <div className="grid md:grid-cols-2 gap-4">
        {education.map((edu, index) => (
          <motion.article
            key={edu.id}
            custom={index}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
          >
            <SpotlightCard className="p-6">
              <h3 className="text-xl font-semibold text-white mb-2">
                {edu.degree}
              </h3>
              <h4 className="text-lg text-white/80 mb-3">
                {edu.institution}
              </h4>
              <div className="flex flex-wrap items-center gap-4 text-sm text-white/60">
                <div className="flex items-center gap-2">
                  <FaMapMarkerAlt size={12} aria-hidden="true" />
                  <span>{edu.location}</span>
                </div>
                {edu.startDate && edu.endDate && (
                  <div className="flex items-center gap-2">
                    <span>{edu.startDate} - {edu.endDate}</span>
                  </div>
                )}
              </div>
            </SpotlightCard>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
};

export default Education;
