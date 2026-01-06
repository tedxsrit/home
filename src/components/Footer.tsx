import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone } from 'lucide-react';

const footerLinks = [
  { name: 'Home', path: '/' },
  { name: 'About TEDx', path: '/about' },
  { name: 'Speakers', path: '/speakers' },
  { name: 'Partners', path: '/partners' },
  
  // { name: 'Team', path: '/team' },
  { name: 'Contact', path: '/contact' },
];

interface FooterProps {
  variant?: 'dark' | 'light';
}

const Footer = ({ variant = 'dark' }: FooterProps) => {
  const bgClass = variant === 'dark' ? 'bg-background' : 'bg-secondary';
  
  return (
    <footer className={`${bgClass} border-t border-border py-16`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-1">
              <span className="text-3xl font-black text-ted-gradient">TEDx</span>
              <span className="text-3xl font-black text-white-gradient">SRIT</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Ideas worth spreading. Join us for an inspiring journey of innovation, 
              creativity, and human connection at TEDxSRIT.
            </p>
            {/* <p className="text-primary text-sm font-medium">Human in the Loop</p> */}
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-foreground font-semibold mb-4 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-foreground font-semibold mb-4 uppercase tracking-wider text-sm">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-muted-foreground text-sm">
                <MapPin size={18} className="text-primary flex-shrink-0 mt-0.5" />
                <span>Sri Ramakrishna Institute of Technology, Coimbatore, Tamil Nadu, India</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground text-sm">
                <Mail size={18} className="text-primary flex-shrink-0" />
                <a href="mailto:tedxsrit@sritcbe.ac.in" className="hover:text-primary transition-colors">
                  tedxsrit@sritcbe.ac.in
                </a>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground text-sm">
                <Phone size={18} className="text-primary flex-shrink-0" />
                <span>+91 7298529083</span>
              </li>
            </ul>
          </div>

          {/* Map */}
          <div>
            <h4 className="text-foreground font-semibold mb-4 uppercase tracking-wider text-sm">Location</h4>
            <div className="rounded-lg overflow-hidden border border-border h-[150px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.4543652654686!2d76.9929!3d11.0168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDAxJzAwLjUiTiA3NsKwNTknMzQuNCJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="SRIT Location"
              />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm text-center md:text-left">
            © 2025 TEDxSRIT. This independent TEDx event is operated under license from TED.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
