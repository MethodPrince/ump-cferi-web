import '../styles/about.css';

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About UMP CFERI</h1>
      
      <div className="about-section">
        <h2>Centre for Entrepreneurship and Rapid Incubation</h2>
        <p className="about-description">
          In a region thirsty for learning, UMP assumes a leadership role in providing the province 
          and the country with academic avenues for advancement. CFERI embodies this vision by 
          fostering innovation, supporting student startups, and driving economic growth through 
          structured incubation programs and mentorship.
        </p>
      </div>

      <div className="about-grid">
        <div className="about-card">
          <h3 className="about-card-title">Our Mission</h3>
          <p>To offer high quality educational and training opportunities that foster the holistic 
          development of students through teaching and learning, research and scholarship, and 
          engagement, in collaboration with strategic partners.</p>
        </div>
        <div className="about-card">
          <h3 className="about-card-title">Our Vision</h3>
          <p>To be an African University leading in creating opportunities for sustainable 
          development through innovation.</p>
        </div>
        <div className="about-card">
          <h3 className="about-card-title">Our Values</h3>
          <ul className="about-list">
            <li className="about-list-item"><strong>Excellence:</strong> Upholding highest standards</li>
            <li className="about-list-item"><strong>Integrity:</strong> Honesty and fairness</li>
            <li className="about-list-item"><strong>Diversity:</strong> Celebrating different cultures</li>
            <li className="about-list-item"><strong>Collaboration:</strong> Engaging with stakeholders</li>
            <li className="about-list-item"><strong>Adaptability:</strong> Responding to change</li>
            <li className="about-list-item"><strong>Relevance:</strong> Context-responsive programs</li>
            <li className="about-list-item"><strong>Inspiration:</strong> Encouraging others to do more</li>
          </ul>
        </div>
      </div>

      <div className="about-section">
        <h2 className="about-title">Our Journey</h2>
        <div className="about-timeline">
          <div className="about-timeline-item">
            <h3 className="about-timeline-year">2020</h3>
            <p>CFERI established with initial incubation program</p>
          </div>
          <div className="about-timeline-item">
            <h3 className="about-timeline-year">2021</h3>
            <p>First cohort of 10 student businesses incubated</p>
          </div>
          <div className="about-timeline-item">
            <h3 className="about-timeline-year">2022</h3>
            <p>Expanded to mentorship network and partnerships</p>
          </div>
          <div className="about-timeline-item">
            <h3 className="about-timeline-year">2023</h3>
            <p>50+ businesses supported, 100+ jobs created</p>
          </div>
          <div className="about-timeline-item">
            <h3 className="about-timeline-year">2024</h3>
            <p>Digital platform launch and expanded programs</p>
          </div>
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