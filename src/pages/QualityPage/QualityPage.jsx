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
