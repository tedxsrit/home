// // About Page - Empty file for manual integration
// // You can add your About page content here

// import Navbar from '@/components/Navbar';
// import Footer from '@/components/Footer';

// const About = () => {
//   return (
//     <div className="min-h-screen bg-background">
//       <Navbar />
      
//       {/* Add your About page content here */}
//       <section className="min-h-screen flex items-center justify-center pt-20">
//         <div className="container mx-auto px-4 text-center">
//           <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
//             About TEDxSRIT
//           </h1>
//           <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
//             This page is ready for your custom content. 
//             You can integrate your existing About page TSX content here.
//           </p>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default About;
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TransitionPanel from "../components/ui/TransitionPanel";
import speakerStage from "@/assets/speaker-stage.jpg";
import audience from "@/assets/audience.jpg";
import teamCollab from "@/assets/team-collab.jpg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
    <Navbar />
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-6 space-y-24 lg:space-y-40">
        {/* About TED Section */}
        <TransitionPanel
          videoId="JSP7GPU3Eic"
         /* subtitle="Our Foundation" */
          title="About TED"
          description="TED, a nonprofit dedicated to Ideas Worth Spreading, originated as a four-day California conference 30 years ago and has since evolved into a global force for inspiration. Anchored by two annual conferences, TED invites the world's foremost thinkers and doers to share groundbreaking insights in subsequent 18-minute talks."
          imagePosition="left"
          delay={0}
        >
          <p className="text-muted-foreground text-base leading-relaxed">
            These talks, featuring luminaries like Bill Gates, Jane Goodall, Elizabeth Gilbert, 
            Sir Richard Branson, and many more, are freely accessible on TED.com. The flagship 
            TED Conference occurs annually in Vancouver, British Columbia.
          </p>
        </TransitionPanel>

        {/* About TEDxSRIT Section */}
        <TransitionPanel
          image={audience}
          /*subtitle="Our Story"*/
          title="About TEDxSRIT"
          description="TEDxSRIT brings the spirit of TED to our campus, creating a platform for local voices and global ideas. We curate thought-provoking talks and performances that challenge perspectives and ignite conversations within our community."
          imagePosition="right"
          delay={0}
        >
          <div className="flex flex-wrap gap-4 mt-6">
            {["Innovation", "Inspiration", "Connection"].map((tag, index) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-primary text-sm font-medium"
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </TransitionPanel>

        {/* Our Vision Section */}
        <TransitionPanel
          image={teamCollab}
          /*subtitle="Our Mission"*/
          title="Ideas Worth Spreading"
          description="We believe in the power of ideas to change attitudes, lives, and ultimately, the world. TEDxSRIT is committed to fostering a community where curiosity is celebrated, diverse perspectives are welcomed, and transformative ideas find their audience."
          imagePosition="left"
          delay={0}
        >
          <motion.button
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
           
          </motion.button>
        </TransitionPanel>
      </div>
         
    </section>
    <Footer />
    </div>

  );
};

export default About;
