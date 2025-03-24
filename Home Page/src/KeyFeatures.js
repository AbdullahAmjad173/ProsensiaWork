import React, { useRef } from 'react';
import './KeyFeatures.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // Import arrow icons
import { FaChartLine, FaTools, FaGasPump, FaLeaf, FaMoneyBillAlt, FaCloud } from 'react-icons/fa'; // Import icons for boxes

function KeyFeatures() {
  const scrollContainer = useRef(null);

  const scrollLeft = () => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className="key-features-section">
      <h2>Our Key Features</h2>
      <div className="scroll-container" ref={scrollContainer}>
        <div className="feature-box">
          <FaChartLine className="feature-icon" />
          <h3>Real-Time Monitoring</h3>
          <p>Continuous system monitoring for instant insights and adjustments.</p>
        </div>

        <div className="feature-box">
          <FaTools className="feature-icon" />
          <h3>Predictive Maintenance</h3>
          <p>AI-powered predictions to prevent issues before they occur.</p>
        </div>

        <div className="feature-box">
          <FaGasPump className="feature-icon" />
          <h3>Harmful Gas Protection</h3>
          <p>Advanced sensors to detect and protect against harmful gases.</p>
        </div>

        <div className="feature-box">
          <FaLeaf className="feature-icon" />
          <h3>Energy Savings</h3>
          <p>Optimize energy consumption for significant cost reductions.</p>
        </div>

        <div className="feature-box">
          <FaMoneyBillAlt className="feature-icon" />
          <h3>Bill Savings</h3>
          <p>Reduce your energy bills through intelligent HVAC management.</p>
        </div>

        <div className="feature-box">
          <FaCloud className="feature-icon" />
          <h3>Save CO2</h3>
          <p>Reduce the release of CO2, which can be harmful for the environment.</p>
        </div>
      </div>

      {/* Scroll Arrows */}
      <button className="scroll-arrow left" onClick={scrollLeft}>
        <FaArrowLeft />
      </button>
      <button className="scroll-arrow right" onClick={scrollRight}>
        <FaArrowRight />
      </button>
    </div>
  );
}

export default KeyFeatures;