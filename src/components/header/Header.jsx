// src/components/header/Header.jsx
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

import logo from '../../assets/header/logo-rhea.png';
import iconCart from '../../assets/header/icon-cart.png';
import iconUser from '../../assets/header/icon-user.png';
import iconSearch from '../../assets/header/icon-search.png';
import iconInsta from '../../assets/header/icon-instagram.png';
import iconFacebook from '../../assets/header/icon-facebook.png';
import iconTikTok from '../../assets/header/icon-tiktok.png';
import iconFrance from '../../assets/header/icon-france.png';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      {/* Bandeau rose */}
      <div className="header-top">
        <div className="header-top-left">
          <a href="https://www.instagram.com/rhea_drink/" target="_blank" rel="noopener noreferrer">
            <img src={iconInsta} alt="Instagram" />
          </a>
          <a href="https://www.tiktok.com/@rhea_drink" target="_blank" rel="noopener noreferrer">
            <img src={iconTikTok} alt="Tiktok" />
          </a>
          <a href="https://fr.pinterest.com/rheadrink/" target="_blank" rel="noopener noreferrer">
            <img src={iconFacebook} alt="Facebook" />
          </a>
        </div>
        <div className="header-top-center">
          <span>Nouveauté 2025 – Fabriqué en</span>
          <img src={iconFrance} alt="Fabriqué en France" />
        </div>
        <div className="header-top-right">
          <span>EUR € | France ⌄</span>
          <span>Français ⌄</span>
        </div>
      </div>

      {/* Ligne blanche */}
      <div className="header-bottom">
        {/* Menu burger pour mobile */}
        <div className="header-mobile-menu">
          <button className="burger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Ouvrir le menu">
            <span>☰</span>
          </button>
          {menuOpen && (
            <div className="mobile-menu-dropdown">
              <NavLink to="/produits" onClick={() => setMenuOpen(false)}>Produits</NavLink>
              <NavLink to="/bienfaits" onClick={() => setMenuOpen(false)}>Nos Bienfaits</NavLink>
              <NavLink to="/notre-histoire" onClick={() => setMenuOpen(false)}>Notre Histoire</NavLink>
            </div>
          )}
        </div>

        <div className="header-bottom-left">
          <NavLink to="/produits" className={({ isActive }) => (isActive ? 'active' : '')}>Produits</NavLink>
          <NavLink to="/bienfaits" className={({ isActive }) => (isActive ? 'active' : '')}>Nos Bienfaits</NavLink>
          <NavLink to="/notre-histoire" className={({ isActive }) => (isActive ? 'active' : '')}>Notre Histoire</NavLink>
        </div>

        <div className="header-logo">
          <NavLink to="/">
            <img src={logo} alt="Rhéa" style={{ cursor: "pointer" }} />
          </NavLink>
        </div>

        <div className="header-bottom-right">
          <img src={iconSearch} alt="Recherche" />
          <NavLink to="/login">
            <img src={iconUser} alt="Compte" style={{ cursor: "pointer" }} />
          </NavLink>
          <NavLink to="/panier">
            <img src={iconCart} alt="Panier" className="icon-cart" style={{ cursor: "pointer" }} />
          </NavLink>
        </div>
      </div>
    </header>
  );
}
