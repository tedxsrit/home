import { useEffect, useState } from 'react';

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      onComplete();
    }, 3900);

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-background flex justify-center items-center overflow-hidden">
      {/* Background Glow */}
      <div 
        className="absolute w-[600px] h-[200px] opacity-0 -z-10 blur-[40px] animate-glow-pulse"
        style={{
          background: 'radial-gradient(circle at center, hsla(348, 100%, 45%, 0.15), transparent 60%)',
          animationDelay: '2s'
        }}
      />
      
      {/* Word Container */}
      <div className="relative flex items-center h-[140px]">
        {/* TED Letters */}
        <span 
          className="text-[8rem] font-black opacity-0 mr-[5px] text-ted-gradient animate-letter-reveal"
          style={{ animationDelay: '0.1s' }}
        >
          T
        </span>
        <span 
          className="text-[8rem] font-black opacity-0 mr-[5px] text-ted-gradient animate-letter-reveal"
          style={{ animationDelay: '0.3s' }}
        >
          E
        </span>
        <span 
          className="text-[8rem] font-black opacity-0 mr-[10px] text-ted-gradient animate-letter-reveal"
          style={{ animationDelay: '0.5s' }}
        >
          D
        </span>
        
        {/* x Letter */}
        <span 
          className="text-[7.5rem] font-black opacity-0 mr-[10px] text-foreground animate-pop"
          style={{ 
            animationDelay: '0.7s',
            textShadow: '0 0 20px hsla(348, 100%, 45%, 0.7)'
          }}
        >
          x
        </span>
        
        {/* SRIT Letters */}
        <span 
          className="text-[8rem] font-black opacity-0 mr-[5px] text-white-gradient animate-letter-reveal"
          style={{ animationDelay: '0.9s' }}
        >
          S
        </span>
        <span 
          className="text-[8rem] font-black opacity-0 mr-[5px] text-white-gradient animate-letter-reveal"
          style={{ animationDelay: '1.1s' }}
        >
          R
        </span>
        <span 
          className="text-[8rem] font-black opacity-0 mr-[5px] text-white-gradient animate-letter-reveal"
          style={{ animationDelay: '1.3s' }}
        >
          I
        </span>
        <span 
          className="text-[8rem] font-black opacity-0 text-white-gradient animate-letter-reveal"
          style={{ animationDelay: '1.5s' }}
        >
          T
        </span>
      </div>
      
      {/* Loading Bar */}
      <div 
        className="absolute bottom-1/3 w-[300px] h-[2px] bg-foreground/10 rounded-[1px] overflow-hidden opacity-0 animate-fade-in"
        style={{ animationDelay: '2s' }}
      >
        <div 
          className="absolute h-full w-0 rounded-[1px] loading-progress"
          style={{
            background: 'linear-gradient(90deg, hsl(348, 100%, 45%), hsl(348, 100%, 60%), hsl(0, 0%, 100%))',
            animationDelay: '2.2s'
          }}
        />
      </div>
    </div>
  );
};

export default LoadingScreen;
