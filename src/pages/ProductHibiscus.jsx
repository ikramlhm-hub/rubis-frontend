import React from "react";
import "../styles/ProductFramboise.css"; // On réutilise le CSS pour l’uniformité

import hibiscus1 from "../assets/details/produit-hibiscus.png";
import hibiscus2 from "../assets/details/hibiscus-island.png";
import hibiscus3 from "../assets/details/visuel-hibiscus.png";
import hibiscus4 from "../assets/details/hibiscus-plage.png";
import trioBouteille from "../assets/details/trio-bouteille.png";

const ProductHibiscus = () => (
  <>
    <main className="product-detail-framboise">
      <div className="product-detail-grid">
        <div className="images-grid">
          {[hibiscus1, hibiscus2, hibiscus3, hibiscus4].map((img, i) => (
            <img key={i} src={img} alt={`Visuel Hibiscus ${i + 1}`} className="product-img" />
          ))}
        </div>
        <div className="product-info">
          <h1>Boisson Rhéa Hibiscus</h1>
          <p className="product-price">2.50€</p>
          <div className="product-avis">
            <span className="product-stars">★★★★★</span>
            <span>20 Avis</span>
          </div>
          <ul>
            <li>
              <span className="check">✔</span>
              <b>Hibiscus</b> : Apaise les douleurs menstruelles et régule le cycle
            </li>
            <li>
              <span className="check">✔</span>
              <b>Citron</b> : Source de vitamine C, il améliore l’absorption du fer et soutient le système immunitaire durant les règles
            </li>
            <li>
              <span className="check">✔</span>
              <b>Cannelle</b> : Effets antispasmodiques et anti-inflammatoires puissants
            </li>
          </ul>
          <div className="product-actions">
*            <button className="btn-secondary">Acheter avec RhéaClub</button>
            <button className="btn-tertiary">Ajouter à ma prochain colis</button>
          </div>
          <p className="payment-link">Plus de moyens de paiement</p>
        </div>
      </div>

      {/* Bandeau full width */}
      <div className="marquee-bandeau">
        <div className="marquee-content">
          <span>Fraîcheur estivale</span>
          <span>100% naturel</span>
          <span>Vegan</span>
          <span>Sans sucre ajouté</span>
          <span>Bienfaits menstruels</span>
          <span>Goût fruité & floral</span>
          <span>Confort féminin</span>
          <span>Fraîcheur estivale</span>
          <span>100% naturel</span>
          <span>Vegan</span>
          <span>Sans sucre ajouté</span>
          <span>Bienfaits menstruels</span>
          <span>Goût fruité & floral</span>
          <span>Confort féminin</span>
        </div>
      </div>

      <div className="intro-section-rhea">
        <img src={trioBouteille} alt="Trio Rhéa" className="intro-trio-img" />
        <div className="intro-text-rhea">
          <h2>L’évasion, même pendant vos règles</h2>
          <p>
            Plongez dans la douceur de <b>Rhéa Hibiscus</b>, la boisson qui transforme votre période en parenthèse de bien-être.<br /><br />
            Son secret ? Une recette inspirée des tropiques : hibiscus apaisant, citron vivifiant, cannelle réconfortante. Un combo pour soulager naturellement les douleurs, renforcer l’immunité et s’évader du quotidien.<br /><br />
            Rafraîchissante, acidulée et délicatement florale, Rhéa Hibiscus se savoure aussi bien glacée sous le soleil qu’au chaud pour un moment cocooning.<br /><br />
            Pour une routine plus douce et lumineuse, même pendant le cycle.
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
            <summary>À quel moment du cycle boire Rhéa Hibiscus ?</summary>
            <div className="faq-answer">
              Dès les premiers signes d’inconfort ou en prévention avant vos règles, selon vos besoins.
            </div>
          </details>
          <details>
            <summary>Convient-elle à toutes les femmes ?</summary>
            <div className="faq-answer">
              Oui, elle s’adapte à toutes les routines. Consultez un professionnel en cas de pathologie spécifique.
            </div>
          </details>
          <details>
            <summary>Est-ce que Rhéa Hibiscus est sucrée ?</summary>
            <div className="faq-answer">
              Non, elle ne contient pas de sucre ajouté. Son goût naturellement fruité provient uniquement des plantes et fruits utilisés.
            </div>
          </details>
          <details>
            <summary>Peut-on la consommer froide ou chaude ?</summary>
            <div className="faq-answer">
              Oui, à déguster selon vos envies !
            </div>
          </details>
          <details>
            <summary>Quels sont ses principaux bienfaits ?</summary>
            <div className="faq-answer">
              Soulagement des douleurs menstruelles, amélioration du confort et renforcement de l’immunité.
            </div>
          </details>
        </div>
      </div>
    </section>
  </>
);

export default ProductHibiscus;
