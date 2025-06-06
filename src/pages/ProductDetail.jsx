// frontend/src/pages/ProductDetail.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

import visuel1 from '../assets/details/produitv2.png';
import visuel2 from '../assets/details/herbe.png';
import visuel3 from '../assets/details/framboise.png';
import visuel4 from '../assets/details/fille.png';

const ProductDetail = () => {
  const { slug } = useParams();

  if (slug !== 'rhea-framboise') {
    return <div>Produit introuvable.</div>;
  }

  return (
    <section style={{ padding: '60px 20px', maxWidth: '1100px', margin: '0 auto' }}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '20px',
          marginBottom: '40px',
        }}
      >
        {[visuel1, visuel2, visuel3, visuel4].map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`visuel-${index}`}
            style={{ width: '100%', borderRadius: '16px', objectFit: 'cover' }}
          />
        ))}
      </div>

      <div style={{ textAlign: 'left' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>Boisson Rhéa Framboise</h1>
        <p style={{ fontSize: '1.2rem', fontWeight: 'bold', marginTop: '10px' }}>2.50€</p>
        <ul style={{ marginTop: '20px', marginBottom: '30px', lineHeight: '1.6' }}>
          <li>✅ Feuilles de framboisier : réduit les spasmes utérins et favorise le confort pendant les règles</li>
          <li>✅ Gingembre : puissant anti-inflammatoire, il soulage les crampes menstruelles</li>
          <li>✅ Camomille : calme, relaxe, diminue le stress et les douleurs</li>
        </ul>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
          <button style={{ backgroundColor: '#f8426a', color: 'white', padding: '12px 24px', border: 'none', borderRadius: '20px', fontWeight: 'bold' }}>
            Ajouter au panier
          </button>
          <button style={{ backgroundColor: 'black', color: 'white', padding: '12px 24px', border: 'none', borderRadius: '20px', fontWeight: 'bold' }}>
            Acheter avec RhéaClub
          </button>
          <button style={{ backgroundColor: '#f8426a', color: 'white', padding: '12px 24px', border: 'none', borderRadius: '20px', fontWeight: 'bold', flexGrow: 1 }}>
            Ajouter à ma prochain colis
          </button>
        </div>

        <p style={{ fontSize: '0.85rem', color: 'gray', marginTop: '10px' }}>Plus de moyens de paiement</p>
      </div>
    </section>
  );
};

export default ProductDetail;
