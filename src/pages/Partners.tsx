import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import ph from '@/assets/me2u.png';
import srit from '@/assets/SRIT-logo.png';

const hostpartners = [
  { name: 'SRIT', logo: srit },
];

const partners = [
  { name: 'Me2u Designs', logo: ph },
];

const Partners = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* MAIN SPLIT SECTION */}
      <section className="pt-28 px-6 h-[calc(100vh-80px)]">
        <div className="max-w-7xl mx-auto h-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT — HOSTING PARTNER */}
          <div>
            <h1 className="text-5xl md:text-3xl font-bold mb-2 text-center lg:text-left">
              Our Hosting Partner
            </h1>
            <p className="text-gray-400 text-lg mb-6 text-center lg:text-left">
              We offer our sincere thanks to Sri Ramakrishna Institute of Technology for being our hosting partner
            </p>

            <div className="grid place-items-center lg:place-items-start">
              {hostpartners.map((hostpartner, index) => (
                <div
                  key={index}
                  className="
                    py-10 px-10
                    w-full
                    max-w-[700px]
                    h-[200px]
                    min-h-[100px]
                    flex items-center gap-10
                    bg-neutral-900
                    rounded-2xl
                    border border-white/10
                    transition-all duration-300
                  "
                >
                  <img
                    src={hostpartner.logo}
                    alt={hostpartner.name}
                    className="
                      h-[120px]
                      w-auto
                      object-contain
                      flex-shrink-0
                    "
                  />

                  <div className="text-left">
                    <h3 className="text-xl font-semibold text-white mb-1">
                      Sri Ramakrishna Institute of Technology
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Official Hosting Partner
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — PARTNERS */}
          <div>
            <h1 className="text-5xl md:text-3xl font-bold mb-2 text-center lg:text-left">
              Our Partners
            </h1>
            <p className="text-gray-400 text-lg mb-6 text-center lg:text-left">
              We collaborate with forward-thinking organizations that help bring ideas worth spreading to life.
            </p>

            <div className="grid place-items-center lg:place-items-start">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="
                    py-10 px-10
                    w-full
                    max-w-[700px]
                    h-[200px]
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
          </div>

        </div>
      </section>

      {/* CTA SECTION — UNCHANGED */}
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
