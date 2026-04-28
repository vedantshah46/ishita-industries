import { useRef } from 'react';
import './BlogGridSection.css'
import blogImg from '../../Images/blog_image.png'
import useScrollAnimation from '../../hooks/useScrollAnimation';

const blogPosts = [
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
  },
  {
    id: 4,
    title: "Precision Machining: The Evolution of Brass Components in Automotive Engineering",
    author: "Ishita Industries",
    date: "27 April 2026",
    image: blogImg
  },
  {
    id: 5,
    title: "Sustainable Manufacturing: Why Brass is the Preferred Choice for Eco-Friendly Projects",
    author: "Ishita Industries",
    date: "27 April 2026",
    image: blogImg
  },
  {
    id: 6,
    title: "Global Logistics: Navigating Shipping Challenges for Brass Exports in 2026",
    author: "Ishita Industries",
    date: "27 April 2026",
    image: blogImg
  },
  {
    id: 7,
    title: "The Future of Plumbing: High-Performance Brass Fittings for Modern Infrastructure",
    author: "Ishita Industries",
    date: "27 April 2026",
    image: blogImg
  },
  {
    id: 8,
    title: "Metallurgy Matters: Understanding Different Brass Alloys for Industrial Applications",
    author: "Ishita Industries",
    date: "27 April 2026",
    image: blogImg
  },
  {
    id: 9,
    title: "Market Trends: Why Demand for Precision Brass Parts is Surging in Southeast Asia",
    author: "Ishita Industries",
    date: "27 April 2026",
    image: blogImg
  }
]

function BlogGridSection() {
  const animRefs = useRef([]);
  useScrollAnimation(animRefs);

  return (
    <div className="blog-posts-grid">
      {blogPosts.map((post, index) => (
        <div 
          key={post.id} 
          className="blog-card"
          ref={(el) => (animRefs.current[index] = el)}
          style={{ transitionDelay: `${(index % 3) * 100}ms` }}
        >
          <div className="blog-card-image-wrap">
            <img src={post.image} alt={post.title} className="blog-card-img" />
          </div>
          <div className="blog-card-content">
            <div className="blog-card-meta">
              <span className="blog-author">By {post.author}</span>
              <span className="blog-date">{post.date}</span>
            </div>
            <h3 className="blog-card-title">{post.title}</h3>
            <a href="#" className="blog-read-more">Read More</a>
          </div>
        </div>
      ))}
    </div>
  )
}

export default BlogGridSection
