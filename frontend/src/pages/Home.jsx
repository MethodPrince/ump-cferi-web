import '../styles/home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to UMP CFERI</h1>
      <p className="home-subtitle">Centre for Entrepreneurship and Rapid Incubation</p>
      
      <div className="home-cards">
        <div className="home-card">
          <h3>Empowering Student Entrepreneurs</h3>
          <p>Supporting students to turn ideas into successful businesses</p>
        </div>
        
        <div className="home-card">
          <h3>Incubation Programs</h3>
          <p>Structured support for early-stage startups</p>
        </div>
        
        <div className="home-card">
          <h3>Mentorship</h3>
          <p>Connect with experienced business mentors</p>
        </div>
      </div>
    </div>
  );
};

export default Home;