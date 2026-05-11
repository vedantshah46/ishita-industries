import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import SEO from '../../components/SEO/SEO'
import Navbar from "../../components/Navbar/NavbarRouter";
import AboutHeroSection from "./AboutHeroSection";
import ManufacturingInfrastructureSection from "./ManufacturingInfrastructureSection";
import FacilityExpertiseSection from "./FacilityExpertiseSection";
import MeetOurTeamSection from "./MeetOurTeamSection";
import CertificationSection from "./CertificationSection";
import FastenerStandardsSection from "./FastenerStandardsSection";
import PerformanceResultsSection from "./PerformanceResultsSection";
import GlobalReachSection from "./GlobalReachSection";
import ArchitecturalLedgerSection from "./ArchitecturalLedgerSection";
import QualityAssuranceSection from "./QualityAssuranceSection";
import UniqueSellingPropositionSection from '../HomePage/UniqueSellingPropositionSection'
import FreeToContactUsSection from '../HomePage/FreeToContactUsSection'
import Footer from '../../components/Footer/Footer'

function AboutPage() {
  const { hash } = useLocation()

  useEffect(() => {
    if (hash) {
      // Small delay so the DOM is painted before scrolling
      setTimeout(() => {
        const el = document.querySelector(hash)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    }
  }, [hash])

  return (
    <>
      <SEO
        title="About Us - Brass Components Manufacturer Since 1990"
        description="Learn about Ishita Industries, a 34+ year old ISO 9001 certified brass components manufacturer in Jamnagar, India. Discover our infrastructure, 22,000 sq ft manufacturing facility, CNC & VMC machining capabilities, quality assurance processes, global reach and CSR initiatives."
        keywords="about ishita industries, brass manufacturer Jamnagar, brass manufacturing company India, ISO 9001 brass manufacturer, CNC machining facility, brass components factory, precision engineering company India, brass exporter Jamnagar Gujarat"
        path="/about"
      />
      <Navbar />
      <div id="core-value"><AboutHeroSection /></div>
      <MeetOurTeamSection />
      <div id="infrastructure"><ManufacturingInfrastructureSection /></div>
      <div id="our-capabilities"><FacilityExpertiseSection /></div>
      <CertificationSection />
      <div id="quality-assurance"><QualityAssuranceSection /></div>
      <FastenerStandardsSection />
      <div id="our-capabilities"><PerformanceResultsSection /></div>
      <div id="our-usp"><UniqueSellingPropositionSection /></div>
      <div id="across-the-globe"><GlobalReachSection /></div>
      <div id="csr"><ArchitecturalLedgerSection /></div>
      <FreeToContactUsSection />
      <Footer />
    </>
  );
}

export default AboutPage;
