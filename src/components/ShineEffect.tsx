import React, { useRef, useEffect } from 'react';

interface ShineEffectProps {
  children: React.ReactNode;
  className?: string;
}

const ShineEffect: React.FC<ShineEffectProps> = ({ children, className = '' }) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      element.style.setProperty('--mouse-x', `${x}px`);
      element.style.setProperty('--mouse-y', `${y}px`);
    };

    element.addEventListener('mousemove', handleMouseMove);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={elementRef}
      className={`shine-effect ${className}`}
      style={{
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {children}
      <div
        className="shine-overlay"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `radial-gradient(circle 100px at var(--mouse-x, -100px) var(--mouse-y, -100px), rgba(255, 255, 255, 0.15), transparent 70%)`,
          opacity: 0,
          transition: 'opacity 0.3s ease',
          pointerEvents: 'none'
        }}
      />
    </div>
  );
};

export default ShineEffect;
