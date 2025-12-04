import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaCalendarAlt } from 'react-icons/fa';
import { certifications } from '../data/data';
import SpotlightCard from './SpotlightCard';

const Certifications = () => {
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
      id="certifications"
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
        Certifications
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {certifications.map((cert, index) => (
          <motion.div
            key={cert.id}
            custom={index}
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <SpotlightCard className="p-6">
              <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2">
                {cert.name}
              </h3>
              <p className="text-sm text-white/70 mb-3">
                {cert.issuer}
              </p>
              <div className="flex items-center gap-2 text-xs text-white/60 mb-4">
                <FaCalendarAlt size={10} />
                <span>{cert.date}</span>
              </div>
              <a
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs text-white/70 hover:text-white transition-colors"
              >
                <FaExternalLinkAlt size={10} />
                <span>Verify</span>
              </a>
            </SpotlightCard>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Certifications;
