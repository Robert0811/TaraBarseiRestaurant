import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Users, Droplets, Grape, Sun, Wind, Star } from 'lucide-react';

const Terasa: React.FC = () => {
  const heroRef = useScrollAnimation();
  const featuresRef = useScrollAnimation();
  const galleryRef = useScrollAnimation();

  return (
    <div className="terasa-page">
      {/* Hero Section */}
      <section 
        className="hero" 
        style={{ 
          background: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("https://images.pexels.com/photos/776538/pexels-photo-776538.jpeg") center/cover',
          height: '70vh'
        }}
      >
        <div className={`hero-content ${heroRef.isVisible ? 'animate-fadeInUp' : ''}`} ref={heroRef.ref}>
          <h1>Terasa Țara Bârsei</h1>
          <p>70 de locuri într-un cadru natural unic cu cascadă decorativă și vii de vie</p>
        </div>
      </section>

      {/* Features Section */}
      <section className="section" style={{ background: 'var(--color-cream)' }}>
        <div className="container">
          <div className={`grid-2 ${featuresRef.isVisible ? 'animate-fadeInUp' : ''}`} ref={featuresRef.ref}>
            <div>
              <h2 style={{ fontSize: '2.2rem', marginBottom: '2rem', color: 'var(--color-sage)' }}>
                Experiența terasei noastre
              </h2>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                Terasa Restaurant Țara Bârsei oferă o experiență culinară în aer liber de neuitat. 
                Cu 70 de locuri amenajate într-un cadru natural spectaculos, terasa este decorată 
                cu o cascadă decorativă care creează o atmosferă relaxantă și vii de vie care 
                oferă umbră naturală în zilele însorite.
              </p>
              <p style={{ fontSize: '1.1rem', lineLine: '1.8', marginBottom: '1.5rem' }}>
                Designul terasei combină elementele naturale cu confortul modern. Fiecare masă 
                este poziționată strategic pentru a oferi intimitate și o vedere frumoasă asupra 
                grădinii și peisajului înconjurător.
              </p>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem' }}>
                În serile de vară, terasa devine locul perfect pentru cine romantice sau petreceri 
                în familie, fiind iluminată discret și oferind o atmosferă magică sub cerul înstelat.
              </p>
            </div>
            <div className="grid-2" style={{ gap: '2rem' }}>
              <div className="card">
                <div className="card-icon">
                  <Users size={30} />
                </div>
                <h3>70 de locuri</h3>
                <p>Spațiu generos pentru eventi și mese în familie</p>
              </div>
              <div className="card">
                <div className="card-icon">
                  <Droplets size={30} />
                </div>
                <h3>Cascadă decorativă</h3>
                <p>Element de apă care creează o atmosferă relaxantă</p>
              </div>
              <div className="card">
                <div className="card-icon">
                  <Grape size={30} />
                </div>
                <h3>Vii de vie</h3>
                <p>Umbră naturală și decor autentic românesc</p>
              </div>
              <div className="card">
                <div className="card-icon">
                  <Sun size={30} />
                </div>
                <h3>Vedere panoramică</h3>
                <p>Priveliște frumoasă asupra peisajului din Feldioara</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Galeria Terasei</h2>
          <div className={`gallery-grid ${galleryRef.isVisible ? 'animate-zoomIn' : ''}`} ref={galleryRef.ref}>
            <div className="image-container">
              <img 
                src="https://images.pexels.com/photos/776538/pexels-photo-776538.jpeg" 
                alt="Terasa principală"
              />
            </div>
            <div className="image-container">
              <img 
                src="https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg" 
                alt="Mese aranjate pe terasă"
              />
            </div>
            <div className="image-container">
              <img 
                src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg" 
                alt="Cascada decorativă"
              />
            </div>
            <div className="image-container">
              <img 
                src="https://images.pexels.com/photos/1105325/pexels-photo-1105325.jpeg" 
                alt="Vii de vie"
              />
            </div>
            <div className="image-container">
              <img 
                src="https://images.pexels.com/photos/696218/pexels-photo-696218.jpeg" 
                alt="Terasa noaptea"
              />
            </div>
            <div className="image-container">
              <img 
                src="https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg" 
                alt="Detalii decorative"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="section" style={{ background: 'var(--color-cream)' }}>
        <div className="container">
          <h2 className="section-title">Avantajele terasei noastre</h2>
          <div className="grid-3">
            <div className="card">
              <div className="card-icon">
                <Wind size={30} />
              </div>
              <h3>Aer proaspăt</h3>
              <p>Atmosferă naturală și aer curat pentru o experiență culinară sănătoasă și relaxantă.</p>
            </div>
            <div className="card">
              <div className="card-icon">
                <Star size={30} />
              </div>
              <h3>Priveliște spectaculoasă</h3>
              <p>Vedere panoramică asupra peisajului din Feldioara și împrejurimile Brașovului.</p>
            </div>
            <div className="card">
              <div className="card-icon">
                <Sun size={30} />
              </div>
              <h3>Perfect pentru orice vreme</h3>
              <p>Umbră naturală în zilele călduroase și încălzire în serile răcoroase.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terasa;