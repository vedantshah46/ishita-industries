import { useRef } from "react";
import "./ManufacturingInfrastructureSection.css";
import infrastructureImage from "../../Images/about-manufacturing-infrastructure.png";
import contactUsLogo from "../../Images/homepage-contact-us-logo.png";
import checkboxIcon from "../../Images/about-manufacture-checkbox.png";
import useScrollAnimation from "../../hooks/useScrollAnimation";
import useCurtainReveal from "../../hooks/useCurtainReveal";

const machineList = [
  "CNC Sliding Head Machines",
  "CNC Turning Machines",
  "Automatic Turning Machine",
  "Automatic Trobe Type Machine",
  "Drilling Machines",
  "Threading Machines",
  "Cutting Machines",
  "Milling",
  "Marking Machine",
];

const infrastructureStats = [
  { value: "22,000+", label: "Land Area" },
  { value: "16,000+", label: "Build Area" },
  { value: "10,000+", label: "Workshop" },
  { value: "1000+", label: "Quality Control" },
];

function ManufacturingInfrastructureSection() {
  const titleRef = useCurtainReveal({ stagger: 0.065 });

  const animRefs = useRef([]);
  useScrollAnimation(animRefs);

  return (
    <section className="about-infra-section">
      <div>
        <p className="about-infra-kicker mb-0">POWERING PRECISION</p>
        <h2 className="about-infra-title mb-0" ref={titleRef}>
          MANUFACTURING INFRASTRUCTURE.
        </h2>
      </div>
      <div className="container about-infra-shell">
        <div
          className="about-infra-header"
          ref={(el) => (animRefs.current[0] = el)}
        ></div>

        <div
          className="about-infra-visual-card"
          ref={(el) => (animRefs.current[1] = el)}
        >
          <img
            src={infrastructureImage}
            alt="Manufacturing infrastructure"
            className="about-infra-image"
          />

          <div className="about-infra-overlay">
            <div aria-hidden="true">
              <img src={contactUsLogo} />
            </div>

            <ul className="about-infra-list">
              {machineList.map((item) => (
                <li key={item} className="about-infra-list-item">
                  <img src={checkboxIcon} className="about-infra-check-img" alt="check" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className="about-infra-stats"
          ref={(el) => (animRefs.current[2] = el)}
        >
          {infrastructureStats.map((stat) => (
            <article key={stat.label} className="about-infra-stat-card">
              <p className="about-infra-stat-value mb-0">{stat.value}</p>
              <p className="about-infra-stat-label mb-0">{stat.label}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ManufacturingInfrastructureSection;
