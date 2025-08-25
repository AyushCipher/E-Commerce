import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../pages/About.css';

function About() {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
      bio: "With over 10 years in e-commerce, Sarah leads our vision for exceptional customer experiences."
    },
    {
      name: "Michael Chen",
      role: "CTO",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg",
      bio: "Technology enthusiast driving our platform's innovation and performance excellence."
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Marketing",
      image: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg",
      bio: "Creative strategist connecting brands with customers through compelling storytelling."
    },
    // {
    //   name: "David Kim",
    //   role: "Operations Director",
    //   image: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg",
    //   bio: "Logistics expert ensuring smooth operations and timely delivery worldwide."
    // }
  ];

  const stats = [
    { number: "500K+", label: "Happy Customers" },
    { number: "50K+", label: "Products Available" },
    { number: "100+", label: "Countries Served" },
    { number: "99.9%", label: "Uptime Guarantee" }
  ];

  const values = [
    {
      icon: "🎯",
      title: "Customer First",
      description: "Every decision we make is centered around delivering exceptional value and experience to our customers."
    },
    {
      icon: "🔒",
      title: "Trust & Security",
      description: "We prioritize the security of your data and transactions with industry-leading protection measures."
    },
    // {
    //   icon: "🌱",
    //   title: "Sustainability",
    //   description: "We're committed to sustainable practices that protect our environment for future generations."
    // },
    {
      icon: "🚀",
      title: "Innovation",
      description: "We continuously evolve our platform with cutting-edge technology and user-centric design."
    }
  ];

  return (
    <>
      <Navbar />
      
      <div className="about-page">
        {/* Hero Section */}
        <section className="about-hero">
          <div className="about-hero-content">
            <div className="about-hero-text">
              <h1 className="about-hero-title">About ShopEasy</h1>
              <p className="about-hero-subtitle">
                Transforming the way people shop online with innovative technology and exceptional service.  
                We strive to create a seamless, personalized, and reliable shopping experience for everyone.
              </p>
            </div>
            <div className="about-hero-image">
              <img src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg" alt="ShopEasy Team" />
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="about-story">
          <div className="about-container">
            <div className="story-content">
              <div className="story-text">
                <h2>Our Story</h2>
                <p>
                  Founded in 2020, ShopEasy began with a simple mission: to make online shopping 
                  accessible, enjoyable, and reliable for everyone. What started as a small team of 
                  passionate entrepreneurs has grown into a thriving e-commerce platform serving 
                  customers worldwide.
                </p>
                <p>
                  We believe that shopping should be more than just a transaction—it should be an 
                  experience that delights, inspires, and connects people with the products they love. 
                  Through innovative technology and unwavering commitment to customer satisfaction, 
                  we've built a platform that merchants trust and customers adore.
                </p>
                <p>
                  Today, we're proud to offer over 50,000 products from trusted brands and independent 
                  sellers, delivered to customers in more than 100 countries with the speed and 
                  reliability you deserve.
                </p>
              </div>
              <div className="story-image">
                <img src="https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg" alt="Our Journey" />
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="about-stats">
          <div className="about-container">
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <div key={index} className="stat-card">
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="about-values">
          <div className="about-container">
            <h2 className="section-title">Our Values</h2>
            <div className="values-grid">
              {values.map((value, index) => (
                <div key={index} className="value-card">
                  <div className="value-icon">{value.icon}</div>
                  <h3 className="value-title">{value.title}</h3>
                  <p className="value-description">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="about-team">
          <div className="about-container">
            <h2 className="section-title">Meet Our Team</h2>
            <div className="team-grid">
              {teamMembers.map((member, index) => (
                <div key={index} className="team-card">
                  <div className="team-image">
                    <img src={member.image} alt={member.name} />
                  </div>
                  <div className="team-info">
                    <h3 className="team-name">{member.name}</h3>
                    <p className="team-role">{member.role}</p>
                    <p className="team-bio">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="about-mission">
          <div className="about-container">
            <div className="mission-content">
              <h2>Our Mission</h2>
              <p className="mission-text">
                To democratize commerce by providing a platform where anyone can discover, 
                buy, and sell products with confidence, while fostering a community built 
                on trust, innovation, and shared success.
              </p>
              <div className="mission-points">
                <div className="mission-point">
                  <div className="mission-icon">🎯</div>
                  <div>
                    <h4>Empowering Businesses</h4>
                    <p>We help businesses of all sizes reach global markets and grow their revenue.</p>
                  </div>
                </div>
                <div className="mission-point">
                  <div className="mission-icon">❤️</div>
                  <div>
                    <h4>Delighting Customers</h4>
                    <p>Every interaction is designed to exceed expectations and build lasting relationships.</p>
                  </div>
                </div>
                <div className="mission-point">
                  <div className="mission-icon">🌍</div>
                  <div>
                    <h4>Global Impact</h4>
                    <p>We're committed to making a positive difference in communities worldwide.</p>
                  </div>
                </div>
                <div className="mission-point">
                    <div className="mission-icon">🎨</div>
                     <div>
                      <h4>Personalized Experience</h4>
                      <p>We tailor shopping journeys to match individual preferences and needs.</p>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}

export default About;