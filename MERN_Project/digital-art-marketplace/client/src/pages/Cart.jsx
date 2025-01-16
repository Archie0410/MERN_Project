/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import './Cart.css';

function Cart({ cartItems, removeFromCart }) {
  // Calculate total price
  const totalPrice = (cartItems || []).reduce((total, item) => total + item.price, 0);

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <img src="empty-cart-image.png" alt="Empty Cart" />
          <p>Your cart is empty.</p>
          <Link to="/collections">Browse Art Pieces</Link>
          <p>Or <Link to="/login">Sign in</Link> to save your cart for later.</p>
        </div>
      ) : (
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.title} />
              <div className="cart-item-details">
                <h3>{item.title}</h3>
                <p>{item.artist}</p>
                <p>${item.price}</p>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            </div>
          ))}
          <div className="cart-total">
            <h3>Total: ${totalPrice.toFixed(2)}</h3>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
