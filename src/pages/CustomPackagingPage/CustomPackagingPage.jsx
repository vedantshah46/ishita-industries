import React from 'react';
import Navbar from '../../components/Navbar/NavbarRouter';
import Footer from '../../components/Footer/Footer';
import ServiceHeroSection from '../../components/ServicePageComponents/ServiceHeroSection';
import ServiceSection from '../../components/ServicePageComponents/ServiceSection';
import ServiceQuoteBar from '../../components/ServicePageComponents/ServiceQuoteBar';
import ServicePromiseSection from '../../components/ServicePageComponents/ServicePromiseSection';

// Assets
import heroBanner from '../../Images/custom-packaging_hero-banner.png';

const CustomPackagingPage = () => {
  const services = [
    {
      title: "Logo Printing",
      desc: "High-precision multi-color flexographic and digital printing for crisp corporate branding on all surfaces.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 6 2 18 2 18 9"></polyline>
          <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
          <rect x="6" y="14" width="12" height="8"></rect>
        </svg>
      )
    },
    {
      title: "Laser Marking",
      desc: "Permanent, high-contrast laser etching for serialized identifiers, QR codes, and indelible metal branding.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 7V5a2 2 0 0 1 2-2h2"></path>
          <path d="M17 3h2a2 2 0 0 1 2 2v2"></path>
          <path d="M21 17v2a2 2 0 0 1-2 2h-2"></path>
          <path d="M7 21H5a2 2 0 0 1-2-2v-2"></path>
          <line x1="7" y1="12" x2="17" y2="12"></line>
          <line x1="12" y1="7" x2="12" y2="17"></line>
        </svg>
      )
    },
    {
      title: "Color Coding",
      desc: "Organizational color schemes applied through paint, plastics, or labeling to facilitate rapid sorting and logistics.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="13.5" cy="6.5" r=".5"></circle>
          <circle cx="17.5" cy="10.5" r=".5"></circle>
          <circle cx="8.5" cy="7.5" r=".5"></circle>
          <circle cx="6.5" cy="12.5" r=".5"></circle>
          <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10c.92 0 1.76-.74 1.76-1.66 0-.43-.17-.83-.44-1.13-.23-.28-.32-.64-.32-1 0-.92.78-1.66 1.76-1.66h2.24c3.04 0 5.5-2.46 5.5-5.5C22 5.26 17.5 2 12 2z"></path>
        </svg>
      )
    },
    {
      title: "Polybags & Labels",
      desc: "Custom gauge protective bagging with high-tack thermal transfer labels for individual part tracking.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 8V20.9932C21 21.5501 20.5552 22 20.0066 22H3.9934C3.44476 22 3 21.5501 3 20.9932V8H21ZM11 13V15H13V13H11ZM22 5V7H2V5H22ZM18 2V4H6V2H18Z"></path>
        </svg>
      )
    },
    {
      title: "Carton Packaging",
      desc: "Structural corrugation designed for export-grade durability and optimized pallet utilization.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
          <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
          <line x1="12" y1="22.08" x2="12" y2="12"></line>
        </svg>
      )
    },
    {
      title: "OEM Packaging",
      desc: "End-to-end private label fulfillment services, shipping directly from factory to consumer in your brand.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="8.5" cy="7" r="4"></circle>
          <polyline points="17 11 19 13 23 9"></polyline>
        </svg>
      )
    }
  ];

  const specs = [
    { label: 'STANDARD', value: 'ISO 9001:2015' },
    { label: 'LOGISTICS', value: 'EXW / FOB / DDP' }
  ];

  return (
    <>
      <Navbar />
      
      <ServiceHeroSection 
        titleMain="Custom Packaging"
        titleLight="& Private Label."
        tagline="Tailored packaging and labeling solutions designed to strengthen your brand identity and global distribution."
        splitTitle="Industrial Excellence in Presentation"
        splitDesc="Our facility integrates advanced printing and custom fabrication techniques to deliver packaging that protects and promotes. From specialized structural engineering to high-fidelity brand reproduction, we ensure every unit meets rigorous global standards."
        heroImage={heroBanner}
        imageAlt="Custom Packaging Facility"
      />

      <ServiceSection 
        kicker="TECHNICAL CAPABILITIES"
        title="Integrated Branding Services"
        services={services}
      />

      <ServiceQuoteBar 
        text="Built to enhance brand identity, product presentation, and supply chain efficiency." 
      />

      <ServicePromiseSection 
        quoteText="All products are professionally packed, accurately labeled, and prepared for seamless global distribution."
        specs={specs}
      />

      <Footer />
    </>
  );
};

export default CustomPackagingPage;
