import { Route, Routes } from 'react-router-dom'
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
import ScrollProgressBar from './components/ScrollProgressBar/ScrollProgressBar'

function App() {
  return (
    <>
      {/* Thin progress bar fixed at top — visible on all pages */}
      <ScrollProgressBar />

      <Routes>
        <Route path="/"      element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/product/electric-pin" element={<ProductDetailsPage />} />
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
      </Routes>
    </>
  )
}

export default App
