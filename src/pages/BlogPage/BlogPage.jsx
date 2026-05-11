import SEO from '../../components/SEO/SEO'
import NavbarRouter from '../../components/Navbar/NavbarRouter'
import Footer from '../../components/Footer/Footer'
import BlogHeroSection from './BlogHeroSection'
import BlogGridSection from './BlogGridSection'
import FreeToContactUsSection from '../HomePage/FreeToContactUsSection'

function BlogPage() {
  return (
    <div className="blog-page">
      <SEO
        title="Blog & Updates - Brass Industry Insights & News"
        description="Stay updated with the latest news, insights and articles from Ishita Industries. Learn about brass manufacturing trends, precision engineering innovations, industry best practices and company updates."
        keywords="brass industry blog, brass manufacturing news, precision engineering articles, brass components insights, Ishita Industries updates, brass industry trends India"
        path="/blog"
      />
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
