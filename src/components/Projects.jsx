import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { projects } from '../data/data';
import SpotlightCard from './SpotlightCard';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', ...new Set(projects.map(project => project.category))];
  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

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
      id="projects"
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
        Projects
      </motion.h2>

      {/* Category Filter */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="flex flex-wrap gap-2 mb-8"
      >
        {categories.map((category) => (
          <motion.button
            key={category}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedCategory(category)}
            className={`button-glow px-4 py-2 rounded-lg text-sm font-medium transition-all relative overflow-hidden ${
              selectedCategory === category
                ? 'bg-white text-[#0a0a0a]'
                : 'bg-neutral-900/50 backdrop-blur-md border border-white/10 text-white/70 hover:border-white/20'
            }`}
          >
            <span className="relative z-10">{category}</span>
          </motion.button>
        ))}
      </motion.div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            custom={index}
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <SpotlightCard className="p-6 group cursor-pointer">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <div className="flex gap-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="opacity-0 group-hover:opacity-100 transition-opacity p-2 hover:bg-white/5 rounded"
                    >
                      <FaGithub className="text-white/60" size={16} />
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="opacity-0 group-hover:opacity-100 transition-opacity p-2 hover:bg-white/5 rounded"
                    >
                      <FaExternalLinkAlt className="text-white/60" size={16} />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-white/60 text-sm mb-4 line-clamp-2">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.technologies.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-white/5 rounded text-xs text-white/70"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="px-2 py-1 bg-white/5 rounded text-xs text-white/50">
                    +{project.technologies.length - 3}
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

export default Projects;
