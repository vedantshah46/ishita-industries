import React, { useEffect, useRef } from 'react';
import './EnvironmentActionsSection.css';
import anime from 'animejs';

import image1 from '../../Images/Environment_image_1.png';
import image2 from '../../Images/Environment_image_2.png';

function EnvironmentActionsSection() {
  const sectionRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;

            const tl = anime.timeline({
              easing: 'spring(1, 80, 10, 0)',
            });

            // 1. Images scale and slide in
            tl.add({
              targets: '.env-actions-images',
              opacity: [0, 1],
              scale: [0.95, 1],
              translateY: [40, 0],
              duration: 1000,
              easing: 'easeOutExpo'
            })
            // 2. Title fade up
            .add({
              targets: '.env-actions-title',
              opacity: [0, 1],
              translateY: [20, 0],
              duration: 800,
              easing: 'easeOutExpo'
            }, '-=800')
            // 3. Description fade up
            .add({
              targets: '.env-actions-desc',
              opacity: [0, 1],
              translateY: [20, 0],
              duration: 800,
              easing: 'easeOutExpo'
            }, '-=600')
            // 4. Stats block stagger
            .add({
              targets: '.env-actions-stat-item',
              opacity: [0, 1],
              translateX: [-20, 0],
              delay: anime.stagger(150),
              duration: 800,
              easing: 'easeOutExpo'
            }, '-=600');

            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="env-actions-section" ref={sectionRef}>
      <div className="container env-actions-shell">
        <div className="env-actions-grid">

          {/* Left Column: Images */}
          <div className="env-actions-images">
            <div className="env-actions-image-wrapper">
              <img src={image1} alt="Environment texture" className="env-actions-img" />
            </div>
            <div className="env-actions-image-wrapper">
              <img src={image2} alt="Solar panels" className="env-actions-img" />
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="env-actions-content">
            <h2 className="env-actions-title">Our Responsible<br />Actions</h2>

            <p className="env-actions-desc">
              Environmental protection is not a peripheral concern; it is the
              core of our manufacturing philosophy. We invest in green
              initiatives that transcend compliance, turning industrial spaces
              into regenerative ecosystems through advanced filtration and
              sustainable landscaping.
            </p>

            <div className="env-actions-stats-block">
              <div className="env-actions-stat-item">
                <h4 className="env-actions-stat-title">2024 INITIATIVE</h4>
                <p className="env-actions-stat-desc">
                  Installation of zero-emission thermal oxidizers across all
                  secondary lines.
                </p>
              </div>

              <div className="env-actions-stat-item">
                <h4 className="env-actions-stat-title">WATER RATING</h4>
                <p className="env-actions-stat-desc">
                  Achieved Gold-Tier efficiency status in industrial water
                  stewardship.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default EnvironmentActionsSection;
