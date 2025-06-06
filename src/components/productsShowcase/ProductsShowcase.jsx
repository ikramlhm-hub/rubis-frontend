import React, { useState } from 'react';
import './ProductsShowcase.css';
import { addToCart } from '../../api';
import { useNavigate } from 'react-router-dom';
import imgFramboise from '../../assets/products/rhea-framboise.png';
import imgHibiscus from '../../assets/products/rhea-hibiscus.png';
import imgMyrtille from '../../assets/products/rhea-myrtille.png';

const products = [
  {
    id: 'myrtille',
    name: 'Boisson Rhéa Myrtille',
    price: 2.5,
    image: imgMyrtille,
    productId: 3,
    slug: 'myrtille',
  },
  {
    id: 'framboise',
    name: 'Boisson Rhéa Framboise',
    price: 2.5,
    image: imgFramboise,
    productId: 2,
    slug: 'framboise',
  },
  {
    id: 'hibiscus',
    name: 'Boisson Rhéa Hibiscus',
    price: 2.5,
    image: imgHibiscus,
    productId: 1,
    slug: 'hibiscus',
  },
];

const ProductsShowcase = () => {
  const [addedId, setAddedId] = useState(null);
  const navigate = useNavigate();

  const handleAddToCart = async (product, e) => {
    e.stopPropagation();
    e.preventDefault();
    const cartId = localStorage.getItem("cartId");
    try {
      await addToCart({
        cartId,
        productId: product.productId,
        quantity: 1,
        unitPrice: product.price,
      });
      setAddedId(product.id);
      setTimeout(() => setAddedId(null), 1200);
    } catch (err) {
      alert("Erreur lors de l'ajout au panier");
    }
  };

  return (
    <section className="products-plain">
      {products.map((product) => (
        <div
          className="product-wrapper"
          key={product.id}
        >
          <span className="badge">BEST SELLER</span>
          <div
            className="product-image-overlay-container"
            onClick={() => navigate(`/produits/${product.slug}`)}
            style={{ cursor: "pointer" }}
          >
            <img src={product.image} alt={product.name} />
            <div className="product-overlay">
              <h3>{product.name}</h3>
              <p>{product.price.toFixed(2)} €</p>
              <button
                className="add-to-cart-btn"
                onClick={(e) => handleAddToCart(product, e)}
              >
                {addedId === product.id ? "Ajouté !" : "Ajouter au panier"}
              </button>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ProductsShowcase;
