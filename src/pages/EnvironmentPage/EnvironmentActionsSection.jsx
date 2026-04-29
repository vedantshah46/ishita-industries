import React, { useRef } from 'react';
import './EnvironmentActionsSection.css';
import useScrollAnimation from '../../hooks/useScrollAnimation';

import image1 from '../../Images/Environment_image_1.png';
import image2 from '../../Images/Environment_image_2.png';

function EnvironmentActionsSection() {
  const animRefs = useRef([]);
  useScrollAnimation(animRefs);

  return (
    <section className="env-actions-section">
      <div className="container env-actions-shell">
        <div className="env-actions-grid">
          
          {/* Left Column: Images */}
          <div 
            ref={(el) => (animRefs.current[0] = el)} 
            className="env-actions-images"
          >
            <div className="env-actions-image-wrapper">
              <img src={image1} alt="Environment texture" className="env-actions-img" />
            </div>
            <div className="env-actions-image-wrapper">
              <img src={image2} alt="Solar panels" className="env-actions-img" />
            </div>
          </div>

          {/* Right Column: Content */}
          <div 
            ref={(el) => (animRefs.current[1] = el)} 
            className="env-actions-content"
          >
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
