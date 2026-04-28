import React, { useState, useRef } from 'react';
import NavbarRouter from '../../components/Navbar/NavbarRouter';
import Footer from '../../components/Footer/Footer';
import './ProductDetailsPage.css';
import useScrollAnimation from '../../hooks/useScrollAnimation';

// Import images
import img1 from '../../Images/Electric Pin-1.png';
import img2 from '../../Images/Electric Pin-2.jpg';
import img3 from '../../Images/Electric Pin-3.png';
import img4 from '../../Images/Electric Pin-4.png';

import machine1 from '../../Images/Precision Machining Expertise.png';
import machine2 from '../../Images/Industrial Components.png';
import machine3 from '../../Images/Section Components.jpg';
import arrowVector from '../../Images/arrow-vector.png';

const ProductDetailsPage = () => {
  const images = [img1, img2, img3, img4];
  const [mainImage, setMainImage] = useState(images[0]);

  const animRefs = useRef([]);
  useScrollAnimation(animRefs);

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
            <h1>Electric Pin</h1>
          </div>

          {/* Gallery Section */}
          <div 
            className="product-gallery"
            ref={(el) => (animRefs.current[1] = el)}
          >
            <div className="main-image">
              <img src={mainImage} alt="Electric Pin Main" />
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
            <p>
              Brass Electrical Pins & Sockets, Brass Pin - Established in 1985, Ishita Industries specializes in the production of Brass Pin Conforming to Customer Technical Specification with ( Drawing & Sample ) & ensure Stringent Quality Standard especially for engineering Industry.
            </p>
            <p>
              We are using the best quality of brass with the aid of pioneered technology in tandem with predefined industry norms & standards.
            </p>
          </div>

          {/* Specifications Grid */}
          <div className="specifications-grid">
            <div 
              className="spec-card"
              ref={(el) => (animRefs.current[3] = el)}
              style={{ transitionDelay: '0ms' }}
            >
              <h3>Tolerance we Maintain</h3>
              <p>ISO 2768-M (Any as per customize Specification)</p>
            </div>
            <div 
              className="spec-card"
              ref={(el) => (animRefs.current[4] = el)}
              style={{ transitionDelay: '100ms' }}
            >
              <h3>Finish We Serve</h3>
              <p>Nickel, Zinc, Tin, Lead, Chrome, Silver, Gold</p>
            </div>
            <div 
              className="spec-card"
              ref={(el) => (animRefs.current[5] = el)}
              style={{ transitionDelay: '200ms' }}
            >
              <h3>Size We Handle</h3>
              <p>Circumscribe Diameter 1.5MM to 200MM</p>
            </div>
            <div 
              className="spec-card"
              ref={(el) => (animRefs.current[6] = el)}
              style={{ transitionDelay: '300ms' }}
            >
              <h3>Length We Handle</h3>
              <p>Turning Length 400 MM</p>
            </div>
            <div 
              className="spec-card"
              ref={(el) => (animRefs.current[7] = el)}
              style={{ transitionDelay: '400ms' }}
            >
              <h3>Material we serve</h3>
              <p>As per customer Customer Requirements.</p>
            </div>
            <div 
              className="spec-card"
              ref={(el) => (animRefs.current[8] = el)}
              style={{ transitionDelay: '500ms' }}
            >
              <h3>Process we Undertake</h3>
              <p>Turning, Forging, Milling, Stamping, Drilling, Molding, Grinding, Assembly & Finishing</p>
            </div>
          </div>

          {/* Threads Section */}
          <div 
            className="threads-section"
            ref={(el) => (animRefs.current[9] = el)}
          >
            <h2>Thread We Serve</h2>
            <div className="threads-list">
              <ul>
                <li>Metric ISO Thread (M)</li>
                <li>Unified Coarse thread (UNC)</li>
                <li>Unified Coarse thread for Screw thread inserts [(EG UNC(STI)]</li>
                <li>British Standard pipe thread (BSP) OR (BSPT) OR (G)</li>
                <li>British Standard</li>
                <li>British Standard Fine thread (BSF)</li>
                <li>American National Straight Pipe Thread (NPSM)</li>
                <li>American National Pipe Thread (NPT)</li>
              </ul>
              <ul>
                <li>Metric ISO Fine Thread (MF)</li>
                <li>Unified Fine thread (UNF)</li>
                <li>Unified Extra Fine thread (UNEF)</li>
                <li>Whitworth Standard parallel internal pipe thread (RP)</li>
                <li>Whitworth thread (BSW)</li>
                <li>Steel Conduit Thread (DIN 40430 - Pg)</li>
                <li>British Association (BA) Thread</li>
                <li>Custom Thread Specifications (As Per Drawing)</li>
              </ul>
            </div>
          </div>

          {/* Metal We Machine Section */}
          <div className="metal-section">
            <h2 ref={(el) => (animRefs.current[10] = el)}>Metal We Machine</h2>
            <p className="metal-subtitle" ref={(el) => (animRefs.current[11] = el)}>We work with MS, SS, Copper, Bronze, Brass, Aluminium</p>
            <div className="metal-cards">
              <div 
                className="metal-card"
                ref={(el) => (animRefs.current[12] = el)}
                style={{ transitionDelay: '100ms' }}
              >
                <div className="metal-card-visual">
                  <img src={machine1} alt="Precision Machining Expertise" className="metal-card-image" />
                </div>
                <div className="metal-card-title">
                  Precision Machining Expertise <img src={arrowVector} alt="" className="arrow" />
                </div>
              </div>
              <div 
                className="metal-card"
                ref={(el) => (animRefs.current[13] = el)}
                style={{ transitionDelay: '200ms' }}
              >
                <div className="metal-card-visual">
                  <img src={machine2} alt="Industrial Components" className="metal-card-image" />
                </div>
                <div className="metal-card-title">
                  Industrial Components <img src={arrowVector} alt="" className="arrow" />
                </div>
              </div>
              <div 
                className="metal-card"
                ref={(el) => (animRefs.current[14] = el)}
                style={{ transitionDelay: '300ms' }}
              >
                <div className="metal-card-visual">
                  <img src={machine3} alt="Section Components" className="metal-card-image" />
                </div>
                <div className="metal-card-title">
                  Section Components <img src={arrowVector} alt="" className="arrow" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
      <Footer />
    </>
  );
};

export default ProductDetailsPage;
