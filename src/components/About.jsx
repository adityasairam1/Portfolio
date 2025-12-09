import { motion } from 'framer-motion';
import { personalInfo } from '../data/data';
import SpotlightCard from './SpotlightCard';

const About = () => {
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
      id="about"
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
        About
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-4">
        <motion.div
          custom={0}
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <SpotlightCard className="p-8">
            <h3 className="text-3xl font-semibold text-white mb-4">
              {personalInfo.name.split(' ')[0]}
            </h3>
            <p className="text-white/70 leading-relaxed mb-6 whitespace-pre-line">
              {personalInfo.summary}
            </p>
            <div className="space-y-2 text-sm text-white/60">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-white/40 rounded-full"></span>
                <span>Location: {personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-white/40 rounded-full"></span>
                <span>4+ years in software development</span>
              </div>
            </div>
          </SpotlightCard>
        </motion.div>

        <motion.div
          custom={1}
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <SpotlightCard className="p-8 flex items-center justify-center">
            <div className="w-64 h-64 rounded-full overflow-hidden border border-white/10 image-zoom">
              <img
                src={personalInfo.profileImage}
                alt={personalInfo.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>
          </SpotlightCard>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
