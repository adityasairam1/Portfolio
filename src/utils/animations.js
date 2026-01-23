/**
 * Shared animation variants for Framer Motion
 * Respects prefers-reduced-motion
 */

// Check prefers-reduced-motion safely (SSR compatible)
const getPrefersReducedMotion = () => {
  if (typeof window === 'undefined') return false;
  try {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  } catch {
    return false;
  }
};

// Get preference at runtime (not module load time)
const prefersReducedMotion = getPrefersReducedMotion();

export const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => {
    const reduced = getPrefersReducedMotion();
    return {
      opacity: 1,
      y: 0,
      transition: {
        delay: reduced ? 0 : i * 0.1,
        duration: reduced ? 0.01 : 0.5,
      },
    };
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: getPrefersReducedMotion() ? 0.01 : 0.6,
    },
  },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: getPrefersReducedMotion() ? 1 : 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: getPrefersReducedMotion() ? 0 : 0.2,
      duration: getPrefersReducedMotion() ? 0.01 : 0.5,
    },
  },
};

export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: getPrefersReducedMotion() ? 0 : 0.1,
      delayChildren: getPrefersReducedMotion() ? 0 : 0.2,
    },
  },
};

// Blob animations - only animate if motion is not reduced
export const createBlobVariants = (config) => {
  if (getPrefersReducedMotion()) {
    return { animate: {} };
  }
  return {
    animate: {
      ...config.animate,
      transition: {
        ...config.transition,
      },
    },
  };
};
