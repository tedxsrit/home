import { useEffect, useState, useRef } from 'react';

interface TrailParticle {
  id: number;
  x: number;
  y: number;
  size: number;
}

const CustomCursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [trailParticles, setTrailParticles] = useState<TrailParticle[]>([]);
  const [clickEffects, setClickEffects] = useState<Array<{ id: number; x: number; y: number }>>([]);
  
  const mousePosition = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef<number>();
  const particleIdRef = useRef(0);
  const clickIdRef = useRef(0);
  const lastParticleTime = useRef(0);
  const lastHoverCheck = useRef(0);

  useEffect(() => {
    // Check if device supports hover (desktop)
    const checkDevice = () => {
      const isDesktopDevice = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
      setIsDesktop(isDesktopDevice);
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);

    // Smooth cursor animation loop with delay
    const animateCursor = () => {
      const targetX = mousePosition.current.x;
      const targetY = mousePosition.current.y;
      
      // Delay factor (lower = more delay) - 0.08 creates smooth following effect
      // The custom cursor will smoothly follow behind the default cursor
      setCursorPosition(prev => ({
        x: prev.x + (targetX - prev.x) * 0.08,
        y: prev.y + (targetY - prev.y) * 0.08,
      }));

      animationFrameRef.current = requestAnimationFrame(animateCursor);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mousePosition.current = { x: e.clientX, y: e.clientY };
      setIsVisible(true);

      // Throttle trail particles - only create every 50ms
      const now = Date.now();
      if (now - lastParticleTime.current > 50 && Math.random() > 0.8) {
        lastParticleTime.current = now;
        const size = Math.random() * 4 + 2;
        const newParticle: TrailParticle = {
          id: particleIdRef.current++,
          x: e.clientX,
          y: e.clientY,
          size,
        };
        setTrailParticles(prev => [...prev, newParticle]);

        // Remove particle after animation
        setTimeout(() => {
          setTrailParticles(prev => prev.filter(p => p.id !== newParticle.id));
        }, 600);
      }

      // Throttle hover check - only check every 100ms
      if (now - lastHoverCheck.current > 100) {
        lastHoverCheck.current = now;
        const target = e.target as HTMLElement;
        const isHoverable = 
          target.tagName === 'A' ||
          target.tagName === 'BUTTON' ||
          target.closest('button') !== null ||
          target.closest('a') !== null ||
          window.getComputedStyle(target).cursor === 'pointer';
        
        setIsHovering(isHoverable);
      }
    };

    const handleMouseDown = (e: MouseEvent) => {
      setIsClicking(true);
      
      // Create click effect
      const newClick = {
        id: clickIdRef.current++,
        x: e.clientX,
        y: e.clientY,
      };
      setClickEffects(prev => [...prev, newClick]);

      // Remove click effect after animation
      setTimeout(() => {
        setClickEffects(prev => prev.filter(c => c.id !== newClick.id));
      }, 500);
    };

    const handleMouseUp = () => {
      setIsClicking(false);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    if (isDesktop) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mousedown', handleMouseDown);
      window.addEventListener('mouseup', handleMouseUp);
      document.addEventListener('mouseleave', handleMouseLeave);
      animateCursor();
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', checkDevice);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isDesktop]);

  if (!isDesktop || !isVisible) return null;

  return (
    <>
      {/* Main cursor container */}
      <div
        className={`fixed pointer-events-none z-[9999] transition-transform duration-100 ${
          isHovering ? 'scale-[1.3]' : isClicking ? 'scale-[0.8]' : 'scale-100'
        }`}
        style={{
          left: `${cursorPosition.x}px`,
          top: `${cursorPosition.y}px`,
          transform: `translate(-50%, -50%) ${isHovering ? 'scale(1.3)' : isClicking ? 'scale(0.8)' : 'scale(1)'}`,
        }}
      >
        {/* Cursor icon */}
        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center relative animate-pulse ${
            isHovering
              ? 'bg-[rgba(230,0,35,0.4)] border-2 border-white/90'
              : 'bg-[rgba(230,0,35,0.2)] border-2 border-[rgba(230,0,35,0.8)]'
          }`}
          style={{
            boxShadow: '0 0 20px rgba(230, 0, 35, 0.3)',
          }}
        >
          {/* Inner spinning circle */}
          <div
            className="absolute w-3 h-3 rounded-full bg-white/90"
            style={{
              animation: 'spin 4s linear infinite',
            }}
          />
          {/* TEDx text */}
          <div className="absolute text-[6px] font-black text-white opacity-90 tracking-wider">
            TEDx
          </div>
        </div>
      </div>

      {/* Trail particles */}
      {trailParticles.map(particle => (
        <div
          key={particle.id}
          className="fixed pointer-events-none z-[9998] rounded-full bg-[rgba(230,0,35,0.6)] animate-fadeTrail"
          style={{
            left: `${particle.x - particle.size / 2}px`,
            top: `${particle.y - particle.size / 2}px`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
        />
      ))}

      {/* Click effects */}
      {clickEffects.map(click => (
        <div
          key={click.id}
          className="fixed pointer-events-none z-[9997] rounded-full border-2 border-[rgba(230,0,35,0.8)] animate-clickRing"
          style={{
            left: `${click.x - 30}px`,
            top: `${click.y - 30}px`,
            width: '60px',
            height: '60px',
          }}
        />
      ))}

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes fadeTrail {
          0% {
            opacity: 1;
            transform: scale(1);
          }
          100% {
            opacity: 0;
            transform: scale(0);
          }
        }
        @keyframes clickRing {
          0% {
            transform: scale(0.5);
            opacity: 1;
          }
          100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }
        .animate-fadeTrail {
          animation: fadeTrail 0.6s forwards;
        }
        .animate-clickRing {
          animation: clickRing 0.5s forwards;
        }
      `}</style>
    </>
  );
};

export default CustomCursor;

