// frontend/src/utils/cart.js

import axios from "axios";
import API_URL from "../config"; // ✅ ajout de l'import

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
      `${API_URL}/api/cart/add`,
      { cartId, productId, quantity, unitPrice }
    );
    alert("Produit ajouté au panier !");
  } catch (err) {
    alert("Erreur lors de l'ajout au panier !");
    console.error(err);
  }
}

// Récupère le contenu du panier
export async function getCart() {
  const cartId = getCartId();
  try {
    const response = await axios.get(`${API_URL}/api/cart/${cartId}`);
    return response.data;
  } catch (err) {
    console.error("Erreur lors de la récupération du panier", err);
    return [];
  }
}

// Supprime un article du panier
export async function removeCartItem(detailId) {
  const cartId = getCartId();
  try {
    await axios.delete(`${API_URL}/api/cart/item/${detailId}?cartId=${cartId}`);
  } catch (err) {
    console.error("Erreur lors de la suppression de l'article du panier", err);
  }
}
