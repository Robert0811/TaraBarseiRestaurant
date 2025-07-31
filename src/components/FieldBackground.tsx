import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const FieldBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Sky gradient */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, #87CEEB 0%, #E0F6FF 30%, #F0F8FF 60%, #F5F5DC 100%)'
        }}
      />

      {/* Mountains in far background */}
      <motion.div
        className="absolute bottom-0 w-full h-96"
        style={{
          background: 'linear-gradient(to top, #9CAF88 0%, #7A9471 50%, transparent 100%)',
          clipPath: 'polygon(0 100%, 20% 60%, 40% 70%, 60% 50%, 80% 65%, 100% 55%, 100% 100%)',
          x: mousePosition.x * -20,
        }}
      />

      {/* Second layer of hills */}
      <motion.div
        className="absolute bottom-0 w-full h-80"
        style={{
          background: 'linear-gradient(to top, #A8B899 0%, #8DA682 60%, transparent 100%)',
          clipPath: 'polygon(0 100%, 15% 70%, 35% 65%, 55% 75%, 75% 60%, 95% 70%, 100% 100%)',
          x: mousePosition.x * -30,
        }}
      />

      {/* Foreground hills */}
      <motion.div
        className="absolute bottom-0 w-full h-64"
        style={{
          background: 'linear-gradient(to top, #B8C5A3 0%, #A0B089 40%, transparent 100%)',
          clipPath: 'polygon(0 100%, 25% 65%, 45% 80%, 70% 60%, 85% 75%, 100% 70%, 100% 100%)',
          x: mousePosition.x * -50,
        }}
      />

      {/* Animated grass field */}
      <div className="absolute bottom-0 w-full h-32 overflow-hidden">
        {[...Array(100)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bottom-0 w-1 bg-gradient-to-t from-green-600 to-green-400"
            style={{
              left: `${(i * 1.2) % 100}%`,
              height: `${20 + Math.random() * 40}px`,
              transformOrigin: 'bottom',
            }}
            animate={{
              rotateZ: [
                Math.sin(i * 0.1) * 5,
                Math.sin(i * 0.1) * 5 + 10,
                Math.sin(i * 0.1) * 5
              ],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.01,
            }}
          />
        ))}
      </div>

      {/* Floating clouds */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            top: `${10 + i * 8}%`,
            left: `${-20 + i * 25}%`,
          }}
          animate={{
            x: [0, window.innerWidth + 200],
          }}
          transition={{
            duration: 60 + i * 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div 
            className="relative"
            style={{
              width: `${80 + i * 20}px`,
              height: `${40 + i * 10}px`,
            }}
          >
            {/* Cloud parts */}
            <div 
              className="absolute bg-white rounded-full opacity-70"
              style={{
                width: '60%',
                height: '60%',
                top: '20%',
                left: '20%',
              }}
            />
            <div 
              className="absolute bg-white rounded-full opacity-60"
              style={{
                width: '40%',
                height: '40%',
                top: '0%',
                left: '30%',
              }}
            />
            <div 
              className="absolute bg-white rounded-full opacity-60"
              style={{
                width: '35%',
                height: '35%',
                top: '10%',
                left: '0%',
              }}
            />
            <div 
              className="absolute bg-white rounded-full opacity-50"
              style={{
                width: '30%',
                height: '30%',
                top: '15%',
                left: '60%',
              }}
            />
          </div>
        </motion.div>
      ))}

      {/* Floating leaves/particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-3 rounded-full"
          style={{
            background: `hsl(${60 + Math.random() * 60}, 70%, 50%)`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 80}%`,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 100 - 50, 0],
            rotate: [0, 360],
            opacity: [0.8, 0.3, 0.8],
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        />
      ))}

      {/* Sun */}
      <motion.div
        className="absolute w-24 h-24 rounded-full bg-gradient-to-br from-yellow-300 to-orange-400"
        style={{
          top: '15%',
          right: '20%',
          boxShadow: '0 0 60px rgba(255, 215, 0, 0.5)',
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.8, 1, 0.8],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Sun rays */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 bg-gradient-to-t from-transparent to-yellow-300 opacity-30"
          style={{
            height: '100px',
            top: '5%',
            right: '22%',
            transformOrigin: 'bottom center',
            transform: `rotate(${i * 45}deg)`,
          }}
          animate={{
            opacity: [0.2, 0.5, 0.2],
            scaleY: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.2,
          }}
        />
      ))}

      {/* Birds flying */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-1 bg-gray-800"
          style={{
            top: `${20 + i * 10}%`,
            left: `-20px`,
            borderRadius: '50%',
          }}
          animate={{
            x: [0, window.innerWidth + 40],
            y: [0, Math.sin(i) * 50, 0],
          }}
          transition={{
            duration: 25 + i * 5,
            repeat: Infinity,
            ease: "linear",
            delay: i * 3,
          }}
        />
      ))}

      {/* Content overlay for better readability */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0.4) 100%)'
        }}
      />
    </div>
  );
};

export default FieldBackground;
