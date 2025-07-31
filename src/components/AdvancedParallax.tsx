import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

interface AdvancedParallaxProps {
  children: React.ReactNode;
  speed?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
}

const AdvancedParallax = ({ 
  children, 
  speed = 0.5, 
  direction = 'up',
  className = '' 
}: AdvancedParallaxProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Create smooth spring animation
  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  
  const y = useSpring(
    useTransform(scrollYProgress, [0, 1], 
      direction === 'up' ? [100 * speed, -100 * speed] :
      direction === 'down' ? [-100 * speed, 100 * speed] :
      [0, 0]
    ), 
    springConfig
  );
  
  const x = useSpring(
    useTransform(scrollYProgress, [0, 1], 
      direction === 'left' ? [100 * speed, -100 * speed] :
      direction === 'right' ? [-100 * speed, 100 * speed] :
      [0, 0]
    ), 
    springConfig
  );

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        y: direction === 'up' || direction === 'down' ? y : 0,
        x: direction === 'left' || direction === 'right' ? x : 0,
        opacity,
        scale
      }}
    >
      {children}
    </motion.div>
  );
};

export default AdvancedParallax;
