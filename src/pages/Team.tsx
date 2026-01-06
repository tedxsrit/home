import { Linkedin, Mail } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionTitle from '@/components/SectionTitle';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  linkedin?: string;
  email?: string;
}

interface TeamSection {
  title: string;
  members: TeamMember[];
}

const teamData: TeamSection[] = [
  {
    title: 'Organizing Committee',
    members: [
      { name: 'John Doe', role: 'Organizer', image: 'https://via.placeholder.com/200x200?text=John', linkedin: '#', email: 'john@srit.edu.in' },
      { name: 'Jane Smith', role: 'Co-Organizer', image: 'https://via.placeholder.com/200x200?text=Jane', linkedin: '#', email: 'jane@srit.edu.in' },
      { name: 'Robert Wilson', role: 'Licensee', image: 'https://via.placeholder.com/200x200?text=Robert', linkedin: '#', email: 'robert@srit.edu.in' },
    ],
  },
  {
    title: 'Curation Team',
    members: [
      { name: 'Emily Brown', role: 'Lead Curator', image: 'https://via.placeholder.com/200x200?text=Emily', linkedin: '#', email: 'emily@srit.edu.in' },
      { name: 'Michael Chen', role: 'Content Curator', image: 'https://via.placeholder.com/200x200?text=Michael', linkedin: '#', email: 'michael@srit.edu.in' },
      { name: 'Sarah Davis', role: 'Speaker Coordinator', image: 'https://via.placeholder.com/200x200?text=Sarah', linkedin: '#', email: 'sarah@srit.edu.in' },
    ],
  },
  {
    title: 'Design & Media Team',
    members: [
      { name: 'Alex Johnson', role: 'Design Lead', image: 'https://via.placeholder.com/200x200?text=Alex', linkedin: '#', email: 'alex@srit.edu.in' },
      { name: 'Lisa Wang', role: 'Graphic Designer', image: 'https://via.placeholder.com/200x200?text=Lisa', linkedin: '#', email: 'lisa@srit.edu.in' },
      { name: 'David Kim', role: 'Video Producer', image: 'https://via.placeholder.com/200x200?text=David', linkedin: '#', email: 'david@srit.edu.in' },
      { name: 'Nina Patel', role: 'Photographer', image: 'https://via.placeholder.com/200x200?text=Nina', linkedin: '#', email: 'nina@srit.edu.in' },
    ],
  },
  {
    title: 'Marketing & PR Team',
    members: [
      { name: 'Chris Anderson', role: 'Marketing Lead', image: 'https://via.placeholder.com/200x200?text=Chris', linkedin: '#', email: 'chris@srit.edu.in' },
      { name: 'Amy Thompson', role: 'Social Media Manager', image: 'https://via.placeholder.com/200x200?text=Amy', linkedin: '#', email: 'amy@srit.edu.in' },
      { name: 'Ryan Martinez', role: 'PR Coordinator', image: 'https://via.placeholder.com/200x200?text=Ryan', linkedin: '#', email: 'ryan@srit.edu.in' },
    ],
  },
  {
    title: 'Technical Team',
    members: [
      { name: 'James Lee', role: 'Tech Lead', image: 'https://via.placeholder.com/200x200?text=James', linkedin: '#', email: 'james@srit.edu.in' },
      { name: 'Olivia Moore', role: 'Web Developer', image: 'https://via.placeholder.com/200x200?text=Olivia', linkedin: '#', email: 'olivia@srit.edu.in' },
      { name: 'William Taylor', role: 'AV Specialist', image: 'https://via.placeholder.com/200x200?text=William', linkedin: '#', email: 'william@srit.edu.in' },
    ],
  },
  {
    title: 'Logistics Team',
    members: [
      { name: 'Sophia Garcia', role: 'Logistics Head', image: 'https://via.placeholder.com/200x200?text=Sophia', linkedin: '#', email: 'sophia@srit.edu.in' },
      { name: 'Daniel Harris', role: 'Venue Coordinator', image: 'https://via.placeholder.com/200x200?text=Daniel', linkedin: '#', email: 'daniel@srit.edu.in' },
      { name: 'Mia Robinson', role: 'Volunteer Coordinator', image: 'https://via.placeholder.com/200x200?text=Mia', linkedin: '#', email: 'mia@srit.edu.in' },
    ],
  },
];

const TeamMemberCard = ({ member }: { member: TeamMember }) => (
  <div className="group text-center">
    {/* Image */}
    <div className="relative w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden border-2 border-border group-hover:border-primary transition-colors duration-300">
      <img
        src={member.image}
        alt={member.name}
        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
      />
    </div>
    
    {/* Info */}
    <h3 className="text-lg font-semibold text-foreground mb-1">{member.name}</h3>
    <p className="text-sm text-primary mb-3">{member.role}</p>
    
    {/* Social Links */}
    <div className="flex items-center justify-center gap-3">
      {member.linkedin && (
        <a 
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="w-8 h-8 rounded-full bg-foreground/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
        >
          <Linkedin size={16} className="text-foreground/70 hover:text-primary" />
        </a>
      )}
      {member.email && (
        <a 
          href={`mailto:${member.email}`}
          className="w-8 h-8 rounded-full bg-foreground/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
        >
          <Mail size={16} className="text-foreground/70 hover:text-primary" />
        </a>
      )}
    </div>
  </div>
);

const Team = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
          Our Team
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-slide-up">
          Meet the passionate individuals who make TEDxSRIT possible
        </p>
      </section>

      {/* Team Sections */}
      {teamData.map((section, sectionIndex) => (
        <section 
          key={section.title}
          className={`py-16 px-4 ${sectionIndex % 2 === 1 ? 'bg-secondary/20' : ''}`}
        >
          <div className="container mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-12">
              {section.title}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12 justify-items-center">
              {section.members.map((member) => (
                <TeamMemberCard key={member.name} member={member} />
              ))}
            </div>
          </div>
        </section>
      ))}

      <Footer />
    </div>
  );
};

export default Team;
