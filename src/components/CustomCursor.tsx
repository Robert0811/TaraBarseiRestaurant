import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [trail, setTrail] = useState<{ x: number; y: number; id: number }[]>([]);

  useEffect(() => {
    let trailId = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const newPosition = { x: e.clientX, y: e.clientY };
      setPosition(newPosition);
      
      // Add trail point
      setTrail(prevTrail => {
        const newTrail = [...prevTrail, { ...newPosition, id: trailId++ }];
        return newTrail.slice(-8); // Keep only last 8 points
      });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    // Add event listeners to interactive elements
    const addHoverListeners = () => {
      const interactiveElements = document.querySelectorAll('a, button, [role="button"], .btn, .card, .navbar-link');
      interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', handleMouseEnter);
        el.addEventListener('mouseleave', handleMouseLeave);
      });
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    
    // Initial setup
    addHoverListeners();
    
    // Re-add listeners when DOM changes
    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      observer.disconnect();
    };
  }, []);

  if (typeof window !== 'undefined' && window.innerWidth <= 768) {
    return null; // Don't show on mobile
  }

  return (
    <>
      {/* Trail */}
      {trail.map((point, index) => (
        <motion.div
          key={point.id}
          className="cursor-trail"
          style={{
            position: 'fixed',
            left: point.x,
            top: point.y,
            width: 6,
            height: 6,
            background: 'linear-gradient(135deg, #FFB366, #9CAF88)',
            borderRadius: '50%',
            pointerEvents: 'none',
            zIndex: 9999,
            opacity: (index + 1) / trail.length * 0.6,
            transform: 'translate(-50%, -50%)',
          }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          transition={{ duration: 0.2 }}
        />
      ))}
      
      {/* Main cursor */}
      <motion.div
        className="custom-cursor"
        style={{
          position: 'fixed',
          left: position.x,
          top: position.y,
          pointerEvents: 'none',
          zIndex: 10000,
          transform: 'translate(-50%, -50%)',
        }}
        animate={{
          scale: isClicking ? 0.8 : isHovering ? 1.5 : 1,
          rotate: isHovering ? 45 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30
        }}
      >
        <div
          style={{
            width: 20,
            height: 20,
            background: isHovering 
              ? 'linear-gradient(135deg, #FFB366, #FF8C42)' 
              : 'linear-gradient(135deg, #9CAF88, #7A9471)',
            borderRadius: '50%',
            border: '2px solid rgba(255, 255, 255, 0.8)',
            boxShadow: `
              0 0 20px ${isHovering ? '#FFB366' : '#9CAF88'},
              inset 0 0 10px rgba(255, 255, 255, 0.2)
            `,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
          }}
        >
          {/* Pulse effect */}
          <motion.div
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              background: isHovering ? '#FFB366' : '#9CAF88',
              opacity: 0.3,
            }}
            animate={{
              scale: [1, 2, 1],
              opacity: [0.3, 0, 0.3],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Inner dot */}
          <div
            style={{
              width: 4,
              height: 4,
              background: 'white',
              borderRadius: '50%',
              opacity: 0.9,
            }}
          />
        </div>
      </motion.div>
    </>
  );
};

export default CustomCursor;
