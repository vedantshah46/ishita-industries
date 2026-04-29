import { useRef } from 'react';
import { Link } from 'react-router-dom';
import './BlogGridSection.css'
import blogImg from '../../Images/blog_image.png'
import useScrollAnimation from '../../hooks/useScrollAnimation';
import { useBlogPosts } from '../../hooks/useBlogPosts';

function formatDate(d) {
  return d
    ? new Date(d).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })
    : ''
}

function BlogGridSection() {
  const animRefs = useRef([]);
  const { posts, loading } = useBlogPosts({ limit: 50 });

  useScrollAnimation(animRefs, posts.length);

  if (loading) return null;

  return (
    <div className="blog-posts-grid">
      {posts.map((post, index) => (
        <div
          key={post.id}
          className="blog-card"
          ref={(el) => (animRefs.current[index] = el)}
          style={{ transitionDelay: `${(index % 3) * 100}ms` }}
        >
          <div className="blog-card-image-wrap">
            <img src={post.cover_url || blogImg} alt={post.title} className="blog-card-img" />
          </div>
          <div className="blog-card-content">
            <div className="blog-card-meta">
              <span className="blog-author">By {post.author || 'Ishita Industries'}</span>
              <span className="blog-date">{formatDate(post.published_at)}</span>
            </div>
            <h3 className="blog-card-title">{post.title}</h3>
            <Link to={`/blog/${post.slug}`} className="blog-read-more">Read More</Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default BlogGridSection
