import React from 'react';
import Navbar from '../../components/Navbar/NavbarRouter';
import Footer from '../../components/Footer/Footer';
import ServiceHeroSection from '../../components/ServicePageComponents/ServiceHeroSection';
import ServiceSection from '../../components/ServicePageComponents/ServiceSection';
import ServiceQuoteBar from '../../components/ServicePageComponents/ServiceQuoteBar';
import ServicePromiseSection from '../../components/ServicePageComponents/ServicePromiseSection';
import AssemblyAdvantagesSection from './AssemblyAdvantagesSection';

// Assets
import heroBanner from '../../Images/Industrial-packaging_hero-banner.png';

const AssemblyKittingPage = () => {
  const services = [
    {
      title: "Mechanical Assembly",
      desc: "High-precision integration of complex mechanical components and systems.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"></path>
          <circle cx="12" cy="12" r="3"></circle>
        </svg>
      )
    },
    {
      title: "Sub-Assemblies",
      desc: "Modular production of component groups for streamlined final manufacturing.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
          <polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline>
          <polyline points="7.5 19.79 7.5 14.6 3 12"></polyline>
          <polyline points="21 12 16.5 14.6 16.5 19.79"></polyline>
          <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
          <line x1="12" y1="22.08" x2="12" y2="12"></line>
        </svg>
      )
    },
    {
      title: "Product Kitting",
      desc: "Custom-bundled sets of parts, ready for immediate field or factory use.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path>
          <path d="M3.3 7 12 12l8.7-5"></path>
          <path d="M12 22V12"></path>
        </svg>
      )
    },
    {
      title: "Fastener Assemblies",
      desc: "Specialized hardware kitting with meticulous count and torque verification.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a2 2 0 0 1 2.82 0l.3.3a2 2 0 0 1 0 2.82l-3.77 3.77a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a2 2 0 0 1 2.82 0l.3.3a2 2 0 0 1 0 2.82l-3.77 3.77a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a2 2 0 0 1 2.82 0l.3.3a2 2 0 0 1 0 2.82l-3.77 3.77a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a2 2 0 0 1 2.82 0l.3.3a2 2 0 0 1 0 2.82l-3.77 3.77"></path>
          <path d="m2 22 5-5"></path>
          <path d="M9.5 14.5 16 21"></path>
          <path d="m17 22 5-5"></path>
          <path d="m8 13 5-5"></path>
          <path d="m14 7 5-5"></path>
        </svg>
      )
    },
    {
      title: "Functional Testing",
      desc: "Rigorous quality checks for every assembled unit before dispatch.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="m9 11 3 3L22 4"></path>
          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
        </svg>
      )
    },
    {
      title: "Custom Labeling",
      desc: "Serialized tracking, branding, and compliance labeling for all kits.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
          <line x1="7" y1="7" x2="7.01" y2="7"></line>
        </svg>
      )
    }
  ];

  const specs = [
    { label: 'PRECISION', value: '100% Verified' },
    { label: 'CAPACITY', value: 'High-Volume Ready' }
  ];

  return (
    <>
      <Navbar />

      <ServiceHeroSection
        titleMain="Assembly &"
        titleLight="Kitting Services."
        tagline="Precision assembly and specialized kitting solutions designed to streamline your supply chain and enhance product readiness."
        splitTitle="Built For Efficiency."
        splitDesc="We provide reliable assembly and kitting solutions as part of our end-to-end manufacturing services. Our dedicated facility enables us to deliver fully assembled or sub-assembled components based on precise customer specifications."
        heroImage={heroBanner}
        imageAlt="Industrial Packaging and Assembly Facility"
      />

      <ServiceSection
        kicker="Core operations"
        title="Production Capabilities"
        services={services}
      />

      <AssemblyAdvantagesSection />

      <ServiceQuoteBar
        text="Streamlining complex manufacturing through integrated assembly and precision kitting."
      />


      <Footer />
    </>
  );
};

export default AssemblyKittingPage;
