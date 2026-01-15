import { useState, useEffect } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route, useLocation } from "react-router-dom";
import LoadingScreen from "./components/LoadingScreen";
import CustomCursor from "./components/CustomCursor";
import DotGridBackground from "./components/DotGridBackground";
import Index from "./pages/Index";
import Speakers from "./pages/Speakers";
import Partners from "./pages/Partners";
import About from "./pages/About";
import Team from "./pages/TEDxSRITTeam";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";


const queryClient = new QueryClient();

// Component to handle scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [pathname]);

  return null;
};

// const App = () => {
//   const [isLoading, setIsLoading] = useState(() => {
//     // Only show loading on first visit
//     const hasVisited = sessionStorage.getItem('tedxsrit-visited');
//     return !hasVisited;
//   });

//   const handleLoadingComplete = () => {
//     setIsLoading(false);
//     sessionStorage.setItem('tedxsrit-visited', 'true');
//   };

//   return (
//     <QueryClientProvider client={queryClient}>
//       <TooltipProvider>
//         <Toaster />
//         <Sonner />
//         {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
//         <div className={isLoading ? 'opacity-0' : 'opacity-100 transition-opacity duration-500'}>
//           <BrowserRouter basename='/tedxsrit/'>
//             <ScrollToTop />
//             <DotGridBackground />
//             <CustomCursor />
//             <Routes>
//               <Route path="/" element={<Index />} />
//               <Route path="/speakers" element={<Speakers />} />
//               <Route path="/partners" element={<Partners />} />
//               <Route path="/about" element={<About />} />
//               <Route path="/team" element={<Team />} />
//               <Route path="/contact" element={<Contact />} />
//               <Route path="*" element={<NotFound />} />
//             </Routes>
//           </BrowserRouter>
//         </div>
//       </TooltipProvider>
//     </QueryClientProvider>
//   );
// };

// export default App;
const App = () => {
  const [isLoading, setIsLoading] = useState(() => {
    const hasVisited = sessionStorage.getItem('tedxsrit-visited');
    return !hasVisited;
  });

  const handleLoadingComplete = () => {
    setIsLoading(false);
    sessionStorage.setItem('tedxsrit-visited', 'true');
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />

        {isLoading ? (
          <LoadingScreen onComplete={handleLoadingComplete} />
        ) : (
          <div className="opacity-100 transition-opacity duration-500">
            <ScrollToTop />
            <DotGridBackground />
            <CustomCursor />

            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/speakers" element={<Speakers />} />
              <Route path="/partners" element={<Partners />} />
              <Route path="/about" element={<About />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        )}

      </TooltipProvider>
    </QueryClientProvider>
  );
};
export default App;