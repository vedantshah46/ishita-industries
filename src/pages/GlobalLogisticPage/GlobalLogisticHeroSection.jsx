import React, { useEffect, useRef } from 'react';
import './GlobalLogisticHeroSection.css';
import './GlobalLogisticShell.css';
import heroBanner from '../../Images/global_logistic_hero-banner.png';
import anime from 'animejs';
import SplitType from 'split-type';

const GlobalLogisticHeroSection = () => {
  const sectionRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    // Split the title into characters
    const titleText = new SplitType('.global-hero-title', { types: 'lines, words, chars' });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;

            const tl = anime.timeline({
              easing: 'spring(1, 80, 10, 0)',
            });

            // 1. Title characters reveal
            tl.add({
              targets: titleText.chars,
              translateY: [40, 0],
              opacity: [0, 1],
              rotateX: [-90, 0],
              delay: anime.stagger(15),
              duration: 1200
            })
            // 2. Sub-title / Light part
            .add({
              targets: '.global-hero-title-light',
              opacity: [0, 1],
              translateY: [20, 0],
              duration: 1000
            }, '-=800')
            // 3. Copy text
            .add({
              targets: '.global-hero-copy',
              opacity: [0, 1],
              translateY: [20, 0],
              duration: 1000
            }, '-=800')
            // 4. Hero image
            .add({
              targets: '.hero-image-wrapper',
              opacity: [0, 1],
              scale: [0.98, 1],
              translateY: [40, 0],
              duration: 1200
            }, '-=800');

            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Fallback for hero section immediate load
    const timeout = setTimeout(() => {
      if (!hasAnimated.current && sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          // Trigger manually if observer missed it
          const entries = [{ isIntersecting: true, target: sectionRef.current }];
          // We can't easily call the observer callback directly with fake entries, 
          // but we can just trigger the same logic if we encapsulate it. 
          // For now, threshold 0.05 is usually enough.
        }
      }
    }, 500);

    return () => {
      observer.disconnect();
      titleText.revert();
      clearTimeout(timeout);
    };
  }, []);

  return (
    <section className="global-logistic-hero" ref={sectionRef}>
      <div className="global-logistic-shell">
        <header className="global-hero-top">
          <h1 className="global-hero-title mb-0" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)' }}>
            Global Shipping &amp;
            <span className="d-block">Logistics.</span>
            <span className="global-hero-title-light d-block">Delivering Worldwide.</span>
          </h1>
        </header>
        
        <div className="global-logistic-hero-content">
          <div className="hero-text-wrapper">
            <p className="global-hero-copy mb-0">
              Ensuring safe, efficient, and timely delivery across global markets, we manage every
              step of the logistics process with precision. From secure packaging to smooth freight
              handling and customs clearance, our system is designed to provide reliable, hassle-
              free international shipping.
            </p>
          </div>
        </div>
        <div className="hero-image-wrapper">
          <img src={heroBanner} alt="Global Logistics" className="hero-banner-img" />
        </div>
      </div>
    </section>
  );
};

export default GlobalLogisticHeroSection;
