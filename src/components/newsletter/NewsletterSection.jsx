import React from 'react';
import './NewsletterSection.css';
import flecheIcon from '../../assets/newsletter/fleche.png';

const NewsletterSection = () => {
  return (
    <section className="newsletter-section">
      <div className="newsletter-grid">

        <div className="newsletter-left">
          <h2>S’INSCRIRE À LA NEWSLETTER</h2>
        </div>

        <div className="newsletter-middle">
          <p>Soyez les 1er informés des nouvelles boissons et des offres exclusives.</p>
        </div>

        <div className="newsletter-right">
          <form className="newsletter-form">
            <div className="newsletter-input-wrapper">
              <input
                type="email"
                placeholder="E-mail"
                required
              />
              <button type="submit">
                <img src={flecheIcon} alt="Envoyer" className="fleche-icon" />
              </button>
            </div>
          </form>
          <p className="newsletter-note">
            *Nous nous engageons à ne pas utiliser votre adresse e-mail pour des spams !<br />
            Vous pouvez vous désinscrire à tout moment
          </p>
        </div>

      </div>
    </section>
  );
};

export default NewsletterSection;
