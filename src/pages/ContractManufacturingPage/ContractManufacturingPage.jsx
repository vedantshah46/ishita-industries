import React from 'react';
import SEO from '../../components/SEO/SEO';
import Navbar from '../../components/Navbar/NavbarRouter';
import Footer from '../../components/Footer/Footer';
import ServiceHeroSection from '../../components/ServicePageComponents/ServiceHeroSection';
import ServiceSection from '../../components/ServicePageComponents/ServiceSection';
import ServiceQuoteBar from '../../components/ServicePageComponents/ServiceQuoteBar';
import ServicePromiseSection from '../../components/ServicePageComponents/ServicePromiseSection';
import ContractKeyPointsSection from './ContractKeyPointsSection';

import heroBanner from '../../assets/contact-service.png';

const ContractManufacturingPage = () => {
  const specs = [
    { label: 'STANDARD', value: 'ISO 9001:2015' },
    { label: 'MODEL', value: 'OEM / ODM' }
  ];

  return (
    <>
      <SEO
        title="Contract Manufacturing & Production Excellence - Ishita Industries"
        description="Ishita Industries provides complete contract manufacturing services for precision components, fasteners, and custom-engineered products with a strong focus on quality, consistency, and cost efficiency."
        keywords="contract manufacturing India, OEM contract manufacturing, precision contract manufacturing brass, custom contract manufacturing Jamnagar, contract manufacturer India, brass fastener contract manufacturing"
        path="/contract-manufacturing"
      />
      <Navbar />

      <ServiceHeroSection
        titleMain="Contract Manufacturing"
        titleLight="& Production Excellence."
        tagline="Reliable manufacturing partnerships built for precision engineering, scalable production, and consistent global supply chain performance."
        splitTitle="Contract Manufacturing Solutions"
        splitDesc="ISHITA BRASS INDUSTRIES provides complete contract manufacturing services for precision components, fasteners, and custom-engineered products with a strong focus on quality, consistency, and cost efficiency. From production and quality inspection to packaging and global delivery, we offer reliable OEM solutions including custom branding, laser marking, and specialized packaging tailored to customer requirements."
        heroImage={heroBanner}
        imageAlt="Contract Manufacturing at Ishita Industries"
      />

      <ContractKeyPointsSection />

      <ServiceQuoteBar
        text="End-to-end contract manufacturing built for quality, consistency, and scalable global supply chain performance."
      />

      <ServicePromiseSection
        quoteText="Every contract manufacturing order is delivered with full traceability, customer-specified packaging, and on-time global dispatch."
        specs={specs}
      />

      <Footer />
    </>
  );
};

export default ContractManufacturingPage;
