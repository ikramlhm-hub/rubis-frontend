import React from "react";
import "../styles/ProductFramboise.css";
//import { handleAddToCart } from "../utils/cart";

import visuel1 from "../assets/details/produitv2.png";
import visuel2 from "../assets/details/herbe.png";
import visuel3 from "../assets/details/framboise.png";
import visuel4 from "../assets/details/fille.png";
import trioBouteille from "../assets/details/trio-bouteille.png";

// ID du produit Rhéa Framboise dans ta BDD
//const PRODUCT_ID_FRAMBOISE = 2;

const ProductFramboise = () => (
  <>
    <main className="product-detail-framboise">
      <div className="product-detail-grid">
        <div className="images-grid">
          {[visuel1, visuel2, visuel3, visuel4].map((img, i) => (
            <img key={i} src={img} alt={`Visuel ${i + 1}`} className="product-img" />
          ))}
        </div>
        <div className="product-info">
          <h1>Boisson Rhéa Framboise</h1>
          <p className="product-price">2.50€</p>
          <div className="product-avis">
            <span className="product-stars">★★★★★</span>
            <span>20 Avis</span>
          </div>
          <ul>
            <li><span className="check">✔</span> <b>Feuilles de framboisier</b> : Utilisées en phytothérapie pour réduire les spasmes utérins et favoriser le confort pendant les règles</li>
            <li><span className="check">✔</span> <b>Gingembre</b> : Puissant anti-inflammatoire naturel, il diminue significativement la douleur des crampes menstruelles</li>
            <li><span className="check">✔</span> <b>Camomille</b> : Reconnu pour ses effets calmants, antispasmodiques et anxiolytiques. Apaise les douleurs et favorise la relaxation</li>
          </ul>
          <div className="product-actions">

            <button className="btn-secondary" onClick={handleAcheterAvecRheaClub}>
              Acheter avec RhéaClub
            </button>
            <button className="btn-tertiary">Ajouter à ma prochain colis</button>
          </div>
          <p className="payment-link">Plus de moyens de paiement</p>
        </div>
      </div>

      {/* Bandeau full width */}
      <div className="marquee-bandeau">
        <div className="marquee-content">
          <span>Réduit vos douleurs</span>
          <span>100% naturel</span>
          <span>Vegan</span>
          <span>Sans sucre ajouté</span>
          <span>Bienfaits menstruels</span>
          <span>Délicieux goût framboise</span>
          <span>Confort féminin</span>
          {/* Duplique pour un défilement parfait */}
          <span>Réduit vos douleurs</span>
          <span>100% naturel</span>
          <span>Vegan</span>
          <span>Sans sucre ajouté</span>
          <span>Bienfaits menstruels</span>
          <span>Délicieux goût framboise</span>
          <span>Confort féminin</span>
        </div>
      </div>

      <div className="intro-section-rhea">
        <img src={trioBouteille} alt="Trio Rhéa" className="intro-trio-img" />
        <div className="intro-text-rhea">
          <h2>Soulagement instantané, douceur garantie</h2>
          <p>
            Transformez votre expérience menstruelle dès la première gorgée avec <b>Rhéa</b>, la boisson naturelle pensée pour soulager les douleurs de règles et réconforter le corps tout entier.<br /><br />
            Formulée à partir d’ingrédients reconnus en phytothérapie, Rhéa combine le pouvoir apaisant des feuilles de framboisier, les propriétés anti-inflammatoires du gingembre et les vertus relaxantes de la camomille. Ensemble, ils agissent en synergie pour réduire les crampes, détendre les muscles utérins et apaiser les tensions liées au cycle.<br /><br />
            En plus de son efficacité, Rhéa séduit par son goût unique : une alliance douce et fruitée, relevée d’une pointe épicée et florale, à savourer chaude ou froide selon vos envies.<br /><br />
            Rhéa ne se contente pas de soulager — elle transforme chaque période difficile en moment de douceur et de reconnexion à soi.
          </p>
          <p className="intro-tags-rhea">
            <span role="img" aria-label="coeur">💗</span> 100 % naturel &nbsp;–&nbsp; Sans conservateurs &nbsp;–&nbsp; Vegan &nbsp;–&nbsp; Made in France
          </p>
        </div>
      </div>
    </main>

    {/* FAQ Section EN DEHORS du main ! */}
    <section className="faq-section">
      <div className="faq-container">
        <p className="faq-subtitle">QUESTIONS FRÉQUENTES</p>
        <h2 className="faq-title">FAQ</h2>
        <div className="faq-list">
          <details>
            <summary>À quel moment du cycle dois-je boire Rhéa ?</summary>
            <div className="faq-answer">
              Vous pouvez commencer à boire Rhéa dès l’apparition des premiers symptômes menstruels ou à titre préventif quelques jours avant vos règles.
            </div>
          </details>
          <details>
            <summary>Rhéa est-elle efficace contre les douleurs intenses ?</summary>
            <div className="faq-answer">
              Rhéa agit sur les douleurs modérées à fortes grâce à ses actifs naturels reconnus, mais en cas de douleurs très intenses, n’hésitez pas à consulter un professionnel de santé.
            </div>
          </details>
          <details>
            <summary>Puis-je boire Rhéa tous les jours ?</summary>
            <div className="faq-answer">
              Rhéa peut être consommée tous les jours pendant la période des règles. En dehors, une consommation ponctuelle reste sans risque.
            </div>
          </details>
          <details>
            <summary>Y a-t-il des effets secondaires ?</summary>
            <div className="faq-answer">
              Nos ingrédients sont naturels et soigneusement sélectionnés : aucun effet secondaire connu dans le respect des doses recommandées.
            </div>
          </details>
          <details>
            <summary>Est-ce que Rhéa peut être consommée froide ou chaude ?</summary>
            <div className="faq-answer">
              Oui, Rhéa se savoure aussi bien chaude que froide selon vos préférences.
            </div>
          </details>
        </div>
      </div>
    </section>
  </>
);

const handleAcheterAvecRheaClub = () => {
  // On enregistre le produit choisi dans le localStorage
  localStorage.setItem(
    "pendingClubProduct",
    JSON.stringify({
      id: 2,           // ID du produit concerné (exemple : framboise = 2)
      nom: "Boisson Rhéa Framboise",
      // Ajoute d'autres infos si tu veux : prix, image, etc.
    })
  );
  // Vérifie la connexion utilisateur :
  const token = localStorage.getItem("token");
  if (!token) {
    window.location.href = "/login";
  } else {
    window.location.href = "/rheaclub";
  }
};


export default ProductFramboise;
