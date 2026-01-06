import { motion } from "framer-motion";
import { ReactNode, useState, useRef, useEffect } from "react";

interface TransitionPanelProps {
  image?: string;
  videoId?: string;
  title: string;
  subtitle?: string;
  description: string;
  imagePosition?: "left" | "right";
  delay?: number;
  children?: ReactNode;
}

const TransitionPanel = ({
  image,
  videoId,
  title,
  subtitle,
  description,
  imagePosition = "left",
  delay = 0,
  children,
}: TransitionPanelProps) => {
  const isImageLeft = imagePosition === "left";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay }}
      className="w-full"
    >
      <div
        className={`flex flex-col ${
          isImageLeft ? "lg:flex-row" : "lg:flex-row-reverse"
        } gap-8 lg:gap-16 items-center`}
      >
        {/* Image/Video Panel */}
        <motion.div
          initial={{ opacity: 0, x: isImageLeft ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: delay + 0.1, ease: "easeOut" }}
          className="w-full lg:w-1/2"
        >
          <div className="panel-card group relative overflow-hidden">
            {videoId ? (
              <YouTubeVideoEmbed videoId={videoId} title={title} />
            ) : image ? (
              <>
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent z-10 opacity-60" />
                <img
                  src={image}
                  alt={title}
                  className="w-full h-[300px] lg:h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-ted-red-glow to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </>
            ) : null}
          </div>
        </motion.div>

        {/* Content Panel */}
        <motion.div
          initial={{ opacity: 0, x: isImageLeft ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: delay + 0.2, ease: "easeOut" }}
          className="w-full lg:w-1/2 space-y-6"
        >
          {subtitle && (
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: delay + 0.3 }}
              className="text-primary font-semibold text-sm uppercase tracking-widest"
            >
              {subtitle}
            </motion.span>
          )}
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: delay + 0.4 }}
            className="text-3xl lg:text-4xl font-bold text-foreground leading-tight"
          >
            {title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: delay + 0.5 }}
            className="text-muted-foreground text-lg leading-relaxed"
          >
            {description}
          </motion.p>
          {children && (
            <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: delay + 0.6 }}
            >
              {children}
            </motion.div>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

// YouTube Video Component with lazy loading and thumbnail preview
const YouTubeVideoEmbed = ({ videoId, title }: { videoId: string; title: string }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  useEffect(() => {
    // Load video when it comes into view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !shouldLoad) {
            setShouldLoad(true);
          }
        });
      },
      { rootMargin: '100px' }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [shouldLoad]);

  const handleThumbnailClick = () => {
    setIsLoaded(true);
  };

  return (
    <div ref={containerRef} className="relative w-full h-[300px] lg:h-[400px] bg-black">
      {!isLoaded ? (
        <div 
          className="relative w-full h-full cursor-pointer group/thumb"
          onClick={handleThumbnailClick}
        >
          <img
            src={thumbnailUrl}
            alt={title}
            className="w-full h-full object-cover"
            loading="lazy"
            onError={(e) => {
              // Fallback to lower quality thumbnail if maxresdefault fails
              (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
            }}
          />
          {/* Play button overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover/thumb:bg-black/30 transition-colors">
            <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center group-hover/thumb:bg-primary group-hover/thumb:scale-110 transition-all">
              <svg
                className="w-8 h-8 text-white ml-1"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-ted-red-glow to-primary opacity-0 group-hover/thumb:opacity-100 transition-opacity duration-500" />
        </div>
      ) : (
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
          style={{ border: 'none' }}
        />
      )}
      {shouldLoad && !isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
      )}
    </div>
  );
};

export default TransitionPanel;
