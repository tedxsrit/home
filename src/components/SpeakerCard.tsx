import { Link } from 'react-router-dom';

interface SpeakerCardProps {
  id: number;
  name: string;
  role: string;
  image: string;
}

const SpeakerCard = ({ id, name, role, image }: SpeakerCardProps) => {
  return (
    <Link 
      to="/speakers" 
      className="group flex-shrink-0 w-[280px] md:w-[320px]"
    >
      <div className="relative overflow-hidden rounded-xl border border-border bg-card transition-all duration-500 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
        {/* Image Container */}
        <div className="relative aspect-[3/4] overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover grayscale-hover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
        </div>
        
        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
            {name}
          </h3>
          <p className="text-muted-foreground text-sm">{role}</p>
        </div>
      </div>
    </Link>
  );
};

export default SpeakerCard;
