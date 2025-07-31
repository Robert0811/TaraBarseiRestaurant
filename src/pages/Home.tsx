import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import ParallaxSection from '../components/ParallaxSection';
import AnimatedCounter from '../components/AnimatedCounter';
import ParticleSystem from '../components/ParticleSystem';
import ScrollAnimation from '../components/ScrollAnimation';
import AdvancedParallax from '../components/AdvancedParallax';
import TiltCard3D from '../components/TiltCard3D';
import ShineEffect from '../components/ShineEffect';
import RippleEffect from '../components/RippleEffect';
import { Star, Award, Users, Utensils, Car, Wifi, Music, Heart } from 'lucide-react';

const Home = () => {
  const featuresRef = useScrollAnimation();
  const facilitiesRef = useScrollAnimation();
  const statsRef = useScrollAnimation();

  return (
    <div className="home">
      {/* Hero Section cu Particle System */}
      <ParallaxSection
        backgroundImage="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg"
        className="hero"
      >
        <ParticleSystem particleCount={30} />
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Restaurant Țara Bârsei
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Experiențe culinare autentice în inima Feldioarei
          </motion.p>
          <motion.div
            style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <RippleEffect>
              <Link to="/contact" className="btn btn-primary">
                Rezervă o masă
              </Link>
            </RippleEffect>
            <RippleEffect>
              <Link to="/galerie" className="btn btn-secondary">
                Vezi galeria
              </Link>
            </RippleEffect>
          </motion.div>
        </motion.div>
      </ParallaxSection>

      {/* Stats Section */}
      <section className="section">
        <div className="container">
          <div className={`grid-4 ${statsRef.isVisible ? 'animate-fadeInUp' : ''}`} ref={statsRef.ref as React.RefObject<HTMLDivElement>}>
            <AnimatedCounter
              end={130}
              title="Locuri disponibile"
              icon={<Users size={30} />}
            />
            <AnimatedCounter
              end={15}
              title="Ani de experiență"
              icon={<Award size={30} />}
            />
            <AnimatedCounter
              end={1000}
              suffix="+"
              title="Clienți mulțumiți"
              icon={<Heart size={30} />}
            />
            <AnimatedCounter
              end={50}
              suffix="+"
              title="Specialități culinare"
              icon={<Utensils size={30} />}
            />
          </div>
        </div>
      </section>

      {/* Despre Noi Section cu efecte avansate */}
      <section className="section" style={{ background: 'var(--color-cream)' }}>
        <div className="container">
          <ScrollAnimation animation="fadeInUp" className="grid-2">
            <AdvancedParallax speed={0.3} direction="right">
              <div>
                <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '2rem' }}>
                  Despre Restaurant Țara Bârsei
                </h2>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                  Situat în comuna Feldioara, județul Brașov, Restaurant Țara Bârsei vă oferă o experiență culinară deosebită într-un cadru natural și relaxant. Cu o capacitate de 130 de locuri, restaurantul nostru combină tradițiile culinare românești cu influențe moderne.
                </p>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem' }}>
                  Terasa noastră de 70 de locuri, decorată cu o cascadă decorativă și vii de vie, oferă o atmosferă unică pentru mesele în aer liber. Suntem specializați în organizarea evenimentelor private: nunți, botezuri, aniversări și evenimente corporative.
                </p>
                <Link to="/restaurant" className="btn btn-primary">
                  Descoperă restaurantul
                </Link>
              </div>
            </AdvancedParallax>
            
            <AdvancedParallax speed={0.4} direction="left" className="grid-2">
              <div style={{ gap: '1rem', display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
                <TiltCard3D intensity={0.6} glare={true} className="image-container">
                  <img 
                    src="https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg" 
                    alt="Interior restaurant"
                  />
                </TiltCard3D>
                <TiltCard3D intensity={0.6} glare={true} className="image-container">
                  <img 
                    src="https://images.pexels.com/photos/776538/pexels-photo-776538.jpeg" 
                    alt="Terasa restaurant"
                  />
                </TiltCard3D>
              </div>
            </AdvancedParallax>
          </ScrollAnimation>
        </div>
      </section>

      {/* De ce noi Section cu Glassmorphism */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">De ce să ne alegi?</h2>
          <div className={`grid-4 ${featuresRef.isVisible ? 'animate-zoomIn' : ''}`} ref={featuresRef.ref as React.RefObject<HTMLDivElement>}>
            <ShineEffect>
              <TiltCard3D intensity={0.8} glare={true}>
                <div className="card">
                  <div className="card-icon">
                    <Star size={30} />
                  </div>
                  <h3>Calitate Premium</h3>
                  <p>Ingrediente proaspete și preparate cu atenție pentru o experiență culinară de excepție.</p>
                </div>
              </TiltCard3D>
            </ShineEffect>
            <ShineEffect>
              <TiltCard3D intensity={0.8} glare={true}>
                <div className="card">
                  <div className="card-icon">
                    <Award size={30} />
                  </div>
                  <h3>Experiență & Tradiție</h3>
                  <p>Rețete tradiționale românești îmbunătățite cu tehnici culinare moderne.</p>
                </div>
              </TiltCard3D>
            </ShineEffect>
            <ShineEffect>
              <TiltCard3D intensity={0.8} glare={true}>
                <div className="card">
                  <div className="card-icon">
                    <Users size={30} />
                  </div>
                  <h3>Evenimente Private</h3>
                  <p>Organizăm nunți, botezuri și evenimente corporative cu servicii complete.</p>
                </div>
              </TiltCard3D>
            </ShineEffect>
            <ShineEffect>
              <TiltCard3D intensity={0.8} glare={true}>
                <div className="card">
                  <div className="card-icon">
                    <Heart size={30} />
                  </div>
                  <h3>Atmosferă Caldă</h3>
                  <p>Un ambient prietenos și relaxant, perfect pentru orice ocazie specială.</p>
                </div>
              </TiltCard3D>
            </ShineEffect>
          </div>
        </div>
      </section>

      {/* Facilități Section */}
      <section className="section" style={{ background: 'var(--color-cream)' }}>
        <div className="container">
          <h2 className="section-title">Facilitățile noastre</h2>
          <p className="section-subtitle">
            Oferim toate facilitățile necesare pentru o experiență completă
          </p>
          <div className={`grid-3 ${facilitiesRef.isVisible ? 'animate-fadeInUp' : ''}`} ref={facilitiesRef.ref as React.RefObject<HTMLDivElement>}>
            <ShineEffect>
              <TiltCard3D intensity={0.7} glare={true}>
                <div className="card">
                  <div className="card-icon">
                    <Utensils size={30} />
                  </div>
                  <h3>Salon Interior</h3>
                  <p>60 de locuri în salon, amenajat în stil rustic elegant cu toate facilitățile moderne.</p>
                </div>
              </TiltCard3D>
            </ShineEffect>
            <ShineEffect>
              <TiltCard3D intensity={0.7} glare={true}>
                <div className="card">
                  <div className="card-icon">
                    <Users size={30} />
                  </div>
                  <h3>Terasă Panoramică</h3>
                  <p>70 de locuri pe terasă cu cascadă decorativă și vii de vie pentru o experiență unică.</p>
                </div>
              </TiltCard3D>
            </ShineEffect>
            <ShineEffect>
              <TiltCard3D intensity={0.7} glare={true}>
                <div className="card">
                  <div className="card-icon">
                    <Car size={30} />
                  </div>
                  <h3>Parcare Gratuită</h3>
                  <p>Spațiu generos de parcare gratuită pentru toți oaspeții restaurantului.</p>
                </div>
              </TiltCard3D>
            </ShineEffect>
            <ShineEffect>
              <TiltCard3D intensity={0.7} glare={true}>
                <div className="card">
                  <div className="card-icon">
                    <Wifi size={30} />
                  </div>
                  <h3>WiFi Gratuit</h3>
                  <p>Internet gratuit de mare viteză pentru oaspeții noștri.</p>
                </div>
              </TiltCard3D>
            </ShineEffect>
            <ShineEffect>
              <TiltCard3D intensity={0.7} glare={true}>
                <div className="card">
                  <div className="card-icon">
                    <Music size={30} />
                  </div>
                  <h3>Muzică Live</h3>
                  <p>Seri cu muzică live și atmosferă de neuitat în weekenduri.</p>
                </div>
              </TiltCard3D>
            </ShineEffect>
            <ShineEffect>
              <TiltCard3D intensity={0.7} glare={true}>
                <div className="card">
                  <div className="card-icon">
                    <Heart size={30} />
                  </div>
                  <h3>Evenimente Private</h3>
                  <p>Organizarea completă a nunților, botezurilor și evenimentelor corporative.</p>
                </div>
              </TiltCard3D>
            </ShineEffect>
          </div>
          <div className="action-buttons-container">
            <RippleEffect>
              <Link to="/evenimente" className="btn btn-primary">
                Vezi evenimente
              </Link>
            </RippleEffect>
            <RippleEffect>
              <Link to="/meniu" className="btn btn-secondary">
                Vezi meniul
              </Link>
            </RippleEffect>
            <RippleEffect>
              <Link to="/contact" className="btn btn-accent">
                Fă o rezervare
              </Link>
            </RippleEffect>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;