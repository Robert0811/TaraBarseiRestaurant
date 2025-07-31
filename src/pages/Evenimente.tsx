import React from 'react';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Users, Heart, Gift, Briefcase, Music, Camera, Utensils, Car } from 'lucide-react';

const Evenimente: React.FC = () => {
  const heroRef = useScrollAnimation();
  const typesRef = useScrollAnimation();
  const benefitsRef = useScrollAnimation();
  const galleryRef = useScrollAnimation();

  return (
    <div className="evenimente-page">
      {/* Hero Section */}
      <section 
        className="hero" 
        style={{ 
          background: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg") center/cover',
          height: '70vh'
        }}
      >
        <div className={`hero-content ${heroRef.isVisible ? 'animate-fadeInUp' : ''}`} ref={heroRef.ref}>
          <h1>Evenimente Private</h1>
          <p>Organizăm nunți, botezuri, aniversări și evenimente corporative pentru până la 130 de persoane</p>
          <Link to="/contact" className="btn btn-primary">
            Solicită ofertă
          </Link>
        </div>
      </section>

      {/* Event Types Section */}
      <section className="section" style={{ background: 'var(--color-cream)' }}>
        <div className="container">
          <h2 className="section-title">Tipuri de evenimente</h2>
          <div className={`grid-4 ${typesRef.isVisible ? 'animate-zoomIn' : ''}`} ref={typesRef.ref}>
            <div className="card">
              <div className="card-icon">
                <Heart size={30} />
              </div>
              <h3>Nunți</h3>
              <p>Organizarea completă a nunții tale de vis, cu meniu personalizat și decorațiuni elegante.</p>
            </div>
            <div className="card">
              <div className="card-icon">
                <Gift size={30} />
              </div>
              <h3>Botezuri</h3>
              <p>Eventos speciale pentru cei mici, cu meniu adaptat și atmosferă caldă și primitoare.</p>
            </div>
            <div className="card">
              <div className="card-icon">
                <Users size={30} />
              </div>
              <h3>Aniversări</h3>
              <p>Sărbătorește momentele importante alături de cei dragi într-un cadru special.</p>
            </div>
            <div className="card">
              <div className="card-icon">
                <Briefcase size={30} />
              </div>
              <h3>Evenimente Corporative</h3>
              <p>Întâlniri de afaceri, lansări de produse și team building-uri în condiții profesionale.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Galeria evenimentelor</h2>
          <div className={`gallery-grid ${galleryRef.isVisible ? 'animate-fadeInUp' : ''}`} ref={galleryRef.ref}>
            <div className="image-container">
              <img 
                src="https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg" 
                alt="Nuntă elegantă"
              />
            </div>
            <div className="image-container">
              <img 
                src="https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg" 
                alt="Masa decorată pentru eveniment"
              />
            </div>
            <div className="image-container">
              <img 
                src="https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg" 
                alt="Tort aniversar"
              />
            </div>
            <div className="image-container">
              <img 
                src="https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg" 
                alt="Decorațiuni florale"
              />
            </div>
            <div className="image-container">
              <img 
                src="https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg" 
                alt="Eveniment pe terasă"
              />
            </div>
            <div className="image-container">
              <img 
                src="https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg" 
                alt="Bufet festiv"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section" style={{ background: 'var(--color-cream)' }}>
        <div className="container">
          <h2 className="section-title">De ce să ne alegi pentru evenimentul tău?</h2>
          <div className={`grid-2 ${benefitsRef.isVisible ? 'animate-fadeInUp' : ''}`} ref={benefitsRef.ref}>
            <div>
              <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', color: 'var(--color-sage)' }}>
                Capacitate și flexibilitate
              </h3>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                Cu o capacitate totală de 130 de persoane (60 în salon + 70 pe terasă), putem 
                organiza evenimente de orice dimensiune. Spațiile noastre pot fi adaptate conform 
                nevoilor tale, de la evenimente intime cu familia până la celebrări mari.
              </p>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem' }}>
                Echipa noastră experimentată în organizarea de evenimente îți va sta la dispoziție 
                pentru planificarea fiecărui detaliu, de la meniu până la decorațiuni și aranjamente florale.
              </p>
            </div>
            <div className="grid-2" style={{ gap: '1.5rem' }}>
              <div className="card">
                <div className="card-icon">
                  <Music size={30} />
                </div>
                <h3>Sisteme audio</h3>
                <p>Echipamente profesionale pentru muzică și prezentări</p>
              </div>
              <div className="card">
                <div className="card-icon">
                  <Camera size={30} />
                </div>
                <h3>Spații fotogenice</h3>
                <p>Locuri perfecte pentru fotografii memorabile</p>
              </div>
              <div className="card">
                <div className="card-icon">
                  <Utensils size={30} />
                </div>
                <h3>Meniu personalizat</h3>
                <p>Preparate adaptate gusturilor și cerințelor tale</p>
              </div>
              <div className="card">
                <div className="card-icon">
                  <Car size={30} />
                </div>
                <h3>Parcare gratuită</h3>
                <p>Spațiu generos pentru toți invitații</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', background: 'var(--color-sage)', color: 'var(--color-light)', padding: '3rem', borderRadius: 'var(--border-radius)' }}>
            <h2 style={{ fontSize: '2.2rem', marginBottom: '1rem' }}>
              Gata să organizezi evenimentul perfect?
            </h2>
            <p style={{ fontSize: '1.2rem', marginBottom: '2rem', opacity: '0.9' }}>
              Contactează-ne pentru o consultație gratuită și o ofertă personalizată
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn btn-primary">
                Solicită ofertă
              </Link>
              <a href="tel:+40123456789" className="btn btn-secondary">
                Sună acum
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Evenimente;