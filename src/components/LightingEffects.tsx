import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const LightingEffects = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(prev => prev + 0.01);
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-5">
      {/* Animated sunbeams */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute opacity-20"
          style={{
            top: '10%',
            right: '15%',
            width: '2px',
            height: '300px',
            background: 'linear-gradient(to bottom, rgba(255,215,0,0.8), transparent)',
            transformOrigin: 'top center',
            transform: `rotate(${i * 30 + time * 10}deg)`,
          }}
          animate={{
            opacity: [0.1, 0.3, 0.1],
            scaleY: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 4 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.3,
          }}
        />
      ))}

      {/* Floating light orbs */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: `${20 + Math.random() * 30}px`,
            height: `${20 + Math.random() * 30}px`,
            background: `radial-gradient(circle, rgba(255,255,255,0.4) 0%, transparent 70%)`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [0, Math.random() * 200 - 100, 0],
            y: [0, Math.random() * 200 - 100, 0],
            opacity: [0.2, 0.6, 0.2],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        />
      ))}

      {/* Shadow overlay for depth */}
      <div 
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse at 80% 20%, transparent 0%, rgba(0,0,0,0.1) 60%, rgba(0,0,0,0.2) 100%)`,
        }}
      />

      {/* Atmospheric perspective */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, rgba(135,206,235,0.1) 0%, transparent 30%, transparent 70%, rgba(245,245,220,0.2) 100%)',
        }}
      />
    </div>
  );
};

export default LightingEffects;
