import React, { useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import NavbarRouter from '../../components/Navbar/NavbarRouter';
import Footer from '../../components/Footer/Footer';
import './ProductDetailsPage.css';
import { useProduct } from '../../hooks/useProduct';
import anime from 'animejs';
import SplitType from 'split-type';
import arrowVector from '../../Images/arrow-vector.png';

const ProductDetailsPage = () => {
  const { slug } = useParams();
  const { product, loading, error } = useProduct(slug || 'electric-pin');

  const [mainImage, setMainImage] = useState(null);
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const hasAnimated = useRef(false);

  // Scroll to top on mount or slug change
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // Set main image when product loads
  React.useEffect(() => {
    if (product?.product_images?.length) {
      setMainImage(product.product_images[0].image_url);
    } else if (product?.image_url) {
      setMainImage(product.image_url);
    }
  }, [product]);

  // Anime.js Orchestration
  React.useEffect(() => {
    if (loading || !product || hasAnimated.current) return;

    const ctx = sectionRef.current;
    if (!ctx) return;

    // Safety fallback
    const safetyTimer = setTimeout(() => {
      if (!hasAnimated.current) {
        ctx.querySelectorAll('.animate-item').forEach(el => el.style.opacity = '1');
      }
    }, 6000);

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !hasAnimated.current) {
        hasAnimated.current = true;
        
        // Prepare SplitText for Title
        const splitTitle = new SplitType(titleRef.current, { types: 'chars,words' });
        
        // Initial states
        anime.set('.main-image', { scale: 0.8, opacity: 0, filter: 'blur(10px)' });
        anime.set('.spec-card', { translateY: 60, opacity: 0, scale: 0.9 });
        anime.set('.metal-card', { translateY: 40, opacity: 0, scale: 0.95 });

        const tl = anime.timeline({
          easing: 'easeOutQuart'
        });

        tl.add({
          targets: splitTitle.chars,
          translateY: [100, 0],
          rotateX: [-90, 0],
          opacity: [0, 1],
          duration: 1200,
          delay: anime.stagger(25),
          begin: () => {
            titleRef.current.style.opacity = '1';
          }
        })
        .add({
          targets: '.main-image',
          scale: [0.8, 1],
          opacity: [0, 1],
          filter: ['blur(10px)', 'blur(0px)'],
          duration: 1500,
          easing: 'easeOutElastic(1, .8)'
        }, '-=1000')
        .add({
          targets: '.thumbnails img',
          translateY: [20, 0],
          opacity: [0, 1],
          delay: anime.stagger(100),
          duration: 800
        }, '-=1200')
        .add({
          targets: '.product-description p',
          translateX: [-30, 0],
          opacity: [0, 1],
          duration: 1000,
          delay: anime.stagger(150)
        }, '-=1000')
        .add({
          targets: '.spec-card',
          translateY: [60, 0],
          opacity: [0, 1],
          scale: [0.9, 1],
          duration: 1000,
          delay: anime.stagger(120, { easing: 'easeOutQuad' }),
          easing: 'spring(1, 80, 10, 0)'
        }, '-=800')
        .add({
          targets: '.threads-section',
          translateY: [40, 0],
          opacity: [0, 1],
          duration: 1000
        }, '-=600')
        .add({
          targets: ['.metal-section h2', '.metal-subtitle'],
          translateY: [20, 0],
          opacity: [0, 1],
          duration: 800,
          delay: anime.stagger(100)
        }, '-=600')
        .add({
          targets: '.metal-card',
          translateY: [40, 0],
          opacity: [0, 1],
          scale: [0.95, 1],
          duration: 1200,
          delay: anime.stagger(150),
          easing: 'easeOutElastic(1, .6)'
        }, '-=800');

        observer.disconnect();
      }
    }, { threshold: 0.1 });

    observer.observe(ctx);

    return () => {
      clearTimeout(safetyTimer);
      observer.disconnect();
    };
  }, [loading, product]);

  if (loading) {
    return (
      <>
        <NavbarRouter />
        <section className="product-details-wrapper">
          <div className="product-details-container">
            <div className="product-details-loading">
              <div className="skeleton-shimmer" style={{ height: 40, width: '40%', marginBottom: 32 }} />
              <div className="skeleton-shimmer" style={{ height: 400, width: '100%', marginBottom: 24 }} />
              <div className="skeleton-shimmer" style={{ height: 120, width: '100%' }} />
            </div>
          </div>
        </section>
        <Footer />
      </>
    );
  }

  if (error || !product) {
    return (
      <>
        <NavbarRouter />
        <section className="product-details-wrapper product-error-view">
          <div className="product-details-container">
            <div className="product-header no-anim">
              <h1>Product Not Found</h1>
              <p>We couldn't find the product you're looking for.</p>
            </div>
          </div>
        </section>
        <Footer />
      </>
    );
  }

  const images = product.product_images?.map(img => img.image_url) ?? [product.image_url];
  const specs = product.product_specs ?? [];
  const tags = product.product_tags ?? [];
  const related = product.related_products ?? [];

  // Split tags into two columns
  const midpoint = Math.ceil(tags.length / 2);
  const tagsCol1 = tags.slice(0, midpoint);
  const tagsCol2 = tags.slice(midpoint);

  // Split description into paragraphs
  const descParagraphs = product.description
    ? product.description.split('\n').filter(p => p.trim())
    : [];

  return (
    <>
      <NavbarRouter />
      <section className="product-details-wrapper" ref={sectionRef}>
        <div className="product-details-container">

          {/* Title Section */}
          <div className="product-header animate-item">
            <h1 ref={titleRef}>{product.name}</h1>
          </div>

          {/* Gallery Section */}
          <div className="product-gallery animate-item">
            <div className="main-image">
              <img src={mainImage} alt={`${product.name} Main`} />
            </div>
            <div className="thumbnails">
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  className={mainImage === img ? 'active' : ''}
                  onClick={() => setMainImage(img)}
                />
              ))}
            </div>
          </div>

          {/* Description Section */}
          <div className="product-description animate-item">
            {descParagraphs.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {/* Specifications Grid */}
          {specs.length > 0 && (
            <div className="specifications-grid animate-item">
              {specs.map((spec, index) => (
                <div 
                  key={spec.label}
                  className="spec-card"
                >
                  <h3>{spec.label}</h3>
                  <p>{spec.value}</p>
                </div>
              ))}
            </div>
          )}

          {/* Threads Section */}
          {tags.length > 0 && (
            <div className="threads-section animate-item">
              <h2>Thread We Serve</h2>
              <div className="threads-list">
                <ul>
                  {tagsCol1.map((t, i) => (
                    <li key={i}>{t.tag}</li>
                  ))}
                </ul>
                <ul>
                  {tagsCol2.map((t, i) => (
                    <li key={i}>{t.tag}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Metal We Machine Section */}
          {related.length > 0 && (
            <div className="metal-section animate-item">
              <h2>Metal We Machine</h2>
              <p className="metal-subtitle">We work with MS, SS, Copper, Bronze, Brass, Aluminium</p>
              <div className="metal-cards">
                {related.map((item, index) => (
                  <div 
                    key={item.name}
                    className="metal-card"
                  >
                    <div className="metal-card-visual">
                      <img src={item.image_url} alt={item.name} className="metal-card-image" />
                    </div>
                    <div className="metal-card-title">
                      {item.name} <img src={arrowVector} alt="" className="arrow" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </section>
      <Footer />
    </>
  );
};

export default ProductDetailsPage;
