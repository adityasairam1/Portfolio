import { motion } from 'framer-motion';
import { skills } from '../data/data';
import SpotlightCard from './SpotlightCard';
import SectionHeading from './SectionHeading';
import { fadeInUp, fadeIn } from '../utils/animations';

const Skills = () => {
  return (
    <motion.section
      id="skills"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={fadeIn}
      className="mb-section"
    >
      <SectionHeading>Skills</SectionHeading>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Object.entries(skills).map(([category, skillList], categoryIndex) => (
          <motion.div
            key={category}
            custom={categoryIndex}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
          >
            <SpotlightCard className="p-6">
              <h3 className="text-lg font-semibold text-white mb-4">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2" role="list">
                {skillList.slice(0, 8).map((skill) => (
                  <span
                    key={skill.name}
                    className="px-2 py-1 bg-white/5 rounded text-xs text-white/70"
                    role="listitem"
                  >
                    {skill.name}
                  </span>
                ))}
                {skillList.length > 8 && (
                  <span className="px-2 py-1 bg-white/5 rounded text-xs text-white/50" aria-label={`${skillList.length - 8} more skills`}>
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
