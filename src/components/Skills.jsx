import { motion } from 'framer-motion';
import { skills } from '../data/data';
import SpotlightCard from './SpotlightCard';

const Skills = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.5,
      },
    }),
  };

  return (
    <motion.section
      id="skills"
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
        Skills
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Object.entries(skills).map(([category, skillList], categoryIndex) => (
          <motion.div
            key={category}
            custom={categoryIndex}
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <SpotlightCard className="p-6">
              <h3 className="text-lg font-semibold text-white mb-4">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillList.slice(0, 8).map((skill) => (
                  <span
                    key={skill.name}
                    className="px-2 py-1 bg-white/5 rounded text-xs text-white/70"
                  >
                    {skill.name}
                  </span>
                ))}
                {skillList.length > 8 && (
                  <span className="px-2 py-1 bg-white/5 rounded text-xs text-white/50">
                    +{skillList.length - 8}
                  </span>
                )}
              </div>
            </SpotlightCard>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;
