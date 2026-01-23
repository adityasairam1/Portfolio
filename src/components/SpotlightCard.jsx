import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const SpotlightCard = ({ children, className = '', ...props }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handleChange = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const handleMouseMove = (e) => {
    if (!cardRef.current || prefersReducedMotion) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setMousePosition({ x, y });
  };

  const handleMouseEnter = () => {
    if (!prefersReducedMotion) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative rounded-2xl bg-neutral-900/50 backdrop-blur-md overflow-hidden ${className}`}
      style={{
        border: '1px solid rgba(255, 255, 255, 0.05)',
        boxShadow: isHovered && !prefersReducedMotion
          ? `0 0 30px -5px radial-gradient(circle 300px at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.2), transparent 70%)`
          : 'none',
      }}
      whileHover={prefersReducedMotion ? {} : { y: -4 }}
      transition={{ duration: prefersReducedMotion ? 0 : 0.3 }}
      {...props}
    >
      {/* Spotlight gradient overlay that follows mouse - only on hover-capable devices */}
      {isHovered && !prefersReducedMotion && (
        <div
          className="absolute inset-0 pointer-events-none rounded-2xl"
          style={{
            background: `radial-gradient(circle 300px at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.08), transparent 70%)`,
          }}
          aria-hidden="true"
        />
      )}
      
      {/* Spotlight border highlight - only on hover-capable devices */}
      {isHovered && !prefersReducedMotion && (
        <div
          className="absolute inset-0 pointer-events-none rounded-2xl"
          style={{
            border: '1px solid',
            borderImage: `radial-gradient(circle 300px at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.4), transparent 70%) 1`,
            WebkitMaskImage: `radial-gradient(circle 350px at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 1), transparent 70%)`,
            maskImage: `radial-gradient(circle 350px at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 1), transparent 70%)`,
          }}
          aria-hidden="true"
        />
      )}
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};

export default SpotlightCard;
