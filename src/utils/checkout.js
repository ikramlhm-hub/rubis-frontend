import axios from "axios";
import { getCartId } from "./cart";
import API_URL from "../config"; // ✅ ajout

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
      `${API_URL}/api/cart/validate`,
      { cartId },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    // Succès : rediriger vers la page commande, afficher un message, etc.
    return res.data;
  } catch (err) {
    alert("Erreur lors de la validation du panier !");
    throw err;
  }
}
