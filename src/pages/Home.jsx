// frontend/src/pages/Home.jsx
import React from "react";

import HeroSection          from '../components/hero/HeroSection';
import ProductsShowcase     from '../components/productsShowcase/ProductsShowcase';
import DemonstrationSection from '../components/demonstrationSection/Demonstration';
import BenefitsSection      from '../components/benefits/BenefitsSection';
import StorySection         from '../components/story/StorySection';

export default function Home() {
  return (
    <main className="home-page">
      <HeroSection />
      <ProductsShowcase />
      <DemonstrationSection />
      <BenefitsSection />
      <StorySection />
    </main>
  );
}
