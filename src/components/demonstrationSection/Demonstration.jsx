import React from 'react';
import './Demonstration.css';
import pack1 from '../../assets/demonstration/pack1.png';
import pack2 from '../../assets/demonstration/pack2.png';

const DemonstrationSection = () => {
  return (
    <section className="demonstration">
      <div className="demo-image-wrapper">
        <img src={pack1} alt="Pack Rhéa 1" />
      </div>
      <div className="demo-image-wrapper">
        <img src={pack2} alt="Pack Rhéa 2" />
      </div>
    </section>
  );
};

export default DemonstrationSection;
