import React, { useState, useEffect } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { X } from 'lucide-react';

interface Image {
  id: number;
  src: string;
  alt: string;
  category: string;
}

const images: Image[] = [
  { id: 1, src: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg', alt: 'Interior restaurant', category: 'restaurant' },
  { id: 2, src: 'https://images.pexels.com/photos/776538/pexels-photo-776538.jpeg', alt: 'Terasa panoramică', category: 'terasa' },
  { id: 3, src: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg', alt: 'Eveniment nuntă', category: 'evenimente' },
  { id: 4, src: 'https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg', alt: 'Bar restaurant', category: 'restaurant' },
  { id: 5, src: 'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg', alt: 'Mese pe terasă', category: 'terasa' },
  { id: 6, src: 'https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg', alt: 'Masă eveniment', category: 'evenimente' },
  { id: 7, src: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg', alt: 'Atmosferă restaurant', category: 'restaurant' },
  { id: 8, src: 'https://images.pexels.com/photos/696218/pexels-photo-696218.jpeg', alt: 'Cascada decorativă', category: 'terasa' },
  { id: 9, src: 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg', alt: 'Tort aniversar', category: 'evenimente' },
  { id: 10, src: 'https://images.pexels.com/photos/1105325/pexels-photo-1105325.jpeg', alt: 'Bucătărie modernă', category: 'restaurant' },
  { id: 11, src: 'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg', alt: 'Vii de vie', category: 'terasa' },
  { id: 12, src: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg', alt: 'Ceremonie pe terasă', category: 'evenimente' }
];

const Galerie: React.FC = () => {
  const [filter, setFilter] = useState('toate');
  const [filteredImages, setFilteredImages] = useState(images);
  const [lightboxImage, setLightboxImage] = useState<Image | null>(null);
  const headerRef = useScrollAnimation<HTMLDivElement>();
  const galleryRef = useScrollAnimation<HTMLDivElement>();

  useEffect(() => {
    if (filter === 'toate') {
      setFilteredImages(images);
    } else {
      setFilteredImages(images.filter(img => img.category === filter));
    }
  }, [filter]);

  const openLightbox = (image: Image) => {
    setLightboxImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxImage(null);
    document.body.style.overflow = 'unset';
  };

  const filterButtons = [
    { key: 'toate', label: 'Toate' },
    { key: 'restaurant', label: 'Restaurant' },
    { key: 'terasa', label: 'Terasă' },
    { key: 'evenimente', label: 'Evenimente' }
  ];

  return (
    <div className="galerie-page">
      {/* Header Section */}
      <section className="section" style={{ paddingTop: '120px', background: 'var(--color-cream)' }}>
        <div className="container">
          <div className={`${headerRef.isVisible ? 'animate-fadeInUp' : ''}`} ref={headerRef.ref}>
            <h1 className="section-title">Galeria Foto</h1>
            <p className="section-subtitle">
              Descoperă atmosfera unică a Restaurant Țara Bârsei
            </p>
          </div>
        </div>
      </section>

      {/* Filter and Gallery Section */}
      <section className="section">
        <div className="container">
          {/* Filter Buttons */}
          <div className="filter-buttons">
            {filterButtons.map(button => (
              <button
                key={button.key}
                className={`filter-btn ${filter === button.key ? 'active' : ''}`}
                onClick={() => setFilter(button.key)}
              >
                {button.label}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className={`gallery-grid ${galleryRef.isVisible ? 'animate-zoomIn' : ''}`} ref={galleryRef.ref}>
            {filteredImages.map((image, index) => (
              <div 
                key={image.id} 
                className="gallery-item"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => openLightbox(image)}
              >
                <img src={image.src} alt={image.alt} />
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div style={{ textAlign: 'center', padding: '3rem' }}>
              <p style={{ fontSize: '1.2rem', color: 'var(--color-dark)', opacity: '0.7' }}>
                Nu există imagini pentru categoria selectată.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage && (
        <div className="lightbox active" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox}>
              <X size={24} />
            </button>
            <img src={lightboxImage.src} alt={lightboxImage.alt} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Galerie;