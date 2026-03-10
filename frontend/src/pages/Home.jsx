import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import '../styles/home.css';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Array of background images for slideshow
  const slides = [
    {
      image: '/slideshow/Cferi 04.jpg',
      caption: 'Be Limitless - Ntseka Mahale',
      title: 'Entrepreneurship Tips'
    },
    {
      image: '/slideshow/Cferi 09.jpg',
      caption: 'CFERI Entrepreneurship Development',
      title: 'Program Highlights'
    },
    {
      image: '/slideshow/DSC_5377.jpg',
      caption: 'DSC 5377',
      title: 'Event Snapshot'
    },
    {
      image: '/slideshow/DSC_5385.jpg',
      caption: 'DSC 5385',
      title: 'Event Snapshot'
    },
    {
      image: '/slideshow/DSC_5388.jpg',
      caption: 'DSC 5388',
      title: 'Event Snapshot'
    },
    {
      image: '/slideshow/DSC_5391.jpg',
      caption: 'DSC 5391',
      title: 'Event Snapshot'
    },
    {
      image: '/slideshow/UMP 2023 Staff W shop Entrepreneurship oct-34.jpg',
      caption: 'UMP Staff Entrepreneurship Workshop 2023',
      title: 'Staff Development'
    },
    {
      image: '/slideshow/Visit BYMF.jpg',
      caption: 'Centre for Entrepreneurship & Rapid Incubator',
      title: 'UMPCFERI'
    }
  ];

  // Automatic slideshow
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Head programs data (clickable cards) - ONLY 3 CARDS
  const headPrograms = [
    {
      id: 'incubation',
      title: 'Incubation Programs',
      icon: '🚀',
      color: '#242753',
      description: 'Renting Facilities, Industry Development, Business Plan, Record Keeping & Accounting, Coaching on Market Strategy',
      sectionId: 'incubation-programs'
    },
    {
      id: 'funding',
      title: 'Enterpreneurship Development Programs',
      icon: '🏆',
      color: '#e31b23',
      description: 'EDHE Competition, Student Indaba, Staff Entrepreneurship Capacity Building, CFERI Student Chapters',
      sectionId: 'funding-competitions'
    },
    {
      id: 'research',
      title: 'Research Activities',
      icon: '📚',
      color: '#9c27b0',
      description: 'Research on Entrepreneurship Development, Consultancy, UNICEF, Publications',
      sectionId: 'research-activities'
    }
  ];

  return (
    <div className="home-page">
      {/* Hero Section with Slideshow */}
      <section className="hero-section">
        <div className="slideshow-container">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`slide ${index === currentSlide ? 'active' : ''}`}
              style={{ backgroundImage: `url('${slide.image}')` }}
            >
              <div className="slide-overlay"></div>
              {/* caption shown at bottom of slide */}
              <div className="slide-content">
                <h2 className="slide-title">{slide.title}</h2>
                <p className="slide-caption">{slide.caption}</p>
              </div>
            </div>
          ))}
        </div>

        <button className="slide-nav prev" onClick={prevSlide} aria-label="Previous slide">❮</button>
        <button className="slide-nav next" onClick={nextSlide} aria-label="Next slide">❯</button>

        <div className="container">
          <div className="hero-content fade-in">
            <h1 className="hero-title">UMP CFERI</h1>
            <p className="hero-tagline">Creating Opportunities</p>
            <p className="hero-subtitle">
              Centre for Entrepreneurship and Rapid Incubator
            </p>
            <div className="hero-buttons">
              <Link to="/about" className="btn btn-primary">Learn More</Link>
              <Link to="/contact" className="btn btn-outline">Get Started</Link>
            </div>
          </div>
        </div>
        <div className="hero-overlay"></div>
      </section>

      {/* Head Programs Section - 3 Clickable Cards */}
      <section className="head-programs-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Programs</h2>
            <div className="section-divider"></div>
            <p className="section-subtitle">
              Explore our comprehensive programs designed to nurture entrepreneurs at every stage
            </p>
          </div>

          <div className="head-programs-grid three-cards">
            {headPrograms.map((program, index) => (
              <Link 
                to={`/programs#${program.sectionId}`} 
                key={program.id}
                className="head-program-card fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="program-icon-wrapper" style={{ backgroundColor: program.color }}>
                  <span className="program-icon">{program.icon}</span>
                </div>
                <h3>{program.title}</h3>
                <p className="program-preview">{program.description}</p>
                <span className="view-more">
                  View Details <i className="fas fa-arrow-right"></i>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Why Choose UMP CFERI</h2>
            <div className="section-divider"></div>
          </div>
          
          <div className="features-grid">
            <div className="feature-card fade-in">
              <div className="feature-icon">🎓</div>
              <h3>Expert Mentorship</h3>
              <p>Learn from experienced entrepreneurs, industry experts, and business leaders who guide you every step of the way.</p>
            </div>
            
            <div className="feature-card fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="feature-icon">💰</div>
              <h3>Funding Access</h3>
              <p>Connect with funding opportunities, grants, and investors through our extensive network of partners.</p>
            </div>
            
            <div className="feature-card fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="feature-icon">🌍</div>
              <h3>Global Network</h3>
              <p>Join a community of entrepreneurs and gain exposure to international markets and opportunities.</p>
            </div>
            
            <div className="feature-card fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="feature-icon">🏢</div>
              <h3>State-of-the-Art Facilities</h3>
              <p>Access our modern incubation hub with co-working spaces, meeting rooms, and specialized equipment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section fade-in">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Begin Your Journey?</h2>
            <p className="cta-text">Join our incubation program and transform your idea into a successful business.</p>
            <Link to="/contact" className="btn btn-primary btn-large">Get Started Today</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;