import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/programs.css';

const Programs = () => {
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Programs data with social media links
  const programs = [
    {
      id: 'sabya',
      title: 'SABYA',
      subtitle: 'Social Acceleration for Business and Youth Advancement',
      category: 'Accelerator',
      duration: '6 months',
      icon: '🚀',
      color: '#242753',
      overview: 'SABYA is a flagship social accelerator program designed to empower youth-led social enterprises with the tools, networks, and funding needed to scale their impact.',
      description: 'The Social Acceleration for Business and Youth Advancement (SABYA) program provides comprehensive support to young entrepreneurs tackling social challenges in their communities. Through a combination of mentorship, skills development, and access to funding, SABYA helps transform innovative ideas into sustainable social enterprises.',
      objectives: [
        'Identify and support high-potential youth-led social enterprises',
        'Provide structured mentorship from industry experts',
        'Facilitate access to seed funding and investment opportunities',
        'Build a community of social entrepreneurs across Mpumalanga',
        'Measure and amplify social impact outcomes'
      ],
      benefits: [
        'R50,000 - R100,000 seed funding',
        '6-month intensive mentorship program',
        'Access to business development workshops',
        'Networking with industry leaders and investors',
        'Co-working space at UMPCFERI hub',
        'Exposure to corporate partners and potential clients'
      ],
      eligibility: [
        'Youth aged 18-35',
        'South African citizen or permanent resident',
        'Operating a social enterprise or have a viable business idea',
        'Based in Mpumalanga province',
        'Commitment to full participation in the 6-month program'
      ],
      partners: ['SEDFA', 'Standard Bank', 'NYDA', 'SAB Foundation'],
      contact: 'sabya@umpcferi.ac.za',
      social: {
        instagram: 'https://www.instagram.com/umpcferi_sabya_chapter'
      },
      applicationDeadline: 'Rolling applications',
      nextCohort: 'September 2024'
    },
    {
      id: 'hult',
      title: 'HULT Prize',
      subtitle: 'On-Campus Program',
      category: 'Competition',
      duration: 'Annual',
      icon: '🏆',
      color: '#e31b23',
      overview: 'The HULT Prize is the world\'s largest student social entrepreneurship competition, challenging students to solve pressing global issues through innovative business ideas.',
      description: 'UMPCFERI serves as the official on-campus host for the HULT Prize, providing students with the opportunity to compete for US$1 million in seed funding. Each year, teams of students develop social enterprise ideas around a specific global challenge, with winners advancing through regional and global finals.',
      objectives: [
        'Engage students in social entrepreneurship',
        'Develop innovative solutions to global challenges',
        'Provide platform for students to showcase ideas',
        'Connect students with global entrepreneurship network',
        'Foster cross-disciplinary collaboration'
      ],
      benefits: [
        'Opportunity to win US$1 million in funding',
        'Access to HULT Prize global network',
        'Mentorship from industry experts',
        'Participation in regional and global summits',
        'Recognition and visibility for winning ideas',
        'Connect with investors and partners'
      ],
      eligibility: [
        'Currently enrolled UMP students (undergraduate or postgraduate)',
        'Teams of 3-4 members',
        'Open to all faculties and disciplines',
        'Commitment to participate in all program phases'
      ],
      partners: ['HULT Prize Foundation', 'United Nations', 'Various corporate partners'],
      contact: 'hult@umpcferi.ac.za',
      social: {
        instagram: 'https://www.instagram.com/hultpump'
      },
      applicationDeadline: 'February 2025',
      nextCohort: 'March - May 2025'
    },
    {
      id: 'sweep',
      title: 'SWEEP',
      subtitle: 'Supporting Women Entrepreneurs Empowerment Program',
      category: 'Empowerment',
      duration: '4 months',
      icon: '👩‍💼',
      color: '#9c27b0',
      overview: 'SWEEP is a dedicated program designed to support and empower women entrepreneurs through mentorship, skills development, and access to markets and funding.',
      description: 'The Supporting Women Entrepreneurs Empowerment Program (SWEEP) addresses the unique challenges faced by women entrepreneurs in South Africa. Through a combination of technical training, leadership development, and networking opportunities, SWEEP creates an enabling environment for women-led businesses to thrive.',
      objectives: [
        'Empower women entrepreneurs with business skills',
        'Address gender-specific barriers in entrepreneurship',
        'Create a supportive community of women business leaders',
        'Facilitate access to markets and funding',
        'Promote women\'s economic participation and leadership'
      ],
      benefits: [
        'Specialized business management training',
        'One-on-one mentorship with successful women leaders',
        'Access to women-focused funding opportunities',
        'Networking events and peer support groups',
        'Market linkages and exhibition opportunities',
        'Childcare support during program sessions'
      ],
      eligibility: [
        'Women entrepreneurs aged 18 and above',
        'Based in Mpumalanga province',
        'Operating a business for at least 6 months',
        'Commitment to attend all program sessions',
        'Open to all sectors and industries'
      ],
      partners: ['Old Mutual', 'ABSA', 'Women in Business Association', 'SEDA'],
      contact: 'sweep@umpcferi.ac.za',
      social: {
        tiktok: 'https://www.tiktok.com/@umpsweep.chapter'
      },
      applicationDeadline: 'April 2025',
      nextCohort: 'May - August 2025'
    }
  ];

  const openProgramModal = (program) => {
    setSelectedProgram(program);
    setShowModal(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedProgram(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="programs-page">
      {/* Hero Section */}
      <section className="programs-hero">
        <div className="programs-hero-overlay"></div>
        <div className="programs-hero-content">
          <h1 className="programs-hero-title">Our Programs</h1>
          <p className="programs-hero-subtitle">
            Empowering entrepreneurs through world-class programs designed to accelerate business growth and create lasting impact.
          </p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="programs-grid-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Flagship Programs</h2>
            <div className="section-divider"></div>
            <p className="section-subtitle">
              Click on any program card to learn more about the opportunities available
            </p>
          </div>

          <div className="programs-grid">
            {programs.map((program, index) => (
              <div 
                key={program.id} 
                className="program-card fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
                onClick={() => openProgramModal(program)}
              >
                <div className="program-card-header" style={{ backgroundColor: program.color }}>
                  <span className="program-icon">{program.icon}</span>
                  <span className="program-category">{program.category}</span>
                </div>
                <div className="program-card-body">
                  <h3>{program.title}</h3>
                  <p className="program-subtitle">{program.subtitle}</p>
                  <div className="program-meta">
                    <span className="meta-item">
                      <i className="far fa-clock"></i> {program.duration}
                    </span>
                  </div>
                  <p className="program-overview">{program.overview}</p>
                  <div className="program-card-footer">
                    <span className="learn-more">
                      Learn More <i className="fas fa-arrow-right"></i>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Modal */}
      {showModal && selectedProgram && (
        <div className="program-modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              <i className="fas fa-times"></i>
            </button>
            
            <div className="modal-header" style={{ borderColor: selectedProgram.color }}>
              <div className="modal-icon" style={{ backgroundColor: selectedProgram.color }}>
                {selectedProgram.icon}
              </div>
              <div className="modal-title">
                <h2>{selectedProgram.title}</h2>
                <p>{selectedProgram.subtitle}</p>
                <span className="modal-category" style={{ backgroundColor: selectedProgram.color }}>
                  {selectedProgram.category}
                </span>
              </div>
            </div>

            <div className="modal-body">
              <div className="modal-section">
                <h3>Program Overview</h3>
                <p>{selectedProgram.description}</p>
              </div>

              <div className="modal-section">
                <h3>Key Objectives</h3>
                <ul className="modal-list">
                  {selectedProgram.objectives.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="modal-section">
                <h3>Benefits</h3>
                <ul className="modal-list">
                  {selectedProgram.benefits.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="modal-section">
                <h3>Eligibility Criteria</h3>
                <ul className="modal-list">
                  {selectedProgram.eligibility.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="modal-details-grid">
                <div className="detail-item">
                  <i className="far fa-calendar-alt"></i>
                  <div>
                    <strong>Next Cohort</strong>
                    <p>{selectedProgram.nextCohort}</p>
                  </div>
                </div>
                <div className="detail-item">
                  <i className="far fa-clock"></i>
                  <div>
                    <strong>Duration</strong>
                    <p>{selectedProgram.duration}</p>
                  </div>
                </div>
                <div className="detail-item">
                  <i className="far fa-file-alt"></i>
                  <div>
                    <strong>Deadline</strong>
                    <p>{selectedProgram.applicationDeadline}</p>
                  </div>
                </div>
                <div className="detail-item">
                  <i className="far fa-envelope"></i>
                  <div>
                    <strong>Contact</strong>
                    <p>{selectedProgram.contact}</p>
                  </div>
                </div>
              </div>

              {/* Social Media Section */}
              {selectedProgram.social && (
                <div className="modal-section">
                  <h3>Connect on Social Media</h3>
                  <div className="program-social-links">
                    {selectedProgram.social.instagram && (
                      <a 
                        href={selectedProgram.social.instagram} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="social-link-prog instagram"
                      >
                        <i className="fab fa-instagram"></i> Follow on Instagram
                      </a>
                    )}
                    {selectedProgram.social.tiktok && (
                      <a 
                        href={selectedProgram.social.tiktok} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="social-link-prog tiktok"
                      >
                        <i className="fab fa-tiktok"></i> Follow on TikTok
                      </a>
                    )}
                  </div>
                </div>
              )}

              <div className="modal-section">
                <h3>Partners</h3>
                <div className="partners-list">
                  {selectedProgram.partners.map((partner, index) => (
                    <span key={index} className="partner-tag">{partner}</span>
                  ))}
                </div>
              </div>

              <div className="modal-actions">
                <Link to="/contact" className="btn btn-primary">Apply Now</Link>
                <button className="btn btn-outline" onClick={closeModal}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Programs;