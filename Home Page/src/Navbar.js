import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">ProSensia</div>
      <ul className="navbar-links">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About Us</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/contact">Contact Us</a></li>
        <li><a href="/blog">Blog</a></li>
        <li><a href="/event">Event</a></li>
        <li>
          <a href="/schedule" className="schedule-meeting">Schedule a Meeting</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;