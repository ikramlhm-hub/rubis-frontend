// src/components/nospacks/NosPacksSection.jsx
import React from 'react';
import './NosPacksSection.css';

import packImage from '../../assets/products/nospack-visuel.png';

export default function NosPacksSection() {
  const packs = [
    {
      id: 1,
      title: 'Lot de 3 Boissons',
      price: '24,99€',
    },
    {
      id: 2,
      title: 'Compose ton lot de 3 Boissons',
      price: '24,99€',
    },
  ];

  return (
    <section className="packs-section">
      <div className="packs-grid">
        {packs.map(pack => (
          <div key={pack.id} className="pack-card">
            <img src={packImage} alt={pack.title} className="pack-card__image" />
            <div className="pack-card__info">
              <h2>{pack.title}</h2>
              <p>{pack.price}</p>
              <button className="pack-card__btn">Ajouter au panier</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
