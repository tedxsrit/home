import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import ph from '@/assets/me2u.png';
import ph1 from '@/assets/y_series.png';
import ph2 from '@/assets/RYZEORG.png';

import srit from '@/assets/SRIT-logo.png';

const hostpartners = [
  { name: 'Sri Ramakrishna Institute of Technology', logo: srit },
];

const partners = [
   
  { name: 'Me2u Designs', logo: ph },
  { name: 'RYZE', logo: ph2 },
  { name: 'Yseries', logo:ph1}
 ];

const Partners = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* HERO / HOST PARTNER */}
      <section className="pt-28 px-6 pb-20">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fadeUp">
            Our Hosting Partner
          </h1>

          <p className="text-gray-400 text-lg mb-10 max-w-3xl mx-auto animate-fadeUp delay-100">
            We offer our sincere thanks to Sri Ramakrishna Institute of Technology for being our official hosting partner.
          </p>

          {hostpartners.map((hostpartner, index) => (
            <div
              key={index}
              className="
                mx-auto
                max-w-3xl
                p-8
                flex flex-col md:flex-row items-center gap-8
                bg-neutral-900
                border border-white/10
                rounded-3xl
                transition-all duration-500
                hover:border-red-500/40
                hover:shadow-[0_0_40px_rgba(255,0,0,0.15)]
                hover:-translate-y-1
                animate-fadeUp delay-200
              "
            >
              <img
                src={hostpartner.logo}
                alt={hostpartner.name}
                className="h-[120px] object-contain"
              />

              <div className="text-center md:text-left">
                <h3 className="text-xl font-semibold mb-2">
                  Sri Ramakrishna Institute of Technology
                </h3>
                <p className="text-gray-400 text-sm">
                  Official Hosting Partner
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PARTNERS GRID */}
      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-3 animate-fadeUp">
              Our Partners
            </h2>

            <p className="text-gray-400 text-lg max-w-3xl mx-auto animate-fadeUp delay-100">
              We collaborate with forward-thinking organizations that help bring ideas worth spreading to life.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="
                  group
                  bg-neutral-900
                  border border-white/10
                  rounded-2xl
                  p-8
                  h-[200px]
                  flex flex-col items-center justify-center
                  transition-all duration-500
                  hover:border-white/30
                  hover:-translate-y-2
                  hover:shadow-[0_15px_40px_rgba(0,0,0,0.5)]
                  animate-fadeUp
                "
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="
                    h-[190px]
                    object-contain
                    grayscale
                    opacity-80
                    transition-all duration-500
                    group-hover:grayscale-0
                    group-hover:opacity-100
                    group-hover:scale-110
                  "
                />

                {/* <h3 className="mt-5 text-sm font-semibold text-gray-300 group-hover:text-white transition">
                  {partner.name}
                </h3> */}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-28 text-center px-6">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4 animate-fadeUp">
          Partner With Us
        </h2>

        <p className="text-gray-400 mb-8 max-w-xl mx-auto text-lg animate-fadeUp delay-100">
          Join TEDxSRIT as a partner and connect your brand with innovation, creativity, and meaningful conversations.
        </p>

        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSdPEwXesUAyAoxYeSaxZooOykX298rWfcOP-jQboq5MfojI-w/viewform"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="bg-red-600 hover:bg-red-700 text-white px-10 py-3 rounded-md font-semibold transition-all duration-300 animate-fadeUp delay-200">
            Partner with Us
          </Button>
        </a>
      </section>

      <Footer />

      {/* ANIMATION CSS */}
      <style>
        {`
          @keyframes fadeUp {
            from {
              opacity: 0;
              transform: translateY(25px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animate-fadeUp {
            animation: fadeUp 0.9s ease forwards;
          }

          .delay-100 { animation-delay: .1s; }
          .delay-200 { animation-delay: .2s; }
        `}
      </style>
    </div>
  );
};

export default Partners;
