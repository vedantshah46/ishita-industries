import { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import SEO from '../../components/SEO/SEO'
import Navbar from '../../components/Navbar/NavbarRouter'
import Footer from '../../components/Footer/Footer'
import ProductSection from '../../components/ProductSection/ProductSection'
import { getCategoryBySlug, getSubcategoryBySlug } from '../../data/categories'
import { useProducts } from '../../hooks/useProducts'

function ProductListPage() {
  const { superCat, subCat } = useParams()
  const navigate             = useNavigate()
  const category             = getCategoryBySlug(superCat)
  const subcategory          = getSubcategoryBySlug(superCat, subCat)

  const { products, loading } = useProducts(superCat, subCat)

  useEffect(() => { window.scrollTo(0, 0) }, [superCat, subCat])

  useEffect(() => {
    if (!category || !subcategory) navigate('/product', { replace: true })
  }, [category, subcategory, navigate])

  if (!category || !subcategory) return null

  return (
    <>
      <SEO
        title={`${subcategory.name} - ${category.name} by Ishita Industries`}
        description={`Explore our range of ${subcategory.name.toLowerCase()} under ${category.name.toLowerCase()}. Precision manufactured brass components with strict quality control. ISO 9001 certified, made in Jamnagar, India.`}
        keywords={`${subcategory.name.toLowerCase()}, ${category.name.toLowerCase()}, brass ${subcategory.name.toLowerCase()}, ishita industries, brass manufacturer India`}
        path={`/product/${superCat}/${subCat}`}
      />
      <Navbar />
      <ProductSection
        kicker={category.name}
        title={subcategory.name}
        breadcrumbs={[
          { label: 'Products',     to: '/product' },
          { label: category.name,  to: `/product/${superCat}` },
          { label: subcategory.name },
        ]}
        items={products}
        loading={loading}
        basePath={`/product/${superCat}/${subCat}`}
        skeletonCount={6}
        emptyMessage="No products yet — check back soon."
      />
      <Footer />
    </>
  )
}

export default ProductListPage
