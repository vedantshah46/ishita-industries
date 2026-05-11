import SEO from '../../components/SEO/SEO'
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
      <SEO
        title="Precision Brass Components Manufacturer in Jamnagar, India"
        description="Ishita Industries is a leading ISO 9001 certified brass components manufacturer in Jamnagar, India. Precision CNC turned, forged, milling, stamped & extrusion brass parts for electrical, automotive & industrial applications. 34+ years experience, 8500+ components, global exports."
        keywords="ishita industries, brass components manufacturer, precision brass parts India, brass turned components, brass forged components, CNC machining Jamnagar, brass manufacturer India, brass electrical parts, brass automotive components, OEM brass parts exporter, industrial brass components, brass fasteners manufacturer, brass extrusion rods, CPVC PPR inserts, brass hollow rods"
        path="/"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'Ishita Industries',
          url: 'https://www.ishitabrass.com',
          potentialAction: {
            '@type': 'SearchAction',
            target: 'https://www.ishitabrass.com/product?q={search_term_string}',
            'query-input': 'required name=search_term_string',
          },
        }}
      />
      <IntroAnimation />
      <Navbar />
      <HeroSection />

      {/* Strip 1: between Hero and About — sets the industrial tone */}
      {/* <MarqueeTicker items={TICKER_ITEMS_1} speed={30} variant="light" /> */}

      <AboutSection />
      <ComponentsDeliveredSection />
      <PrecisionExpertiseSection />
      <PrecisionComponentsSection />
      <IndustrialComponentsSection />
      <CapabilitiesSectionNew />

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
