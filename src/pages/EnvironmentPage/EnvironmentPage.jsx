import React, { useEffect } from 'react';
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
      <Navbar />
      <EnvironmentHeroSection />
      <EnvironmentContentSection />
      <EnvironmentActionsSection />
      <Footer />
    </>
  );
}

export default EnvironmentPage;
