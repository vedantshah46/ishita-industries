import { Route, Routes, Navigate } from 'react-router-dom'
import About       from './pages/AboutPage/About'
import Homepage    from './pages/HomePage/HomePage'
import ProductPage from './pages/ProductPage/ProductPage'
import ProductDetailsPage from './pages/ProductDetailsPage/ProductDetailsPage'
import QualityPage from './pages/QualityPage/QualityPage'
import ImportExportPage from './pages/ImportExportPage/ImportExportPage'
import ContactPage from './pages/ContactPage/ContactPage'
import EnvironmentPage from './pages/EnvironmentPage/EnvironmentPage'
import SustainabilityPage from './pages/SustainabilityPage/SustainabilityPage'
import GlobalLogisticPage from './pages/GlobalLogisticPage/GlobalLogisticPage'
import CustomPackagingPage from './pages/CustomPackagingPage/CustomPackagingPage'
import AssemblyKittingPage from './pages/AssemblyKittingPage/AssemblyKittingPage'
import ManufacturingProcessPage from './pages/ManufacturingProcessPage/ManufacturingProcessPage'
import BlogPage from './pages/BlogPage/BlogPage'
import BlogPostPage from './pages/BlogPostPage/BlogPostPage'
import ScrollProgressBar from './components/ScrollProgressBar/ScrollProgressBar'

// Admin pages
import AdminLogin from './pages/AdminPage/AdminLogin'
import AdminLayout from './pages/AdminPage/AdminLayout'
import AdminProductList from './pages/AdminPage/products/AdminProductList'
import AdminProductForm from './pages/AdminPage/products/AdminProductForm'
import AdminBlogList from './pages/AdminPage/blog/AdminBlogList'
import AdminBlogForm from './pages/AdminPage/blog/AdminBlogForm'

function App() {
  return (
    <>
      {/* Thin progress bar fixed at top — visible on all pages */}
      <ScrollProgressBar />

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
    </>
  )
}

export default App
