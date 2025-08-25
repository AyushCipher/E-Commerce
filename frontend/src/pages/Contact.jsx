import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../pages/Contact.css';
import emailjs from "emailjs-com";

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

   const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .send(
        "service_fu9ep7b",   
        "template_kjl8hc3",  
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "3TmcV4IsxxJ0n5Fku"    
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          setStatus("✅ Message sent successfully!");
          setFormData({ name: "", email: "", subject: "", message: "" });
        },
        (error) => {
          console.log("FAILED...", error.text);
          setStatus("❌ Failed to send message. Please try again.");
        }
      )
      .finally(() => {
        setIsSubmitting(false);
        setTimeout(() => setStatus(""), 3000);
      });
  };

  const contactInfo = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
        </svg>
      ),
      title: "Our Office",
      info: ["123 Shop Street", "Commerce City, CC 12345", "United States"]
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
        </svg>
      ),
      title: "Phone",
      info: ["+1 (555) 123-4567", "+1 (555) 123-4568", "Mon-Fri: 9AM-6PM EST"]
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
        </svg>
      ),
      title: "Email",
      info: ["info@shopeasy.com", "support@shopeasy.com", "sales@shopeasy.com"]
    },
    // {
    //   icon: (
    //     <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    //       <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
    //     </svg>
    //   ),
    //   title: "Live Chat",
    //   info: ["24/7 Customer Support", "Average response: 2 minutes", "Chat with our experts"]
    // }
  ];

  const faqItems = [
    {
      question: "How long does shipping take?",
      answer: "Standard shipping takes 3-7 business days. Express shipping is available for 1-2 business days delivery."
    },
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy for all items in original condition. Returns are free for defective products."
    },
    {
      question: "Do you ship internationally?",
      answer: "Yes, we ship to over 100 countries worldwide. International shipping fees and delivery times vary by location."
    },
    {
      question: "How can I track my order?",
      answer: "Once your order ships, you'll receive a tracking number via email. You can also track orders in your account dashboard."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, Apple Pay, Google Pay, and bank transfers for large orders."
    },
    {
    question: "Can I change or cancel my order after placing it?",
    answer: "Yes, orders can be changed or canceled within 24 hours of placement. Please contact our support team as soon as possible."
  }
  ];

  return (
    <>
      <Navbar />
      
      <div className="contact-page">
        {/* Hero Section */}
        <section className="contact-hero">
          <div className="contact-hero-content">
            <h1 className="contact-hero-title">Get in Touch</h1>
            <p className="contact-hero-subtitle">
              We're here to help! Reach out to us with any questions, concerns, or feedback.
            </p>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="contact-info-section">
          <div className="contact-container">
            <div className="contact-info-grid">
              {contactInfo.map((info, index) => (
                <div key={index} className="contact-info-card">
                  <div className="contact-info-icon">{info.icon}</div>
                  <h3 className="contact-info-title">{info.title}</h3>
                  <div className="contact-info-details">
                    {info.info.map((line, lineIndex) => (
                      <p key={lineIndex}>{line}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form and Map */}
        <section className="contact-form-section">
          <div className="contact-container">
            <div className="contact-form-grid">
              {/* Contact Form */}
              <div className="contact-form-wrapper">
                <h2>Send us a Message</h2>
                <p className="form-description">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
                
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="subject">Subject *</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="order">Order Support</option>
                      <option value="technical">Technical Issue</option>
                      <option value="billing">Billing Question</option>
                      <option value="partnership">Partnership Opportunity</option>
                      <option value="feedback">Feedback</option>
                    </select>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="6"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell us how we can help you..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className={`submit-button ${isSubmitting ? 'submitting' : ''}`}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>

              {/* Map/Additional Info */}
              <div className="contact-map-wrapper">
                <div className="map-placeholder">
                   {/* Embedded Google Map for SRM AP */}
                   <div className="map-section" style={{ width: "100%", height: "100%" }}>
                      <iframe className="map-iframe"
                        width="100%" 
                        height="350"  
                        src="https://www.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Neerukonda%20Village,%20SRMAP%20University,%20Mangalgiri%20Mandal,%20Amravati,%20Andhra%20Pradesh+(ShopEasy)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=near&amp;output=embed">
                    </iframe>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="contact-faq-section">
          <div className="contact-container">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <div className="faq-grid">
              {faqItems.map((faq, index) => (
                <div key={index} className="faq-item">
                  <h4 className="faq-question">{faq.question}</h4>
                  <p className="faq-answer">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="contact-cta-section">
          <div className="contact-container">
            <div className="cta-content">
              <h2>Still Have Questions?</h2>
              <p>Our customer service team is always ready to help you with any inquiries.</p>
              <div className="cta-buttons">
                <button className="cta-button primary">Start Live Chat</button>
                <button className="cta-button secondary">Browse Help Center</button>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}

export default Contact;