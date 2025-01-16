/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import './CartPage.css';

const CartPage = ({ cartItems, removeFromCart, updateQuantity }) => {
  // Calculate total price
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
                  <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                </div>
                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="cart-summary">
        <h3>Total: ${totalPrice}</h3>
        <button
          className="checkout-btn"
          disabled={cartItems.length === 0}
          onClick={() => alert('Proceeding to checkout!')}
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default CartPage;