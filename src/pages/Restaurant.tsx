import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Users, Clock, Award, Star } from 'lucide-react';

const Restaurant: React.FC = () => {
  const headerRef = useScrollAnimation();
  const galleryRef = useScrollAnimation();
  const infoRef = useScrollAnimation();

  return (
    <div className="restaurant-page">
      {/* Header Section */}
      <section className="section" style={{ paddingTop: '120px', background: 'var(--color-cream)' }}>
        <div className="container">
          <div className={`${headerRef.isVisible ? 'animate-fadeInUp' : ''}`} ref={headerRef.ref}>
            <h1 className="section-title">Restaurantul Nostru</h1>
            <p className="section-subtitle">
              Un spațiu elegant și confortabil, perfect pentru orice ocazie
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section">
        <div className="container">
          <div className={`gallery-grid ${galleryRef.isVisible ? 'animate-zoomIn' : ''}`} ref={galleryRef.ref}>
            <div className="image-container">
              <img 
                src="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg" 
                alt="Interior restaurant principal"
              />
            </div>
            <div className="image-container">
              <img 
                src="https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg" 
                alt="Zonă bar"
              />
            </div>
            <div className="image-container">
              <img 
                src="https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg" 
                alt="Masa setup elegant"
              />
            </div>
            <div className="image-container">
              <img 
                src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg" 
                alt="Atmosferă restaurant"
              />
            </div>
            <div className="image-container">
              <img 
                src="https://images.pexels.com/photos/696218/pexels-photo-696218.jpeg" 
                alt="Detalii decorative"
              />
            </div>
            <div className="image-container">
              <img 
                src="https://images.pexels.com/photos/1105325/pexels-photo-1105325.jpeg" 
                alt="Bucătărie modernă"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Restaurant Info Section */}
      <section className="section" style={{ background: 'var(--color-cream)' }}>
        <div className="container">
          <div className={`grid-2 ${infoRef.isVisible ? 'animate-fadeInUp' : ''}`} ref={infoRef.ref}>
            <div>
              <h2 style={{ fontSize: '2.2rem', marginBottom: '2rem', color: 'var(--color-sage)' }}>
                Despre salonul nostru
              </h2>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                Salonul principal al restaurantului oferă 60 de locuri într-o atmosferă elegantă și caldă. 
                Designul interior combină elemente rustice tradiționale cu confortul modern, creând un 
                spațiu perfect pentru mese în familie, întâlniri de afaceri sau cene romantice.
              </p>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                Fiecare masă este aranjată cu atenție la detalii, iar personalul nostru profesionist 
                vă va oferi un serviciu de înaltă calitate. Atmosfera liniștită și decorurile 
                atent selectate creează cadrul perfect pentru o experiență culinară memorabilă.
              </p>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem' }}>
                Bucătăria noastră modernă, dotată cu echipamente de ultimă generație, ne permite 
                să preparăm feluri de mâncare delicioase folosind doar ingrediente proaspete și 
                de calitate superioară.
              </p>
            </div>
            <div className="grid-2" style={{ gap: '2rem' }}>
              <div className="card">
                <div className="card-icon">
                  <Users size={30} />
                </div>
                <h3>60 de locuri</h3>
                <p>Capacitate optimă pentru confort și intimitate</p>
              </div>
              <div className="card">
                <div className="card-icon">
                  <Clock size={30} />
                </div>
                <h3>Program Zilnic</h3>
                <p>Deschis zilnic 10:00 - 23:00</p>
              </div>
              <div className="card">
                <div className="card-icon">
                  <Award size={30} />
                </div>
                <h3>Calitate Premium</h3>
                <p>Ingrediente proaspete și preparate cu măiestrie</p>
              </div>
              <div className="card">
                <div className="card-icon">
                  <Star size={30} />
                </div>
                <h3>Servicii Excelente</h3>
                <p>Personal profesionist și atmosferă primitoare</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialități Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Specialitățile Casei</h2>
          <div className="grid-3">
            <div className="card">
              <h3>Mici de Bârsa</h3>
              <p>Rețeta tradițională a zonei, preparată după secretul casei cu carne proaspătă și condimente naturale.</p>
            </div>
            <div className="card">
              <h3>Ciorbă de burtă</h3>
              <p>Preparată în mod tradițional, cu ingrediente proaspete și servită cu smântână și ardei iute.</p>
            </div>
            <div className="card">
              <h3>Papanași</h3>
              <p>Desertul perfect pentru o masă completă, preparați fresh și serviți cu smântână și dulceață.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Restaurant;