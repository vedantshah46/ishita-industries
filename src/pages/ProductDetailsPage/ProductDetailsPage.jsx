import React, { useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import NavbarRouter from '../../components/Navbar/NavbarRouter';
import Footer from '../../components/Footer/Footer';
import './ProductDetailsPage.css';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import { useProduct } from '../../hooks/useProduct';
import arrowVector from '../../Images/arrow-vector.png';

const ProductDetailsPage = () => {
  const { slug } = useParams();
  const { product, loading, error } = useProduct(slug || 'electric-pin');

  const [mainImage, setMainImage] = useState(null);
  const animRefs = useRef([]);
  useScrollAnimation(animRefs);

  // Set main image when product loads
  React.useEffect(() => {
    if (product?.product_images?.length) {
      setMainImage(product.product_images[0].image_url);
    } else if (product?.image_url) {
      setMainImage(product.image_url);
    }
  }, [product]);

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
        <section className="product-details-wrapper">
          <div className="product-details-container">
            <div className="product-header">
              <h1>Product Not Found</h1>
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
      <section className="product-details-wrapper">
        <div className="product-details-container">

          {/* Title Section */}
          <div 
            className="product-header"
            ref={(el) => (animRefs.current[0] = el)}
          >
            <h1>{product.name}</h1>
          </div>

          {/* Gallery Section */}
          <div 
            className="product-gallery"
            ref={(el) => (animRefs.current[1] = el)}
          >
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
          <div 
            className="product-description"
            ref={(el) => (animRefs.current[2] = el)}
          >
            {descParagraphs.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {/* Specifications Grid */}
          {specs.length > 0 && (
            <div className="specifications-grid">
              {specs.map((spec, index) => (
                <div 
                  key={spec.label}
                  className="spec-card"
                  ref={(el) => (animRefs.current[3 + index] = el)}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <h3>{spec.label}</h3>
                  <p>{spec.value}</p>
                </div>
              ))}
            </div>
          )}

          {/* Threads Section */}
          {tags.length > 0 && (
            <div 
              className="threads-section"
              ref={(el) => (animRefs.current[3 + specs.length] = el)}
            >
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
            <div className="metal-section">
              <h2 ref={(el) => (animRefs.current[4 + specs.length] = el)}>Metal We Machine</h2>
              <p className="metal-subtitle" ref={(el) => (animRefs.current[5 + specs.length] = el)}>We work with MS, SS, Copper, Bronze, Brass, Aluminium</p>
              <div className="metal-cards">
                {related.map((item, index) => (
                  <div 
                    key={item.name}
                    className="metal-card"
                    ref={(el) => (animRefs.current[6 + specs.length + index] = el)}
                    style={{ transitionDelay: `${(index + 1) * 100}ms` }}
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
