import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaCalendarAlt } from 'react-icons/fa';
import { certifications } from '../data/data';
import SpotlightCard from './SpotlightCard';
import SectionHeading from './SectionHeading';
import { fadeInUp, fadeIn } from '../utils/animations';

const Certifications = () => {
  return (
    <motion.section
      id="certifications"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={fadeIn}
      className="mb-section"
    >
      <SectionHeading>Certifications</SectionHeading>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {certifications.map((cert, index) => (
          <motion.article
            key={cert.id}
            custom={index}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
          >
            <SpotlightCard className="p-6">
              <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2">
                {cert.name}
              </h3>
              <p className="text-sm text-white/70 mb-3">
                {cert.issuer}
              </p>
              <div className="flex items-center gap-2 text-xs text-white/60 mb-4">
                <FaCalendarAlt size={10} aria-hidden="true" />
                <span>{cert.date}</span>
              </div>
              <a
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs text-white/70 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white/20 rounded px-1"
                aria-label={`Verify ${cert.name} certification`}
              >
                <FaExternalLinkAlt size={10} aria-hidden="true" />
                <span>Verify</span>
              </a>
            </SpotlightCard>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
};

export default Certifications;
