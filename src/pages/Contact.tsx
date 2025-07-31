import React, { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { MapPin, Phone, Mail, Clock, Users, Car, Wifi, Send, Navigation, Map } from 'lucide-react';

interface FormData {
  nume: string;
  telefon: string;
  email: string;
  data: string;
  persoane: string;
  mesaj: string;
}

interface FormErrors {
  [key: string]: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    nume: '',
    telefon: '',
    email: '',
    data: '',
    persoane: '',
    mesaj: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const headerRef = useScrollAnimation();
  const formRef = useScrollAnimation();
  const infoRef = useScrollAnimation();

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.nume.trim()) {
      newErrors.nume = 'Numele este obligatoriu';
    }

    if (!formData.telefon.trim()) {
      newErrors.telefon = 'Telefonul este obligatoriu';
    } else if (!/^[0-9+\-\s()]{10,}$/.test(formData.telefon.trim())) {
      newErrors.telefon = 'Formatul telefonului nu este valid';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email-ul este obligatoriu';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Formatul email-ului nu este valid';
    }

    if (!formData.data.trim()) {
      newErrors.data = 'Data este obligatorie';
    } else {
      const selectedDate = new Date(formData.data);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selectedDate < today) {
        newErrors.data = 'Data nu poate fi în trecut';
      }
    }

    if (!formData.persoane.trim()) {
      newErrors.persoane = 'Numărul de persoane este obligatoriu';
    } else if (parseInt(formData.persoane) < 1 || parseInt(formData.persoane) > 130) {
      newErrors.persoane = 'Numărul de persoane trebuie să fie între 1 și 130';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      // Simulăm trimiterea formularului
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSubmitMessage('Rezervarea a fost trimisă cu succes! Vă vom contacta în scurt timp.');
      setFormData({
        nume: '',
        telefon: '',
        email: '',
        data: '',
        persoane: '',
        mesaj: ''
      });
      setErrors({});
    } catch (error) {
      setSubmitMessage('A apărut o eroare. Vă rugăm să încercați din nou.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Eliminăm eroarea când utilizatorul începe să scrie
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  return (
    <div className="contact-page">
      {/* Header Section */}
      <section className="section" style={{ paddingTop: '120px', background: 'var(--color-cream)' }}>
        <div className="container">
          <div className={`${headerRef.isVisible ? 'animate-fadeInUp' : ''}`} ref={headerRef.ref}>
            <h1 className="section-title">Contact & Rezervări</h1>
            <p className="section-subtitle">
              Suntem aici să vă oferim o experiență culinară de neuitat
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ gap: '4rem' }}>
            {/* Contact Info */}
            <div className={`${infoRef.isVisible ? 'animate-fadeInLeft' : ''}`} ref={infoRef.ref}>
              <h2 style={{ fontSize: '2rem', marginBottom: '2rem', color: 'var(--color-sage)' }}>
                Informații de contact
              </h2>
              
              <div style={{ marginBottom: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                  <MapPin size={24} style={{ color: 'var(--color-orange)', marginRight: '1rem' }} />
                  <div>
                    <h3 style={{ marginBottom: '0.5rem' }}>Adresa</h3>
                    <p>Feldioara, Brașov, România</p>
                  </div>
                </div>
                
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                  <Phone size={24} style={{ color: 'var(--color-orange)', marginRight: '1rem' }} />
                  <div>
                    <h3 style={{ marginBottom: '0.5rem' }}>Telefon</h3>
                    <p>
                      <a href="tel:+40123456789" style={{ color: 'var(--color-dark)', textDecoration: 'none' }}>
                        +40 123 456 789
                      </a>
                    </p>
                  </div>
                </div>
                
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                  <Mail size={24} style={{ color: 'var(--color-orange)', marginRight: '1rem' }} />
                  <div>
                    <h3 style={{ marginBottom: '0.5rem' }}>Email</h3>
                    <p>
                      <a href="mailto:contact@tarabarsei.ro" style={{ color: 'var(--color-dark)', textDecoration: 'none' }}>
                        contact@tarabarsei.ro
                      </a>
                    </p>
                  </div>
                </div>
                
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '2rem' }}>
                  <Clock size={24} style={{ color: 'var(--color-orange)', marginRight: '1rem' }} />
                  <div>
                    <h3 style={{ marginBottom: '0.5rem' }}>Program</h3>
                    <p>Zilnic: 10:00 - 23:00</p>
                  </div>
                </div>
              </div>

              <div className="grid-2" style={{ gap: '1rem' }}>
                <div className="card">
                  <div className="card-icon">
                    <Users size={24} />
                  </div>
                  <h3>130 locuri</h3>
                  <p>Capacitate totală</p>
                </div>
                <div className="card">
                  <div className="card-icon">
                    <Car size={24} />
                  </div>
                  <h3>Parcare</h3>
                  <p>Gratuită pentru clienți</p>
                </div>
                <div className="card">
                  <div className="card-icon">
                    <Wifi size={24} />
                  </div>
                  <h3>WiFi gratuit</h3>
                  <p>Internet de mare viteză</p>
                </div>
                <div className="card">
                  <div className="card-icon">
                    <Phone size={24} />
                  </div>
                  <h3>Rezervări</h3>
                  <p>Telefonic sau online</p>
                </div>
              </div>
            </div>

            {/* Reservation Form */}
            <div className={`${formRef.isVisible ? 'animate-fadeInRight' : ''}`} ref={formRef.ref}>
              <div className="contact-form">
                <h2 style={{ fontSize: '2rem', marginBottom: '2rem', color: 'var(--color-sage)', textAlign: 'center' }}>
                  Formular de rezervare
                </h2>
                
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="nume">Nume complet *</label>
                    <input
                      type="text"
                      id="nume"
                      name="nume"
                      value={formData.nume}
                      onChange={handleChange}
                      className={errors.nume ? 'error' : ''}
                    />
                    {errors.nume && <div className="form-error">{errors.nume}</div>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="telefon">Telefon *</label>
                    <input
                      type="tel"
                      id="telefon"
                      name="telefon"
                      value={formData.telefon}
                      onChange={handleChange}
                      className={errors.telefon ? 'error' : ''}
                    />
                    {errors.telefon && <div className="form-error">{errors.telefon}</div>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={errors.email ? 'error' : ''}
                    />
                    {errors.email && <div className="form-error">{errors.email}</div>}
                  </div>

                  <div className="grid-2" style={{ gap: '1rem' }}>
                    <div className="form-group">
                      <label htmlFor="data">Data rezervării *</label>
                      <input
                        type="date"
                        id="data"
                        name="data"
                        value={formData.data}
                        onChange={handleChange}
                        min={new Date().toISOString().split('T')[0]}
                        className={errors.data ? 'error' : ''}
                      />
                      {errors.data && <div className="form-error">{errors.data}</div>}
                    </div>

                    <div className="form-group">
                      <label htmlFor="persoane">Numărul de persoane *</label>
                      <select
                        id="persoane"
                        name="persoane"
                        value={formData.persoane}
                        onChange={handleChange}
                        className={errors.persoane ? 'error' : ''}
                      >
                        <option value="">Selectează</option>
                        {Array.from({ length: 10 }, (_, i) => i + 1).map(num => (
                          <option key={num} value={num}>{num} {num === 1 ? 'persoană' : 'persoane'}</option>
                        ))}
                        <option value="special">Grup mare (10+ persoane)</option>
                      </select>
                      {errors.persoane && <div className="form-error">{errors.persoane}</div>}
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="mesaj">Mesaj adițional</label>
                    <textarea
                      id="mesaj"
                      name="mesaj"
                      rows={4}
                      value={formData.mesaj}
                      onChange={handleChange}
                      placeholder="Specificați dacă aveți cerințe speciale, alergii alimentare sau alte observații..."
                    />
                  </div>

                  <button 
                    type="submit" 
                    className="btn btn-primary" 
                    disabled={isSubmitting}
                    style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
                  >
                    <Send size={20} />
                    {isSubmitting ? 'Se trimite...' : 'Trimite rezervarea'}
                  </button>

                  {submitMessage && (
                    <div style={{ 
                      marginTop: '1rem', 
                      padding: '1rem', 
                      backgroundColor: submitMessage.includes('succes') ? '#d4edda' : '#f8d7da',
                      color: submitMessage.includes('succes') ? '#155724' : '#721c24',
                      borderRadius: '8px',
                      textAlign: 'center'
                    }}>
                      {submitMessage}
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section" style={{ background: 'var(--color-cream)' }}>
        <div className="container">
          <h2 className="section-title">Localizare</h2>
          
          {/* Navigation Buttons */}
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: '1rem', 
            marginBottom: '2rem',
            flexWrap: 'wrap'
          }}>
            <a
              href="https://www.google.com/maps/search/Restaurant+Țara+Bârsei+Feldioara+Brașov"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
            >
              <Map size={20} />
              Deschide în Google Maps
            </a>
            <a
              href="https://maps.apple.com/?q=Restaurant+Țara+Bârsei+Feldioara+Brașov"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
            >
              <MapPin size={20} />
              Deschide în Apple Maps
            </a>
            <a
              href="https://waze.com/ul?q=Restaurant+Țara+Bârsei+Feldioara+Brașov&navigate=yes"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '0.5rem',
                background: 'linear-gradient(135deg, #00D4FF, #0099CC)'
              }}
            >
              <Navigation size={20} />
              Deschide în Waze
            </a>
          </div>
          
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2833.5969297425453!2d25.6123!3d45.5487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b35c4614b3c7c7%3A0x4c4e4b4d4e4f4e4f!2sFeldioara%2C%20Bra%C8%99ov!5e0!3m2!1sro!2sro!4v1234567890123"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localizare Restaurant Țara Bârsei"
            />
          </div>
          <p style={{ textAlign: 'center', marginTop: '2rem', fontSize: '1.1rem' }}>
            Situat în inima comunei Feldioara, la doar 15 km de Brașov, 
            restaurantul nostru este ușor accesibil cu mașina și oferă parcare gratuită.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Contact;