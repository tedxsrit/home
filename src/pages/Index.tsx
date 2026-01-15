import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Users, Mic, Handshake } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionTitle from '@/components/SectionTitle';
import SpeakerCard from '@/components/SpeakerCard';
import Button from '@/components/Button';
import heroBg from '@/assets/bg.png';
import speaker1 from '@/assets/sp_d.png';
import speaker2 from '@/assets/sp_d.png';
import speaker3 from '@/assets/sp_d.png';
import speaker4 from '@/assets/sp_d.png';
import TextType from './TypeText';
import CountdownTimer from '@/components/CountdownTimer';


const speakers = [
  { id: 1, name: 'Coming soon', /*role: 'Block Chain'*/ image: speaker1 },
  { id: 2, name: 'Coming soon', /*role: 'Tech Entrepreneur'*/ image: speaker2 },
  { id: 3, name: 'Coming soon', /*role: 'Innovation Expert'*/ image: speaker3 },
  { id: 4, name: 'Coming soon', /*role: 'Neuroscientist'*/image: speaker4 },
];

// const sponsors = [
//   { name: 'TechCorp', logo: 'https://via.placeholder.com/150x60?text=TechCorp' },
//   { name: 'InnovateLabs', logo: 'https://via.placeholder.com/150x60?text=InnovateLabs' },
//   { name: 'FutureWorks', logo: 'https://via.placeholder.com/150x60?text=FutureWorks' },
//   { name: 'CloudSync', logo: 'https://via.placeholder.com/150x60?text=CloudSync' },
//   { name: 'DataDrive', logo: 'https://via.placeholder.com/150x60?text=DataDrive' },
// ];

const ctaCards = [
  {
    icon: Users,
    title: 'Become a Volunteer',
    description: 'Join our team and be part of an extraordinary event. Help us create memorable experiences and connect with like-minded individuals.',
    button: 'Become a Volunteer',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSdEnfKZNkoNAdxOD0asmmHuKki6JrUHVgcaQj0eMCKdFZxhkw/viewform',
  },
  {
    icon: Mic,
    title: 'Become a Speaker',
    description: 'Share your ideas with the world. If you have an idea worth spreading, we want to hear from you. Apply to speak at TEDxSRIT.',
    button: 'Become a Speaker',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSdPEwXesUAyAoxYeSaxZooOykX298rWfcOP-jQboq5MfojI-w/viewform',
  },
  {
    icon: Handshake,
    title: 'Become a Sponsor',
    description: 'Partner with us and get visibility for your brand in our community. Support innovation and ideas that shape the future.',
    button: 'Become a Sponsor',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSccWclNxHoeyn0db1pFIHPXumKBawP32GWDc2FVJmeyK7ZmYQ/viewform',
  },
];

