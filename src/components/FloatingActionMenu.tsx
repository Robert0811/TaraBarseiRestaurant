import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Phone, MessageCircle, Calendar, MapPin, X } from 'lucide-react';

interface FloatingAction {
  icon: React.ReactNode;
  label: string;
  action: () => void;
  color: string;
}

const FloatingActionMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const actions: FloatingAction[] = [
    {
      icon: <Phone size={20} />,
      label: 'Sună acum',
      action: () => window.open('tel:+40745105465'),
      color: '#25D366'
    },
    {
      icon: <MessageCircle size={20} />,
      label: 'WhatsApp',
      action: () => window.open('https://wa.me/40745105465'),
      color: '#25D366'
    },
    {
      icon: <Calendar size={20} />,
      label: 'Rezervare',
      action: () => window.location.href = '/contact',
      color: '#FFB366'
    },
    {
      icon: <MapPin size={20} />,
      label: 'Localizare',
      action: () => window.open('https://maps.google.com/?q=Restaurant+Țara+Bârsei'),
      color: '#9CAF88'
    }
  ];

  const containerVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 300,
        damping: 25,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { 
      scale: 0,
      opacity: 0,
      x: 20,
      rotateZ: 180
    },
    visible: { 
      scale: 1,
      opacity: 1,
      x: 0,
      rotateZ: 0,
      transition: {
        type: "spring" as const,
        stiffness: 400,
        damping: 25
      }
    }
  };

  return (
    <div className="floating-action-menu">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="floating-actions-container"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {actions.map((action, index) => (
              <motion.div
                key={index}
                className="floating-action-item"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.1,
                  rotateZ: 5,
                  boxShadow: `0 10px 30px rgba(0,0,0,0.3)`
                }}
                whileTap={{ scale: 0.95 }}
                onClick={action.action}
                style={{
                  background: `linear-gradient(135deg, ${action.color}, ${action.color}dd)`,
                  bottom: `${80 + index * 70}px`
                }}
              >
                <div className="floating-action-icon">
                  {action.icon}
                </div>
                <motion.div
                  className="floating-action-label"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  {action.label}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        className="floating-action-toggle"
        onClick={() => setIsOpen(!isOpen)}
        animate={{ 
          rotate: isOpen ? 45 : 0,
          scale: isOpen ? 1.1 : 1
        }}
        whileHover={{ 
          scale: isOpen ? 1.2 : 1.1,
          boxShadow: "0 10px 30px rgba(255, 179, 102, 0.4)"
        }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      >
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
        >
          {isOpen ? <X size={24} /> : <Plus size={24} />}
        </motion.div>
        
        {/* Pulse effect */}
        <motion.div
          className="floating-action-pulse"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 0, 0.5]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.button>
    </div>
  );
};

export default FloatingActionMenu;
