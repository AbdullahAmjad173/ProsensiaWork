import React from 'react';
import Navbar from './Navbar';
import './Header.css';

function Header() {
  return (
    <div className="header">
      <Navbar /> {/* Include the Navbar */}
      <div className="header-content">
        <h1>Driving Smarter HVAC Solutions</h1>
        <p>
          Transforming air conditioning with innovative timetable execution algorithms{"\n"}
          and seamless web-based control, enabling smarter, energy-efficient{"\n"}
          cooling solutions tailored for modern living.
        </p>
        <div className="cta">
          <button>Get In Touch</button>
        </div>
      </div>
    </div>
  );
}

export default Header;