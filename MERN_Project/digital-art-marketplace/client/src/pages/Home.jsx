/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Home.css';


// Static data for art pieces, categories, artists, and testimonials
const artPieces = [
  {
    id: 1,
    image: 'https://t4.ftcdn.net/jpg/07/18/74/13/360_F_718741301_uAMuxLHYGSzECHNoTn4J7qTFWWBdd5Ke.jpg',
    title: 'Sunset Dreams',
    artist: 'John Doe',
    price: 150,
    genre: 'Landscape',
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
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6Vtm0GkGVCXJwcf4SlJzacdiNbyrtHXxsHg&s',
    title: 'City Lights',
    artist: 'Alex Johnson',
    price: 180,
    genre: 'Urban',
    description: 'A stunning view of a city skyline at night.',
  },
];

const categories = [
  { id: 1, name: 'Landscape', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaaFn13RIYvkaXwBEDMYwM_bd_nUL2FwheOA&s' },
  { id: 2, name: 'Abstract', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJhrZUsFPfvdjDNv-pZKtol-n1lXVI3T4KOg&s' },
  { id: 3, name: 'Urban', image: 'https://d28jbe41jq1wak.cloudfront.net/BlogsImages/ContemporaryArt_Compressed_638218930354738719.jpg' },
  { id: 4, name: 'Portrait', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Self-Portrait_with_a_Portrait_on_an_Easel_1623-4_Nicolas_Regnier.jpg/300px-Self-Portrait_with_a_Portrait_on_an_Easel_1623-4_Nicolas_Regnier.jpg' },
];

const featuredArtists = [
  {
    id: 1,
    name: 'John Doe',
    image: 'https://via.placeholder.com/100',
    bio: 'A passionate landscape artist.',
  },
  {
    id: 2,
    name: 'Jane Smith',
    image: 'https://via.placeholder.com/100',
    bio: 'Specializes in abstract art.',
  },
  {
    id: 3,
    name: 'Alex Johnson',
    image: 'https://via.placeholder.com/100',
    bio: 'Urban art enthusiast.',
  },
];

const testimonials = [
  {
    id: 1,
    name: 'Alice',
    comment: 'Amazing artwork! Highly recommend this marketplace.',
  },
  {
    id: 2,
    name: 'Bob',
    comment: 'Great experience buying art here. The artists are very talented.',
  },
  {
    id: 3,
    name: 'Charlie',
    comment: 'Loved the variety of art pieces available.',
  },
];

function Home({ addToCart }) {
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [selectedArtist, setSelectedArtist] = useState('All');
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sortBy, setSortBy] = useState('price');
  const [flippedId, setFlippedId] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate

  // Filter and sort art pieces
  const filteredArtPieces = artPieces
    .filter((piece) => {
      const matchesGenre = selectedGenre === 'All' || piece.genre === selectedGenre;
      const matchesArtist = selectedArtist === 'All' || piece.artist === selectedArtist;
      const matchesPrice = piece.price >= minPrice && piece.price <= maxPrice;
      return matchesGenre && matchesArtist && matchesPrice;
    })
    .sort((a, b) => (sortBy === 'price' ? a.price - b.price : 0));

  // Handle Explore Artworks button click
  const handleExploreArtworks = () => {
    navigate('/collections'); // Redirect to Collections page
  };

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Discover Unique Digital Art</h1>
          <p>Explore stunning artworks from talented artists around the world.</p>
          <button onClick={handleExploreArtworks}>Explore Artworks</button>
        </div>
      </section>
      


      {/* Featured Artworks */}
      <section className="featured-artworks">
        <h2>Featured Artworks</h2>
        <div className="art-grid">
          {filteredArtPieces.map((piece) => (
            <div
              key={piece.id}
              className={`art-card ${flippedId === piece.id ? 'flipped' : ''}`}
              onClick={() => setFlippedId(flippedId === piece.id ? null : piece.id)}
            >
              <div className="art-card-inner">
                {/* Front Side */}
                <div className="art-card-front">
                  <img src={piece.image} alt={piece.title} />
                  <h3>{piece.title}</h3>
                  <p>{piece.artist}</p>
                  <p>${piece.price}</p>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      addToCart(piece);
                    }}
                  >
                    Add to Cart
                  </button>
                </div>

                {/* Back Side */}
                <div className="art-card-back">
                  <h3>{piece.title}</h3>
                  <p>{piece.description}</p>
                  <p>Artist: {piece.artist}</p>
                  <p>Price: ${piece.price}</p>
                  <p>Genre: {piece.genre}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="categories">
        <h2>Explore Categories</h2>
        <div className="category-grid">
          {categories.map((category) => (
            <div key={category.id} className="category-card">
              <img src={category.image} alt={category.name} />
              <h3>{category.name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Artist Spotlight */}
      <section className="artist-spotlight">
        <h2>Artist Spotlight</h2>
        <div className="artist-grid">
          {featuredArtists.map((artist) => (
            <div key={artist.id} className="artist-card">
              <img src={artist.image} alt={artist.name} />
              <h3>{artist.name}</h3>
              <p>{artist.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <h2>What Our Customers Say</h2>
        <div className="testimonial-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <p>{testimonial.comment}</p>
              <h3>- {testimonial.name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2023 Digital Art Marketplace. All rights reserved.</p>
        <div className="footer-links">
          <a href="/about-us">About Us</a>
          <a href="/contact">Contact</a>
          <a href="/privacy-policy">Privacy Policy</a>
        </div>
      </footer>
    </div>
  );
}

export default Home;