import SEO from '../../components/SEO/SEO'
import Navbar from '../../components/Navbar/NavbarRouter'
import Footer from '../../components/Footer/Footer'
import QualityHeroSection from './QualityHeroSection'
import CertificationQualitySection from './CertificationQualitySection'
import QualityApproachSection from './QualityApproachSection'
import QualityDeclarationsSection from './QualityDeclarationsSection'
import QualityEquipmentSection from './QualityEquipmentSection'
import FreeToContactUsSection from '../HomePage/FreeToContactUsSection'

function QualityPage() {
  return (
    <>
      <SEO
        title="Quality Assurance - ISO 9001 Certified Brass Manufacturing"
        description="Ishita Industries maintains ISO 9001:2015 certified quality standards across all brass component manufacturing. Advanced inspection equipment, rigorous testing protocols, and comprehensive quality declarations ensure every component meets international standards."
        keywords="quality assurance brass manufacturing, ISO 9001 brass components, brass quality control, precision measurement brass, quality testing brass parts, certified brass manufacturer India"
        path="/quality"
      />
      <Navbar />
      <QualityHeroSection />
      <CertificationQualitySection />
      <QualityApproachSection />
      <QualityDeclarationsSection />
      <QualityEquipmentSection />
      <FreeToContactUsSection />
      <Footer />
    </>
  )
}

export default QualityPage
