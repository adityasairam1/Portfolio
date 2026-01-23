import { motion } from 'framer-motion';
import { fadeInUp } from '../utils/animations';

/**
 * Reusable icon button component with consistent styling and accessibility
 */
const IconButton = ({
  icon: Icon,
  label,
  href,
  onClick,
  className = '',
  size = 18,
  ariaLabel,
  ...props
}) => {
  const Component = href ? 'a' : 'button';
  const baseClasses = 'w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-[#0a0a0a]';
  
  return (
    <motion.div
      variants={fadeInUp}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Component
        href={href}
        onClick={onClick}
        className={`${baseClasses} ${className}`}
        aria-label={ariaLabel || label}
        target={href ? '_blank' : undefined}
        rel={href ? 'noopener noreferrer' : undefined}
        {...props}
      >
        <Icon className="text-white/70" size={size} />
      </Component>
    </motion.div>
  );
};

export default IconButton;
