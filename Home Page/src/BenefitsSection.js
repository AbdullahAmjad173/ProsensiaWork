import React from 'react';
import './BenefitsSection.css';
import pic1 from './pic1.png'; // Import the images
import pic2 from './pic2.png';
import pic3 from './pic3.png';

function BenefitsSection() {
  return (
    <div className="benefits-section">
      {/* First Row: pic1 on the right */}
      <div className="benefit-item">
        <div className="text">
          <h3>Manual monitoring of AC systems is costing you <span className="highlight">time, energy, money</span></h3>
          <p>
            Traditional AC monitoring methods are inefficient and prone to human error, leading to increased costs and energy waste.
          </p>
        </div>
        <img src={pic1} alt="Manual Monitoring" className="image" />
      </div>

      {/* Second Row: pic2 on the left */}
      <div className="benefit-item">
        <img src={pic2} alt="Smarter Energy Management" className="image" />
        <div className="text">
          <h3>Smarter energy <span className="highlight">management</span> for smarter governance—let us help you achieve it</h3>
          <p>
            Our intelligent HVAC solutions provide real-time monitoring and optimization, ensuring maximum efficiency and comfort.
          </p>
        </div>
      </div>

      {/* Third Row: pic3 on the left */}
      <div className="benefit-item">
        <div className="text">
          <h3>Inefficient HVAC systems could be <span className="highlight">draining, resources</span> without you knowing!</h3>
          <p>
            Inefficient HVAC outcomes can significantly increase your utility bills and carbon footprints. Our solutions help you avoid these issues.
          </p>
        </div>
        <img src={pic3} alt="Manual Monitoring" className="image" />
      </div>
    </div>
  );
}

export default BenefitsSection;