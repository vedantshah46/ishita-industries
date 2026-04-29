import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
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
