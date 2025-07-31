import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const LoadingAnimation = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.5,
        ease: [0.4, 0.0, 0.2, 1] as const
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 300,
        damping: 24
      }
    }
  };

  const plateVariants = {
    hidden: { rotate: 0, scale: 0.8 },
    visible: {
      rotate: 360,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 260,
        damping: 20,
        repeat: Infinity,
        repeatType: "reverse" as const,
        duration: 2
      }
    }
  };

  if (!isLoading) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {/* Background Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-orange-400 rounded-full"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                opacity: 0
              }}
              animate={{
                y: [null, -100],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            />
          ))}
        </div>

        {/* Main Loading Content */}
        <motion.div 
          className="text-center z-10"
          variants={containerVariants}
        >
          {/* Animated Plate */}
          <motion.div
            className="mb-8 relative"
            variants={plateVariants}
          >
            <div className="w-24 h-24 mx-auto relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full shadow-2xl"></div>
              <div className="absolute inset-2 bg-gradient-to-br from-orange-300 to-orange-500 rounded-full"></div>
              <div className="absolute inset-4 bg-gradient-to-br from-orange-200 to-orange-400 rounded-full"></div>
              <motion.div
                className="absolute inset-6 bg-white rounded-full shadow-inner"
                animate={{
                  boxShadow: [
                    "inset 0 2px 4px rgba(0,0,0,0.1)",
                    "inset 0 4px 8px rgba(0,0,0,0.2)",
                    "inset 0 2px 4px rgba(0,0,0,0.1)"
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
            </div>
          </motion.div>

          {/* Restaurant Name */}
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-white mb-4"
            variants={itemVariants}
          >
            <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">
              Tara Barsei
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-xl text-gray-300 mb-8"
            variants={itemVariants}
          >
            Restaurant & Terasă
          </motion.p>

          {/* Loading Dots */}
          <motion.div
            className="flex justify-center space-x-2"
            variants={itemVariants}
          >
            {[0, 1, 2].map((index) => (
              <motion.div
                key={index}
                className="w-3 h-3 bg-orange-400 rounded-full"
                animate={{
                  y: [0, -10, 0],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  delay: index * 0.2
                }}
              />
            ))}
          </motion.div>
        </motion.div>

        {/* Decorative Elements */}
        <motion.div
          className="absolute top-10 left-10 w-20 h-20 border-2 border-orange-400 rounded-full"
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <motion.div
          className="absolute bottom-10 right-10 w-16 h-16 border-2 border-orange-500 rounded-full"
          animate={{
            rotate: -360,
            scale: [1, 0.8, 1]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingAnimation;
