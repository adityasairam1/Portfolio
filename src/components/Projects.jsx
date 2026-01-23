import { useState } from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/data';
import SpotlightCard from './SpotlightCard';
import SectionHeading from './SectionHeading';
import { fadeInUp, fadeIn } from '../utils/animations';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', ...new Set(projects.map(project => project.category))];
  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <motion.section
      id="projects"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={fadeIn}
      className="mb-section"
    >
      <SectionHeading>Projects</SectionHeading>

      {/* Category Filter */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="flex flex-wrap gap-2 mb-8"
        role="tablist"
        aria-label="Project categories"
      >
        {categories.map((category) => (
          <motion.button
            key={category}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedCategory(category)}
            role="tab"
            aria-selected={selectedCategory === category}
            aria-controls="projects-grid"
            className={`button-glow px-4 py-2 rounded-lg text-sm font-medium transition-all relative overflow-hidden focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 ${
              selectedCategory === category
                ? 'bg-white text-bg-primary'
                : 'bg-neutral-900/50 backdrop-blur-md border border-white/10 text-white/70 hover:border-white/20'
            }`}
          >
            <span className="relative z-10">{category}</span>
          </motion.button>
        ))}
      </motion.div>

      {/* Projects Grid */}
      <div id="projects-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" role="list">
        {filteredProjects.map((project, index) => (
          <motion.article
            key={project.id}
            custom={index}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            role="listitem"
          >
            <SpotlightCard className="p-6">
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
              </div>

              <p className="text-white/60 text-sm mb-4 line-clamp-2">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2" role="list">
                {project.technologies.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-white/5 rounded text-xs text-white/70"
                    role="listitem"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="px-2 py-1 bg-white/5 rounded text-xs text-white/50" aria-label={`${project.technologies.length - 3} more technologies`}>
                    +{project.technologies.length - 3}
                  </span>
                )}
              </div>
            </SpotlightCard>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
