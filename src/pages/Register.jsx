import React, { useState } from "react";
import "../styles/Register.css";
import axios from "axios";
import API_URL from "../config";


export default function Register() {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

const handleSubmit = async (e) => {
  e.preventDefault();
  setError("");
  setLoading(true);

  try {
    const res = await axios.post(`${API_URL}/api/utilisatrices/register`, {
      nom,
      prenom,
      email,
      mot_de_passe: password,
    });

    alert("Compte créé ! Connecte-toi.");
    // Option : redirige automatiquement vers le login
    window.location.href = "/login";
  } catch (err) {
    if (err.response?.data?.error) {
      setError(err.response.data.error);
    } else {
setError(err.response?.data?.error || err.message || "Erreur lors de l'inscription.");
console.log(err.response || err);
    }
  } finally {
    setLoading(false);
  }
};

  return (
    <main className="login-main">
      <div className="register-box">
        <h2 className="login-title">Créer un compte</h2>
        <form className="register-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nom"
            value={nom}
            onChange={e => setNom(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Prénom"
            value={prenom}
            onChange={e => setPrenom(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
          <div className="register-actions">
            <button
              type="submit"
              disabled={loading}
              className="register-btn"
            >
              {loading ? "Création..." : "Créer un compte"}
            </button>
            <a href="/login" className="register-link">S’identifier</a>
          </div>
        </form>
        {error && <div className="register-error-message">{error}</div>}
      </div>
    </main>
  );
}
