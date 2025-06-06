import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Header from "./components/header/Header";
import NewsletterSection from "./components/newsletter/NewsletterSection";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import Produits from "./pages/Produits";
import ProductFramboise from "./pages/ProductFramboise";
import ProductMyrtille from './pages/ProductMyrtille';
import ProductHibiscus from './pages/ProductHibiscus';
import Bienfaits from "./pages/Bienfaits";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotreHistoire from "./pages/NotreHistoire";
import Welcome from "./pages/Welcome";
import Panier from "./pages/Panier";
import API_URL from 'config.js';
import Commande from "./pages/Commande";


function App() {
  const location = useLocation();
  const hideNewsletter = ["/login", "/register", "/welcome"];

  useEffect(() => {
    let cartId = localStorage.getItem("cartId");
    if (!cartId) {
      fetch(`${API_URL}/cart/create`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      })
        .then(res => res.json())
        .then(data => {
          if (data.cartId) {
            localStorage.setItem("cartId", data.cartId);
          }
        });
    }
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produits" element={<Produits />} />
        <Route path="/produits/framboise" element={<ProductFramboise />} />
        <Route path="/produits/myrtille" element={<ProductMyrtille />} />
        <Route path="/produits/hibiscus" element={<ProductHibiscus />} />
        <Route path="/bienfaits" element={<Bienfaits />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/notre-histoire" element={<NotreHistoire />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/panier" element={<Panier />} />
        <Route path="/commande" element={<Commande />} />

      </Routes>
      {!hideNewsletter.includes(location.pathname) && <NewsletterSection />}
      <Footer />
    </>
  );
}

export default App;
