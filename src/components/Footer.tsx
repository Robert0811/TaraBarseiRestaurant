import React from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram, Clock, Users, Car, Wifi } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Contact</h3>
            <ul>
              <li>
                <MapPin size={16} style={{ display: 'inline', marginRight: '8px' }} />
                Feldioara, Brașov
              </li>
                            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
                <Phone size={16} style={{ marginRight: '0.5rem' }} />
                <a href="tel:+40745105465">(0745) 105 465</a>
              </div>
              <li>
                <Mail size={16} style={{ display: 'inline', marginRight: '8px' }} />
                <a href="mailto:contact@tarabarsei.ro">contact@tarabarsei.ro</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Facilități</h3>
            <ul>
              <li>
                <Users size={16} style={{ display: 'inline', marginRight: '8px' }} />
                130 de locuri
              </li>
              <li>
                <Car size={16} style={{ display: 'inline', marginRight: '8px' }} />
                Parcare gratuită
              </li>
              <li>
                <Wifi size={16} style={{ display: 'inline', marginRight: '8px' }} />
                WiFi gratuit
              </li>
              <li>
                <Clock size={16} style={{ display: 'inline', marginRight: '8px' }} />
                Program: 10:00 - 23:00
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Localizare</h3>
            <p>Situat în inima comunei Feldioara, la doar 15 km de Brașov, restaurantul nostru oferă o experiență culinară autentică într-un cadru natural deosebit.</p>
          </div>

          <div className="footer-section">
            <h3>Social Media</h3>
            <ul>
              <li>
                <Facebook size={16} style={{ display: 'inline', marginRight: '8px' }} />
                <a href="#" target="_blank" rel="noopener noreferrer">Facebook</a>
              </li>
              <li>
                <Instagram size={16} style={{ display: 'inline', marginRight: '8px' }} />
                <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 Restaurant Țara Bârsei. Toate drepturile rezervate. | Web design by Bolt AI</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;