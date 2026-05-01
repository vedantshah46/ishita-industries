import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './BlogGridSection.css'
import blogImg from '../../Images/blog_image.png'
import anime from 'animejs';
import { useBlogPosts } from '../../hooks/useBlogPosts';

function formatDate(d) {
  return d
    ? new Date(d).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })
    : ''
}

function BlogGridSection() {
  const sectionRef = useRef(null);
  const hasAnimated = useRef(false);
  const { posts, loading } = useBlogPosts({ limit: 50 });

  useEffect(() => {
    if (loading || posts.length === 0) return;

    const triggerAnimation = () => {
      if (hasAnimated.current || !sectionRef.current) return;
      hasAnimated.current = true;

      const cards = sectionRef.current.querySelectorAll('.blog-card');
      
      anime({
        targets: cards,
        opacity: [0, 1],
        translateY: [40, 0],
        delay: anime.stagger(100),
        easing: 'easeOutExpo',
        duration: 1000
      });
    };

    const timer = setTimeout(() => {
      if (!hasAnimated.current) triggerAnimation();
    }, 6000);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            triggerAnimation();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [loading, posts]);

  if (loading) return null;

  return (
    <div className="blog-posts-grid" ref={sectionRef}>
      {posts.map((post, index) => (
        <div
          key={post.id}
          className="blog-card"
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
