import { useEffect, useRef } from 'react';

export default function ParticlesBg() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    let animationFrameId;
    let particles = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    class Bubble {
      constructor() {
        this.reset(true);
      }

      reset(initiallyRandomY = false) {
        this.x = Math.random() * canvas.width;
        this.y = initiallyRandomY ? Math.random() * canvas.height : canvas.height + Math.random() * 50;
        this.size = Math.random() * 2.5 + 1; // 1px to 3.5px
        this.speedY = -(Math.random() * 0.8 + 0.4); // upward motion
        this.speedX = Math.sin(Math.random() * Math.PI) * 0.2 - 0.1; // slow wave wobble
        this.wobbleSpeed = Math.random() * 0.02 + 0.01;
        this.wobbleAngle = Math.random() * Math.PI;
        this.color = Math.random() > 0.45 ? '#E41E26' : '#FFFFFF'; // Red Coca-Cola or white bubbles
        this.alpha = Math.random() * 0.35 + 0.15;
      }

      update() {
        this.y += this.speedY;
        this.wobbleAngle += this.wobbleSpeed;
        this.x += Math.sin(this.wobbleAngle) * 0.25 + this.speedX;

        // Reset once bubble leaves the top
        if (this.y < -10) {
          this.reset(false);
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.alpha;
        ctx.fill();
      }
    }

    const init = () => {
      const bubbleCount = Math.min(Math.floor(canvas.width / 20), 70);
      particles = [];
      for (let i = 0; i < bubbleCount; i++) {
        particles.push(new Bubble());
      }
    };

    init();

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw background subtle ambient red spot glows in corners
      ctx.save();
      ctx.globalAlpha = 0.15;
      const gradientTop = ctx.createRadialGradient(0, 0, 50, 0, 0, 500);
      gradientTop.addColorStop(0, '#E41E26');
      gradientTop.addColorStop(1, 'transparent');
      ctx.fillStyle = gradientTop;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const gradientBottom = ctx.createRadialGradient(canvas.width, canvas.height, 50, canvas.width, canvas.height, 600);
      gradientBottom.addColorStop(0, '#B71C1C');
      gradientBottom.addColorStop(1, 'transparent');
      ctx.fillStyle = gradientBottom;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.restore();

      // Render bubbles
      particles.forEach((bubble) => {
        bubble.update();
        bubble.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-50 pointer-events-none w-full h-full block"
      style={{ background: '#0A0A0A' }}
    />
  );
}
