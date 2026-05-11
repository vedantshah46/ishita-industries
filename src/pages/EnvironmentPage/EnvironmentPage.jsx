import React, { useEffect } from 'react';
import SEO from '../../components/SEO/SEO';
import Navbar from '../../components/Navbar/NavbarRouter';
import Footer from '../../components/Footer/Footer';
import EnvironmentHeroSection from './EnvironmentHeroSection';
import EnvironmentContentSection from './EnvironmentContentSection';
import EnvironmentActionsSection from './EnvironmentActionsSection';

function EnvironmentPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO
        title="Environmental Responsibility - Green Brass Manufacturing"
        description="Ishita Industries is committed to environmentally responsible brass manufacturing. Waste reduction, energy efficiency, brass recycling programs, and eco-friendly production processes in our Jamnagar facility."
        keywords="environmental brass manufacturing, green brass production, brass recycling, eco-friendly manufacturing India, sustainable brass components, environmental responsibility brass industry"
        path="/environment"
      />
      <Navbar />
      <EnvironmentHeroSection />
      <EnvironmentContentSection />
      <EnvironmentActionsSection />
      <Footer />
    </>
  );
}

export default EnvironmentPage;
