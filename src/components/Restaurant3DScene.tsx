import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

interface FloatingElement {
  x: number;
  y: number;
  size: number;
  speed: number;
  color: string;
  shape: 'circle' | 'square' | 'triangle';
}

const Restaurant3DScene: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();

  const elements: FloatingElement[] = [
    { x: 100, y: 100, size: 20, speed: 0.02, color: '#FFB366', shape: 'circle' },
    { x: 200, y: 150, size: 15, speed: 0.015, color: '#9CAF88', shape: 'square' },
    { x: 300, y: 80, size: 25, speed: 0.025, color: '#F5F3F0', shape: 'triangle' },
    { x: 150, y: 200, size: 18, speed: 0.018, color: '#FFB366', shape: 'circle' },
    { x: 250, y: 120, size: 22, speed: 0.022, color: '#9CAF88', shape: 'square' },
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const drawShape = (element: FloatingElement, time: number) => {
      const x = element.x + Math.sin(time * element.speed) * 50;
      const y = element.y + Math.cos(time * element.speed) * 30;

      ctx.save();
      ctx.shadowBlur = 15;
      ctx.shadowColor = element.color;
      ctx.fillStyle = element.color;

      switch (element.shape) {
        case 'circle':
          ctx.beginPath();
          ctx.arc(x, y, element.size, 0, Math.PI * 2);
          ctx.fill();
          break;
        
        case 'square':
          ctx.fillRect(x - element.size/2, y - element.size/2, element.size, element.size);
          break;
        
        case 'triangle':
          ctx.beginPath();
          ctx.moveTo(x, y - element.size);
          ctx.lineTo(x - element.size, y + element.size);
          ctx.lineTo(x + element.size, y + element.size);
          ctx.closePath();
          ctx.fill();
          break;
      }
      ctx.restore();
    };

    const animate = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Background gradient
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, 'rgba(26, 26, 26, 0.9)');
      gradient.addColorStop(1, 'rgba(45, 45, 45, 0.9)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw floating elements
      elements.forEach(element => drawShape(element, time));

      // Draw center logo text
      ctx.save();
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.font = 'bold 24px Poppins, sans-serif';
      ctx.fillStyle = '#9CAF88';
      ctx.shadowBlur = 10;
      ctx.shadowColor = '#9CAF88';
      ctx.fillText('Țara Bârsei', canvas.width / 2, canvas.height / 2);
      
      ctx.font = '16px Poppins, sans-serif';
      ctx.fillStyle = '#FFB366';
      ctx.shadowColor = '#FFB366';
      ctx.fillText('Restaurant Tradițional', canvas.width / 2, canvas.height / 2 + 40);
      ctx.restore();

      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    animate(0);

    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      style={{ 
        width: '100%', 
        height: '600px', 
        borderRadius: '20px', 
        overflow: 'hidden',
        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
        background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)'
      }}
    >
      <canvas
        ref={canvasRef}
        style={{ 
          width: '100%', 
          height: '100%',
          cursor: 'pointer'
        }}
        onMouseMove={(e) => {
          const canvas = canvasRef.current;
          if (!canvas) return;
          
          const rect = canvas.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          
          // Add interactive ripple effect
          const ctx = canvas.getContext('2d');
          if (ctx) {
            ctx.save();
            ctx.globalAlpha = 0.3;
            ctx.fillStyle = '#FFB366';
            ctx.beginPath();
            ctx.arc(x, y, 30, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
          }
        }}
      />
    </motion.div>
  );
};

export default Restaurant3DScene;
