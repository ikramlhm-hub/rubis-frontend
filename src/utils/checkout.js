import axios from "axios";
import { getCartId } from "./cart";

// Handler pour valider le panier (passer commande)
export async function validateCart() {
  const token = localStorage.getItem("token");
  if (!token) {
    window.location.href = "/login";
    return;
  }
  const cartId = getCartId();
  try {
    const res = await axios.post(
      "https://rubis-backend-production.up.railway.app/api/cart/validate",
      { cartId },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    // Succès : rediriger vers la page commande, afficher un message, etc.
    return res.data;
  } catch (err) {
    alert("Erreur lors de la validation du panier !");
    throw err;
  }
}
