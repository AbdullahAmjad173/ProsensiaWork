import React from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp, FaLinkedin } from 'react-icons/fa'; // Import social media icons
import './Footer.css'; // Import the CSS for the footer

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-left">
          <h2 className="company-name">ProSensia</h2>
          <p className="company-tagline">
            We make HVAC systems{' '}
            <span style={{ color: 'green' }}>green</span>,{' '}
            <span style={{ color: 'blue' }}>sustainable</span>, and{' '}
            <span style={{ color: 'orange' }}>highly effective</span>.
          </p>
        </div>
        <div className="footer-right">
          <nav className="footer-nav">
            <a href="/">Home</a>
            <a href="/about">About Us</a>
            <a href="/services">Services</a>
            <a href="/contact">Contact Us</a>
            <a href="/blog">Blog</a>
          </nav>
          <div className="social-icons">
            <a href="https://facebook.com" aria-label="Facebook"><FaFacebook /></a>
            <a href="https://instagram.com" aria-label="Instagram"><FaInstagram /></a>
            <a href="https://wa.me" aria-label="WhatsApp"><FaWhatsapp /></a>
            <a href="https://linkedin.com" aria-label="LinkedIn"><FaLinkedin /></a>
          </div>
        </div>
      </div>
      <div className="yellow-line"></div>
      <div className="footer-bottom">
        <p>© ProSensia 2025. All Rights Reserved.</p>
        <p>Designed with ❤️ by ProSensia Team.</p>
      </div>
    </footer>
  );
}

export default Footer;