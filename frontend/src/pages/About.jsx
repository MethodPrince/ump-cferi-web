import '../styles/about.css';

const About = () => {
  // Journey data with years and messages
  const journeyData = [
    {
      year: '2020',
      message: 'CFERI established with initial incubation program'
    },
    {
      year: '2021',
      message: 'First cohort of 10 student businesses incubated'
    },
    {
      year: '2022',
      message: 'Expanded to mentorship network and partnerships'
    },
    {
      year: '2023',
      message: '50+ businesses supported, 100+ jobs created'
    },
    {
      year: '2024',
      message: 'Digital platform launch and expanded programs'
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
            <h3 className="goal-title">Goal 2:To identify, nurture and support entrepreneurial talent and innovation.</h3>
            <ul className="goal-objectives">
              <li>To identify and enable students with business ideas into entrepreneurs.</li>
              <li>To promote entrepreneurship and creative problem solving in staff and students.</li>
              <li>To offer business support services</li>
            </ul>
          </div>
          <div className="goal-card">
            <h3 className="goal-title">Goal 3:  To establish and maintain strategic partnerships, locally, nationally and internationally.</h3>
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

      {/* ONLY THIS SECTION CHANGED - NOW SQUARE CARDS */}
      <div className="about-section">
        <h2 className="about-title">Our Journey</h2>
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