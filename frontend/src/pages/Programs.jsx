import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/programs.css';

const Programs = () => {
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Programs data with exact texts from documents
  const programs = [
    {
      id: 'sabya',
      title: 'SABYA',
      subtitle: 'South African BRICS Youth Association',
      category: 'Research & Innovation',
      duration: 'Ongoing',
      icon: '/images/Image.jpeg',
      color: '#242753',
      overview: 'SABYA is a non-profit organisation founded in 2018, with the vision to be the leading voice of Youth within BRICS+ and Advocate for their rights and interests in the decision making processes.',
      description: `The South African BRICS Youth Association (SABYA) is a non-profit organisation founded in 2018, with the vision to be the leading voice of Youth within BRICS+ and Advocate for their rights and interests in the decision making processes.`,
      
      fullDescription: `The South African BRICS Youth Association (SABYA) is committed to amplifying the voice of young people in decision-making spaces. The UMPCFERI SABYA Chapter is a dynamic platform for young scholars, researchers, innovators and future change-makers ready to make meaningful impact within BRICS+ and beyond.

This is more than just a chapter, it's a community of driven students connecting academic excellence with entrepreneurship, innovation and community development. If you're ready to grow your research profile, expand your network and contribute to real solutions that matter, this is your sign to get involved.`,
      
      whoShouldJoin: [
        'Honours, Master\'s & PhD students',
        'Final-year undergraduates with research interests',
        'Students in entrepreneurship, development, economics, agriculture, business & social innovation',
        'Students passionate about entrepreneurship, development, economics, agriculture, business & social innovation'
      ],
      
      whyJoin: [
        'Research mentorship & peer support',
        'Writing, methods & proposal clinics',
        'Writing, methodology & proposal development clinics',
        'Research-to-enterprise opportunities',
        'Conferences, publications & innovation projects',
        'Network with academics, entrepreneurs & industry',
        'Networking with academics, entrepreneurs & industry leaders'
      ],
      
      whatWeDo: [
        'Research seminars & workshops',
        'Research seminars & interactive workshops',
        'Collaborative research & publications',
        'Applied and community-engaged research',
        'Applied and community-engaged research initiatives'
      ],
      
      objectives: [
        'To be the leading voice of Youth within BRICS+',
        'To Advocate for youth rights and interests in decision making processes',
        'To connect academic work with entrepreneurship, innovation, and community development',
        'To provide research mentorship and peer support',
        'To create research-to-enterprise opportunities'
      ],
      
      benefits: [
        'Research mentorship & peer support',
        'Writing, methods & proposal clinics',
        'Research-to-enterprise opportunities',
        'Conferences, publications & innovation projects',
        'Network with academics, entrepreneurs & industry',
        'Writing, methodology & proposal development clinics',
        'Networking with academics, entrepreneurs & industry leaders'
      ],
      
      eligibility: [
        'Honours, Master\'s & PhD students',
        'Final-year undergraduates with research interests',
        'Students in entrepreneurship, development, economics, agriculture, business & social innovation',
        'Students passionate about entrepreneurship, development, economics, agriculture, business & social innovation'
      ],
      
      partners: ['BRICS+', 'UMPCFERI', 'SABYA National'],
      contact: 'sabya@umpcferi.ac.za',
      social: {
        instagram: 'https://www.instagram.com/umpcferi_sabya_chapter'
      },
      applicationDeadline: 'Rolling applications',
      nextCohort: 'Ongoing'
    },
    
    {
      id: 'hult',
      title: 'HULT Prize',
      subtitle: 'Global Student Entrepreneurship Competition',
      category: 'Competition',
      duration: 'Annual',
      icon: '/images/hultptize logo.png',
      color: '#e31b23',
      overview: 'The HULT Prize is a global student entrepreneurship competition that challenges young people to build startups that solve pressing social problems while being financially sustainable.',
      description: `THE HULT PRIZE IS A GLOBAL STUDENT ENTREPRENEURSHIP COMPETITION THAT CHALLENGES YOUNG PEOPLE TO BUILD STARTUPS THAT SOLVE PRESSING SOCIAL PROBLEMS WHILE BEING FINANCIALLY SUSTAINABLE.`,
      
      fullDescription: `UMP Hult Prize is an entrepreneurship competition housed at CFERI.

A PLATFORM FOR BUSINESS IDEAS`,
      
      whatToExpect: [
        'An opportunity to turn your start up into a real business',
        'A community of entrepreneurs',
        'Networking opportunity',
        'Global exposure',
        'Business pitching skills',
        'Business funding'
      ],
      
      benefits: [
        'You have a chance to turn your idea into a real business, with guidance, support, and possible funding through the Hult Prize.',
        'You learn useful skills like leadership, teamwork, problem-solving, and how to pitch ideas confidently.',
        'You get to work on real problems in society and help create solutions that make a positive impact.',
        'You meet and connect with students, and entrepreneurs from around the world.',
        'Opportunity to win US$1 million in seed funding at the Global Finals'
      ],
      
      stages: [
        {
          name: 'STAGE 1: Campus Competition',
          description: 'Hosted at individual universities. Student teams pitch their startup ideas. One winning team per campus advances. Focus: problem clarity, impact, and business potential.'
        },
        {
          name: 'STAGE 2: National Competition',
          description: 'Campus winners compete at national or regional summits. More competitive, with expert judges and mentors. Top teams move forward to the global pathway.'
        },
        {
          name: 'STAGE 3: Digital Incubator',
          description: 'Teams that didn\'t win campus rounds can still apply online. Requires a strong pitch deck and traction. Selected teams join the next stage.'
        },
        {
          name: 'STAGE 4: Digital Accelerator',
          description: 'Around 20–25 top teams worldwide are selected. 6–8 weeks of: Mentorship, Business model refinement, Pitch coaching. Hosted in partnership with leading global institutions.'
        },
        {
          name: 'STAGE 5: Global Finals',
          description: 'Final teams pitch on a global stage. Judged by world-class entrepreneurs and investors. One team wins US $1 million in seed funding.'
        }
      ],
      
      minimumRequirements: [
        'Students must be UMP registered for the academic year 2026',
        'A startup one-pager (summary of your idea and value proposition)',
        'Each Start-up must have a one or two SDGs in focus',
        'Start-ups must include 2-4 members'
      ],
      
      contactInfo: {
        phone1: '076 405 5974',
        phone2: '063 433 8371',
        email: 'hult@umpcferi.ac.za',
        location: 'University of Mpumalanga, Mbombela Campus'
      },
      
      spotlight: 'Tsumbedzo Ramadi Madzivhandila',
      
      objectives: [
        'Engage students in social entrepreneurship',
        'Develop innovative solutions to global challenges',
        'Provide platform for students to showcase ideas',
        'Connect students with global entrepreneurship network',
        'Foster cross-disciplinary collaboration'
      ],
      
      eligibility: [
        'Students must be UMP registered for the academic year 2026',
        'Start-ups must include 2-4 members',
        'Each Start-up must have a one or two SDGs in focus',
        'A startup one-pager (summary of your idea and value proposition)'
      ],
      
      partners: ['HULT Prize Foundation', 'United Nations', 'Various corporate partners'],
      contact: 'hult@umpcferi.ac.za',
      social: {
        instagram: 'https://www.instagram.com/hultpump'
      },
      applicationDeadline: 'February 2025',
      nextCohort: 'March - May 2025',
     
    },
    
    {
      id: 'sweep',
      title: 'SWEEP',
      subtitle: 'Student Women Economic Empowerment Programme',
      category: 'Empowerment',
      duration: 'Ongoing',
      icon: '/images/Screenshot 2026-03-05 131917.png',
      color: '#9c27b0',
      overview: 'SWEEP is a sisterhood for economic participation aimed at promoting the economic empowerment of student women through skills development, mentorship, and entrepreneurial opportunities.',
      description: `SWEEP is a sisterhood for economic participation aimed at promoting the economic empowerment of student women. It provides skills and opportunities interventions and seeks to address the barriers to entrepreneurship faced by student women, particularly in the context of gender-based violence. SWEEP envisions becoming a transformational empowerment community of women equipped for economic participation through entrepreneurial activity.

SWEEP aims to break the cycle of dependency and vulnerability by fostering entrepreneurship and economic empowerment in order to enable student women to build sustainable livelihoods and contribute to the economic growth and development of their communities. Through increased economic participation, student women can gain agency, make informed decisions, and exercise greater control over their lives. They can pursue education, career advancement, and personal aspirations, thereby challenging traditional gender roles and norms.

In the context of gender-based violence and unemployment in South Africa, the initiative strives to create a transformative impact on student women's lives by giving them access to opportunities and skills-development activities that enhance employability, professionalism, entrepreneurship, resilience and self-sustainability. The programme aims to do this by enhancing student women's academic education and plugging them into a professional 'sisterhood.'`,
      
      fullDescription: `In a world where gender equality and women's empowerment are increasingly recognised as crucial for social progress and sustainable development, it is imperative to focus on empowering young women to reach their full potential. The Student Women Economic Empowerment Programme (SWEEP) stands as a testament to this vision, aiming to uplift and support female students in their pursuit of economic independence, professional growth, and leadership.

SWEEP addresses the lack of representation of student women in business and entrepreneurship by providing skills and opportunities for economic participation. Unemployment is a significant issue, and many student women face the risk of joblessness even after graduating. Additionally, financial dependency often forces them to stay in abusive relationships. SWEEP aims to tackle these problems by offering practical skills and opportunities, supported by academic knowledge, to help student women participate in the economy through entrepreneurial activities and professional employability skills. SWEEP's primary goal is to increase the number of student women who are equipped for economic participation through entrepreneurship or employment opportunities. The programme supports them in creating a stable socio-economic environment by starting and growing their businesses or developing their employability skills. By recognizing the potential of student women to become entrepreneurs or employed professionals, SWEEP provides the necessary skills and resources to help them succeed. This empowerment boosts their confidence, enabling them to contribute to the economy and achieve financial independence.

The rationale for the SWEEP initiative is based on the understanding that student women who generate income are less vulnerable and have more options for personal and professional growth. By promoting economic participation, SWEEP aims to create a stable socio-economic environment for student women, enabling them to support themselves and their families without having to rely on an abusive partner or face economic hardships. Increased participation of student women equipped for economic participation through entrepreneurial activity will contribute to their overall economic empowerment, leading to enhanced self-esteem, financial independence, and improved quality of life.`,
      
      objectives: [
        'Expand Institutional Participation: Through the development of contextualised content, resources, and guidance, SWEEP strives to increase the establishment of new SWEEP chapters across institutions, creating a wider network of student women empowered through entrepreneurship and leadership opportunities.',
        'Increase Entrepreneurship Awareness: Increased awareness of entrepreneurship as a viable economic pathway for female university students and a greater understanding of gender equality and related challenges that hinder female student participation in economic sectors.',
        'Enhance entrepreneurship and resilience skills among student women: SWEEP endeavours to enhance the entrepreneurship skills of student women, enabling them to develop innovative business ideas, effectively manage their ventures, and navigate the challenges of starting and growing businesses. The programme aims to foster a strong entrepreneurial mindset and skill set among student women by providing training, mentorship, and networking opportunities. The programme also aims to enhance student women\'s mental and emotional resilience, enabling them to pursue opportunities confidently and navigate the challenges of starting and growing a business.',
        'Increase access to finance and business development services for student women: SWEEP recognises the importance of access to finance and business development services for student women\'s entrepreneurial endeavours. The Programme aims to facilitate increased access to financial resources, grants, loans, and business support services, enabling student women to start and expand their businesses. By reducing barriers to capital and providing guidance on business development, SWEEP seeks to enhance student women\'s entrepreneurial success.',
        'Increase participation of student women in a supportive community of women entrepreneurs: SWEEP strives to create a supportive community of student women entrepreneurs. By facilitating networking events, mentorship programmes, and knowledge sharing platforms, the programme aims to foster collaboration, peer learning, and mutual support among student women. This community will contribute to the growth, resilience, and success of student women in their entrepreneurial pursuits.',
        'Increase economic participation of student women: SWEEP aims to empower student women to actively engage in economic activities, whether through entrepreneurship, employment, or other forms of economic participation. By equipping them with the necessary skills, resources, and support, the Programme seeks to increase the number of student women who are economically active and contributing to the economy.',
        'Reduce dependability and vulnerability of student women: SWEEP acknowledges the connection between economic empowerment and reduced vulnerability to gender-based violence. By providing psychosocial support, education on gender-based violence prevention, and access to resources, the Programme aims to reduce the risk and impact of gender-based violence on student women\'s lives. This includes fostering a supportive environment that empowers student women to assert their rights and seek help when needed.'
      ],
      
      chapterObjectives: [
        'Enhance Entrepreneurship Skills and Knowledge: To provide female university students with access to mentorship, training, and capacity-building workshops that enhance their entrepreneurial, professional, resilience, and survival skills. Activities include: providing/facilitating training and capacity-building programmes that enhance entrepreneurial skills, financial literacy, leadership, and personal development; facilitating workshops on psychosocial support, addressing the challenges of gender-based violence and fostering mental and emotional resilience; facilitating a mentorship programme connecting student women with experienced professionals (partners) who provide one-on-one business guidance, industry insights, and leadership development.',
        'Increase Entrepreneurship Awareness: To enhance awareness of entrepreneurship and entrepreneurial activities as viable means of economic participation among female university students. Activities include conducting awareness-raising activities to promote entrepreneurship, promoting gender equality, challenging societal norms, and eliminating gender-based discrimination and bias in economic sectors.',
        'Promote Women\'s Participation in Entrepreneurship: To promote and support the participation of female university students in entrepreneurship-related activities. Activities include: Offering access to financial resources, grants, and scholarships specifically designed to support student women\'s entrepreneurial ventures and educational pursuits; integrating SWEEP participation into EDHE events such as the Student Entrepreneurship Week (SEW) and the EDHE Entrepreneurship Intervarsity; encouraging female students to compete, network, and showcase their entrepreneurial ideas.',
        'Foster a sense of community and support among and for student women: To grow the female university student support network, encouraging networking, collaboration, and the sharing of knowledge, resources, opportunities and expertise. Activities include: Showcase the platform/ website/ community; engage on/ contribute to the platform/ website/ community; facilitate networking events, conferences, dialogues, webinars and forums where student women can exchange ideas, collaborate on projects, and engage with successful entrepreneurs and industry leaders; explore and establish partnerships/ collaborations to support student women entrepreneurs through access to resources, mentorship, and employment/ entrepreneurship opportunities for student women.',
        'Expand Institutional Participation: To increase the number of SWEEP chapters and student participation across South African universities. Activities include: recruiting SWEEP chapter members and supporting and engaging with SWEEP chapters at other universities.'
      ],
      
      workshops: 'In our quest to develop and empower capacity building workshops remain a critical element in driving objectives of the EDHE strategy. The year 2024 saw several workshops including a three-day SWEEP workshop designed around three key themes that are not only aligned with the SWEEP vision and mission–but fundamental to competencies required from graduates in the world of work and/or (social) entrepreneurship. The selected methodology for the program design was based on cognitive and social theory principles in education. The student women were encouraged to be inspired by observing and listening to the speakers, discussing key points in their respective groups, applying the knowledge to the given task, and presenting their findings in plenary sessions.',
      
      constitution: `To the SWEEP Community, we are pleased to introduce the SWEEP Constitution Draft, a foundational document designed to guide each SWEEP Chapter in creating a constitution tailored to your specific university's society processes and procedures.

The SWEEP Constitution Draft serves as a flexible framework, offering guidelines and principles that chapters can adapt to their unique needs. It is not a one-size-fits-all document; rather, it is a resource intended to assist you in crafting a constitution that aligns with your university's culture, regulations, and the specific goals of your SWEEP Chapter.

This draft document outlines the essential elements to consider when creating your chapter's constitution. It covers areas such as the chapter's mission, objectives, leadership structure, membership requirements, and decision-making processes. It is our hope that by providing this framework, we can streamline the process of constitution drafting and help you focus on the core mission of empowering female students within your university.

Remember that the SWEEP Constitution Draft is a starting point and a source of inspiration. Feel free to adapt, modify, and expand upon the content to ensure that it best suits your chapter's unique needs and aspirations. We encourage you to engage with your chapter members, incorporate their ideas, and create a constitution that empowers you to realize your shared vision of promoting women's economic empowerment.

Thank you for your commitment to the SWEEP program, and we look forward to seeing the incredible impact your unique SWEEP Chapter will make on your campus and in the lives of female students.`,
      
      externalLink: 'https://edhe.co.za/sweep-2025/',
      
      benefits: [
        'Specialized business management training',
        'One-on-one mentorship with successful women leaders',
        'Access to women-focused funding opportunities',
        'Networking events and peer support groups',
        'Market linkages and exhibition opportunities',
        'Childcare support during program sessions'
      ],
      
      eligibility: [
        'Female university students',
        'Currently enrolled at UMP or partner institutions',
        'Commitment to personal and professional development',
        'Willingness to participate in workshops and mentorship',
        'Open to all faculties and academic levels'
      ],
      
      partners: ['Old Mutual', 'ABSA', 'Women in Business Association', 'SEDA', 'EDHE'],
      contact: 'sweep@umpcferi.ac.za',
      social: {
        tiktok: 'https://www.tiktok.com/@umpsweep.chapter'
      },
      applicationDeadline: 'Rolling applications',
      nextCohort: 'Ongoing'
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
                  {program.icon.includes('/') ? (
                    <img src={program.icon} alt={program.title} className="program-icon-img" />
                  ) : (
                    <span className="program-icon">{program.icon}</span>
                  )}
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
              {/* Program Overview */}
              <div className="modal-section">
                <h3>Program Overview</h3>
                <p>{selectedProgram.description}</p>
              </div>

              {/* Full Description */}
              {selectedProgram.fullDescription && (
                <div className="modal-section">
                  <h3>About {selectedProgram.title}</h3>
                  <p style={{ whiteSpace: 'pre-line' }}>{selectedProgram.fullDescription}</p>
                </div>
              )}

              {/* SABYA Specific Sections */}
              {selectedProgram.id === 'sabya' && (
                <>
                  <div className="modal-section">
                    <h3>Who Should Join?</h3>
                    <ul className="modal-list">
                      {[...new Set(selectedProgram.whoShouldJoin)].map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="modal-section">
                    <h3>Why Join?</h3>
                    <ul className="modal-list">
                      {[...new Set(selectedProgram.whyJoin)].map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="modal-section">
                    <h3>What We Do</h3>
                    <ul className="modal-list">
                      {[...new Set(selectedProgram.whatWeDo)].map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </>
              )}

              {/* HULT Prize Specific Sections */}
              {selectedProgram.id === 'hult' && (
                <>
                  <div className="modal-section">
                    <h3>What to Expect</h3>
                    <ul className="modal-list">
                      {selectedProgram.whatToExpect.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="modal-section">
                    <h3>Minimum Requirements</h3>
                    <ul className="modal-list">
                      {selectedProgram.minimumRequirements.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="modal-section">
                    <h3>Stages of Hult Prize</h3>
                    {selectedProgram.stages.map((stage, index) => (
                      <div key={index} style={{ marginBottom: '1.5rem' }}>
                        <h4 style={{ color: '#e31b23', marginBottom: '0.5rem' }}>{stage.name}</h4>
                        <p>{stage.description}</p>
                      </div>
                    ))}
                  </div>

                  <div className="modal-section">
                    <h3>Contact Information</h3>
                    <p>📞 {selectedProgram.contactInfo.phone1}</p>
                    <p>📞 {selectedProgram.contactInfo.phone2}</p>
                    <p>📍 {selectedProgram.contactInfo.location}</p>
                  </div>

                  <div className="modal-section">
                    <h3>Spotlight</h3>
                    <p><strong>{selectedProgram.spotlight}</strong></p>
                  </div>

                  <div className="modal-section">
                    <p><em>{selectedProgram.qrMessage}</em></p>
                  </div>
                </>
              )}

              {/* SWEEP Specific Sections */}
              {selectedProgram.id === 'sweep' && (
                <>
                  {selectedProgram.fullDescription && (
                    <div className="modal-section">
                      <h3>Why SWEEP Matters</h3>
                      <p style={{ whiteSpace: 'pre-line' }}>{selectedProgram.fullDescription}</p>
                    </div>
                  )}

                  <div className="modal-section">
                    <h3>Key Objectives</h3>
                    <ul className="modal-list">
                      {selectedProgram.objectives.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="modal-section">
                    <h3>SWEEP University Chapters</h3>
                    <p>The work of the SWEEP Chapters contributes towards the overarching programme outcomes through the following objectives and activities:</p>
                    <ul className="modal-list">
                      {selectedProgram.chapterObjectives.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="modal-section">
                    <h3>SWEEP Capacity Building Workshops</h3>
                    <p>{selectedProgram.workshops}</p>
                  </div>

                  <div className="modal-section">
                    <h3>The SWEEP Constitution</h3>
                    <p style={{ whiteSpace: 'pre-line' }}>{selectedProgram.constitution}</p>
                  </div>

                  <div className="modal-section">
                    <h3>Learn More</h3>
                    <a 
                      href={selectedProgram.externalLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-block',
                        padding: '0.8rem 1.5rem',
                        background: '#9c27b0',
                        color: 'white',
                        textDecoration: 'none',
                        borderRadius: '50px',
                        fontWeight: '600'
                      }}
                    >
                      Visit EDHE SWEEP Website <i className="fas fa-external-link-alt"></i>
                    </a>
                  </div>
                </>
              )}

              {/* Common Sections for All Programs */}
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

              {/* Partners */}
              <div className="modal-section">
                <h3>Partners</h3>
                <div className="partners-list">
                  {selectedProgram.partners.map((partner, index) => (
                    <span key={index} className="partner-tag">{partner}</span>
                  ))}
                </div>
              </div>

              {/* Modal Actions */}
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