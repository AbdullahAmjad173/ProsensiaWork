import React from "react";
import "./Features.css";
import { FaShieldAlt, FaCogs, FaFan, FaBolt } from "react-icons/fa";

function Features() {
  return (
    <div className="features">
      {/* First 3 Boxes (Overlapping Header Background) */}
      <div className="overlap-section">
        <div className="top-boxes">
          <div className="feature-item">
            <FaFan />
            <h3>HVAC Solution</h3>
            <p>Optimized air conditioning systems for efficiency, cost savings, and performance.</p>
          </div>

          <div className="feature-item">
            <FaCogs />
            <h3>Smart Controls</h3>
            <p>Real-time monitoring and remote management for seamless AC control.</p>
          </div>

          <div className="feature-item">
            <FaShieldAlt />
            <h3>Admin Control</h3>
            <p>Advanced tools for scheduling, tracking, and managing operations.</p>
          </div>
        </div>
      </div>

      {/* How We Help You? */}
      <div className="how-we-help">
        <h3>How We Help You?</h3>
      </div>

      {/* Bottom 3 Boxes */}
      <div className="bottom-boxes">
        <div className="feature-item">
          <FaShieldAlt />
          <h3>Admin Contract</h3>
          <p>Tailored administrative agreements for smooth and efficient service management.</p>
        </div>

        <div className="feature-item">
          <FaCogs />
          <h3>Custom Built Device</h3>
          <p>Personalized hardware solutions designed for maximum efficiency.</p>
        </div>

        <div className="feature-item">
          <FaBolt />
          <h3>Energy Management</h3>
          <p>Smart energy optimization for sustainability and reduced costs.</p>
        </div>
      </div>
    </div>
  );
}

export default Features;