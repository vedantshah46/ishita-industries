import React, { useEffect } from 'react';
import SEO from '../../components/SEO/SEO';
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
      <SEO
        title="Sustainability - Responsible Brass Manufacturing"
        description="Ishita Industries is committed to sustainable brass manufacturing practices. Learn about our people-first approach, workplace safety standards, and environmental responsibility initiatives in Jamnagar, India."
        keywords="sustainable brass manufacturing, green manufacturing India, responsible brass production, environmental brass manufacturer, workplace safety brass industry, sustainable industrial practices"
        path="/sustainability"
      />
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

