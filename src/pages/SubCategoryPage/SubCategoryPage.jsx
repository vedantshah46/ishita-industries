import { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Navbar from '../../components/Navbar/NavbarRouter'
import Footer from '../../components/Footer/Footer'
import ProductSection from '../../components/ProductSection/ProductSection'
import { getCategoryBySlug } from '../../data/categories'

function SubCategoryPage() {
  const { superCat } = useParams()
  const navigate     = useNavigate()
  const category     = getCategoryBySlug(superCat)

  useEffect(() => { window.scrollTo(0, 0) }, [superCat])

  // Unknown super-category → back to products
  useEffect(() => {
    if (!category) navigate('/product', { replace: true })
  }, [category, navigate])

  if (!category) return null

  return (
    <>
      <Navbar />
      <ProductSection
        kicker={category.kicker}
        title={category.name}
        breadcrumbs={[
          { label: 'Products', to: '/product' },
          { label: category.name },
        ]}
        items={category.subcategories}
        basePath={`/product/${superCat}`}
        skeletonCount={category.subcategories.length}
      />
      <Footer />
    </>
  )
}

export default SubCategoryPage
