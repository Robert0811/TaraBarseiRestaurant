import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChefHat, Coffee, Wine, Cake } from 'lucide-react';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
}

const menuItems: MenuItem[] = [
  {
    id: 1,
    name: 'Mici de Bârsa',
    description: 'Rețeta tradițională a zonei, preparată cu carne proaspătă și condimente naturale',
    price: '25 RON',
    image: 'https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg',
    category: 'grill'
  },
  {
    id: 2,
    name: 'Ciorbă de burtă',
    description: 'Preparată tradițional, cu smântână și ardei iute',
    price: '18 RON',
    image: 'https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg',
    category: 'ciorbe'
  },
  {
    id: 3,
    name: 'Papanași',
    description: 'Deserturi tradiționale cu smântână și dulceață de caise',
    price: '15 RON',
    image: 'https://images.pexels.com/photos/1126728/pexels-photo-1126728.jpeg',
    category: 'deserturi'
  },
  {
    id: 4,
    name: 'Vin de casă',
    description: 'Vin roșu de casă din podgoriile locale',
    price: '12 RON/pahar',
    image: 'https://images.pexels.com/photos/434311/pexels-photo-434311.jpeg',
    category: 'bauturi'
  },
  {
    id: 5,
    name: 'Miel la proțap',
    description: 'Miel fragezit la foc lent, cu garnitură de legume',
    price: '45 RON',
    image: 'https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg',
    category: 'grill'
  },
  {
    id: 6,
    name: 'Ciorbă de fasole',
    description: 'Cu ciolan afumat și legume proaspete',
    price: '16 RON',
    image: 'https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg',
    category: 'ciorbe'
  }
];

const categories = [
  { key: 'toate', label: 'Toate', icon: <ChefHat size={20} /> },
  { key: 'ciorbe', label: 'Ciorbe', icon: <Coffee size={20} /> },
  { key: 'grill', label: 'Grătar', icon: <ChefHat size={20} /> },
  { key: 'deserturi', label: 'Deserturi', icon: <Cake size={20} /> },
  { key: 'bauturi', label: 'Băuturi', icon: <Wine size={20} /> }
];

const InteractiveMenu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('toate');
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  const filteredItems = activeCategory === 'toate' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <div className="interactive-menu">
      <div className="menu-filters">
        {categories.map(category => (
          <motion.button
            key={category.key}
            className={`menu-filter ${activeCategory === category.key ? 'active' : ''}`}
            onClick={() => setActiveCategory(category.key)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category.icon}
            {category.label}
          </motion.button>
        ))}
      </div>

      <motion.div 
        className="menu-grid"
        layout
      >
        <AnimatePresence mode="wait">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="menu-item"
              layout
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ 
                duration: 0.3,
                delay: index * 0.1
              }}
              whileHover={{ y: -10 }}
              onClick={() => setSelectedItem(item)}
            >
              <div className="menu-item-image">
                <img src={item.image} alt={item.name} />
                <div className="menu-item-overlay">
                  <span>Vezi detalii</span>
                </div>
              </div>
              <div className="menu-item-content">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <div className="menu-item-price">{item.price}</div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Modal pentru detalii */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            className="menu-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              className="menu-modal"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img src={selectedItem.image} alt={selectedItem.name} />
              <div className="menu-modal-content">
                <h2>{selectedItem.name}</h2>
                <p>{selectedItem.description}</p>
                <div className="menu-modal-price">{selectedItem.price}</div>
                <button 
                  className="btn btn-primary"
                  onClick={() => setSelectedItem(null)}
                >
                  Închide
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default InteractiveMenu;