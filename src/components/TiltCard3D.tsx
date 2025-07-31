import { motion } from 'framer-motion';
import { useState, useRef } from 'react';

interface TiltCard3DProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
  glare?: boolean;
}

const TiltCard3D = ({ 
  children, 
  className = '',
  intensity = 0.5,
  glare = true
}: TiltCard3DProps) => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePosition, setGlarePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = event.clientX - centerX;
    const mouseY = event.clientY - centerY;

    const rotateXValue = (mouseY / (rect.height / 2)) * -intensity * 20;
    const rotateYValue = (mouseX / (rect.width / 2)) * intensity * 20;

    setRotateX(rotateXValue);
    setRotateY(rotateYValue);

    // Glare effect position
    const glareX = (mouseX / rect.width) * 100;
    const glareY = (mouseY / rect.height) * 100;
    setGlarePosition({ x: glareX, y: glareY });
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <motion.div
      ref={cardRef}
      className={`relative transform-gpu ${className}`}
      style={{
        transformStyle: 'preserve-3d',
        perspective: '1000px'
      }}
      animate={{
        rotateX,
        rotateY,
        scale: isHovered ? 1.05 : 1
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
    >
      {/* Card Content */}
      <motion.div
        className="relative overflow-hidden rounded-xl"
        style={{
          transform: 'translateZ(50px)'
        }}
      >
        {children}
        
        {/* Glare Effect */}
        {glare && (
          <motion.div
            className="absolute inset-0 opacity-0 pointer-events-none"
            animate={{
              opacity: isHovered ? 0.3 : 0,
              background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, rgba(255,255,255,0.8) 0%, transparent 50%)`
            }}
            transition={{ duration: 0.2 }}
          />
        )}
      </motion.div>

      {/* Shadow */}
      <motion.div
        className="absolute inset-0 -z-10 rounded-xl blur-xl"
        style={{
          background: 'rgba(0,0,0,0.2)',
          transform: `translateZ(-50px) translateX(${rotateY * 0.5}px) translateY(${rotateX * 0.5}px)`
        }}
        animate={{
          opacity: isHovered ? 0.6 : 0.2,
          scale: isHovered ? 1.1 : 1
        }}
      />
    </motion.div>
  );
};

export default TiltCard3D;
