/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './CollectionPage.css';

const CollectionPage = ({ addToCart, cartItems }) => {
  const navigate = useNavigate();

  // Static data for art pieces
  const artPieces = [
    {
      id: 1,
      image: 'https://rmkv.com/cdn/shop/articles/b6.jpg?v=1726719802',
      title: 'Hamsa Damayanti',
      artist: 'Raja Ravi Varma',
      price: 150,
      genre: 'Oil Painting',
      description: 'A beautiful depiction of a sunset over the mountains.',
    },
    {
      id: 2,
      image: 'https://images-cdn.ubuy.co.in/634e37b7d57ac13b6907b5b8-v-inspire-art-30x40-inch-abstract-art.jpg',
      title: 'Abstract Vibes',
      artist: 'Jane Smith',
      price: 200,
      genre: 'Abstract',
      description: 'An abstract piece full of vibrant colors and emotions.',
    },
    {
      id: 3,
      image: 'https://rhythmartgallery.com/wp-content/uploads/2023/08/Swati-Pasari-36-x-48-inches-Acrylic-on-canvas-.jpeg',
      title: 'Untitled',
      artist: 'Swati Pasari',
      price: 180,
      genre: 'Acrylic',
      description: 'A stunning view of a city skyline at night.',
    },
    {
      id: 4,
      image: 'https://t4.ftcdn.net/jpg/07/18/74/13/360_F_718741301_uAMuxLHYGSzECHNoTn4J7qTFWWBdd5Ke.jpg',
      title: 'Sunset Dreams',
      artist: 'John Doe',
      price: 150,
      genre: 'Landscape',
      description: 'A beautiful depiction of a sunset over the mountains.',
    },
    {
      id: 5,
      image: 'https://www.studio3india.com/wp-content/uploads/Sushil-Soni-7983A-500x500.jpg',
      title: 'Shrinathji Pichwai - 7983',
      artist: 'Sushil Soni',
      price: 200,
      genre: 'Pichwai',
      description: 'An abstract piece full of vibrant colors and emotions.',
    },
    {
      id: 6,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6Vtm0GkGVCXJwcf4SlJzacdiNbyrtHXxsHg&s',
      title: 'City Lights',
      artist: 'Alex Johnson',
      price: 180,
      genre: 'Urban',
      description: 'A stunning view of a city skyline at night.',
    },
    // Add more art pieces here
  ];

  // Function to handle adding an item to the cart
  const handleAddToCart = (art) => {
    addToCart(art); // Add the item to the cart
    toast.success(`${art.title} has been added to your cart!`); // Show toast notification
  };

  return (
    <div className="collection-page">
      <h1>Art Pieces</h1>

      {/* Featured Collections Section */}
      <section className="featured-collections">
        <h2>Featured Collections</h2>
        <div className="featured-grid">
          {artPieces.map((art) => (
            <div key={art.id} className="art-card">
              <img src={art.image} alt={art.title} />
              <div className="art-info">
                <h3>{art.title}</h3>
                <p>By {art.artist}</p>
                <p>${art.price}</p>
                <button className="add-to-cart" onClick={() => handleAddToCart(art)}>
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* All Artworks Section
      <section className="all-artworks">
        <h2>All Artworks</h2>
        <div className="artworks-grid">
          {artPieces.map((art) => (
            <div key={art.id} className="art-card">
              <img src={art.image} alt={art.title} />
              <div className="art-info">
                <h3>{art.title}</h3>
                <p>By {art.artist}</p>
                <p>${art.price}</p>
                <button className="add-to-cart" onClick={() => handleAddToCart(art)}>
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section> */}

      {/* Cart Button */}
      <button onClick={() => navigate('/cartpage')} className="view-cart-button">
        View Cart ({cartItems.length})
      </button>

      {/* Toast Container */}
      <ToastContainer
        position="bottom-right"
        autoClose={3000} // Close toast after 3 seconds
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default CollectionPage;