import React from 'react';
import Header from './Header'; // Import Header from the src folder
import Features from './Features'; // Import Features from the src folder
import BenefitsSection from './BenefitsSection'; // Import the BenefitsSection component
import SmartCitySection from './SmartCitySection'; // Import the SmartCitySection component
import HowWeHelp from './HowWeHelp'; // Import the HowWeHelp component
import KeyFeatures from './KeyFeatures'; // Import the KeyFeatures component
import Footer from './Footer'; // Import the Footer component
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Features />
      <BenefitsSection /> {/* Add the BenefitsSection component */}
      <SmartCitySection /> {/* Add the SmartCitySection component */}
      <HowWeHelp /> {/* Add the HowWeHelp component */}
      <KeyFeatures /> {/* Add the KeyFeatures component */}
      <Footer /> {/* Add the Footer component at the bottom of the page */}
    </div>
  );
}

export default App;