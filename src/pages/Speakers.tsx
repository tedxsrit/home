import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import speaker1 from '@/assets/sp_d.png';
import speaker2 from '@/assets/sp_d.png';
import speaker3 from '@/assets/sp_d.png';
import speaker4 from '@/assets/sp_d.png';
import { Button } from '@/components/ui/button';
import { color } from 'framer-motion';

const speakers = [
  {
    id: 1,
    name: ' you wanna be a speaker?',
    role: '  ',
    image: speaker1,
   quote: 'Exciting updates are on the way will be revealed shortly Watch this space for more.',
  //   bio: 'Dr. Rajesh Kumar is a leading AI researcher with over 15 years of experience in developing human-centric AI systems.',
  //
   },
  // {
  //   id: 2,
  //   name: 'Priya Sharma',
  //   role: 'Tech Entrepreneur & Innovator',
  //   image: speaker2,
  //   quote: 'Innovation without empathy is just invention. True innovation understands the human experience and creates solutions that resonate with people\'s lives and aspirations.',
  //   bio: 'Priya Sharma is the founder of multiple successful tech startups focused on social impact.',
  // },
  // {
  //   id: 3,
  //   name: 'Prof. Suresh Menon',
  //   role: 'Innovation Expert & Educator',
  //   image: speaker3,
  //   quote: 'Education is not just about filling minds with information, but about igniting curiosity and fostering the courage to question, explore, and create.',
  //   bio: 'Prof. Suresh Menon has dedicated his career to transforming education through innovative teaching methodologies.',
  // },
  // {
  //   id: 4,
  //   name: 'Dr. Ananya Rao',
  //   role: 'Neuroscientist & Author',
  //   image: speaker4,
  //   quote: 'Understanding the human brain is the key to understanding ourselves. Every discovery in neuroscience brings us closer to unlocking the mysteries of consciousness and creativity.',
  //   bio: 'Dr. Ananya Rao is an award-winning neuroscientist whose research bridges the gap between brain science and everyday life.',
  // },
];

const Speakers = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % speakers.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + speakers.length) % speakers.length);
  };

  const currentSpeaker = speakers[currentIndex];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="min-h-screen flex items-center relative pt-20">
        {/* Navigation Arrows */}
        {/* <button
          onClick={goToPrevious}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full glass flex items-center justify-center hover:bg-primary/20 transition-all duration-300 group"
        >
          <ChevronLeft className="w-6 h-6 text-foreground group-hover:text-primary transition-colors" />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full glass flex items-center justify-center hover:bg-primary/20 transition-all duration-300 group"
        >
          <ChevronRight className="w-6 h-6 text-foreground group-hover:text-primary transition-colors" />
        </button> */}

        {/* Content */}
        <div className="container mx-auto px-4 md:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Quote Section */}
            <div className="order-2 lg:order-1 text-center lg:text-left animate-slide-in-left" key={currentSpeaker.id + '-quote'}>
              <Quote className="w-16 h-16 text-primary mb-6 mx-auto lg:mx-0 opacity-50" />
              <blockquote className="text-2xl md:text-3xl lg:text-4xl font-light text-foreground leading-relaxed mb-8 italic">
                "{currentSpeaker.quote}"
              </blockquote>
              <div className="space-y-2">
                
                <h2 className="text-2xl md:text-3xl font-bold text-foreground text-red-500">
                  {currentSpeaker.name}
                </h2>
                {/* <p className="text-primary text-lg font-medium">
                  {currentSpeaker.role}
                </p> */}
                {/* <p className="text-muted-foreground text-sm max-w-md mx-auto lg:mx-0">
                  {currentSpeaker.bio}
                </p> */}
                
                 <a
                   href="https://docs.google.com/forms/d/e/1FAIpQLSdPEwXesUAyAoxYeSaxZooOykX298rWfcOP-jQboq5MfojI-w/viewform"
                   target="_blank"
                   rel="noopener noreferrer"
                    className="px-4"
                >
               <Button
  variant="outline"
  className="
  mx-[-15px]
  my-10
    w-full max-w-[200px]
    h-[45px]
    bg-red-600
    hover:bg-red-700
    text-white
    font-semibold
    tracking-wide
    rounded-lg
    shadow-lg shadow-red-600/30
    transition-all duration-300
  "
>
  Register
</Button>

                </a>
              </div>
            </div>

            {/* Image Section */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-slide-in-right" key={currentSpeaker.id + '-image'}>
              <div className="relative">
                {/* Glow Effect */}
                <div 
                  className="absolute inset-0 blur-[60px] opacity-30"
                  style={{
                    background: 'radial-gradient(circle at center, hsla(348, 100%, 45%, 0.6), transparent 60%)',
                  }}
                />
                
                {/* Image Container */}
                <div className="relative w-[300px] md:w-[400px] lg:w-[450px] aspect-[3/4] rounded-2xl overflow-hidden border-2 border-primary/30">
                  <img
                    src={currentSpeaker.image}
                    alt={currentSpeaker.name}
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                </div>
              </div>
            </div>
          </div>
              

          {/* Pagination Dots */}
          <div className="flex items-center justify-center gap-3 mt-12">
            {speakers.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-primary w-8' 
                    : 'bg-foreground/30 hover:bg-foreground/50'
                }`}
              />
            ))}
            
          </div>
          
        </div>
   
      </section>
            
      <Footer />
    </div>
  );
};

export default Speakers;
