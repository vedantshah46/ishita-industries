import Navbar from '../../components/Navbar/Navbar'
import AboutSection from './AboutSection'
import CapabilitiesSectionNew from './CapabilitiesSectionNew'
import HeroSection from './HeroSection'
import PrecisionExpertiseSection from './PrecisionExpertiseSection'
import PrecisionComponentsSection from './PrecisionComponentsSection'
import IndustrialComponentsSection from './IndustrialComponentsSection'
import UniqueSellingPropositionSection from './UniqueSellingPropositionSection'

function Homepage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <CapabilitiesSectionNew />
      <PrecisionExpertiseSection />
      <PrecisionComponentsSection />
      <IndustrialComponentsSection />
      <UniqueSellingPropositionSection />
    </>
  )
}

export default Homepage
