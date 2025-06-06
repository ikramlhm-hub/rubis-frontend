import React from "react";
import "./Footer.css";                       // même dossier

// Assure-toi que ces chemins correspondent à tes fichiers réels
import socialMedia from "../../assets/footer/social-media.png";
import bankCards   from "../../assets/footer/bank-cards.png";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      {/* === SECTION PRINCIPALE : 3 COLONNES === */}
      <div className="footer__inner container">
        {/* Colonne 1 : Marque + description + réseaux */}
        <div className="footer__col footer__col--brand">
          <h2 className="footer__title">Rhea</h2>
          <p className="footer__text">
            Rhéa, c’est une boisson naturelle à base de plantes, pensée pour
            apaiser les douleurs menstruelles et aider les femmes à vivre leurs
            règles sans les subir.
          </p>
          <img
            src={socialMedia}
            alt="Réseaux sociaux Rhéa"
            className="footer__social"
            loading="lazy"
          />
        </div>

        {/* Colonne 2 : Menu */}
        <nav className="footer__col footer__col--menu" aria-label="Menu secondaire">
          <h3 className="footer__heading">Menu</h3>
          <ul>
            <li><a href="/">Accueil</a></li>
            <li><a href="/produits">Produits</a></li>
            <li><a href="/bienfaits">Nos Bienfaits</a></li>
            <li><a href="/histoire">Notre Histoire</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>

        {/* Colonne 3 : Contact */}
        <div className="footer__col footer__col--contact">
          <h3 className="footer__heading">Contact</h3>
          <p>Email : <a href="mailto:contact@rhéa.fr">contact@rhéa.fr</a></p>
          <p>
            Service client réactif !<br />
            N’hésitez pas à nous contacter
          </p>
        </div>
      </div>

      {/* === ICÔNES DE PAIEMENT (CENTRÉES) === */}
      <div className="footer__payments-wrapper">
        <img
          src={bankCards}
          alt="Moyens de paiement : AmEx, Apple Pay, CB, Mastercard, PayPal, Visa"
          className="footer__payments"
          loading="lazy"
        />
      </div>

      {/* === BAS DE PAGE LÉGAL (2025, RHÉA + LIENS) === */}
      <div className="footer__legal-wrapper container">
        <small className="footer__legal-year">&copy; {year}, RHÉA</small>

        <ul className="footer__legal">
          <li><a href="/confidentialite">Politique de confidentialité</a></li>
          <li><a href="/expedition">Politique d’expédition</a></li>
          <li><a href="/cgv">Conditions générales de vente</a></li>
          <li><a href="/mentions-legales">Mentions légales</a></li>
          <li><a href="/coordonnees">Coordonnées</a></li>
          <li><a href="/remboursement">Politique de remboursement</a></li>
          <li><a href="/cookies">Préférences en matière de cookies</a></li>
        </ul>
      </div>
    </footer>
  );
}
