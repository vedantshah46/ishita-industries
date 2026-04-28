import Navbar from '../../components/Navbar/NavbarRouter'
import IntroAnimation from '../../components/IntroAnimation/IntroAnimation'
import HeroSection from './HeroSection'
import AboutSection from './AboutSection'
import CapabilitiesSectionNew from './CapabilitiesSectionNew'
import PrecisionExpertiseSection from './PrecisionExpertiseSection'
import PrecisionComponentsSection from './PrecisionComponentsSection'
import IndustrialComponentsSection from './IndustrialComponentsSection'
import FactsSection from './FactsSection'
import ComponentsDeliveredSection from './ComponentsDeliveredSection'
import InternationalReachSection from './InternationalReachSection'
import FreeToContactUsSection from './FreeToContactUsSection'
import KnowledgeHubSection from './KnowledgeHubSection'
import UniqueSellingPropositionSection from './UniqueSellingPropositionSection'
import MarqueeTicker from '../../components/MarqueeTicker/MarqueeTicker'
import Footer from '../../components/Footer/Footer'

// ── Marquee ticker content ────────────────────────────────────────
// Shown in two strips to break up the page visually.
// Purely decorative — aria-hidden is set inside MarqueeTicker.
const TICKER_ITEMS_1 = [
  'Precision Engineering',
  'Brass Manufacturing',
  'ISO 9001 Certified',
  'Global Exports',
  '34+ Years Experience',
  '8500+ Components',
  'CNC & VMC Machining',
]

const TICKER_ITEMS_2 = [
  'Custom OEM Parts',
  'Jamnagar Brass City',
  'Electrical Components',
  'Automotive Parts',
  'Fastener Solutions',
  'German-Standard Precision',
  '22,000 sq ft Facility',
]

function Homepage() {
  return (
    <>
      <IntroAnimation />
      <Navbar />
      <HeroSection />

      {/* Strip 1: between Hero and About — sets the industrial tone */}
      <MarqueeTicker items={TICKER_ITEMS_1} speed={30} variant="light" />

      <AboutSection />
      <ComponentsDeliveredSection />
      <PrecisionExpertiseSection />
      <PrecisionComponentsSection />
      <CapabilitiesSectionNew />
      <IndustrialComponentsSection />

      {/* Strip 2: between Industrial and USP — reversed for variety */}
      <MarqueeTicker items={TICKER_ITEMS_2} speed={35} direction="right" variant="dark" />
      <FactsSection />
      <UniqueSellingPropositionSection />
      <InternationalReachSection />
      <FreeToContactUsSection />
      <KnowledgeHubSection />
      <Footer />
    </>
  )
}

export default Homepage
