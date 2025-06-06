import React from "react";
import heroImg from "../assets/details/femme-bienfaits.png"; // Hero image
import notreHistoireImg from "../assets/details/notre-histoire.png"; 
import "../styles/NotreHistoire.css"; 
import notreVisionImg from "../assets/details/notre-vision.png"; 
import notreVision2Img from "../assets/details/vision.png";
import notreMissionImg from "../assets/details/mission.png"; 
import uniqueImg from "../assets/details/rhea-unique.png";



export default function NotreHistoire() {
  return (
    <main className="notre-histoire-page">
      {/* Hero */}
      <section className="bienfaits-hero">
        <img src={heroImg} alt="Notre histoire Rhéa" className="bienfaits-hero-img" />
        <h1 className="bienfaits-hero-title">Notre Histoire</h1>
      </section>

      {/* SECTION ALTERNÉE */}
      <section className="notre-histoire-block">
        <div className="notre-histoire-content">
          <div className="notre-histoire-texte">
            <h2>Notre histoire</h2>
            <p>
              Tout est parti d’un vécu partagé. Celui de douleurs menstruelles trop intenses, trop fréquentes, et trop banalisées. Ces douleurs qui nous plient en deux en pleine journée, qui nous forcent à anticiper chaque cycle avec appréhension, et que l’on camoufle derrière un sourire ou un antidouleur « au cas où ». À force de vivre ça, nous avons commencé à nous poser des questions. Pourquoi est-ce qu’on doit endurer ? Pourquoi est-ce encore si peu pris en compte ? De cette réflexion est née une évidence : il fallait créer quelque chose de différent. Une réponse douce, naturelle, bienveillante. C’est ainsi qu’est née Rhéa, une boisson pensée pour accompagner les règles, soulager les douleurs, et offrir un véritable moment de réconfort. Pas une solution miracle, mais un geste de soin sincère, ancré dans l’écoute du corps et du cycle.
            </p>
          </div>
          <div className="notre-histoire-img">
            <img src={notreHistoireImg} alt="Notre histoire" />
          </div>
        </div>
      </section>

      <section className="notre-histoire-block">
  <div className="notre-histoire-content">
    <div className="notre-histoire-img">
      <img src={notreVisionImg} alt="Notre vision" />
    </div>
    <div className="notre-histoire-texte">
      <h2>Notre valeurs</h2>
      <p>
        Bienveillance : Parce que chaque corps est différent et mérite d’être respecté.
         Transparence : Des formules claires, naturelles, sans promesses exagérées.      
         Sororité : Rhéa a été pensée par des femmes, pour toutes celles qui vivent leurs règles comme un défi mensuel.
         Respect du vivant : Ingrédients naturels, sélectionnés avec soin et conscience.
      </p>
    </div>
  </div>
</section>


<section className="notre-histoire-block">
  <div className="notre-histoire-content">
    <div className="notre-histoire-texte">
      <h2>Notre mission</h2>
      <p>
        Notre mission est simple : proposer une alternative naturelle pour soulager les douleurs menstruelles, tout en valorisant le bien-être féminin. Rhéa n’est pas là pour effacer les règles, mais pour les accompagner avec douceur, respect et efficacité.
      </p>
    </div>
    <div className="notre-histoire-img">
      <img src={notreVision2Img} alt="Notre mission" />
    </div>
  </div>
</section>




<section className="notre-histoire-block">
  <div className="notre-histoire-content">
    <div className="notre-histoire-img">
      <img src={notreMissionImg} alt="Notre mission Rhéa" />
    </div>
    <div className="notre-histoire-texte">
      <h2>Notre vision</h2>
      <p>
        Nous rêvons d’un monde où les règles ne sont plus synonymes de souffrance silencieuse. Un monde où chaque femme peut vivre son cycle avec sérénité, et où le bien-être menstruel est reconnu comme une priorité de santé. Avec Rhéa, nous voulons contribuer à ce changement, boisson après boisson.      </p>
    </div>
  </div>
</section>



        <section className="notre-histoire-block">
          <div className="notre-histoire-content">
            <div className="notre-histoire-texte">
              <h2>Ce qui rend Rhéa unique</h2>
              <ul>
                <li>Une formulation 100 % naturelle, inspirée des bienfaits des plantes médicinales.</li>
                <li>Un goût doux, fruité ou réconfortant selon les recettes.</li>
                <li>Des ingrédients choisis pour leurs vertus ciblées sur les douleurs, les spasmes, l’inflammation et la relaxation.</li>
                <li>Une approche inclusive, sincère et respectueuse des corps.</li>
              </ul>
            </div>
            <div className="notre-histoire-img">
              <img src={uniqueImg} alt="Rhéa unique" />
            </div>
          </div>
        </section>


    </main>
  );
}
