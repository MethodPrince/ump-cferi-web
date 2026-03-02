import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getBusinesses } from '../services/api';
import '../styles/home.css';

const Home = () => {
  const [businesses, setBusinesses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Array of background images for slideshow
  const slides = [
    {
      image: '/slideshow/Cferi 04.jpg',
      caption: 'Be Limitless - Ntseka Mahale',
      title: 'Entrepreneurship Tips'
    },
    {
      image: '/slideshow/Dr. sneakers Pop up.jpg',
      caption: 'Dr. Sneakers - Professional Shoe Care',
      title: 'Shoe Restoration Services'
    },
    {
      image: '/slideshow/Cferi 09.jpg',
      caption: 'CFERI Entrepreneurship Development',
      title: 'Program Highlights'
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
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [slides.length]);

  // Manual navigation functions
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    getBusinesses()
      .then(({ data }) => setBusinesses(data))
      .finally(() => setLoading(false));
  }, []);

  const totalJobs = businesses.reduce((sum, b) => sum + (b.jobsCreated || 0), 0);
  const industries = new Set(businesses.map(b => b.industry)).size;

  const stats = [
    { number: businesses.length || '0', label: 'Businesses Supported' },
    { number: totalJobs || '0', label: 'Jobs Created' },
    { number: industries || '0', label: 'Industry Sectors' },
    { number: '20+', label: 'Active Mentors' }
  ];

  return (
    <div className="home-page">
      {/* Hero Section with Slideshow Background */}
      <section className="hero-section">
        {/* Slideshow Background Images */}
        <div className="slideshow-container">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`slide ${index === currentSlide ? 'active' : ''}`}
            >
              <img 
                src={slide.image}
                alt={slide.caption}
                className="slide-image"
                loading="lazy"
                onError={(e) => {
                  console.error('Image failed to load:', slide.image);
                  e.target.style.backgroundColor = '#333';
                }}
              />
              <div className="slide-overlay"></div>
            </div>
          ))}
        </div>

        {/* Slide Caption */}
        <div className="slide-caption">
          <span className="caption-title">{slides[currentSlide].title}</span>
          <span className="caption-text">{slides[currentSlide].caption}</span>
        </div>

        {/* Navigation Arrows */}
        <button className="slide-nav prev" onClick={prevSlide} aria-label="Previous slide">❮</button>
        <button className="slide-nav next" onClick={nextSlide} aria-label="Next slide">❯</button>

        {/* Slide Indicators */}
        <div className="slide-indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Hero Content Overlay */}
        <div className="container">
          <div className="hero-content fade-in">
            <h1 className="hero-title">UMPCFERI</h1>
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

      {/* Mission Section */}
      <section className="mission-section slide-up">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Mission</h2>
            <div className="section-divider"></div>
          </div>
          <div className="mission-content">
            <p className="mission-text">
              To foster a dynamic entrepreneurship ecosystem through development programmes,
              strategic partnerships, and applied research aimed at building sustainable enterprises
              and contributing to local, national and regional economic growth.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="programs-section slide-up">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Programs</h2>
            <div className="section-divider"></div>
          </div>
          <div className="programs-grid">
            <div className="program-card fade-in">
              <h3>Entrepreneurship Development</h3>
              <p>Comprehensive training and mentorship for aspiring student entrepreneurs.</p>
            </div>
            <div className="program-card fade-in" style={{ animationDelay: '0.1s' }}>
              <h3>Business Incubation</h3>
              <p>Structured support for early-stage startups with access to resources and funding.</p>
            </div>
            <div className="program-card fade-in" style={{ animationDelay: '0.2s' }}>
              <h3>Mentorship Network</h3>
              <p>Connect with experienced business leaders and industry experts.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Businesses */}
      {!loading && businesses.length > 0 && (
        <section className="featured-section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Featured Businesses</h2>
              <div className="section-divider"></div>
            </div>
            <div className="featured-grid">
              {businesses.slice(0, 3).map((business, index) => (
                <div key={business._id} className="featured-card fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <h3>{business.name}</h3>
                  <p className="business-owner">{business.owner}</p>
                  <p className="business-industry">{business.industry}</p>
                  <p className="business-description">{business.description}</p>
                </div>
              ))}
            </div>
            <div className="text-center">
              <Link to="/impact" className="btn btn-secondary">View All Businesses</Link>
            </div>
          </div>
        </section>
      )}

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