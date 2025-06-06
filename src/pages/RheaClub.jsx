import React, { useEffect, useState } from "react";
import "../styles/RheaClub.css";

export default function RheaClub() {
  const [pendingProduct, setPendingProduct] = useState(null);

  useEffect(() => {
    const product = localStorage.getItem("pendingClubProduct");
    if (product) {
      setPendingProduct(JSON.parse(product));
      localStorage.removeItem("pendingClubProduct");
    }
  }, []);

  return (
    <main className="rheaclub-main">
      <h2 className="rheaclub-title">Mon espace RhéaClub</h2>
      {pendingProduct ? (
        <div className="pending-product-card">
          <p className="pending-product-label">Produit à ajouter à RhéaClub :</p>
          <div className="pending-product-nom">{pendingProduct.nom}</div>
          {/* Ajoute ici l'image/visuel si tu veux */}
          <button
            className="pending-product-btn"
            onClick={() => alert(`Produit ${pendingProduct.nom} ajouté à RhéaClub !`)}
          >
            Ajouter à mon Club
          </button>
        </div>
      ) : (
        <div className="no-product">
          <p>Aucun produit en attente.<br />Explore la boutique pour ajouter un produit à ton Club !</p>
        </div>
      )}
      {/* Tu peux intégrer ici le visuel Figma en-dessous */}
    </main>
  );
}
