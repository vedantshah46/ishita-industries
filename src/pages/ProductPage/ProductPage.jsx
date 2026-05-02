import { useEffect } from 'react'
import Navbar from '../../components/Navbar/NavbarRouter'
import Footer from '../../components/Footer/Footer'
import ProductPrecisionSection from './ProductPrecisionSection'
import ProductIndustrialSection from './ProductIndustrialSection'
import ProductExtrusionSection from './ProductExtrusionSection'

function ProductPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

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
