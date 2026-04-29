import Navbar from '../../components/Navbar/NavbarRouter'
import Footer from '../../components/Footer/Footer'
import ImportExportHeroSection from './ImportExportHeroSection'
import StrategicImportsSection from './StrategicImportsSection'
import WorkWithUsSection from './WorkWithUsSection'

function ImportExportPage() {
  return (
    <>
      <Navbar />
      <ImportExportHeroSection />
      <StrategicImportsSection />
      <WorkWithUsSection />
      <Footer />
    </>
  )
}

export default ImportExportPage
