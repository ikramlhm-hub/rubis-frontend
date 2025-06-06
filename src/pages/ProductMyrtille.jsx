import React from "react";
import "../styles/ProductFramboise.css";

// IMAGES MYRTILLE (place-les dans src/assets/details/)
import produitMyrtille from "../assets/details/produit-myrtille.png";
import visuelMyrtille from "../assets/details/visuel-myrtille.png";
import myrtille from "../assets/details/myrtille.png";
import filleMyrtille from "../assets/details/fille-myrtille.png";
import trioBouteille from "../assets/details/trio-bouteille.png"; // même image que framboise, à garder

const ProductMyrtille = () => (
  <>
    <main className="product-detail-framboise">
      <div className="product-detail-grid">
        <div className="images-grid">
          <img src={produitMyrtille} alt="Produit Myrtille Rhéa" className="product-img" />
          <img src={visuelMyrtille} alt="Visuel Myrtille Rhéa" className="product-img" />
          <img src={myrtille} alt="Myrtille" className="product-img" />
          <img src={filleMyrtille} alt="Fille boit Rhéa Myrtille" className="product-img" />
        </div>
        <div className="product-info">
          <h1>Boisson RhéaMyrtille</h1>
          <p className="product-price">2.50€</p>
          <div className="product-avis">
            <span className="product-stars">★★★★★</span>
            <span>20 Avis</span>
          </div>
          <ul>
            <li>
              <span className="check">✔</span>
              <b>Myrtille</b> : Riche en antioxydants et flavonoïdes, elle améliore la circulation sanguine et combat l’inflammation
            </li>
            <li>
              <span className="check">✔</span>
              <b>Menthe poivrée</b> : Antispasmodique très efficace, elle aide à relâcher les muscles de l’utérus
            </li>
            <li>
              <span className="check">✔</span>
              <b>Curcuma</b> : La curcumine réduit les marqueurs inflammatoires et diminue la douleur menstruelle
            </li>
          </ul>
          <div className="product-actions">
            <button className="btn-secondary">Acheter avec RhéaClub</button>
            <button className="btn-tertiary">Ajouter à ma prochain colis</button>
          </div>
          <p className="payment-link">Plus de moyens de paiement</p>
        </div>
      </div>

      {/* Bandeau défilant */}
      <div className="marquee-bandeau">
        <div className="marquee-content">
          <span>Antioxydant naturel</span>
          <span>100% naturel</span>
          <span>Vegan</span>
          <span>Sans sucre ajouté</span>
          <span>Bienfaits menstruels</span>
          <span>Délicieux goût myrtille</span>
          <span>Confort féminin</span>
          {/* Répétition pour continuité */}
          <span>Antioxydant naturel</span>
          <span>100% naturel</span>
          <span>Vegan</span>
          <span>Sans sucre ajouté</span>
          <span>Bienfaits menstruels</span>
          <span>Délicieux goût myrtille</span>
          <span>Confort féminin</span>
        </div>
      </div>

      {/* Section intro storytelling */}
      <div className="intro-section-rhea">
        <img src={trioBouteille} alt="Trio Rhéa" className="intro-trio-img" />
        <div className="intro-text-rhea">
          <h2>Vitalité & douceur, même pendant vos règles</h2>
          <p>
            Découvrez <b>Rhéa Myrtille</b>, la boisson idéale pour accompagner chaque cycle avec énergie et réconfort.<br /><br />
            Sa formule associe les bienfaits antioxydants de la myrtille, la fraîcheur de la menthe poivrée et l’effet anti-inflammatoire du curcuma. Chaque gorgée aide à lutter contre l’inconfort, à renforcer vos défenses naturelles et à retrouver la sérénité.<br /><br />
            Rhéa Myrtille séduit par son goût fruité intense, légèrement acidulé, sans sucre ajouté. À savourer froide ou chaude selon vos envies.<br /><br />
            Plus qu’une boisson, c’est une nouvelle façon de prendre soin de vous, naturellement.
          </p>
          <p className="intro-tags-rhea">
            <span role="img" aria-label="coeur">💗</span> 100 % naturel &nbsp;–&nbsp; Sans conservateurs &nbsp;–&nbsp; Vegan &nbsp;–&nbsp; Made in France
          </p>
        </div>
      </div>
    </main>

    {/* FAQ EN DEHORS DU MAIN */}
    <section className="faq-section">
      <div className="faq-container">
        <p className="faq-subtitle">QUESTIONS FRÉQUENTES</p>
        <h2 className="faq-title">FAQ</h2>
        <div className="faq-list">
          <details>
            <summary>À quel moment du cycle boire Rhéa Myrtille ?</summary>
            <div className="faq-answer">
              Vous pouvez consommer Rhéa Myrtille dès les premiers signes d’inconfort ou en prévention avant vos règles.
            </div>
          </details>
          <details>
            <summary>Les bienfaits sont-ils prouvés ?</summary>
            <div className="faq-answer">
              Les ingrédients sont reconnus pour leurs effets bénéfiques sur le confort menstruel et le bien-être global.
            </div>
          </details>
          <details>
            <summary>Rhéa Myrtille est-elle sucrée ?</summary>
            <div className="faq-answer">
              Non, la recette ne contient pas de sucre ajouté, juste le goût naturellement fruité des ingrédients.
            </div>
          </details>
          <details>
            <summary>Convient-elle aux régimes spécifiques ?</summary>
            <div className="faq-answer">
              Oui, Rhéa Myrtille est 100 % vegan, sans gluten et sans conservateurs.
            </div>
          </details>
          <details>
            <summary>Peut-on la consommer froide ou chaude ?</summary>
            <div className="faq-answer">
              Absolument, à savourer selon vos envies !
            </div>
          </details>
        </div>
      </div>
    </section>
  </>
);

export default ProductMyrtille;
