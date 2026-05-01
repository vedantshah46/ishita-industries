import { useRef, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import './KnowledgeHubSection.css'
import blogImg from '../../Images/blog_image.png'
import { Link } from 'react-router-dom'
import anime from 'animejs'
import SplitType from 'split-type'

const latestPosts = [
  {
    id: 1,
    title: "Top Countries Importing Brass Components: India's Role in the Global Supply Chain",
    author: "Ishita Industries",
    date: "27 April 2026",
    image: blogImg
  },
  {
    id: 2,
    title: "The Best Brass Anchors for Construction and Marine Use in Algeria",
    author: "Ishita Industries",
    date: "27 April 2026",
    image: blogImg
  },
  {
    id: 3,
    title: "The Real Impact of U.S. Tariffs on the Brass Industry in 2025",
    author: "Ishita Industries",
    date: "27 April 2026",
    image: blogImg
  }
]

function KnowledgeHubSection() {
  const { t } = useTranslation()
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    let titleSplit = null
    if (titleRef.current) {
      titleSplit = new SplitType(titleRef.current, { types: 'chars' })
      anime.set(titleSplit.chars, { opacity: 0, translateY: 20 })
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true

          const tl = anime.timeline({
            easing: 'easeOutQuart'
          })

          tl.add({
            targets: '.hub-kicker',
            translateY: [30, 0],
            opacity: [0, 1],
            duration: 800,
          })

          if (titleSplit && titleSplit.chars) {
            tl.add({
              targets: titleSplit.chars,
              opacity: [0, 1],
              translateY: [20, 0],
              duration: 800,
              delay: anime.stagger(15),
              easing: 'spring(1, 80, 10, 0)'
            }, '-=600')
          }

          tl.add({
            targets: '.hub-card',
            translateY: [40, 0],
            opacity: [0, 1],
            duration: 1000,
            delay: anime.stagger(120),
            easing: 'easeOutBack'
          }, '-=500')

          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      observer.disconnect()
      if (titleSplit) titleSplit.revert()
    }
  }, [])

  return (
    <section className="knowledge-hub-section" ref={sectionRef}>
      <div className="container hub-shell">
        <div className="hub-header text-center">
          <div>
            <p className="hub-kicker mb-0">{t('knowledge_hub.kicker')}</p>
            <h2 className="hub-title mb-0" ref={titleRef}>{t('knowledge_hub.title')}</h2>
          </div>
        </div>

        <div className="hub-grid">
          {latestPosts.map((post) => (
            <div
              key={post.id}
              className="hub-card"
            >
              <div className="hub-card-image-wrap">
                <img src={post.image} alt={post.title} className="hub-card-img" />
              </div>
              <div className="hub-card-content">
                <div className="hub-card-meta">
                  <span className="hub-author">{t('knowledge_hub.by')} {post.author}</span>
                  <span className="hub-date">{post.date}</span>
                </div>
                <h3 className="hub-card-title">{post.title}</h3>
                <Link to="/blog" className="hub-read-more">{t('knowledge_hub.read_more')}</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default KnowledgeHubSection
