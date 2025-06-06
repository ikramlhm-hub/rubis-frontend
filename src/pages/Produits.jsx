// src/pages/Produits.jsx
import React from 'react';
import ProductsShowcase from '../components/productsShowcase/ProductsShowcase';
import NosPacksSection from '../components/nospacks/NosPacksSection';

const Produits = () => {
  return (
    <main className="produits-page">
      <ProductsShowcase />
      <NosPacksSection />
    </main>
  );
};

export default Produits;