const Index = () => {
  const speakerScrollRef = useRef<HTMLDivElement>(null);

  const scrollSpeakers = (direction: 'left' | 'right') => {
    if (speakerScrollRef.current) {
      const scrollAmount = direction === 'left' ? -350 : 350;
      speakerScrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroBg}
            alt="TEDx Stage"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/1000 via-background/70 to-background" />
        </div>

        {/* Glow Effect */}
        <div
          className="absolute w-[800px] h-[400px] opacity-30 blur-[100px] z-0"
          style={{
            background: 'radial-gradient(circle at center, hsla(348, 100%, 45%, 0.4), transparent 60%)',
          }}
        />

        {/* Content */}
        <div className="relative z-10 text-center px-4">
          <div className="flex items-center justify-center gap-2 mb-12 animate-fade-in">
            <span className="text-6xl md:text-8xl lg:text-9xl font-black text-ted-gradient">TEDx</span>

            <span className="text-6xl md:text-8xl lg:text-9xl font-black text-white-gradient">SRIT</span>
          </div>

          <p
            className="text-2xl md:text-4xl font-light text-muted-foreground mb-2 animate-slide-up"
            style={{ animationDelay: '0.3s' }}
          >
            <CountdownTimer />
          </p>
       

          

          <p
            className="text-lg md:text-xl text-primary font-medium tracking-widest  animate-slide-up"
            style={{ animationDelay: '0.5s' }}
          >
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed animate-slide-up p-5">


              <p>Register below to participate.</p>

            </div>



            {/* <TextType 
  text={[ "Register soon to participate in the event" ]}
  typingSpeed={100}
  pauseDuration={1500}
  showCursor={true}
  cursorCharacter="|"
/>
<br/> */}
            <Button className='m-5'>
              <a
                href="https://forms.gle/Sde3tefYcGhv8p5i7"
                target="_blank"
                rel="noopener noreferrer"
                className="px-2"
              >
                Register Now
              </a>
            </Button>
          </p>
          {/* <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="mt-4 px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors duration-300"
                    >
                       <a
                             href="https://forms.gle/Sde3tefYcGhv8p5i7"
                             target="_blank"
                             rel="noopener noreferrer"
                              className="px-4"
                          >
                             Register Now
                          </a>
                     
                    </motion.button> */}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-0 left-[50%]-translate-x-1/2 animate-bounce">
          <div className="flex items-start justify-center p-0">
            <svg
              width="150"
              height="150"
              viewBox="0 0 24 48"
              fill="none"
            >
              <defs>
                <linearGradient id="arrowGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#ef4444" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#b91c1c" stopOpacity="0.9" />
                </linearGradient>
              </defs>

              <path
                d="M6 10l6 6 6-6"
                stroke="url(#arrowGradient)"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity="0.3"
              />

              <path
                d="M6 18l6 6 6-6"
                stroke="url(#arrowGradient)"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity="0.6"
              />

              <path
                d="M6 26l6 6 6-6"
                stroke="url(#arrowGradient)"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            
          </div>

        </div>

      </section>

      {/* About TEDx Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <SectionTitle
            title="About TEDx"
            subtitle="Ideas worth spreading"
          />
          <div className="space-y-6 text-muted-foreground text-lg leading-relaxed animate-slide-up">
            <p>
              In the spirit of ideas worth spreading, TED has created a program called TEDx.
              TEDx is a program of local, self-organized events that bring people together to share a TED-like experience.
            </p>
            <p>
              At a TEDx event, TED Talks video and live speakers combine to spark deep discussion and connection.
              These local, self-organized events are branded TEDx, where x = independently organized TED event.
            </p>
            <p>
              The TED Conference provides general guidance for the TEDx program, but individual TEDx events
              are self-organized, subject to certain rules and regulations.
            </p>
          </div>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-center">
            <Link to="/about" className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Know More
              </Button>
            </Link>

            <a
              href="https://forms.gle/Sde3tefYcGhv8p5i7"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button variant="outline" size="lg" className="w-full sm:w-auto ">
                Register
              </Button>
            </a>
          </div>

        </div>
      </section>

      {/* Speakers Section */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Our Speakers"
            subtitle="Meet the brilliant minds sharing their ideas"
          />

          <div className="relative ">
            {/* Navigation Buttons */}
            <button
              onClick={() => scrollSpeakers('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-primary/20 transition-colors -translate-x-6 hidden md:flex"
            >
              <ChevronLeft className="text-foreground" />
            </button>
            <button
              onClick={() => scrollSpeakers('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-primary/20 transition-colors translate-x-6 hidden md:flex"
            >
              <ChevronRight className="text-foreground" />
            </button>

            {/* Speaker Cards */}
            <div
              ref={speakerScrollRef}
              className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide px-4"
              style={{ scrollSnapType: 'x mandatory' }}
            >
              {speakers.map((speaker) => (
                <SpeakerCard key={speaker.id} {...speaker} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      {/* <section className="py-24 px-4">
        <div className="container mx-auto text-center">
          <SectionTitle 
            title="Our Partners"
            subtitle="Thank you to our amazing sponsors"
          />
          
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 mb-12">
            {sponsors.map((sponsor) => (
              <div 
                key={sponsor.name}
                className="glass-card p-6 hover:border-primary/50 transition-all duration-300 grayscale hover:grayscale-0"
              >
                <img 
                  src={sponsor.logo} 
                  alt={sponsor.name}
                  className="h-12 md:h-16 object-contain opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
          
          <Link to="/partners">
            <Button variant="outline" size="lg">
              Explore Our Partners
            </Button>
          </Link>
        </div>
      </section> */}

      {/* CTA Cards Section */}
      {/* CTA Cards Section */}
      <section className="py-24 bg-secondary/30 px-4">
        <div className="container mx-auto">
          <SectionTitle
            title="Get Involved"
            subtitle="Be part of the TEDxSRIT experience"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ctaCards.map((card, index) => (
              <div
                key={card.title}
                className="glass-card p-8 text-center group hover:border-primary/50 transition-all duration-500 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                  <card.icon className="w-8 h-8 text-primary" />
                </div>

                <h3 className="text-xl font-bold text-foreground mb-4">
                  {card.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {card.description}
                </p>

                {/* Button Link Logic */}
                {card.link.startsWith('http') ? (
                  <a
                    href={card.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="primary" size="sm">
                      {card.button}
                    </Button>
                  </a>
                ) : (
                  <Link to={card.link}>
                    <Button variant="primary" size="sm">
                      {card.button}
                    </Button>
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>


      <Footer />
    </div>
  );
};

export default Index;
