import React from "react";
import {
  Phone,
  Mail,
  GitHub,
  LinkedIn,
  YouTube,
  Instagram,
  LocationOn,
} from "@mui/icons-material";
import "../componentStyles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Contact */}
        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p>
            <Phone fontSize="small" /> Phone: +91 9798786431
          </p>
          <p>
            <Mail fontSize="small" /> Email: ayushv3533e@gmail.com
          </p>
          <p>
            <LocationOn fontSize="small" style={{ marginRight: "6px" }} />
           Address: Plot No. 42, 2nd Floor, DLF Towers, Moti Nagar,
            New Delhi, India
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        {/* Customer Support */}
        <div className="footer-section support">
          <h3>Customer Support</h3>
          <ul>
            <li><a href="#">Shipping & Delivery</a></li>
            <li><a href="#">Returns & Refunds</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* About & Social */}
        <div className="footer-section about">
          <h3>About Us</h3>
          <p>
            An e-commerce platform dedicated to providing high-quality products across categories like fashion, electronics, home essentials, and more. 
          </p>
          <div className="social-links">
            <a href="#" target="_blank" rel="noreferrer">
              <GitHub className="social-icon" />
            </a>
            <a href="#" target="_blank" rel="noreferrer">
              <LinkedIn className="social-icon" />
            </a>
            <a href="#" target="_blank" rel="noreferrer">
              <YouTube className="social-icon" />
            </a>
            <a href="#" target="_blank" rel="noreferrer">
              <Instagram className="social-icon" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>&copy; 2024 Ayush Verma. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
