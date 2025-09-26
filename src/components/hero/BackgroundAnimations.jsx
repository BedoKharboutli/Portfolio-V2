import React, { useEffect, useRef } from 'react';
import './backgroundAnimations.css';

// Option 1: Floating Particles Animation
export const FloatingParticles = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const particlesRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const particles = particlesRef.current;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Create particles
    const createParticles = () => {
      particles.length = 0;
      // Optimize particle count based on screen size
      let particleCount;
      if (window.innerWidth < 480) {
        particleCount = Math.min(20, Math.floor(window.innerWidth / 40));
      } else if (window.innerWidth < 768) {
        particleCount = Math.min(30, Math.floor(window.innerWidth / 35));
      } else {
        particleCount = Math.min(50, Math.floor(window.innerWidth / 30));
      }
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 3 + 1,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          opacity: Math.random() * 0.5 + 0.2,
          color: `hsl(${220 + Math.random() * 60}, 70%, 60%)`,
        });
      }
    };

    createParticles();

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, index) => {
        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = particle.opacity;
        ctx.fill();

        // Draw connections (reduce on mobile for performance)
        const maxDistance = window.innerWidth < 768 ? 80 : 100;
        particles.slice(index + 1).forEach(otherParticle => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = particle.color;
            ctx.globalAlpha = (maxDistance - distance) / maxDistance * 0.2;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });
      });

      ctx.globalAlpha = 1;
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return <canvas ref={canvasRef} className="background-animation floating-particles" />;
};

// Option 2: Gradient Waves Animation
export const GradientWaves = () => {
  return (
    <div className="background-animation gradient-waves">
      <div className="wave wave-1"></div>
      <div className="wave wave-2"></div>
      <div className="wave wave-3"></div>
      <div className="gradient-overlay"></div>
    </div>
  );
};

// Option 3: Geometric Shapes Animation
export const GeometricShapes = () => {
  const shapesRef = useRef(null);

  useEffect(() => {
    const container = shapesRef.current;
    if (!container) return;

    // Create random geometric shapes
    const createShapes = () => {
      container.innerHTML = '';
      // Optimize shape count for mobile
      let shapeCount;
      if (window.innerWidth < 480) {
        shapeCount = Math.min(8, Math.floor(window.innerWidth / 120));
      } else if (window.innerWidth < 768) {
        shapeCount = Math.min(12, Math.floor(window.innerWidth / 100));
      } else {
        shapeCount = Math.min(20, Math.floor(window.innerWidth / 80));
      }
      
      for (let i = 0; i < shapeCount; i++) {
        const shape = document.createElement('div');
        const shapeType = Math.random() > 0.5 ? 'circle' : 'square';
        const size = Math.random() * 60 + 20;
        
        shape.className = `geometric-shape ${shapeType}`;
        shape.style.width = `${size}px`;
        shape.style.height = `${size}px`;
        shape.style.left = `${Math.random() * 100}%`;
        shape.style.top = `${Math.random() * 100}%`;
        shape.style.animationDelay = `${Math.random() * 10}s`;
        shape.style.animationDuration = `${15 + Math.random() * 10}s`;
        
        container.appendChild(shape);
      }
    };

    createShapes();
    window.addEventListener('resize', createShapes);

    return () => {
      window.removeEventListener('resize', createShapes);
    };
  }, []);

  return (
    <div className="background-animation geometric-shapes">
      <div ref={shapesRef} className="shapes-container"></div>
      <div className="geometric-overlay"></div>
    </div>
  );
};

// Background Animation Controller Component
export const BackgroundAnimationController = ({ animationType = 'particles' }) => {
  const renderAnimation = () => {
    switch (animationType) {
      case 'particles':
        return <FloatingParticles />;
      case 'waves':
        return <GradientWaves />;
      case 'geometric':
        return <GeometricShapes />;
      default:
        return <FloatingParticles />;
    }
  };

  return (
    <div className="background-animation-wrapper">
      {renderAnimation()}
    </div>
  );
};
