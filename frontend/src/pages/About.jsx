import '../styles/about.css';

const About = () => {
  // Journey data with exact words from the document
  const journeyData = [
    {
      year: '2020',
      message: '• INCEPTION OF UMPCFERI INFRASTRUCTURAL DEVELOPMENT.\n• UMP PARTICIPATED VIRTUALLY IN EDHE NATIONAL ROUNDS DURING LOCKDOWN.'
    },
    {
      year: '2021',
      message: '• CONTINUED PARTNERSHIP/MOA WITH SEDFA.\n• STUDENTPRENEUR ADVANCED TO EDHE NATIONAL FINALS.\n• CENTRE ACQUIRED STATE-OF-THE-ART EQUIPMENT AND INFRASTRUCTURE FOR SHARED WORKING SPACES AND THE ENTREPRENEURSHIP HUB.'
    },
    {
      year: '2022',
      message: '• UMPCFERI WON THE BEST PITCH AWARD AT UNIFIC SUMMIT (MALAYSIA).\n• MOA SIGNED WITH 11 ASIAN UNIVERSITIES CONSORTIUM.\n• 6 STUDENTPRENEURS COMPETED IN THE EDHE REGIONAL ROUNDS AND 3 ADVANCED TO THE NATIONAL ROUNDS.'
    },
    {
      year: '2023',
      message: '• GRAND OPENING OF UMPCFERI, INCLUDING ENTREPRENEURSHIP EXHIBITION.\n• HOSTED EDHE REGIONAL ROUNDS WITH 3 OTHER UNIVERSITIES.[3 WINNERS]\n• HOSTED POP-UP MARKET (CBD, PARTNERSHIP WITH SEDFA).\n• LAUNCHED UMP SWEEP CHAPTER WITH STANDARD BANK, OLD MUTUAL, ETC.\n• UMP STUDENTPRENEURS WON BRAND FUSION SA PITCH TOUR (TOP 3 PRIZES IN MPUMALANGA).\n• 2 STUDENTPRENEURS REPRESENTED MPUMALANGA AT THE CAPE TOWN INNOVATION SUMMIT (FUNDED BY TIA, MLAB, AND SET UP A START-UP).'
    },
    {
      year: '2024',
      message: '• UMPCFERI TEAM WON 1ST PLACE IN THE PHILIPPINES (UNIC HEALTH & WELLNESS IDEATHON) WITH THE MANGO AGROPROCESSING PROJECT.\n• HOSTED THE 1ST UMP ENTREPRENEURSHIP SUMMIT. • HOSTED THE 1ST WOMEN IN LEADERSHIP CONFERENCE (SWEEP).\n• 1ST CONTRACT FROM THE GOVERNMENT DEPARTMENT DEDT TO DEVELOP MPUMALANGA INFORMAL SECTOR POLICY.\n• SIGNED MOU WITH TUT; RENEWED MOU WITH SEDA (FUNDING).\n• CO-AUTHORED 2 BOOKS ON UNIVERSITY-LED ENTREPRENEURSHIP.\n• SECURED EDHE EAO AND UCDP FUNDING.'
    },
    {
      year: '2025',
      message: '• HOSTED AFRICA-ASIA ROUNDTABLE EVENT WITH MORE THAN 90 DELEGATES FROM MORE THAN 11 COUNTRIES.\n• ENTREPRENEURSHIP BOOTCAMP (SKILLS + INCUBATION PIPELINE).\n• SWEEP BRANDING MASTERCLASS.\n• EDHE-FULBRIGHT WORKSHOP ON EMBEDDING ENTREPRENEURSHIP INTO THE CURRICULUM.\n• STANDARD BANK PITCHING MASTERCLASS.\n• UMPCFERI STUDENTPRENEUR WINS 1ST PLACE AT THE ABSA/YAEI 2025 COMPETITION.\n• UMPCFERI STAKEHOLDER ENGAGEMENT.\n• CFERI WINS ENGAGEMENT TEAM EXCELLENCE AWARDS.'
    }
  ];

  return (
    <div className="about-container">
      <h1 className="about-title">About UMPCFERI</h1> 
      
      <div className="about-section">
        <h2>Centre for Entrepreneurship and Rapid Incubation</h2>
        <p className="about-description">
          UMP CFERI is a dynamic entrepreneurship hub dedicated to fostering innovation, 
          supporting student startups, and driving economic growth through structured 
          incubation programs and mentorship.
        </p>
      </div>

      <div className="about-grid">
        <div className="about-card">
          <h3 className="about-card-title">Our Mission</h3>
          <p>To foster a dynamic entrepreneurship ecosystem through development programmes, 
             strategic partnerships, and applied research aimed at building sustainable enterprises
             and contributing to local, national and regional economic growth.
          </p>
        </div>
        <div className="about-card">
          <h3 className="about-card-title">Our Vision</h3>
          <p>To be a leading entrepreneurship centre in nurturing innovative 
            and creative enterprises for sustainable development within the African context.
          </p>
        </div>
        <div className="about-card">
          <h3 className="about-card-title">Our Values</h3>
          <ul className="about-list">
            <li className="about-list-item">✓ Innovation</li>
            <li className="about-list-item">✓ Excellence</li>
            <li className="about-list-item">✓ Collaboration</li>
            <li className="about-list-item">✓ Integrity</li>
            <li className="about-list-item">✓ Diversity</li>
            <li className="about-list-item">✓ Adaptability</li>
            <li className="about-list-item">✓ Relevance</li>
          </ul>
        </div>
      </div>

      <div className="about-section">
        <h2 className="about-title">Goals and Objectives</h2>
        <div className="goals-grid">
          <div className="goal-card">
            <h3 className="goal-title">Goal 1: Foster Dynamic Entrepreneurial Ecosystem</h3>
            <ul className="goal-objectives">
              <li>To support start-ups through growth-oriented incubation services.</li>
              <li>To contribute to the local entrepreneurship ecosystem building.</li>
            </ul>
          </div>
          <div className="goal-card">
            <h3 className="goal-title">Goal 2: To identify, nurture and support entrepreneurial talent and innovation.</h3>
            <ul className="goal-objectives">
              <li>To identify and enable students with business ideas into entrepreneurs.</li>
              <li>To promote entrepreneurship and creative problem solving in staff and students.</li>
              <li>To offer business support services</li>
            </ul>
          </div>
          <div className="goal-card">
            <h3 className="goal-title">Goal 3: To establish and maintain strategic partnerships, locally, nationally and internationally.</h3>
            <ul className="goal-objectives">
              <li>To facilitate strategic relationships through collaborations, networks, linkages and partnerships.</li>
              <li>To leverage resources through our partnerships.</li>
            </ul>
          </div>
          <div className="goal-card">
            <h3 className="goal-title">Goal 4: To contribute to applied research in entrepreneurship development.</h3>
            <ul className="goal-objectives">
              <li>To conduct applied research in entrepreneurship to inform policy and practice.</li>
              <li>To provide consultancy services in entrepreneurship</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Journey Section with Square Cards */}
      <div className="about-section">
        <h2 className="about-title">CFERI'S KEY ACHIEVEMENTS</h2>
        <div className="journey-grid">
          {journeyData.map((item, index) => (
            <div key={index} className="journey-card">
              <div className="journey-content">
                <div className="journey-year">{item.year}</div>
                <div className="journey-message">{item.message}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="about-section">
        <h2 className="about-title">Key Facts</h2>
        <div className="about-grid">
          <div className="about-card">
            <div className="about-stat-number">50+</div>
            <p>Businesses Supported</p>
          </div>
          <div className="about-card">
            <div className="about-stat-number">100+</div>
            <p>Jobs Created</p>
          </div>
          <div className="about-card">
            <div className="about-stat-number">5+</div>
            <p>Industry Sectors</p>
          </div>
          <div className="about-card">
            <div className="about-stat-number">20+</div>
            <p>Mentors</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;