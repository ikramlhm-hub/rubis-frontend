import React from 'react';
import './BenefitsSection.css';
import benefitsImage from '../../assets/benefits/benefits.png';

const BenefitsSection = () => {
  return (
    <section className="benefits-section">
      <section id="bienfaits" className="benefits-section">
        <img src={benefitsImage} alt="Les bienfaits de Rhéa" className="benefits-image" />
      </section>
    </section>
  );
};

export default BenefitsSection;
