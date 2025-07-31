import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import InteractiveMenu from '../components/InteractiveMenu';
import ParallaxSection from '../components/ParallaxSection';
import { ChefHat, Star, Award } from 'lucide-react';

const Menu: React.FC = () => {
  const headerRef = useScrollAnimation();

  return (
    <div className="menu-page">
      {/* Hero Section with Parallax */}
      <ParallaxSection
        backgroundImage="https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg"
        className="menu-hero"
      >
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Meniul Nostru</h1>
          <p>Savurează tradițiile culinare românești într-un cadru modern</p>
        </motion.div>
      </ParallaxSection>

      {/* Menu Introduction */}
      <section className="section" style={{ background: 'var(--color-cream)' }}>
        <div className="container">
          <motion.div
            className={`${headerRef.isVisible ? 'animate-fadeInUp' : ''}`}
            ref={headerRef.ref}
          >
            <h2 className="section-title">Specialitățile Casei</h2>
            <p className="section-subtitle">
              Preparate cu ingrediente proaspete și rețete tradiționale
            </p>
            
            <div className="grid-3" style={{ marginBottom: '3rem' }}>
              <div className="card">
                <div className="card-icon">
                  <ChefHat size={30} />
                </div>
                <h3>Rețete Tradiționale</h3>
                <p>Preparate după rețetele bunicilor noastre</p>
              </div>
              <div className="card">
                <div className="card-icon">
                  <Star size={30} />
                </div>
                <h3>Ingrediente Proaspete</h3>
                <p>Doar produse de calitate superioară</p>
              </div>
              <div className="card">
                <div className="card-icon">
                  <Award size={30} />
                </div>
                <h3>Preparare Artizanală</h3>
                <p>Fiecare fel de mâncare este o operă de artă</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Interactive Menu */}
      <section className="section">
        <div className="container">
          <InteractiveMenu />
        </div>
      </section>
    </div>
  );
};

export default Menu;