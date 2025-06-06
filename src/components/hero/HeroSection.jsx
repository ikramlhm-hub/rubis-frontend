import React from 'react';
import './HeroSection.css';
import heroImage from '../../assets/hero/hero-image.png';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content-wrapper">
        <img src={heroImage} alt="Boisson Rhéa" />
        <div className="hero-overlay">
          <h1>PLUS DE DOUCEURS, MOINS DE DOULEURS</h1>
          <p>Boisson qui permet de réduire les douleurs menstruel naturellement</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
