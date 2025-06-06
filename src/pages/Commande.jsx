import React, { useEffect, useState } from "react";
import "../styles/Commande.css";

export default function Commande() {
  const [user, setUser] = useState({ email: "" });
  const [address, setAddress] = useState({ rue: "", ville: "", cp: "", pays: "" });
  const [card, setCard] = useState({ number: "", exp: "", cvc: "" });
  const [errors, setErrors] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    const userInfos = JSON.parse(localStorage.getItem("user") || "{}");
    setUser({
      email: userInfos.email || "",
    });
  }, []);

  const validate = () => {
    const e = {};
    if (!/\S+@\S+\.\S+/.test(user.email)) e.email = "Email invalide";
    if (!address.rue.trim()) e.rue = "Champ requis";
    if (!address.ville.trim()) e.ville = "Champ requis";
    if (!address.cp.match(/^\d{4,5}$/)) e.cp = "Code postal invalide";
    if (!address.pays.trim()) e.pays = "Champ requis";
    const number = card.number.replace(/\s/g, "");
    if (!number.match(/^\d{16}$/)) e.number = "16 chiffres obligatoires";
    if (!card.exp.match(/^(0[1-9]|1[0-2])\/\d{2}$/)) e.exp = "Format MM/AA";
    if (!card.cvc.match(/^\d{3}$/)) e.cvc = "3 chiffres requis";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setShowSuccess(true);
    setTimeout(() => {
      window.location.href = "/";
    }, 2200);
  };

  if (showSuccess) {
    return (
      <main className="commande-main">
        <h2>Tu viens de passer ta commande Rhea </h2>
        <p>Merci pour votre achat 💗</p>
      </main>
    );
  }

  return (
    <main className="commande-main">
      <h2>Finaliser ma commande</h2>
      <form className="commande-form" onSubmit={handleSubmit} autoComplete="off">
        <label>
          Email :
          <input
            type="email"
            value={user.email}
            onChange={e => setUser({ ...user, email: e.target.value })}
            required
          />
          {errors.email && <span className="form-error">{errors.email}</span>}
        </label>
        <label>
          Adresse :
          <input
            type="text"
            value={address.rue}
            onChange={e => setAddress({ ...address, rue: e.target.value })}
            placeholder="N° et nom de rue"
            required
          />
          {errors.rue && <span className="form-error">{errors.rue}</span>}
        </label>
        <label>
          Ville :
          <input
            type="text"
            value={address.ville}
            onChange={e => setAddress({ ...address, ville: e.target.value })}
            required
          />
          {errors.ville && <span className="form-error">{errors.ville}</span>}
        </label>
        <label>
          Code postal :
          <input
            type="text"
            value={address.cp}
            onChange={e => setAddress({ ...address, cp: e.target.value })}
            placeholder="75001"
            required
          />
          {errors.cp && <span className="form-error">{errors.cp}</span>}
        </label>
        <label>
          Pays :
          <input
            type="text"
            value={address.pays}
            onChange={e => setAddress({ ...address, pays: e.target.value })}
            required
          />
          {errors.pays && <span className="form-error">{errors.pays}</span>}
        </label>
        <label>
          Numéro de carte :
          <input
            type="text"
            value={card.number}
            onChange={e => setCard({ ...card, number: e.target.value })}
            maxLength={19}
            placeholder="1234 5678 9012 3456"
            required
            inputMode="numeric"
          />
          {errors.number && <span className="form-error">{errors.number}</span>}
          <span className="card-rules">
            16 chiffres, sans lettres ni caractères spéciaux.
          </span>
        </label>
        <label>
          Date d'expiration :
          <input
            type="text"
            value={card.exp}
            onChange={e => setCard({ ...card, exp: e.target.value })}
            maxLength={5}
            placeholder="MM/AA"
            required
          />
          {errors.exp && <span className="form-error">{errors.exp}</span>}
        </label>
        <label>
          CVC :
          <input
            type="text"
            value={card.cvc}
            onChange={e => setCard({ ...card, cvc: e.target.value })}
            maxLength={3}
            placeholder="123"
            required
          />
          {errors.cvc && <span className="form-error">{errors.cvc}</span>}
        </label>
        <button type="submit" className="commande-valider-btn">
          Valider la commande
        </button>
      </form>
    </main>
  );
}
