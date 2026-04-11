import Navbar from '../../components/Navbar/NavbarRouter'
import AboutHeroSection from './AboutHeroSection'
import ManufacturingInfrastructureSection from './ManufacturingInfrastructureSection'
import MeetOurTeamSection from './MeetOurTeamSection'
import CertificationSection from './CertificationSection'
import QualityAssuranceSection from './QualityAssuranceSection'

function AboutPage() {
  return (
    <>
      <Navbar />
      <AboutHeroSection />
      <MeetOurTeamSection />
      <ManufacturingInfrastructureSection />
      <CertificationSection />
      <QualityAssuranceSection />
    </>
  )
}

export default AboutPage
