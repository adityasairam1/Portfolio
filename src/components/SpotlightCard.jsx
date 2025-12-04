import { useState, useRef } from 'react';
import { motion } from 'framer-motion';

const SpotlightCard = ({ children, className = '', ...props }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setMousePosition({ x, y });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
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
        boxShadow: isHovered
          ? `0 0 30px -5px radial-gradient(circle 300px at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.2), transparent 70%)`
          : 'none',
      }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      {...props}
    >
      {/* Spotlight gradient overlay that follows mouse */}
      {isHovered && (
        <div
          className="absolute inset-0 pointer-events-none rounded-2xl"
          style={{
            background: `radial-gradient(circle 300px at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.08), transparent 70%)`,
          }}
        />
      )}
      
      {/* Spotlight border highlight */}
      {isHovered && (
        <div
          className="absolute inset-0 pointer-events-none rounded-2xl"
          style={{
            border: '1px solid',
            borderImage: `radial-gradient(circle 300px at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.4), transparent 70%) 1`,
            WebkitMaskImage: `radial-gradient(circle 350px at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 1), transparent 70%)`,
            maskImage: `radial-gradient(circle 350px at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 1), transparent 70%)`,
          }}
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
