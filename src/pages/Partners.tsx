import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import ph from '@/assets/me2u.png';

const partners = [
  { name: 'Me2u Designs', logo: ph },
  
];

const Partners = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 text-center px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Our Partners
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          We collaborate with forward-thinking organizations that help bring
          ideas worth spreading to life.
        </p>
      </section>

      {/* Sponsors Grid */}
      <section className="pb-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 place-items-center">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="
              py-10 px-10 mb-16
                w-full
max-w-[700px]
h-[200PX]
min-h-[100px]
                flex items-center justify-center
                bg-neutral-900
                rounded-2xl
                border border-white/10
                hover:border-white/30
                transition-all duration-300
                grayscale hover:grayscale-0
              "
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="
                 w-full
max-w-[700px]
h-[150px]
min-h-[100px]
                  object-contain
                  opacity-80
                  hover:opacity-100
                  transition-opacity
                "
              />
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="pb-24 text-center px-4">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Partner With Us
        </h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto text-lg">
          Join TEDxSRIT as a partner and connect your brand with innovation,
          creativity, and meaningful conversations.
        </p>

        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSdPEwXesUAyAoxYeSaxZooOykX298rWfcOP-jQboq5MfojI-w/viewform"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            className="
              bg-red-600
              hover:bg-red-700
              text-white
              px-10
              py-3
              rounded-md
              font-semibold
              transition-all
              duration-300
            "
          >
            Partner with Us
          </Button>
        </a>
      </section>

      <Footer />
    </div>
  );
};

export default Partners;
