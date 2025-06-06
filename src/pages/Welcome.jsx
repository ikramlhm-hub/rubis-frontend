import React, { useEffect, useState } from "react";
import "../styles/Welcome.css"; 
import visuelHibiscus from '../assets/details/boisson-recommande.png'; 
import API_URL from "../config";


export default function Welcome() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Ici tu peux récupérer l'utilisateur depuis le token/localstorage/api
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      if (!token) return window.location.href = "/login";
      try {
        const res = await fetch(`${API_URL}/api/utilisatrices/me`, {
                  headers: { Authorization: "Bearer " + token }
                });

        const data = await res.json();
        setUser(data);
      } catch {
        window.location.href = "/login";
      }
    };
    fetchUser();
  }, []);

  // Fonction de déconnexion :
  const handleLogout = async () => {
    const token = localStorage.getItem("token");
    try {
      // OPTIONNEL : appeler le backend (seulement si tu as un /api/logout, sinon ça passe)
      await fetch(`${API_URL}/api/logout`, {
        method: "POST",
        headers: { Authorization: "Bearer " + token }
      });

    } catch (e) {
      // L’erreur ici n’est pas bloquante
    }
    // Suppression du token local :
    localStorage.removeItem("token");
    // Redirection :
    window.location.href = "/";
  };

  if (!user) return null;

  return (
    <main className="welcome-main">
      <section className="welcome-header">
        <h1>
          Hi<span className="comma">,</span> <span className="prenom">{user.prenom?.toUpperCase()}</span>
        </h1>
        <div className="welcome-email">{user.email}</div>
      </section>

      <nav className="welcome-nav">
        <a href="#" className="active">Abonnements</a>
        <a href="#">Historique de commandes</a>
        <a href="#">Paramètres</a>
        {/* On met le handleLogout ici : */}
        <a href="#" onClick={e => { e.preventDefault(); handleLogout(); }}>Se déconnecter</a>
      </nav>

      <section className="rhea-club">
        <div className="rhea-club-title">RHEA CLUB</div>
        <div className="rhea-club-content">
          <div className="rhea-club-desc">
            Gagnez des étoiles qui peuvent être échangées contre des récompenses, des avantages spéciaux et bien plus encore
          </div>
          <button className="rhea-club-btn">Récompenses</button>
        </div>
      </section>

      <section className="abonnements">
        <h2>Abonnements</h2>
        <p>Vous n’avez pas encore d’abonnement. <a href="/produits">Commencez vos achats</a></p>
      </section>

      <section className="recommande">
        <h2>Recommandé pour vous</h2>
        <div className="recommande-box">
          <div className="recommande-left">
            <div className="recommande-desc">Essayer notre nouveau produit !</div>
            <div className="recommande-produit">
              <img src={visuelHibiscus} alt="Boisson Rhéa Hibiscus" className="recommande-img" />
              <button className="recommande-buy-btn">Acheter</button>
              <div className="recommande-nom">Boisson RhéaHibiscus</div>
              <div className="recommande-prix">2.50€</div>
            </div>
          </div>
          <div className="recommande-right">
            <input className="recommande-search" placeholder="Recherche" />
          </div>
        </div>
      </section>

      <section className="historique">
        <h2>Historique des commandes</h2>
        <p>Aucune commande cette année. <a href="/produits">Commencez vos achats</a></p>
      </section>

      <section className="parametres">
        <h2>Paramètres</h2>
        <div className="info-card">
          <span className="info-label">Information Personnel</span>
          <span className="info-value">{user.email}</span>
        </div>
      </section>

      <div className="logout-bar" onClick={handleLogout}>
        Déconnexion
      </div>
    </main>
  );
}
