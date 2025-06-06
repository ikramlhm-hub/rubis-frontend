import React, { useState, useEffect } from "react"; 
import "../styles/Login.css";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Bloque l’accès à /login pour les gens déjà connectés
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      window.location.href = "/welcome";
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      // envoie bien le champ mot_de_passe, pas password !
      const res = await axios.post("https://rubis-backend-production.up.railway.app/api/utilisatrices/login", {
        email,
        mot_de_passe: password,
      });
      // Stocke le token si tu le reçois :
      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
      }
      alert("Connexion réussie !");
      window.location.href = "/welcome"; // Redirection unique
    } catch (err) {
      setError(
        err.response?.data?.error ||
        err.response?.data?.message ||
        "Identifiants invalides."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="login-main">
      <div className="login-box">
        <h2 className="login-title">Connectez vous</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            autoComplete="username"
            onChange={e => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            autoComplete="current-password"
            onChange={e => setPassword(e.target.value)}
            required
          />
          <div className="forgot-link">
            <a href="/forgot-password">Mot de passe oublié ?</a>
          </div>
          <button type="submit" disabled={loading}>
            {loading ? "Connexion..." : "S'identifier"}
          </button>
        </form>
        {error && <div className="error-message">{error}</div>}
        <div className="login-link">
          <a href="/register">Créer un compte</a>
        </div>
      </div>
    </main>
  );
}
