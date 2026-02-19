import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import speaker1 from '@/assets/speakers/Speaker_priya.jpg';
import speaker2 from '@/assets/speakers/Speaker_vamsi.jpeg';
import speaker3 from '@/assets/speakers/Speaker_Pratham Golcha.jpg';
import speaker4 from '@/assets/speakers/Speaker_Siddanth (1).png';
import speaker5 from '@/assets/speakers/Speaker_Lija Mohan (1).jpeg';
import speaker6 from '@/assets/speakers/Speaker_ Santosh (1).jpeg';
import speaker7 from '@/assets/speakers/Speaker_prasanth.jpeg';
import speaker8 from '@/assets/speakers/Speaker_ardri.jpg';
import speaker9 from '@/assets/speakers/Speaker_Ranjit.png';
import { Button } from '@/components/ui/button';
import { color } from 'framer-motion';

const speakers = [

    {
    id: 1,
    name: 'Lt. Vamshi E (Retd.)',
    role: '',
    image: speaker2,
    quote: 'Innovation without empathy is just invention. True innovation understands the human experience and creates solutions that resonate with people\'s lives and aspirations.',
    // bio: 'Priya Sharma is the founder of multiple successful tech startups focused on social impact.',
  },
    {
    id: 2,
    name: 'Dr. S  Prashanth  I.A.S',
    role: '',
    image: speaker7,
    quote: 'True success is not about medals or ranks, but using excellence and resilience to serve a greater purpose.',
    // bio: 'Dr. Ananya Rao is an award-winning neuroscientist whose research bridges the gap between brain science and everyday life.',
  },
  {
    id: 3,
    name: ' Dr. Priya Jaganathan',
    role: '  ',
    image: speaker1,
   quote: 'The real danger is not AI, but people living without conscious choices.',
    // bio: 'Dr. Rajesh Kumar is a leading AI researcher with over 15 years of experience in developing human-centric AI systems.',
  
   },
 
  {
    id: 4,
    name: 'Pratham Golcha',
    role: '',
    image: speaker3,
    quote: 'Climate action depends not just on science, but on who controls the decisions and words.',
    // bio: 'Prof. Suresh Menon has dedicated his career to transforming education through innovative teaching methodologies.',
  },
  {
    id: 5,
    name: 'Dr. Siddhant R',
    role: '',
    image: speaker4,
    quote: 'The talk shows how disciplined listening can strengthen relationships and mental health.',
    // bio: 'Dr. Ananya Rao is an award-winning neuroscientist whose research bridges the gap between brain science and everyday life.',
  },
   {
    id: 6,
    name: 'Dr. Lija Mohan',
    role: '',
    image: speaker5,
    quote: 'Failures happen when we design for machines and forget the human.',
    // bio: 'Dr. Ananya Rao is an award-winning neuroscientist whose research bridges the gap between brain science and everyday life.',
  },
   {
    id: 7,
    name: 'Dr. Santosh Karthikeyan V',
    role: '',
    image: speaker6,
    quote: 'Humans and superintelligent AI can work together to build a better future.',
    // bio: 'Dr. Ananya Rao is an award-winning neuroscientist whose research bridges the gap between brain science and everyday life.',
  },
 
   {
    id: 8,
    name: 'Dr. J J Adri Jovin',
    role: '',
    image: speaker8,
    quote: 'AI improves learning only when used responsibly.',
    // bio: 'Dr. Ananya Rao is an award-winning neuroscientist whose research bridges the gap between brain science and everyday life.',
  },
   {
    id: 9,
    name: 'Group Captian Ranjit Isaac (Retd.)',
    role: '',
    image: speaker9,
    quote: 'In the age of AI, human skills matter most.',
    // bio: 'Dr. Ananya Rao is an award-winning neuroscientist whose research bridges the gap between brain science and everyday life.',
  },
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
        <button
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
        </button>

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
                </p> 
                 <p className="text-muted-foreground text-sm max-w-md mx-auto lg:mx-0">
                  {currentSpeaker.bio}
                </p> */}
                
                 {/* <a
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

                </a> */}
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
