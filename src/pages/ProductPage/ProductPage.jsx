import { useEffect } from 'react'
import Navbar from '../../components/Navbar/NavbarRouter'
import Footer from '../../components/Footer/Footer'
import ProductSection from '../../components/ProductSection/ProductSection'
import { CATEGORIES } from '../../data/categories'

function ProductPage() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <>
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
