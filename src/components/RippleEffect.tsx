import React, { useRef } from 'react';

interface RippleEffectProps {
  children: React.ReactNode;
  color?: string;
  duration?: number;
}

const RippleEffect: React.FC<RippleEffectProps> = ({ 
  children, 
  color = 'rgba(255, 255, 255, 0.5)',
  duration = 600
}) => {
  const buttonRef = useRef<HTMLDivElement>(null);

  const createRipple = (e: React.MouseEvent) => {
    const button = buttonRef.current;
    if (!button) return;

    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    const ripple = document.createElement('span');
    ripple.style.cssText = `
      position: absolute;
      width: ${size}px;
      height: ${size}px;
      left: ${x}px;
      top: ${y}px;
      background: ${color};
      border-radius: 50%;
      transform: scale(0);
      animation: ripple ${duration}ms linear;
      pointer-events: none;
    `;

    // Add ripple animation keyframes if not already added
    if (!document.querySelector('#ripple-keyframes')) {
      const style = document.createElement('style');
      style.id = 'ripple-keyframes';
      style.textContent = `
        @keyframes ripple {
          to {
            transform: scale(2);
            opacity: 0;
          }
        }
      `;
      document.head.appendChild(style);
    }

    button.appendChild(ripple);

    setTimeout(() => {
      if (button.contains(ripple)) {
        button.removeChild(ripple);
      }
    }, duration);
  };

  return (
    <div
      ref={buttonRef}
      onMouseDown={createRipple}
      style={{
        position: 'relative',
        overflow: 'hidden',
        display: 'inline-block',
        width: '100%'
      }}
    >
      {children}
    </div>
  );
};

export default RippleEffect;
