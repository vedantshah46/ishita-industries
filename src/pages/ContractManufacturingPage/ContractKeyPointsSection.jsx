import React, { useEffect, useRef } from 'react';
import './ContractKeyPointsSection.css';
import anime from 'animejs';

const keyPoints = [
  {
    num: '01',
    title: 'One stop solution for Fasteners and Precious turned components',
  },
  {
    num: '02',
    title: 'Quality assurance team to test product at each step',
  },
  {
    num: '03',
    title: 'Custom packaging and branding with hot-stamp labelling',
  },
];

const ContractKeyPointsSection = () => {
  const sectionRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const triggerAnimation = () => {
      if (hasAnimated.current || !sectionRef.current) return;
      hasAnimated.current = true;

      const tl = anime.timeline({ easing: 'easeOutExpo' });

      const header = sectionRef.current.querySelector('.ckp-header');
      const cards = sectionRef.current.querySelectorAll('.ckp-card');

      if (header) {
        tl.add({ targets: header, opacity: [0, 1], translateY: [30, 0], duration: 1000 });
      }
      if (cards.length > 0) {
        tl.add({
          targets: cards,
          translateY: [40, 0],
          opacity: [0, 1],
          delay: anime.stagger(120),
          duration: 1100,
        }, '-=600');
      }
    };

    const timer = setTimeout(() => {
      if (!hasAnimated.current) triggerAnimation();
    }, 10000);

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
  }, []);

  return (
    <section className="ckp-section" ref={sectionRef}>
      <div className="service-shell">
        <div className="ckp-header">
          <p className="service-grid-kicker mb-0">TECHNICAL CAPABILITIES</p>
          <h2 className="service-grid-title mb-0">Integrated Branding Services</h2>
        </div>

        <div className="ckp-grid">
          {keyPoints.map((point) => (
            <div className="ckp-card service-card" key={point.num}>
              <span className="ckp-num">{point.num}</span>
              <h3 className="service-card-title">{point.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContractKeyPointsSection;
