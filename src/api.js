import API_URL from 'config.js';

// Récupérer le contenu du panier
export async function getCart(cartId) {
  const res = await fetch(`${API_URL}/cart/${cartId}`);
  if (!res.ok) throw new Error("Erreur lors de la récupération du panier.");
  return res.json();
}

// Ajouter un produit au panier
export async function addToCart(data) {
  const token = localStorage.getItem("token");
  const res = await fetch(`${API_URL}/api/cart/add`, {
    method: "POST",
    headers: { 
      "Content-Type": "application/json",
      ...(token ? { Authorization: "Bearer " + token } : {})
    },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Erreur lors de l'ajout au panier.");
  return res.json();
}


// Supprimer un item du panier
export async function removeCartItem(detailId) {
  const res = await fetch(`${API_URL}/cart/item/${detailId}`, {
    method: "DELETE",
  });
  if (!res.ok) throw new Error("Erreur lors de la suppression du produit.");
  return res.json();
}

// Vider tout le panier
export async function clearCart(cartId) {
  const res = await fetch(`${API_URL}/cart/clear/${cartId}`, {
    method: "DELETE",
  });
  if (!res.ok) throw new Error("Erreur lors du vidage du panier.");
  return res.json();
}

// Valider le panier (nécessite authentification)
export async function validateCart(cartId, token) {
  const res = await fetch(`${API_URL}/cart/validate`, {
    method: "POST",
    headers: { 
      "Content-Type": "application/json",
      Authorization: "Bearer " + token 
    },
    body: JSON.stringify({ cartId }),
  });
  if (!res.ok) throw new Error("Erreur lors de la validation du panier.");
  return res.json();
}
