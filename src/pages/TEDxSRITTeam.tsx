import React, { useState, useEffect } from "react";
import "./TEDxSRITTeam.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MorphingCard from "@/components/MorphingCard";
import { motion } from "framer-motion";

// Import your local images
import Danish from "@/assets/techTeam/danish.jpg";
import ashwin from "@/assets/techTeam/as.jpeg";
import tech_head from "@/assets/teams/Tech_Ashwin.jpg";
import Hemalnaath from "@/assets/techTeam/hemal.jpg";
import Jashwanth from "@/assets/techTeam/jashwanth.jpeg";
import Ashish from "@/assets/techTeam/ashish2.jpg";

// Hospitality
import hospitalityDhanush from "@/assets/teams/hospitality_Dhanush.jpg";
import hospitalityKarthiyayini from "@/assets/teams/hospitality_Karthiyayini.jpg";
import hospitalityVikram from "@/assets/teams/hospitality_Vikram.jpg";
import hospitalityYuvansekar from "@/assets/teams/hospitality_Yuvansekar.jpg";

// Design & PR
import designerVishnu from "@/assets/teams/designer_Vishnu.jpg";
import designerHasna from "@/assets/teams/designer_Hasna.jpg";
import designerYuvashree from "@/assets/teams/designer_Yuvashree.png";

// Sponsors
import sponsorsKavin from "@/assets/teams/sponsors_Kavin.jpg";
import sponsorsSathya from "@/assets/teams/sponsors_Sathya.jpg";
import sponsorsChitesh from "@/assets/teams/sponsers_Chitesh.jpeg";

// Speakers
import speakersSharun from "@/assets/teams/speakers_Sharun.jpg";
import speakersRoselin from "@/assets/teams/speakers_Roselin.jpeg";
import speakersSaraMariyam from "@/assets/teams/speakers_SaraMariyam.webp";
import speakersShruthiDevi from "@/assets/teams/speakers_ShruthiDevi.jpeg";

// Curation
import curationVasunthara from "@/assets/teams/curation_Vasunthara.jpg";
import curationAugustian from "@/assets/teams/curation_Augustian.jpeg";
import curationprajeesh from "@/assets/teams/curation_prajeesh.jpeg";

// Logistics
import logisticsAswin from "@/assets/teams/logistics_Aswin.jpg";
import logisticsAkshaya from "@/assets/teams/logistics_Akshaya.jpg";
import logisticsEshapriya from "@/assets/teams/logistics_Eshapriya.jpg";
import logisticsKevinJeffrey from "@/assets/teams/logistics_KevinJeffrey.jpg";
import logisticsMrigesh from "@/assets/teams/logistics_Mrigesh.png";
import logisticsSangavi from "@/assets/teams/logisticsSangavi.jpg";
import logisticsSivamanoj from "@/assets/teams/logistics_Sivamanoj.jpg";
import logisticsSreepriya from "@/assets/teams/logistics_Sreepriya.jpg";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  team: string;
  image: string;
  isHead: boolean;
  linkedin?: string;
  instagram?: string;
}

