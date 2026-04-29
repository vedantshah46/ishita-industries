import Navbar from '../../components/Navbar/NavbarRouter'
import Footer from '../../components/Footer/Footer'
import ProductPrecisionSection from './ProductPrecisionSection'
import ProductIndustrialSection from './ProductIndustrialSection'
import ProductExtrusionSection from './ProductExtrusionSection'

function ProductPage() {
  return (
    <>
      <Navbar />
      
      {/* Product Grid Sections */}
      <ProductPrecisionSection />
      <ProductIndustrialSection />
      <ProductExtrusionSection />
      
      <Footer />
    </>
  )
}

export default ProductPage
