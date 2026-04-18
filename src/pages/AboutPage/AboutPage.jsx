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
  return (
    <>
      <Navbar />
      <AboutHeroSection />
      <MeetOurTeamSection />
      <ManufacturingInfrastructureSection />
      <FacilityExpertiseSection />
      <CertificationSection />
      <QualityAssuranceSection />
      <FastenerStandardsSection />
      <PerformanceResultsSection />
      <UniqueSellingPropositionSection/>
      <GlobalReachSection />
      <ArchitecturalLedgerSection />
      <FreeToContactUsSection/>
      <Footer/>
    </>
  );
}

export default AboutPage;
