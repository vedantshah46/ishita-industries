import SEO from '../../components/SEO/SEO'
import Navbar from '../../components/Navbar/NavbarRouter'
import Footer from '../../components/Footer/Footer'
import ImportExportHeroSection from './ImportExportHeroSection'
import StrategicImportsSection from './StrategicImportsSection'
import WorkWithUsSection from './WorkWithUsSection'

function ImportExportPage() {
  return (
    <>
      <SEO
        title="Import & Export - International Brass Components Trade"
        description="Ishita Industries is a trusted brass components importer and exporter. Strategic imports of raw materials and global exports of finished precision brass parts to Europe, USA, Middle East and worldwide markets."
        keywords="brass import export India, brass components exporter, brass parts international trade, brass raw material importer, brass manufacturer exporter Jamnagar, international brass supplier"
        path="/import-export"
      />
      <Navbar />
      <ImportExportHeroSection />
      <StrategicImportsSection />
      <WorkWithUsSection />
      <Footer />
    </>
  )
}

export default ImportExportPage
