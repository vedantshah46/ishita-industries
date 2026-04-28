import { useRef } from 'react';
import "./InternationalReachSection.css";
import worldMap from '../../Images/world-map.png'
import useScrollAnimation from '../../hooks/useScrollAnimation'

function InternationalReachSection() {
  const animRefs = useRef([])
  useScrollAnimation(animRefs)

  return (
    <section className="international-reach-section">
      <div className="container reach-shell">
        <div 
          className="reach-header"
          ref={(el) => (animRefs.current[0] = el)}
        >
          <div>
            <p className="reach-kicker mb-0">CONNECTING GLOBAL MARKETS</p>
            <h2 className="reach-title mb-0">
              INTERNATIONAL REACH.
            </h2>
          </div>
        </div>

        <div 
          className="reach-map-container"
          ref={(el) => (animRefs.current[1] = el)}
        >
          <img
            src={worldMap}
            alt="International Reach Map"
            className="reach-map-image"
          />
        </div>
      </div>
    </section>
  );
}

export default InternationalReachSection;
