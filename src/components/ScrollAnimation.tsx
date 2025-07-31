import { motion, useAnimation, useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';

interface ScrollAnimationProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fadeInUp' | 'fadeInLeft' | 'fadeInRight' | 'zoomIn' | 'rotateIn';
  delay?: number;
  duration?: number;
}

const ScrollAnimation = ({ 
  children, 
  className = '',
  animation = 'fadeInUp',
  delay = 0,
  duration = 0.6
}: ScrollAnimationProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  const animations = {
    fadeInUp: {
      initial: { opacity: 0, y: 60 },
      animate: { opacity: 1, y: 0 }
    },
    fadeInLeft: {
      initial: { opacity: 0, x: -60 },
      animate: { opacity: 1, x: 0 }
    },
    fadeInRight: {
      initial: { opacity: 0, x: 60 },
      animate: { opacity: 1, x: 0 }
    },
    zoomIn: {
      initial: { opacity: 0, scale: 0.8 },
      animate: { opacity: 1, scale: 1 }
    },
    rotateIn: {
      initial: { opacity: 0, rotate: -180, scale: 0.5 },
      animate: { opacity: 1, rotate: 0, scale: 1 }
    }
  };

  useEffect(() => {
    if (isInView) {
      controls.start('animate');
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="initial"
      animate={controls}
      variants={animations[animation]}
      transition={{
        duration,
        delay,
        ease: [0.4, 0.0, 0.2, 1]
      }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimation;
