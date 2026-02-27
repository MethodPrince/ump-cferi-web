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
      <h1 className="about-title">About UMP CFERI</h1>
      
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
          <p>To empower students with entrepreneurial skills, resources, and mentorship 
          needed to transform innovative ideas into sustainable businesses.</p>
        </div>
        <div className="about-card">
          <h3 className="about-card-title">Our Vision</h3>
          <p>To be the leading entrepreneurship centre in South Africa, producing 
          successful student entrepreneurs who contribute to economic development.</p>
        </div>
        <div className="about-card">
          <h3 className="about-card-title">Our Values</h3>
          <ul className="about-list">
            <li className="about-list-item">✓ Innovation</li>
            <li className="about-list-item">✓ Excellence</li>
            <li className="about-list-item">✓ Collaboration</li>
            <li className="about-list-item">✓ Impact</li>
          </ul>
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