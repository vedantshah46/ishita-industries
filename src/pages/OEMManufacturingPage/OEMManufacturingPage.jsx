import React from 'react';
import SEO from '../../components/SEO/SEO';
import Navbar from '../../components/Navbar/NavbarRouter';
import Footer from '../../components/Footer/Footer';
import ServiceHeroSection from '../../components/ServicePageComponents/ServiceHeroSection';
import ServiceSection from '../../components/ServicePageComponents/ServiceSection';
import ServiceQuoteBar from '../../components/ServicePageComponents/ServiceQuoteBar';
import ServicePromiseSection from '../../components/ServicePageComponents/ServicePromiseSection';

import heroBanner from '../../assets/oem-service.png';

const OEMManufacturingPage = () => {
  const services = [
    {
      title: "Precision Machining",
      desc: "Advanced CNC turning, milling, and machining solutions engineered for high-accuracy industrial and OEM components.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3"></circle>
          <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"></path>
        </svg>
      )
    },
    {
      title: "Custom Manufacturing",
      desc: "Flexible manufacturing services developed according to customer drawings, samples, and technical specifications.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
        </svg>
      )
    },
    {
      title: "Assembly & Kitting",
      desc: "Complete assembly and kitting solutions designed to simplify supply chains and deliver ready-to-install products.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
          <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
          <line x1="12" y1="22.08" x2="12" y2="12"></line>
        </svg>
      )
    },
    {
      title: "Quality Assurance",
      desc: "Strict inspection and quality control procedures ensuring consistent performance, dimensional accuracy, and reliability.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="m9 11 3 3L22 4"></path>
          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
        </svg>
      )
    },
    {
      title: "Surface Finishing",
      desc: "Professional finishing services including nickel plating, polishing, coating, laser marking, and custom treatments.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10c.92 0 1.76-.74 1.76-1.66 0-.43-.17-.83-.44-1.13-.23-.28-.32-.64-.32-1 0-.92.78-1.66 1.76-1.66h2.24c3.04 0 5.5-2.46 5.5-5.5C22 5.26 17.5 2 12 2z"></path>
        </svg>
      )
    },
    {
      title: "Global Logistics",
      desc: "Integrated export packaging and worldwide logistics support for safe, efficient, and timely international delivery.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="2" y1="12" x2="22" y2="12"></line>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
        </svg>
      )
    }
  ];

  const specs = [
    { label: 'STANDARD', value: 'ISO 9001:2015' },
    { label: 'CAPACITY', value: 'High-Volume OEM' }
  ];

  return (
    <>
      <SEO
        title="OEM Manufacturing & Engineering Solutions - Ishita Industries"
        description="Ishita Industries delivers advanced OEM manufacturing services built for precision, scalability, and reliable global production. CNC machining, custom manufacturing, quality assurance, and global logistics."
        keywords="OEM manufacturing India, precision OEM components, CNC machining OEM, custom OEM brass components, OEM engineering solutions, brass OEM manufacturer Jamnagar"
        path="/oem-manufacturing"
      />
      <Navbar />

      <ServiceHeroSection
        titleMain="OEM Manufacturing"
        titleLight="& Engineering Solutions."
        tagline="Advanced manufacturing services built for precision, scalability, and reliable global production."
        splitTitle="Precision Packaging Solutions"
        splitDesc="Our advanced packaging facility combines automated systems, custom labeling, and precision handling to deliver packaging solutions that ensure product safety, brand consistency, and efficient global distribution. From industrial packaging to private label presentation, every process is designed to meet international quality and logistics standards."
        heroImage={heroBanner}
        imageAlt="OEM Manufacturing Facility"
      />

      <ServiceSection
        kicker="TECHNICAL CAPABILITIES"
        title="Integrated Branding Services"
        services={services}
      />

      <ServiceQuoteBar
        text="Precision-engineered OEM components built to your exact specifications for global manufacturing success."
      />

      <ServicePromiseSection
        quoteText="Every OEM component is manufactured with strict dimensional accuracy, full traceability, and export-ready quality standards."
        specs={specs}
      />

      <Footer />
    </>
  );
};

export default OEMManufacturingPage;
