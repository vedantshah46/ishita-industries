import { useRef } from 'react';
import './BlogHeroSection.css'
import useScrollAnimation from '../../hooks/useScrollAnimation';
import useCurtainReveal from '../../hooks/useCurtainReveal';

function BlogHeroSection() {
  const titleRef = useCurtainReveal({ stagger: 0.065 });
  const animRefs = useRef([]);
  useScrollAnimation(animRefs);

  return (
    <div 
      className="blog-header-content"
      ref={(el) => (animRefs.current[0] = el)}
    >
      <h1 className="blog-main-title" ref={titleRef}>
        Insights & Updates.
        <span className="blog-sub-title">Knowledge for Growth.</span>
      </h1>
      <p className="blog-description">
        Explore valuable perspectives, innovations, and real-world applications shaping the future of manufacturing, engineering, and global supply chains.
      </p>
    </div>
  )
}

export default BlogHeroSection
