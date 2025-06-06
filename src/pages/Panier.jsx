import React, { useEffect, useState } from "react";
import { getCart, removeCartItem } from "../api";
import "../styles/Panier.css";
import panierVideImg from "../assets/details/panier-vide.png";
import imgFramboise from "../assets/products/rhea-framboise.png";
import imgMyrtille from "../assets/products/rhea-myrtille.png";
import imgHibiscus from "../assets/products/rhea-hibiscus.png";

const images = {
  "rhea-framboise.png": imgFramboise,
  "rhea-myrtille.png": imgMyrtille,
  "rhea-hibiscus.png": imgHibiscus,
  framboise: imgFramboise,
  myrtille: imgMyrtille,
  hibiscus: imgHibiscus
};

export default function Panier() {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showLoginPrompt, setShowLoginPrompt] = useState(false);

  const cartId = localStorage.getItem("cartId");

  useEffect(() => {
    const fetchCart = async () => {
      setLoading(true);
      try {
        const data = await getCart(cartId);
        setCart(data);
      } catch (err) {
        setCart([]);
      }
      setLoading(false);
    };
    fetchCart();
  }, [cartId]);

  const handleRemove = async (detailId) => {
    await removeCartItem(detailId);
    const data = await getCart(cartId);
    setCart(data);
  };

  const total = cart.reduce((sum, item) => sum + Number(item.sous_total || 0), 0);

const handleOrderClick = () => {
  const token = localStorage.getItem("token");
  if (!token) {
    setShowLoginPrompt(true);
    return;
  }
  // On enlève Stripe ici :
  window.location.href = "/commande";
};

  const goToLogin = () => {
    window.location.href = "/login";
  };

  if (loading) return <div>Chargement du panier…</div>;

  // PANIER VIDE
  if (cart.length === 0) {
    return (
      <div className="cart-modal-overlay">
        <div className="cart-modal-empty">
          <div className="cart-modal-header">
            <span className="cart-modal-title">Votre panier</span>
          </div>
          <div className="cart-modal-body">
            <img src={panierVideImg} className="cart-modal-img" alt="Panier vide" width={100} />
            <div className="cart-modal-empty-text">Votre panier est vide.</div>
            <button className="cart-modal-shop-btn" onClick={() => window.location.href = "/produits"}>
              Découvrir la boutique
            </button>
          </div>
        </div>
      </div>
    );
  }

  // PANIER REMPLI
  return (
    <main className="panier-main">
      <h2>Votre panier</h2>
      <ul className="panier-list">
        {cart.map(item => {
          let imgSrc =
            images[item.photo] ||
            (item.nom && item.nom.toLowerCase().includes("myrtille") && imgMyrtille) ||
            (item.nom && item.nom.toLowerCase().includes("hibiscus") && imgHibiscus) ||
            (item.nom && item.nom.toLowerCase().includes("framboise") && imgFramboise) ||
            imgFramboise;

          return (
            <li key={item.id_detail} className="panier-item">
              <img src={imgSrc} alt={item.nom} className="panier-img" />
              <div>
                <div className="panier-nom">{item.nom}</div>
                <div className="panier-qte">Qté : {item.quantite}</div>
                <div className="panier-prix">{item.prix_unitaire}€ / unité</div>
                <div className="panier-total">Sous-total : {item.sous_total}€</div>
                <button className="panier-remove-btn" onClick={() => handleRemove(item.id_detail)}>
                  Supprimer
                </button>
              </div>
            </li>
          );
        })}
      </ul>
      <div className="panier-total-global">
        Total panier : <b>{total.toFixed(2)} €</b>
      </div>
      
      {/* --- Le bouton Commander --- */}
      <button className="panier-order-btn" onClick={handleOrderClick}>
        Commander
      </button>

      {/* --- Modal connexion si pas connectée --- */}
      {showLoginPrompt && (
        <div className="commande-login-modal">
          <div className="commande-login-modal-content">
            <p>Vous devez être connectée pour commander.</p>
            <button className="btn-login-link" onClick={goToLogin}>
              Se connecter
            </button>
            <button className="btn-close-modal" onClick={() => setShowLoginPrompt(false)}>
              Annuler
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
