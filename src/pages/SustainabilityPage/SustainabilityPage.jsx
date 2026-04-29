import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar/NavbarRouter';
import Footer from '../../components/Footer/Footer';
import SustainabilityHeroSection from './SustainabilityHeroSection';
import SustainabilityPeopleSection from './SustainabilityPeopleSection';
import SustainabilitySafetySection from './SustainabilitySafetySection';
import SustainabilityEnvSection from './SustainabilityEnvSection';
import './SustainabilityPage.css';

function SustainabilityPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="sustainability-page">
      <Navbar />

      <main className="sustainability-main-content">
        <SustainabilityHeroSection />
        <SustainabilityPeopleSection />
        <SustainabilitySafetySection />
        <SustainabilityEnvSection />
      </main>

      <Footer />
    </div>
  );
}

export default SustainabilityPage;

