import Navbar from '../../components/Navbar/NavbarRouter'
import IntroAnimation from '../../components/IntroAnimation/IntroAnimation'
import AboutSection from './AboutSection'
import CapabilitiesSectionNew from './CapabilitiesSectionNew'
import HeroSection from './HeroSection'
import PrecisionExpertiseSection from './PrecisionExpertiseSection'
import PrecisionComponentsSection from './PrecisionComponentsSection'
import IndustrialComponentsSection from './IndustrialComponentsSection'
import FactsSection from './FactsSection'
import InternationalReachSection from './InternationalReachSection'
import FreeToContactUsSection from './FreeToContactUsSection'
import UniqueSellingPropositionSection from './UniqueSellingPropositionSection'
import Footer from '../../components/Footer/Footer'

function Homepage() {
  return (
    <>
      <IntroAnimation />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <CapabilitiesSectionNew />
      <PrecisionExpertiseSection />
      <PrecisionComponentsSection />
      <IndustrialComponentsSection />
      <UniqueSellingPropositionSection />
      <FactsSection />
      <InternationalReachSection />
      <FreeToContactUsSection />
      <Footer />
    </>
  )
}

export default Homepage
