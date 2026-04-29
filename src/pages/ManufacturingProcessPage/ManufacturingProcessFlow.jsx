import React, { useRef } from 'react';
import './ManufacturingProcessFlow.css';
import useScrollAnimation from '../../hooks/useScrollAnimation';

import WarehouseScrap from '../../Images/Warehouse for Imported Scrap Honey.png';
import FoundryImg from '../../Images/Foundry.jpg';
import ExtrusionFacilities from '../../Images/Copper & Aluminium Extrusion Facilities.png';
import CNCTurningVMC from '../../Images/CNC Turning & Vertical Machining Centers (VMC).png';
import ForgingFacilityImg from '../../Images/Forging Facility.png';
import RodStorageImg from '../../Images/Rod Storage Unit.png';
import SwissCNC from '../../Images/Swiss-Type Sliding Head CNC Machines.png';
import CamAutomatic from '../../Images/Cam-Operated Automatic Turning Machines.png';

const processes = [
  { id: 1, title: "Warehouse for Imported Scrap Honey", img: WarehouseScrap },
  { id: 2, title: "Foundry", img: FoundryImg },
  { id: 3, title: "Copper & Aluminium Extrusion Facilities", img: ExtrusionFacilities },
  { id: 4, title: "CNC Turning & Vertical Machining Centers (VMC)", img: CNCTurningVMC },
  { id: 5, title: "Forging Facility", img: ForgingFacilityImg },
  { id: 6, title: "Rod Storage Unit", img: RodStorageImg },
  { id: 7, title: "Swiss-Type Sliding Head CNC Machines", img: SwissCNC },
  { id: 8, title: "Cam-Operated Automatic Turning Machines", img: CamAutomatic },
  { id: 9, title: "Warehouse for Imported Scrap Honey", img: WarehouseScrap },
  { id: 10, title: "Foundry", img: FoundryImg },
  { id: 11, title: "Cam-Operated Automatic Turning Machines", img: CamAutomatic },
  { id: 12, title: "Swiss-Type Sliding Head CNC Machines", img: SwissCNC },
  { id: 13, title: "Swiss-Type Sliding Head CNC Machines", img: SwissCNC }
];

const ManufacturingProcessFlow = () => {
  const animRefs = useRef([]);
  useScrollAnimation(animRefs);

  const [cols, setCols] = React.useState(3);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 575) setCols(1);
      else if (window.innerWidth <= 1024) setCols(2);
      else setCols(3);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="mfg-process-section">
      <div
        className="mfg-process-header"
        ref={(el) => (animRefs.current[0] = el)}
      >
        <div className="mfg-process-kicker">Quality Testing Lab</div>
        <div className="mfg-process-title">Verified quality. Proven performance.</div>
      </div>

      <div className="mfg-process-shell">
        <div className="mfg-process-grid">
          {processes.map((process, index) => {
            const row = Math.floor(index / cols);
            const col = index % cols;
            const isEvenRow = row % 2 === 0;
            const isLastItem = index === processes.length - 1;

            // Determine connection type
            let connectionType = "";
            if (cols === 1) {
              if (!isLastItem) connectionType = "down";
            } else {
              if (isEvenRow) {
                if (col < cols - 1 && !isLastItem) connectionType = "right";
                else if (col === cols - 1 && !isLastItem) connectionType = "down-right";
              } else {
                if (col < cols - 1 && !isLastItem) connectionType = "left";
                else if (col === cols - 1 && !isLastItem) connectionType = "down-left";
              }
            }

            let gridColumn = cols === 1 ? 1 : (isEvenRow ? col + 1 : cols - col);
            let gridRow = row + 1;

            // Stagger delay: reset per row, 100ms between cards within row
            const delayInRow = col * 100;

            return (
              <div
                className={`mfg-process-card-wrapper ${connectionType ? `has-connect-${connectionType}` : ''}`}
                key={process.id}
                style={{ '--grid-col': gridColumn, '--grid-row': gridRow, transitionDelay: `${delayInRow}ms` }}
                ref={(el) => (animRefs.current[index + 1] = el)}
              >
                <div className="mfg-process-card">
                  <div className="mfg-process-image">
                    <img src={process.img} alt={process.title} loading="lazy" />
                  </div>
                  <p className="mfg-process-label">{process.title}</p>
                </div>

                {connectionType && (
                  <div className={`connector connector-${connectionType}`}>
                    <div className="connector-dot">
                      {connectionType === 'right' && <ArrowRight />}
                      {connectionType === 'left' && <ArrowLeft />}
                      {connectionType === 'down' && <ArrowDown />}
                      {connectionType === 'down-right' && <ArrowDown />}
                      {connectionType === 'down-left' && <ArrowDown />}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const ArrowRight = () => (
  <div className="custom-arrow">
    <div className="arrow-dot" />
    <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
      <path d="M8 5v14l11-7z" />
    </svg>
  </div>
);

const ArrowLeft = () => (
  <div className="custom-arrow">
    <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 19V5l-11 7z" />
    </svg>
    <div className="arrow-dot" />
  </div>
);

const ArrowDown = () => (
  <div className="custom-arrow arrow-vertical">
    <div className="arrow-dot" />
    <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
      <path d="M5 8h14l-7 11z" />
    </svg>
  </div>
);

export default ManufacturingProcessFlow;
