import { useEffect, useRef, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import NavbarRouter from '../../components/Navbar/NavbarRouter'
import Footer from '../../components/Footer/Footer'
import FreeToContactUsSection from '../HomePage/FreeToContactUsSection'
import LoadingSpinner from '../../components/ui/LoadingSpinner'
import { useBlogPost, useBlogPosts } from '../../hooks/useBlogPosts'
import { STATIC_BLOG_POSTS } from '../../data/staticBlogPosts'
import './BlogPostPage.css'

function RelatedPostCard({ post }) {
  const readTime = post.read_time ? `${post.read_time}min Read` : '5min Read'
  return (
    <Link to={`/blog/${post.slug}`} className="bpp-related-card">
      <div className="bpp-related-thumb">
        {post.cover_url
          ? <img src={post.cover_url} alt={post.title} />
          : <div className="bpp-related-thumb-placeholder" />}
      </div>
      <div className="bpp-related-info">
        <div className="bpp-related-meta">
          <span>By Ishita Industries</span>
          <span>{readTime}</span>
        </div>
        <p className="bpp-related-title">{post.title}</p>
      </div>
    </Link>
  )
}

function BlogPostPage() {
  const { slug } = useParams()

  // Try DB first, fall back to static
  const { post: dbPost, loading, error } = useBlogPost(slug)
  const { posts: dbRelated } = useBlogPosts({ limit: 6 })

  const staticPost = STATIC_BLOG_POSTS.find((p) => p.slug === slug)
  const post = dbPost || (!loading ? staticPost : null)

  // Related posts: mix DB + static, exclude current
  const allPosts = [
    ...dbRelated.map((p) => ({ ...p, isDb: true })),
    ...STATIC_BLOG_POSTS.filter((p) => !dbRelated.find((d) => d.slug === p.slug)),
  ]
  const relatedPosts = allPosts.filter((p) => p.slug !== slug).slice(0, 3)

  const formatDate = (d) =>
    d ? new Date(d).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' }) : ''

  const bodyRef = useRef(null)
  const sidebarColRef = useRef(null)
  const sidebarRef = useRef(null)
  const [sidebarStyle, setSidebarStyle] = useState({})

  useEffect(() => {
    const handleScroll = () => {
      const body = bodyRef.current
      const sidebarCol = sidebarColRef.current
      const sidebar = sidebarRef.current
      if (!body || !sidebarCol || !sidebar) return

      const bodyRect = body.getBoundingClientRect()
      const colRect = sidebarCol.getBoundingClientRect()
      const sidebarHeight = sidebar.offsetHeight
      const navOffset = 100

      if (bodyRect.top > navOffset) {
        // above the blog body — normal flow
        setSidebarStyle({})
      } else if (bodyRect.bottom - navOffset > sidebarHeight) {
        // inside the blog body — fix to viewport using exact left position
        setSidebarStyle({
          position: 'fixed',
          top: navOffset,
          left: colRect.left,
          width: sidebarCol.offsetWidth,
        })
      } else {
        // near the bottom — anchor so it doesn't go past bpp-body
        setSidebarStyle({
          position: 'absolute',
          bottom: 0,
          top: 'auto',
          left: 'auto',
          width: '100%',
        })
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll, { passive: true })
    handleScroll()
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [post])

  if (loading) {
    return (
      <div className="bpp-page">
        <NavbarRouter />
        <div className="bpp-spinner"><LoadingSpinner size={48} text="Loading article…" /></div>
        <Footer />
      </div>
    )
  }

  if (!post) {
    return (
      <div className="bpp-page">
        <NavbarRouter />
        <div className="bpp-not-found">
          <h1>Article Not Found</h1>
          <p>The blog post you're looking for doesn't exist or has been unpublished.</p>
          <Link to="/blog" className="bpp-back">← Back to Blog</Link>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="bpp-page">
      <NavbarRouter />

      <main className="bpp-main">
        <div className="bpp-container">

          {/* Page-level title */}
          <h1 className="bpp-page-title">{post.title}</h1>

          {/* Two-column body */}
          <div className="bpp-body" ref={bodyRef}>

            {/* ── Left: scrollable article ── */}
            <article className="bpp-article">
              {post.cover_url && (
                <div className="bpp-cover">
                  <img src={post.cover_url} alt={post.title} />
                </div>
              )}

              <h2 className="bpp-article-title">{post.title}</h2>

              <div className="bpp-meta">
                <span>By {post.author || 'Ishita Industries'}</span>
                {post.published_at && <span>{formatDate(post.published_at)}</span>}
                {post.read_time && <span>{post.read_time}min Read</span>}
              </div>

              <div
                className="bpp-content"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </article>

            {/* ── Right: fixed sidebar ── */}
            {relatedPosts.length > 0 && (
              <aside className="bpp-sidebar" ref={sidebarColRef}>
                <div className="bpp-sidebar-sticky" ref={sidebarRef} style={sidebarStyle}>
                  {relatedPosts.map((rp, i) => (
                    <div key={rp.id || rp.slug}>
                      <RelatedPostCard post={rp} />
                      {i < relatedPosts.length - 1 && <hr className="bpp-divider" />}
                    </div>
                  ))}
                </div>
              </aside>
            )}

          </div>
        </div>
      </main>

      <FreeToContactUsSection />
      <Footer />
    </div>
  )
}

export default BlogPostPage
