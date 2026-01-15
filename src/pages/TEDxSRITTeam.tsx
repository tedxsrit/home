import React, { useState } from 'react';
import './TEDxSRITTeam.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Import your local images
import Danish from '@/assets/techTeam/danish.jpg';

import ashwin from '@/assets/techTeam/as.jpeg';
import Hemalnaath from '@/assets/techTeam/hemal.jpg';
import Jashwanth from '@/assets/techTeam/jash.jpg';
import rohanMehta from '@/assets/techTeam/danish.jpg';

import meerajJoshi from '@/assets/techTeam/danish.jpg';
import sanjayGupta from '@/assets/techTeam/danish.jpg';
import lakshmiMenon from '@/assets/techTeam/danish.jpg';
import deepakPillai from '@/assets/techTeam/danish.jpg';
import poojaSaxena from '@/assets/techTeam/danish.jpg';
import nikhilVerma from '@/assets/techTeam/danish.jpg';
import anjaliDesai from '@/assets/techTeam/danish.jpg';
import sureshBhat from '@/assets/techTeam/danish.jpg';
import kavithaRani from'@/assets/techTeam/danish.jpg';
import manojTiwari from '@/assets/techTeam/danish.jpg';

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
  const [activeTeam, setActiveTeam] = useState<string>('all');
  
  const teamMembers: TeamMember[] = [
    // Organiser Team
    { id: 1, name: 'Danish Veera Malgothra', role: 'Licensee and Lead Organiser', team: 'organiser', image: Danish, isHead: true },
    
    // Tech Team
    { id: 6, name: 'Ashwin R', role: 'Chief of Technology', team: 'tech', image: ashwin, isHead: true },
    { id: 7, name: 'Hemalnaath G', role: 'UI/UX Designer', team: 'tech', image: Hemalnaath, isHead: false },
    { id: 8, name: 'Jashwanth G P', role: 'Web Developer', team: 'tech', image: Jashwanth, isHead: false },
    { id: 9, name: 'Ashish M Manon', role: 'Web Developer', team: 'tech', image: rohanMehta, isHead: false },
   
    
    // // Hospitality Team
    // { id: 11, name: 'Meeraj Joshi', role: 'Hospitality Head', team: 'hospitality', image: meerajJoshi, isHead: true },
    // { id: 12, name: 'Sanjay Gupta', role: 'Guest Relations', team: 'hospitality', image: sanjayGupta, isHead: false },
    // { id: 13, name: 'Lakshmi Menon', role: 'Catering Lead', team: 'hospitality', image: lakshmiMenon, isHead: false },
    // { id: 14, name: 'Deepak Pillai', role: 'Venue Coordinator', team: 'hospitality', image: deepakPillai, isHead: false },
    // { id: 15, name: 'Pooja Saxena', role: 'Accommodation Lead', team: 'hospitality', image: poojaSaxena, isHead: false },
    
    // // Sponsorship Team
    // { id: 16, name: 'Nikhil Verma', role: 'Sponsorship Lead', team: 'sponsorship', image: nikhilVerma, isHead: true },
    // { id: 17, name: 'Anjali Desai', role: 'Corporate Relations', team: 'sponsorship', image: anjaliDesai, isHead: false },
    // { id: 18, name: 'Suresh Bhat', role: 'Partnership Manager', team: 'sponsorship', image: sureshBhat, isHead: false },
    // { id: 19, name: 'Kavitha Rani', role: 'Brand Coordinator', team: 'sponsorship', image: kavithaRani, isHead: false },
    // { id: 20, name: 'Manoj Tiwari', role: 'Outreach Manager', team: 'sponsorship', image: manojTiwari, isHead: false },
  ];

  const teams = [
    { id: 'all', name: 'Crew Heads', color: '#e62b1e' },
    { id: 'organiser', name: 'Organiser', color: '#e62b1e'},
    { id: 'tech', name: 'Tech Team', color: '#e62b1e' },
    // { id: 'hospitality', name: 'Hospitality Team', color: '#e62b1e' },
    // { id: 'sponsorship', name: 'Sponsorship Team', color: '#e62b1e' },
  ];

  const getTeamHeads = (teamId: string): TeamMember[] => {
    if (teamId === 'all') {
      return teamMembers.filter(member => member.isHead);
    }
    return teamMembers.filter(member => member.team === teamId && member.isHead);
  };

  const getTeamMembers = (teamId: string): TeamMember[] => {
    // if (teamId === 'all') {
    //   return teamMembers.filter(member => !member.isHead);
    // }
    return teamMembers.filter(member => member.team === teamId && !member.isHead);
  };

  // Fallback image in case local image fails to load
  const getFallbackImage = (name: string): string => {
    return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=e62b1e&color=fff&bold=true&size=150`;
  };

  return (
    <div className="tedx-container">
      {/* Background Elements */}
      <div className="bg-grid"></div>
      <div className="bg-circles"></div>
     
      
      {/* Floating Particles */}
      <div className="particles">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="particle" style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            background: i % 3 === 0 ? '#e62b1e' : i % 3 === 1 ? '#ff4444' : '#ff6666'
          }}></div>
        ))}
      </div>

      <header className="tedx-header">
        <Navbar/>
        <div className="tedx-tagline">Meet our TEDx Team </div>
        <div className="tedx-header-line"></div>
      </header>

      {/* Team Filter */}
      <div className="team-filter">
        {teams.map(team => (
          <button
            key={team.id}
            className={`filter-btn ${activeTeam === team.id ? 'active' : ''}`}
            onClick={() => setActiveTeam(team.id)}
            style={{
              borderColor: activeTeam === team.id ? team.color : 'transparent',
              color: activeTeam === team.id ? team.color : '#aaa'
            }}
          >
            <span className="filter-icon">{team.icon}</span>
            <span className="filter-text">{team.name}</span>
          </button>
        ))}
      </div>

      <main className="tedx-main">
        {/* Team Heads Section - From 2nd Code with 3D Animation */}
        <section className="team-heads-section">
          <h2 className="section-title">TEAM </h2>
          <div className="team-heads-container">
            {getTeamHeads(activeTeam).map(head => (
              <div key={head.id} className="team-card-head-wrapper">
                <div className="team-card-head">
                  <div className="team-card-inner">
                    {/* Front Side */}
                    <div className="team-card-front">
                      <div className="team-head-glow"></div>
                      <div className="team-head-image-container">
                        <img 
                          src={head.image} 
                          alt={head.name} 
                          className="team-head-image"
                          onError={(e) => {
                            e.currentTarget.src = getFallbackImage(head.name);
                          }}
                        />
                        <div className="team-head-crown">~</div>
                        <div className="team-head-badge">TEAM LEAD</div>
                      </div>
                      
                      <div className="team-head-details">
                        <div className="team-head-name">{head.name}</div>
                        <div className="team-head-role">{head.role}</div>
                        <div className="team-head-tag">{head.team.toUpperCase()} TEAM</div>
                      </div>
                    </div>
                    
                    {/* Back Side - Social Media */}
                    <div className="team-card-back">
                      <div className="team-card-back-content">
                        <div className="back-title">Connect with {head.name.split(' ')[0]}</div>
                        <div className="back-role">{head.role}</div>
                        
                        <div className="social-links">
                          <a href="#" className="social-link linkedin">
                            <div className="social-icon-wrapper">
                              <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                              </svg>
                            </div>
                            <span className="social-link-text">LinkedIn</span>
                          </a>
                          
                          <a href="#" className="social-link instagram">
                            <div className="social-icon-wrapper">
                              <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                              </svg>
                            </div>
                            <span className="social-link-text">Instagram</span>
                          </a>
                        </div>
                        
                        <div className="back-quote">"Leading with passion, delivering with purpose"</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Team Members Section - From 1st Code */}
        <section className="team-members-section">
          <h2 className="section-title"></h2>
          <div className="team-members-grid">
            {getTeamMembers(activeTeam).map(member => (
              <div key={member.id} className="team-member-card">
                <div className="member-card-inner">
                  <div className="member-image-wrapper">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="member-image"
                      onError={(e) => {
                        e.currentTarget.src = getFallbackImage(member.name);
                      }}
                    />
                    <div className="member-image-frame"></div>
                    <div className="member-social-overlay">
                      <a href="#" className="member-social-icon linkedin">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </a>
                      <a href="#" className="member-social-icon instagram">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                  
                  <div className="member-details">
                    <div className="member-name">{member.name}</div>
                    <div className="member-role">{member.role}</div>
                    <div className="member-team-tag">{member.team.toUpperCase()}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      
     
      <Footer/>
    </div>
  );
};

export default TEDxSRITTeam;