import { lazy, Suspense } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import ScrollProgressBar from './components/ScrollProgressBar/ScrollProgressBar'
import ScrollToTop from './utils/ScrollToTop'

// Lazy load public pages for better performance (Code Splitting)
const Homepage    = lazy(() => import('./pages/HomePage/HomePage'))
const About       = lazy(() => import('./pages/AboutPage/About'))
const ProductPage = lazy(() => import('./pages/ProductPage/ProductPage'))
const ProductDetailsPage = lazy(() => import('./pages/ProductDetailsPage/ProductDetailsPage'))
const QualityPage = lazy(() => import('./pages/QualityPage/QualityPage'))
const ImportExportPage = lazy(() => import('./pages/ImportExportPage/ImportExportPage'))
const ContactPage = lazy(() => import('./pages/ContactPage/ContactPage'))
const EnvironmentPage = lazy(() => import('./pages/EnvironmentPage/EnvironmentPage'))
const SustainabilityPage = lazy(() => import('./pages/SustainabilityPage/SustainabilityPage'))
const GlobalLogisticPage = lazy(() => import('./pages/GlobalLogisticPage/GlobalLogisticPage'))
const CustomPackagingPage = lazy(() => import('./pages/CustomPackagingPage/CustomPackagingPage'))
const AssemblyKittingPage = lazy(() => import('./pages/AssemblyKittingPage/AssemblyKittingPage'))
const ManufacturingProcessPage = lazy(() => import('./pages/ManufacturingProcessPage/ManufacturingProcessPage'))
const BlogPage = lazy(() => import('./pages/BlogPage/BlogPage'))
const BlogPostPage = lazy(() => import('./pages/BlogPostPage/BlogPostPage'))

// Lazy load Admin pages
const AdminLogin = lazy(() => import('./pages/AdminPage/AdminLogin'))
const AdminLayout = lazy(() => import('./pages/AdminPage/AdminLayout'))
const AdminProductList = lazy(() => import('./pages/AdminPage/products/AdminProductList'))
const AdminProductForm = lazy(() => import('./pages/AdminPage/products/AdminProductForm'))
const AdminBlogList = lazy(() => import('./pages/AdminPage/blog/AdminBlogList'))
const AdminBlogForm = lazy(() => import('./pages/AdminPage/blog/AdminBlogForm'))

function App() {
  return (
    <>
      {/* Reset scroll to top on every route change */}
      <ScrollToTop />

      {/* Thin progress bar fixed at top — visible on all pages */}
      <ScrollProgressBar />

      <Suspense fallback={null}>
        <Routes>
          <Route path="/"      element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/product/:slug" element={<ProductDetailsPage />} />
          <Route path="/quality" element={<QualityPage />} />
          <Route path="/environment" element={<EnvironmentPage />} />
          <Route path="/import-export" element={<ImportExportPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/sustainability" element={<SustainabilityPage />} />
          <Route path="/global-logistic" element={<GlobalLogisticPage />} />
          <Route path="/custom-packaging" element={<CustomPackagingPage />} />
          <Route path="/assembly-kitting" element={<AssemblyKittingPage />} />
          <Route path="/manufacturing-process" element={<ManufacturingProcessPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />

          {/* Admin routes — not linked from public navbar, accessed by direct URL */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Navigate to="/admin/products" replace />} />
            <Route path="products" element={<AdminProductList />} />
            <Route path="products/new" element={<AdminProductForm />} />
            <Route path="products/:id" element={<AdminProductForm />} />
            <Route path="blog" element={<AdminBlogList />} />
            <Route path="blog/new" element={<AdminBlogForm />} />
            <Route path="blog/:id" element={<AdminBlogForm />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  )
}

export default App
