import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';

const WhatsAppButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = '+40745105465';
  const defaultMessage = 'Bună ziua! Aș dori să fac o rezervare la Restaurant Țara Bârsei.';

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;
    window.open(url, '_blank');
  };

  return (
    <>
      <motion.div
        className="whatsapp-button"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <MessageCircle size={24} />
        <motion.div
          className="whatsapp-pulse"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [1, 0, 1]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="whatsapp-popup"
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            <div className="whatsapp-header">
              <div className="whatsapp-avatar">
                <MessageCircle size={20} />
              </div>
              <div className="whatsapp-info">
                <h4>Restaurant Țara Bârsei</h4>
                <p>De obicei răspunde în câteva minute</p>
              </div>
              <button 
                className="whatsapp-close"
                onClick={() => setIsOpen(false)}
              >
                <X size={16} />
              </button>
            </div>
            <div className="whatsapp-body">
              <div className="whatsapp-message">
                <p>Bună ziua! 👋</p>
                <p>Cu ce vă putem ajuta astăzi?</p>
                <ul>
                  <li>🍽️ Rezervări</li>
                  <li>🎉 Evenimente private</li>
                  <li>📋 Informații meniu</li>
                  <li>📍 Localizare</li>
                </ul>
              </div>
            </div>
            <div className="whatsapp-footer">
              <motion.button
                className="whatsapp-send-btn"
                onClick={handleWhatsAppClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <MessageCircle size={16} />
                Trimite mesaj
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default WhatsAppButton;