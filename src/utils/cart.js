// frontend/src/utils/cart.js

import axios from "axios";

// Génère ou récupère un cartId unique dans le localStorage
function getCartId() {
  let cartId = localStorage.getItem("rhea_cartId");
  if (!cartId) {
    cartId = Date.now().toString();
    localStorage.setItem("rhea_cartId", cartId);
  }
  return cartId;
}

// Ajoute un produit au panier anonyme
export async function handleAddToCart(productId, quantity = 1, unitPrice = null) {
  const cartId = getCartId();

  try {
    const response = await axios.post(
      "https://rubis-backend-production.up.railway.app/api/cart/add",
      { cartId, productId, quantity, unitPrice }
    );
    alert("Produit ajouté au panier !");
    // Mets à jour le compteur panier ici si besoin
  } catch (err) {
    alert("Erreur lors de l'ajout au panier !");
    console.error(err);
  }
}

// Récupère le contenu du panier
export async function getCart() {
  const cartId = getCartId();
  try {
    const response = await axios.get(`https://rubis-backend-production.up.railway.app/api/cart/${cartId}`);
    return response.data;
  } catch (err) {
    console.error("Erreur lors de la récupération du panier", err);
    return [];
  }
}

// Supprimer un item
export async function removeCartItem(detailId) {
  const cartId = getCartId();
  try {
    await axios.delete(`https://rubis-backend-production.up.railway.app/api/cart/item/${detailId}?cartId=${cartId}`);
  } catch (err) {
    console.error("Erreur lors de la suppression de l'article du panier", err);
  }
}
