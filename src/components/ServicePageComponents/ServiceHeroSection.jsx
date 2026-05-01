import React, { useEffect, useRef } from 'react';
import './ServiceHeroSection.css';
import './ServiceShell.css';
import anime from 'animejs';
import SplitType from 'split-type';

const ServiceHeroSection = ({ 
  titleMain, 
  titleLight, 
  tagline, 
  splitTitle, 
  splitDesc, 
  heroImage, 
  imageAlt 
}) => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const splitRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const text = new SplitType(titleRef.current, { types: 'chars' });
    
    const triggerAnimation = () => {
      if (hasAnimated.current || !sectionRef.current) return;
      hasAnimated.current = true;

      const tl = anime.timeline({
        easing: 'easeOutExpo',
      });

      const chars = text.chars || [];
      const tagline = sectionRef.current.querySelector('.service-hero-tagline');
      const splitTitle = sectionRef.current.querySelector('.service-hero-split-title');
      const splitDesc = sectionRef.current.querySelector('.service-hero-split-desc');
      const splitLine = sectionRef.current.querySelector('.service-hero-split-line');
      const splitImage = sectionRef.current.querySelector('.service-hero-split-image');

      tl.add({
        targets: chars,
        translateY: [40, 0],
        rotateX: [-90, 0],
        opacity: [0, 1],
        delay: anime.stagger(20),
        duration: 800
      })
      .add({
        targets: tagline,
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 700
      }, '-=500')
      .add({
        targets: [splitTitle, splitDesc, splitLine].filter(Boolean),
        opacity: [0, 1],
        translateY: [30, 0],
        delay: anime.stagger(100),
        duration: 1000
      }, '-=400')
      .add({
        targets: splitImage,
        opacity: [0, 1],
        scale: [1.05, 1],
        duration: 1200
      }, '-=1000');
    };

    const timer = setTimeout(() => {
      if (!hasAnimated.current) triggerAnimation();
    }, 200);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            triggerAnimation();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
      text.revert();
    };
  }, []);

  return (
    <section className="service-hero" ref={sectionRef}>
      <div className="service-shell">
        <header className="service-hero-top">
          <h1 className="service-hero-title mb-0" ref={titleRef}>
            {titleMain}
            <span className="service-hero-title-light d-block">{titleLight}</span>
          </h1>
          <p className="service-hero-tagline mb-0">
            {tagline}
          </p>
        </header>
      </div>

      <div className="service-hero-split" ref={splitRef}>
        <div className="service-hero-split-text">
          <div className="service-hero-split-text-inner">
            <h2 className="service-hero-split-title">{splitTitle}</h2>
            <p className="service-hero-split-desc mb-0">
              {splitDesc}
            </p>
            <div className="service-hero-split-line" aria-hidden="true"></div>
          </div>
        </div>
        <div className="service-hero-split-image">
          <img src={heroImage} alt={imageAlt} className="service-hero-banner-img" />
        </div>
      </div>
    </section>
  );
};

export default ServiceHeroSection;
