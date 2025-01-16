import React, { useState } from "react";
import "./CartPage.css";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: "Abstract Universe",
      artist: "John Doe",
      price: 120,
      quantity: 1,
      image: "https://via.placeholder.com/100",
    },
    {
      id: 2,
      title: "Cyberpunk City",
      artist: "Jane Smith",
      price: 95,
      quantity: 1,
      image: "https://via.placeholder.com/100",
    },
  ]);

  const handleQuantityChange = (id, change) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + change } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const handleRemove = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt={item.title} className="art-image" />
              <div className="item-info">
                <h3>{item.title}</h3>
                <p>By {item.artist}</p>
                <p>${item.price}</p>
                <div className="quantity-controls">
                  <button onClick={() => handleQuantityChange(item.id, -1)}>
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleQuantityChange(item.id, 1)}>
                    +
                  </button>
                </div>
                <button className="remove-btn" onClick={() => handleRemove(item.id)}>
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="cart-summary">
        <h3>Total: ${totalPrice}</h3>
        <button className="checkout-btn" disabled={cartItems.length === 0}>
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default CartPage;
