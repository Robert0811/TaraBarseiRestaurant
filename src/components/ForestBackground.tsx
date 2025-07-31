import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const ForestBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Animated elements
    const trees: Array<{
      x: number;
      y: number;
      height: number;
      width: number;
      sway: number;
      color: string;
    }> = [];

    const clouds: Array<{
      x: number;
      y: number;
      size: number;
      speed: number;
      opacity: number;
    }> = [];

    const birds: Array<{
      x: number;
      y: number;
      wingPhase: number;
      speed: number;
    }> = [];

    // Initialize trees
    for (let i = 0; i < 20; i++) {
      trees.push({
        x: Math.random() * canvas.width,
        y: canvas.height * 0.6 + Math.random() * canvas.height * 0.3,
        height: 80 + Math.random() * 120,
        width: 20 + Math.random() * 30,
        sway: Math.random() * Math.PI * 2,
        color: `hsl(${120 + Math.random() * 40}, 50%, ${25 + Math.random() * 20}%)`
      });
    }

    // Initialize clouds
    for (let i = 0; i < 8; i++) {
      clouds.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height * 0.3,
        size: 40 + Math.random() * 80,
        speed: 0.2 + Math.random() * 0.5,
        opacity: 0.3 + Math.random() * 0.4
      });
    }

    // Initialize birds
    for (let i = 0; i < 5; i++) {
      birds.push({
        x: Math.random() * canvas.width,
        y: 50 + Math.random() * 150,
        wingPhase: Math.random() * Math.PI * 2,
        speed: 1 + Math.random() * 2
      });
    }

    let animationFrame: number;
    let time = 0;

    const animate = () => {
      time += 0.01;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Gradient sky background
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, '#87CEEB'); // Sky blue
      gradient.addColorStop(0.6, '#F0F8FF'); // Alice blue
      gradient.addColorStop(1, '#F5F5DC'); // Beige
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw mountains/hills in background
      ctx.fillStyle = '#9CAF88';
      ctx.beginPath();
      ctx.moveTo(0, canvas.height * 0.7);
      for (let x = 0; x <= canvas.width; x += 50) {
        const y = canvas.height * 0.7 + Math.sin(x * 0.01 + time) * 30;
        ctx.lineTo(x, y);
      }
      ctx.lineTo(canvas.width, canvas.height);
      ctx.lineTo(0, canvas.height);
      ctx.closePath();
      ctx.fill();

      // Draw second layer of hills
      ctx.fillStyle = '#A8B899';
      ctx.beginPath();
      ctx.moveTo(0, canvas.height * 0.8);
      for (let x = 0; x <= canvas.width; x += 30) {
        const y = canvas.height * 0.8 + Math.sin(x * 0.015 + time * 1.2) * 20;
        ctx.lineTo(x, y);
      }
      ctx.lineTo(canvas.width, canvas.height);
      ctx.lineTo(0, canvas.height);
      ctx.closePath();
      ctx.fill();

      // Animate and draw clouds
      clouds.forEach((cloud) => {
        cloud.x += cloud.speed;
        if (cloud.x > canvas.width + cloud.size) {
          cloud.x = -cloud.size;
        }

        ctx.globalAlpha = cloud.opacity;
        ctx.fillStyle = 'white';
        
        // Draw fluffy cloud
        ctx.beginPath();
        ctx.arc(cloud.x, cloud.y, cloud.size * 0.5, 0, Math.PI * 2);
        ctx.arc(cloud.x + cloud.size * 0.3, cloud.y - cloud.size * 0.2, cloud.size * 0.4, 0, Math.PI * 2);
        ctx.arc(cloud.x - cloud.size * 0.3, cloud.y - cloud.size * 0.1, cloud.size * 0.3, 0, Math.PI * 2);
        ctx.arc(cloud.x + cloud.size * 0.6, cloud.y, cloud.size * 0.3, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.globalAlpha = 1;

      // Animate and draw trees
      trees.forEach((tree) => {
        tree.sway += 0.02;
        const swayAmount = Math.sin(tree.sway) * 5;

        // Tree trunk
        ctx.fillStyle = '#8B4513';
        ctx.fillRect(
          tree.x + swayAmount - tree.width * 0.1, 
          tree.y, 
          tree.width * 0.2, 
          tree.height * 0.6
        );

        // Tree crown (foliage)
        ctx.fillStyle = tree.color;
        ctx.beginPath();
        ctx.ellipse(
          tree.x + swayAmount,
          tree.y - tree.height * 0.2,
          tree.width * 0.8,
          tree.height * 0.6,
          swayAmount * 0.1,
          0,
          Math.PI * 2
        );
        ctx.fill();

        // Add some texture to trees
        ctx.fillStyle = `hsl(${120 + Math.random() * 20}, 60%, ${30 + Math.random() * 15}%)`;
        ctx.beginPath();
        ctx.ellipse(
          tree.x + swayAmount - tree.width * 0.2,
          tree.y - tree.height * 0.3,
          tree.width * 0.3,
          tree.height * 0.2,
          0,
          0,
          Math.PI * 2
        );
        ctx.fill();
      });

      // Animate and draw birds
      birds.forEach((bird) => {
        bird.x += bird.speed;
        bird.wingPhase += 0.3;
        
        if (bird.x > canvas.width + 50) {
          bird.x = -50;
          bird.y = 50 + Math.random() * 150;
        }

        // Simple bird shape
        ctx.fillStyle = '#2C3E50';
        ctx.beginPath();
        
        // Bird body
        ctx.ellipse(bird.x, bird.y, 8, 4, 0, 0, Math.PI * 2);
        
        // Wings
        const wingFlap = Math.sin(bird.wingPhase) * 10;
        ctx.beginPath();
        ctx.ellipse(bird.x - 5, bird.y + wingFlap, 12, 3, -0.5, 0, Math.PI * 2);
        ctx.ellipse(bird.x + 5, bird.y - wingFlap, 12, 3, 0.5, 0, Math.PI * 2);
        ctx.fill();
      });

      // Add floating particles (leaves, pollen)
      for (let i = 0; i < 15; i++) {
        const x = (time * 50 + i * 100) % (canvas.width + 100);
        const y = 200 + Math.sin(time * 2 + i) * 100 + Math.sin(time + i * 0.5) * 50;
        
        ctx.fillStyle = `hsl(${60 + Math.random() * 40}, 70%, 60%)`;
        ctx.globalAlpha = 0.6;
        ctx.beginPath();
        ctx.ellipse(x, y, 3, 6, time + i, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ 
          background: 'linear-gradient(135deg, #87CEEB 0%, #F0F8FF 50%, #F5F5DC 100%)',
        }}
      />
      
      {/* Overlay gradient for better text readability */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/30"
        style={{ 
          background: 'linear-gradient(180deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.3) 70%, rgba(255,255,255,0.6) 100%)'
        }}
      />
      
      {/* Floating animated elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-green-300 rounded-full opacity-40"
            animate={{
              x: [0, window.innerWidth || 1200],
              y: [
                Math.random() * (window.innerHeight || 800),
                Math.random() * (window.innerHeight || 800)
              ],
              rotate: [0, 360],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear",
              delay: i * 2,
            }}
            style={{
              left: -20,
              top: Math.random() * (window.innerHeight || 800),
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ForestBackground;
