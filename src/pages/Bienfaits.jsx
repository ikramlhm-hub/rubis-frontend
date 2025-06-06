import React from "react";
import "../styles/Bienfaits.css";
import femmeBienfaits from "../assets/details/femme-bienfaits.png"; 
import rheaBienfait from "../assets/details/rhea-bienfait.png";
import plante from "../assets/details/plante.png";
import serenity from "../assets/details/serenity.png";  // <- adapte le chemin si besoin !
import heart from "../assets/details/heart.png";        // <- adapte le chemin si besoin !

export default function Bienfaits() {
  return (
    <main className="bienfaits-page">
      <section className="bienfaits-hero">
        <img src={femmeBienfaits} alt="Les Bienfaits Rhéa" className="bienfaits-hero-img" />
        <h1 className="bienfaits-hero-title">Les Bienfaits de Rhéa</h1>
      </section>

      <section className="bienfaits-section">
        <div className="bienfaits-content">
          <div className="bienfaits-texte">
            <h2>Votre alliée naturelle pendant les règles</h2>
            <p>
              Chez Rhéa, nous croyons qu’une période menstruelle ne devrait pas être synonyme de douleur, de fatigue ou d’inconfort. C’est pourquoi nous avons développé une gamme de boissons naturelles, formulées à partir de plantes reconnues pour leurs vertus apaisantes, anti-inflammatoires et revitalisantes.<br /><br />
              Chaque recette a été pensée pour soutenir le corps et l’esprit pendant le cycle, tout en vous offrant une expérience sensorielle agréable et réconfortante. Chaude ou froide, chaque gorgée de Rhéa est un pas vers plus de douceur et d’écoute de soi.
            </p>
          </div>
          <div className="bienfaits-image-wrap">
            <img src={rheaBienfait} alt="Rhéa alliée naturelle" className="bienfaits-image" />
          </div>
        </div>
      </section>

      <section className="bienfaits-section">
        <div className="bienfaits-content plante-bienfaits">
          <div className="bienfaits-image-wrap">
            <img src={plante} alt="Plantes bienfaisantes Rhéa" className="bienfaits-image" />
          </div>
          <div className="bienfaits-texte">
            <h2>Une synergie de plantes bienfaisantes</h2>
            <ul className="bienfaits-list">
              <li><b>Feuilles de framboisier :</b> Utilisées en phytothérapie, elles aident à réduire les spasmes utérins et améliorent le confort pendant les règles.</li>
              <li><b>Gingembre :</b> Puissant anti-inflammatoire naturel, il diminue les crampes menstruelles et soulage les douleurs.</li>
              <li><b>Camomille :</b> Reconnue pour ses effets calmants et antispasmodiques, elle apaise les tensions nerveuses et favorise la détente.</li>
              <li><b>Myrtille :</b> Riche en antioxydants, elle améliore la circulation sanguine et aide à réduire l’inflammation.</li>
              <li><b>Menthe poivrée :</b> Antispasmodique naturel, elle détend les muscles utérins et apaise les crampes rapidement.</li>
              <li><b>Curcuma :</b> Grâce à la curcumine, il réduit les douleurs menstruelles et diminue les marqueurs inflammatoires.</li>
              <li><b>Hibiscus :</b> Régule le cycle menstruel et apaise les douleurs, tout en apportant une sensation de fraîcheur.</li>
              <li><b>Citron :</b> Riche en vitamine C, il améliore l’absorption du fer et renforce le système immunitaire pendant les règles.</li>
              <li><b>Cannelle :</b> Antispasmodique puissant, elle soulage les crampes et offre un effet réconfortant immédiat.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Pourquoi choisir Rhéa ? */}
      <section className="bienfaits-section">
        <div className="bienfaits-content">
          <div className="bienfaits-texte">
            <h2>Pourquoi choisir Rhéa&nbsp;?</h2>
            <ul className="bienfaits-list">
              <li>✔️ 100&nbsp;% naturel</li>
              <li>✔️ Sans conservateurs ni additifs</li>
              <li>✔️ Vegan & éthique</li>
              <li>✔️ Fabriqué en France</li>
              <li>✔️ Délicieux chaud ou froid</li>
            </ul>
          </div>
          <div className="bienfaits-image-wrap">
            <img src={serenity} alt="Pourquoi choisir Rhéa" className="bienfaits-image" />
          </div>
        </div>
      </section>

      {/* Prenez soin de vous, naturellement */}
      <section className="bienfaits-section">
        <div className="bienfaits-content inverse">
          <div className="bienfaits-texte">
            <h2>Prenez soin de vous, naturellement</h2>
            <p>
              Rhéa, ce n’est pas juste une boisson. C’est un rituel bien-être, une pause douceur pendant le cycle, un moment rien que pour vous.
            </p>
          </div>
          <div className="bienfaits-image-wrap">
            <img src={heart} alt="Prenez soin de vous" className="bienfaits-image" />
          </div>
        </div>
      </section>


    </main>
  );
}
