import { useEffect, useRef } from 'react';

const DotGridBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const activeCells = useRef<Map<number, number>>(new Map());
  const animationFrameRef = useRef<number>();
  
  const dotSize = 2;
  const spacing = 20;
  const diameter = spacing;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      const col = Math.floor(mouseX / diameter);
      const row = Math.floor(mouseY / diameter);
      const cellIndex = row * Math.floor(canvas.width / diameter) + col;

      if (cellIndex >= 0 && !activeCells.current.has(cellIndex)) {
        activeCells.current.set(cellIndex, Date.now());
        
        setTimeout(() => {
          activeCells.current.delete(cellIndex);
        }, 350);
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const cols = Math.floor(canvas.width / diameter);
      const rows = Math.floor(canvas.height / diameter);
      const now = Date.now();

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const cellIndex = row * cols + col;
          const x = col * diameter + (diameter - dotSize) / 2;
          const y = row * diameter + (diameter - dotSize) / 2;
          
          const activationTime = activeCells.current.get(cellIndex);
          const isActive = activationTime !== undefined;
          
          if (isActive) {
            const elapsed = now - activationTime;
            const progress = Math.min(elapsed / 300, 1);
            const scale = 1 + (0.5 * progress);
            const opacity = 0.3 + (0.7 * progress);
            
            ctx.save();
            ctx.globalAlpha = opacity;
            ctx.fillStyle = 'rgba(230, 0, 35, 0.6)';
            ctx.shadowBlur = 10;
            ctx.shadowColor = 'rgba(230, 0, 35, 0.8)';
            ctx.beginPath();
            ctx.arc(x, y, (dotSize / 2) * scale, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
          } else {
            ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
            ctx.beginPath();
            ctx.arc(x, y, dotSize / 2, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }

      animationFrameRef.current = requestAnimationFrame(draw);
    };

    window.addEventListener('mousemove', handleMouseMove);
    draw();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: 'transparent' }}
    />
  );
};

export default DotGridBackground;

