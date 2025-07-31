import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ForestBackground from './ForestBackground';
import FieldBackground from './FieldBackground';
import LightingEffects from './LightingEffects';

const NatureBackground = () => {
  const [currentBackground, setCurrentBackground] = useState<'forest' | 'field'>('field');

  useEffect(() => {
    // Auto-switch backgrounds every 30 seconds
    const interval = setInterval(() => {
      setCurrentBackground(prev => prev === 'forest' ? 'field' : 'forest');
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 -z-10">
      <AnimatePresence mode="wait">
        {currentBackground === 'forest' ? (
          <motion.div
            key="forest"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
          >
            <ForestBackground />
          </motion.div>
        ) : (
          <motion.div
            key="field"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
          >
            <FieldBackground />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Add lighting effects on top */}
      <LightingEffects />

      {/* Background switcher button */}
      <motion.button
        className="fixed bottom-6 right-6 z-20 p-3 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 shadow-lg"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setCurrentBackground(prev => prev === 'forest' ? 'field' : 'forest')}
      >
        <motion.div
          animate={{ rotate: currentBackground === 'forest' ? 0 : 180 }}
          transition={{ duration: 0.5 }}
        >
          {currentBackground === 'forest' ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L13.09 8.26L19 7L14.74 11.26L21 12L14.74 12.74L19 17L13.09 15.74L12 22L10.91 15.74L5 17L9.26 12.74L3 12L9.26 11.26L5 7L10.91 8.26L12 2Z" fill="currentColor"/>
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22L6.66 19.7C7.14 19.87 7.64 20 8 20C19 20 22 3 22 3C21 5 14 5.25 9 6.25C4 7.25 2 11.5 2 13.5C2 15.5 3.75 17.25 3.75 17.25C7.5 15 12.5 16 17 8Z" fill="currentColor"/>
            </svg>
          )}
        </motion.div>
      </motion.button>

      {/* Background indicator */}
      <motion.div 
        className="fixed top-6 right-6 z-20 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 text-white text-sm font-medium"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        key={currentBackground}
      >
        {currentBackground === 'forest' ? '🌲 Pădure' : '🌾 Câmpie'}
      </motion.div>
    </div>
  );
};

export default NatureBackground;