const TEDxSRITTeam: React.FC = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const getFallbackImage = (name: string): string => {
    return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=e62b1e&color=fff&bold=true&size=150`;
  };

  // Organiser Team
  const organiserTeam: TeamMember[] = [
    {
      id: 1,
      name: "Danish Veer Magotra",
      role: "Licensee and Lead Organiser",
      team: "Organiser",
      image: Danish,
      isHead: true,
      linkedin: "https://www.linkedin.com/in/danish-veer-magotra/",
      instagram: "https://www.instagram.com/magotrasaab/?hl=en",
    },
  ];

  // Tech Team
  const techTeam: TeamMember[] = [
    {
      id: 2,
      name: "Ashwin R",
      role: "Chief of Technology",
      team: "Tech Team",
      image: ashwin,
      isHead: true,
      linkedin: "https://www.linkedin.com/in/ashwin-robert05/",
      // instagram: 'https://instagram.com/example2'
    },
    {
      id: 3,
      name: "Hemalnaath G",
      role: "UI/UX Designer",
      team: "Tech Team",
      image: Hemalnaath,
      isHead: false,
      linkedin:
        "https://www.linkedin.com/in/hemalnaath-ganesan-702a90297?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      instagram:
        "https://www.instagram.com/hemalnaath10?utm_source=qr&igsh=MXhvcW9ibWU2bDhkMg==",
    },
    {
      id: 4,
      name: "Jashwanth G P",
      role: "Web Developer",
      team: "Tech Team",
      image: Jashwanth,
      isHead: false,
      linkedin: "https://www.linkedin.com/in/jashwanth-g-p-32650330b/",
      instagram: "https://www.instagram.com/_jashwanth.05_",
    },
    {
      id: 5,
      name: "Ashish M Menon",
      role: "UI Enhanser",
      team: "Tech Team",
      image: Ashish,
      isHead: false,
      linkedin: "https://www.linkedin.com/in/ashish-m-menon-4541a9333/",
    },
  ];
  // Hospitality Team
  const hospitalityTeam: TeamMember[] = [
    {
      id: 20,
      name: "Dhanush S",
      role: "Head",
      team: "Hospitality Team",
      image: hospitalityDhanush,
      isHead: true,
      linkedin:
        "https://www.linkedin.com/in/dhanush-senthilkumar-3429132b1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      instagram: "https://www.instagram.com/dhanushsenthil7765",
    },
    {
      id: 21,
      name: "Karthiyayini S",
      role: "Member",
      team: "Hospitality Team",
      image: hospitalityKarthiyayini,
      isHead: false,
      linkedin:
        "https://www.linkedin.com/in/karthiyayini-s-021a27250?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      instagram: "https://www.instagram.com/_lunaria_325",
    },
    {
      id: 22,
      name: "Vikram R",
      role: "Member",
      team: "Hospitality Team",
      image: hospitalityVikram,
      isHead: false,
      linkedin:
        "https://www.linkedin.com/in/vikram-r-78927829a?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    },
    {
      id: 23,
      name: "Yuvansekar C",
      role: "Member",
      team: "Hospitality Team",
      image: hospitalityYuvansekar,
      isHead: false,
      linkedin:
        "https://www.linkedin.com/in/yuvansekar-c?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      instagram: "https://www.instagram.com/yuvan__sekar___yt",
    },
  ];

  // Design & PR Team
  const designPrTeam: TeamMember[] = [
    {
      id: 30,
      name: "Vishnu Sathish Kumar",
      role: "Member",
      team: "Design & PR Team",
      image: designerVishnu,
      isHead: false,

      instagram:
        "https://www.instagram.com/thevishnuvr?igsh=MWxianFrOGpoaWpp&utm_source=qr",
    },
    {
      id: 31,
      name: "Hasna Behum H",
      role: "Member",
      team: "Design & PR Team",
      image: designerHasna,
      isHead: false,
      linkedin: "https://www.linkedin.com/in/hasna-behum-2b6bb7365",
      instagram: "https://www.instagram.com/_.exs.pressoo_",
    },
    {
      id: 32,
      name: "Yuvashree S N",
      role: "Member",
      team: "Design & PR Team",
      image: designerYuvashree,
      isHead: false,
      linkedin: "https://www.linkedin.com/in/yuva-shre-505127336",
      instagram: "https://www.instagram.com/you.__.va",
    },
  ];

  // Sponsors Team
  const sponsorsTeam: TeamMember[] = [
    {
      id: 40,
      name: "Kavinilavan M R",
      role: "Head",
      team: "Sponsors Team",
      image: sponsorsKavin,
      isHead: true,
      linkedin:
        "https://www.linkedin.com/in/kavinilavan-m-r-90a06b378?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      instagram:
        "https://www.instagram.com/kavinilavan_26?igsh=djVpOXhtZ2hzdG1n",
    },
    {
      id: 41,
      name: "Sathya Sharub",
      role: "Member",
      team: "Sponsors Team",
      image: sponsorsSathya,
      isHead: false,
      linkedin: "https://www.linkedin.com/in/sathya-sharub-209813290",
      instagram: "https://www.instagram.com/sathya_sharub",
    },
    {
      id: 42,
      name: "Chitesh P S",
      role: "Member",
      team: "Sponsors Team",
      image: sponsorsChitesh,
      isHead: false,
      linkedin: "https://linkedin.com/in/chiteshsoundar",
      instagram: "https://www.instagram.com/chitesh__16?igsh=bGZ1bnNod2MxeHNn",
    },
  ];

  // Speakers Team
  const speakersTeam: TeamMember[] = [
    {
      id: 50,
      name: "Sharun K",
      role: "Head",
      team: "Speakers Team",
      image: speakersSharun,
      isHead: true,
      linkedin: "https://in.linkedin.com/in/sharunkumarworks",
      instagram: "https://www.instagram.com/sharunk45",
    },
    {
      id: 51,
      name: "Roselin Blessy S",
      role: "Member",
      team: "Speakers Team",
      image: speakersRoselin,
      isHead: false,
      linkedin:
        "https://www.linkedin.com/in/roselin-blessy-s-6960783b1?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      instagram: "https://www.instagram.com/rossy_lavender",
    },
    {
      id: 52,
      name: "Sara Mariyam",
      role: "Member",
      team: "Speakers Team",
      image: speakersSaraMariyam,
      isHead: false,
      linkedin:
        "https://www.linkedin.com/in/sara-mariyam-2a304a311?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      instagram: "https://www.instagram.com/saaraa.a19",
    },
    {
      id: 53,
      name: "Shruthi Devi AK",
      role: "Member",
      team: "Speakers Team",
      image: speakersShruthiDevi,
      isHead: false,
      linkedin:
        "https://www.linkedin.com/in/shruthi-devi-681648339?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      instagram: "https://www.instagram.com/xo.Shruthideviak_",
    },
  ];

  // Curation Team
  const curationTeam: TeamMember[] = [
    {
      id: 60,
      name: "D. Augustin Anandraj",
      role: "Member",
      team: "Curation Team",
      image: curationAugustian,
      isHead: false,
      linkedin:
        "https://www.linkedin.com/in/d-augustin-anandraj-26324a228?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      instagram: "https://www.instagram.com/augus_heart_",
    },
    {
      id: 61,
      name: "Vasunthara P V",
      role: "Member",
      team: "Curation Team",
      image: curationVasunthara,
      isHead: false,
      linkedin:
        "https://www.linkedin.com/in/vasunthara-p-v-63bb5732a?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      instagram: "https://www.instagram.com/_.tharazzzz?igsh=YnU5MG5nN2JicjYw",
    },
    {
      id: 62, 
      name: "PRAJEESH S T",
      role: "Member",
      team: "Curation Team",
      image: curationprajeesh,
      isHead: false,
      linkedin: "https://www.linkedin.com/in/prajeesh-st-5608253a3?utm_source=share_via&utm_content=profile&utm_medium=member_android", 
      instagram: "https://www.instagram.com/_prajeesh_2007?utm_source=qr&igsh=MWFqODRsdHNmZG00eQ==",
    },
  ];

  // Logistics Team
  const logisticsTeam: TeamMember[] = [
    {
      id: 70,
      name: "Aswin P",
      role: "Head",
      team: "Logistics Team",
      image: logisticsAswin,
      isHead: true,
      linkedin:
        "https://www.linkedin.com/in/aswin-p-194b97250?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      instagram:
        "https://www.instagram.com/aswin_prabakaran_?utm_source=qr&igsh=M2lmajFsNzFraWFq",
    },
    {
      id: 71,
      name: "Akshaya V",
      role: "Member",
      team: "Logistics Team",
      image: logisticsAkshaya,
      isHead: false,
      linkedin:
        "https://www.linkedin.com/in/akshaya-v-0754a932a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      instagram:
        "https://www.instagram.com/_a_x_sh_u?igsh=MXZzODFjYjU1cjl5OA==",
    },
    {
      id: 72,
      name: "A. Eshapriya",
      role: "Member",
      team: "Logistics Team",
      image: logisticsEshapriya,
      isHead: false,
      linkedin:
        "https://www.linkedin.com/in/eshapriya-a-092784398?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      instagram: "https://www.instagram.com/eshapriya__120",
    },
    {
      id: 73,
      name: "Kevin Jeffrey",
      role: "Member",
      team: "Logistics Team",
      image: logisticsKevinJeffrey,
      isHead: false,
      linkedin:
        "https://www.linkedin.com/in/kevin-jeffrey-02564b315?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      instagram: "https://www.instagram.com/kev_jeff_07",
    },
    {
      id: 74,
      name: "Mirjesh A",
      role: "Member",
      team: "Logistics Team",
      image: logisticsMrigesh,
      isHead: false,
      linkedin:
        "https://www.linkedin.com/in/mirjesh-a-a2a92532a?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      instagram: "https://www.instagram.com/momz_little_kid_",
    },
    {
      id: 75,
      name: "Sangavi",
      role: "Member",
      team: "Logistics Team",
      image: logisticsSangavi,
      isHead: false,
    },
    {
      id: 76,
      name: "Sivamanoj S",
      role: "Member",
      team: "Logistics Team",
      image: logisticsSivamanoj,
      isHead: false,
      linkedin:
        "https://www.linkedin.com/in/sivamanoj-s-066782337?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      instagram: "https://www.instagram.com/ss_manoj_07?igsh=d3N1ZmU3aTM4bmc1",
    },
    {
      id: 77,
      name: "Sree Priyan",
      role: "Member",
      team: "Logistics Team",
      image: logisticsSreepriya,
      isHead: false,
    },
  ];

  // Handle social link clicks
  const handleSocialClick = (url: string | undefined, e: React.MouseEvent) => {
    if (!url || url === "#") {
      e.preventDefault();
      alert("Social link not available");
    }
  };

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  };

  const renderTeamSection = (
    title: string,
    description: string,
    team: TeamMember[],
    teamNumber: string,
  ) => {
    const heads = team.filter((member) => member.isHead);
    const members = team.filter((member) => !member.isHead);

    return (
      <section className="team-section tech-section">
        <div className="section-header">
          <div className="section-title-wrapper">
            {teamNumber && (
              <span className="section-title-number">{teamNumber}</span>
            )}
            <h2 className="section-title">{title}</h2>
          </div>
          {description && <p className="section-description">{description}</p>}
        </div>

        {/* Heads */}
        {heads.length > 0 && (
          <motion.div
            className="team-heads-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {heads.map((head) => (
              <motion.div
                key={head.id}
                className="team-card-wrapper"
                variants={cardVariants}
              >
                <MorphingCard
                  image={head.image}
                  name={head.name}
                  role={head.role}
                  linkedin={head.linkedin}
                  instagram={head.instagram}
                  onSocialClick={handleSocialClick}
                />
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Members */}
        {members.length > 0 && (
          <div className="team-members-section">
            {heads.length > 0 && (
              <h3 className="team-members-title">Team Members</h3>
            )}
            <motion.div
              className="team-members-grid"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              {members.map((member) => (
                <motion.div
                  key={member.id}
                  className="team-card-wrapper"
                  variants={cardVariants}
                >
                  <MorphingCard
                    image={member.image}
                    name={member.name}
                    role={member.role}
                    linkedin={member.linkedin}
                    instagram={member.instagram}
                    onSocialClick={handleSocialClick}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        )}
      </section>
    );
  };

  return (
    <div className="tedx-container">
      {/* Background Elements */}
      <div className="bg-grid"></div>
      <div className="bg-circles"></div>

      {/* Floating Particles */}
      <div className="particles">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              background:
                i % 3 === 0 ? "#e62b1e" : i % 3 === 1 ? "#ff4444" : "#ff6666",
            }}
          ></div>
        ))}
      </div>

      {/* Fixed Navbar */}
      <div className="tedx-navbar-fixed">
        <Navbar />
      </div>

      <header className="tedx-header">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="tedx-tagline">Meet Our TEDx Team</div>
          <div className="tedx-header-line"></div>
        </motion.div>
      </header>

      <main className="tedx-main">
        {/* Organiser Section */}
        <section className="team-section">
          <div className="section-header">
            <div className="section-title-wrapper">
              <h2 className="section-title">ORGANISER</h2>
            </div>
          </div>

          <motion.div
            className="team-heads-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {organiserTeam.map((member) => (
              <motion.div
                key={member.id}
                className="team-card-wrapper"
                variants={cardVariants}
              >
                <MorphingCard
                  image={member.image}
                  name={member.name}
                  role={member.role}
                  linkedin={member.linkedin}
                  instagram={member.instagram}
                  onSocialClick={handleSocialClick}
                />
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Tech Team Section */}
        {renderTeamSection(
          "TECH TEAM",
          "Building the digital experience behind TEDxSRIT",
          techTeam,
          "",
        )}

        {/* Design & PR Team */}
        {renderTeamSection(
          "DESIGNERS & PR TEAM",
          "Crafting the visual identity and managing public presence",
          designPrTeam,
          "02",
        )}

        {/* Sponsors Team */}
        {renderTeamSection(
          "SPONSORS TEAM",
          "Building partnerships and managing sponsor relations",
          sponsorsTeam,
          "03",
        )}

        {/* Speakers Team */}
        {renderTeamSection(
          "SPEAKERS TEAM",
          "Coordinating with speakers and shaping the event lineup",
          speakersTeam,
          "04",
        )}

        {/* Curation Team */}
        {renderTeamSection(
          "CURATION TEAM",
          "Designing themes and curating meaningful ideas worth spreading",
          curationTeam,
          "05",
        )}

        {/* Logistics Team */}
        {renderTeamSection(
          "LOGISTICS TEAM",
          "Managing operations, coordination, and on-ground execution",
          logisticsTeam,
          "06",
        )}

        {/* Hospitality Team */}
        {renderTeamSection(
          "HOSPITALITY TEAM",
          "Ensuring guest comfort and seamless event experience",
          hospitalityTeam,
          "07",
        )}
      </main>

      {/* Footer Section */}
      <div className="footer-wrapper">
        <Footer />
      </div>
    </div>
  );
};

export default TEDxSRITTeam;
