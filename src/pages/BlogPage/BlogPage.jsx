import NavbarRouter from '../../components/Navbar/NavbarRouter'
import Footer from '../../components/Footer/Footer'
import BlogHeroSection from './BlogHeroSection'
import BlogGridSection from './BlogGridSection'
import FreeToContactUsSection from '../HomePage/FreeToContactUsSection'

function BlogPage() {
  return (
    <div className="blog-page">
      <NavbarRouter />
      <main className="blog-main-content">
        <div className="container blog-page-shell">
          <BlogHeroSection />
          <BlogGridSection />
        </div>
      </main>
      <FreeToContactUsSection />
      <Footer />
    </div>
  )
}

export default BlogPage
