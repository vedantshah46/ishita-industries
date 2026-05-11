import { useEffect } from 'react'
import SEO from '../../components/SEO/SEO'
import Navbar from '../../components/Navbar/NavbarRouter'
import Footer from '../../components/Footer/Footer'
import ProductSection from '../../components/ProductSection/ProductSection'
import { CATEGORIES } from '../../data/categories'

function ProductPage() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <>
      <SEO
        title="Brass Components & Products - Precision, Industrial & Extrusion"
        description="Browse Ishita Industries' complete range of precision brass components: CNC turned, forged, milling, pressed, stamped, casting parts. Industrial components for electrical, automotive, fastener, engineering & CPVC PPR applications. Brass extrusion rods, hollow rods & profile sections."
        keywords="brass components, brass turned parts, brass forged parts, brass milling components, brass stamped components, brass casting, brass electrical components, brass automotive parts, brass fasteners, CPVC PPR brass inserts, brass extrusion rods, brass hollow rods, brass profile rods, precision brass products, industrial brass parts"
        path="/product"
      />
      <Navbar />
      {CATEGORIES.map(cat => (
        <ProductSection
          key={cat.slug}
          kicker={cat.kicker}
          title={cat.name}
          items={cat.subcategories}
          basePath={`/product/${cat.slug}`}
          skeletonCount={cat.subcategories.length}
        />
      ))}
      <Footer />
    </>
  )
}

export default ProductPage
