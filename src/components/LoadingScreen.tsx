// import { useEffect, useState } from 'react';

// const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
//   const [show, setShow] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setShow(false);
//       onComplete();
//     }, 3900);

//     return () => clearTimeout(timer);
//   }, [onComplete]);

//   if (!show) return null;

//   return (
//     <div className="fixed inset-0 z-[100] bg-background flex justify-center items-center overflow-hidden">
//       {/* Background Glow */}
//       <div 
//         className="absolute w-[600px] h-[200px] opacity-0 -z-10 blur-[40px] animate-glow-pulse"
//         style={{
//           background: 'radial-gradient(circle at center, hsla(348, 100%, 45%, 0.15), transparent 60%)',
//           animationDelay: '2s'
//         }}
//       />
      
//       {/* Word Container */}
//       <div className="relative flex items-center h-[140px]">
//         {/* TED Letters */}
//         <span 
//           className="text-[8rem] font-black opacity-0 mr-[5px] text-ted-gradient animate-letter-reveal"
//           style={{ animationDelay: '0.1s' }}
//         >
//           T
//         </span>
//         <span 
//           className="text-[8rem] font-black opacity-0 mr-[5px] text-ted-gradient animate-letter-reveal"
//           style={{ animationDelay: '0.3s' }}
//         >
//           E
//         </span>
//         <span 
//           className="text-[8rem] font-black opacity-0 mr-[10px] text-ted-gradient animate-letter-reveal"
//           style={{ animationDelay: '0.5s' }}
//         >
//           D
//         </span>
        
//         {/* x Letter */}
//         <span 
//           className="text-[7.5rem] font-black opacity-0 mr-[10px] text-foreground animate-pop"
//           style={{ 
//             animationDelay: '0.7s',
//             textShadow: '0 0 20px hsla(348, 100%, 45%, 0.7)'
//           }}
//         >
//           x
//         </span>
        
//         {/* SRIT Letters */}
//         <span 
//           className="text-[8rem] font-black opacity-0 mr-[5px] text-white-gradient animate-letter-reveal"
//           style={{ animationDelay: '0.9s' }}
//         >
//           S
//         </span>
//         <span 
//           className="text-[8rem] font-black opacity-0 mr-[5px] text-white-gradient animate-letter-reveal"
//           style={{ animationDelay: '1.1s' }}
//         >
//           R
//         </span>
//         <span 
//           className="text-[8rem] font-black opacity-0 mr-[5px] text-white-gradient animate-letter-reveal"
//           style={{ animationDelay: '1.3s' }}
//         >
//           I
//         </span>
//         <span 
//           className="text-[8rem] font-black opacity-0 text-white-gradient animate-letter-reveal"
//           style={{ animationDelay: '1.5s' }}
//         >
//           T
//         </span>
//       </div>
      
//       {/* Loading Bar */}
//       <div 
//         className="absolute bottom-1/3 w-[300px] h-[2px] bg-foreground/10 rounded-[1px] overflow-hidden opacity-0 animate-fade-in"
//         style={{ animationDelay: '2s' }}
//       >
//         <div 
//           className="absolute h-full w-0 rounded-[1px] loading-progress"
//           style={{
//             background: 'linear-gradient(90deg, hsl(348, 100%, 45%), hsl(348, 100%, 60%), hsl(0, 0%, 100%))',
//             animationDelay: '2.2s'
//           }}
//         />
//       </div>
//     </div>
//   );
// };

// export default LoadingScreen;
import { useEffect, useState } from "react";

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
    <div className="fixed inset-0 z-[100] bg-background flex justify-center items-center overflow-hidden px-4">
      
      {/* Background Glow */}
      <div
        className="absolute w-[300px] sm:w-[600px] h-[150px] sm:h-[200px] opacity-0 -z-10 blur-[40px] animate-glow-pulse"
        style={{
          background:
            "radial-gradient(circle at center, hsla(348, 100%, 45%, 0.15), transparent 60%)",
          animationDelay: "2s",
        }}
      />

      {/* Word Container */}
      <div className="relative flex items-center h-[90px] sm:h-[140px]">
        
        {/* TED */}
        {["T", "E", "D"].map((letter, i) => (
          <span
            key={letter}
            className="font-black opacity-0 text-ted-gradient animate-letter-reveal
                       text-[3.5rem] sm:text-[6rem] md:text-[8rem]
                       mr-[2px] sm:mr-[5px]"
            style={{ animationDelay: `${0.1 + i * 0.2}s` }}
          >
            {letter}
          </span>
        ))}

        {/* x */}
        <span
          className="font-black opacity-0 text-foreground animate-pop
                     text-[3.2rem] sm:text-[5.5rem] md:text-[7.5rem]
                     mx-[4px] sm:mx-[10px]"
          style={{
            animationDelay: "0.7s",
            textShadow: "0 0 20px hsla(348, 100%, 45%, 0.7)",
          }}
        >
          x
        </span>

        {/* SRIT */}
        {["S", "R", "I", "T"].map((letter, i) => (
          <span
            key={letter}
            className="font-black opacity-0 text-white-gradient animate-letter-reveal
                       text-[3.5rem] sm:text-[6rem] md:text-[8rem]
                       mr-[2px] sm:mr-[5px]"
            style={{ animationDelay: `${0.9 + i * 0.2}s` }}
          >
            {letter}
          </span>
        ))}
      </div>

      {/* Loading Bar */}
      <div
        className="absolute bottom-[22%] sm:bottom-1/3
                   w-[200px] sm:w-[300px]
                   h-[2px] bg-foreground/10 rounded overflow-hidden
                   opacity-0 animate-fade-in"
        style={{ animationDelay: "2s" }}
      >
        <div
          className="absolute h-full w-0 loading-progress"
          style={{
            background:
              "linear-gradient(90deg, hsl(348, 100%, 45%), hsl(348, 100%, 60%), white)",
            animationDelay: "2.2s",
          }}
        />
      </div>
    </div>
  );
};

export default LoadingScreen;
