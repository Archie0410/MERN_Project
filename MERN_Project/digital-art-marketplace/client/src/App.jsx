/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  // Routes is imported here
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Cart from './pages/Cart';
import AboutUs from './pages/AboutUs';
import Navigation from './components/Navigation';
import CartPage from './pages/CartPage';
import CollectionPage from './pages/CollectionPage';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        {/* Define each route with 'element' pointing to the component */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/cartpage" element={<CartPage />} />
        <Route path="/collectionpage" element={<CollectionPage />} />
      </Routes>
    </Router>
  );
}

export default App;
