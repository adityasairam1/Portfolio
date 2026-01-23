import { motion } from 'framer-motion';
import { fadeInUp } from '../utils/animations';

/**
 * Reusable section heading component with consistent styling
 */
const SectionHeading = ({ children, id, className = '' }) => {
  return (
    <motion.h2
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={fadeInUp}
      className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-8 md:mb-12 gradient-text tracking-tight ${className}`}
    >
      {children}
    </motion.h2>
  );
};

export default SectionHeading;
