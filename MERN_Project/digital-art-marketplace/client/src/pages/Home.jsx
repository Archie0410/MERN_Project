/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

// Static data for trending collections, categories, artists, and testimonials
const trendingCollections = [
  {
    id: 1,
    image: 'https://t4.ftcdn.net/jpg/07/18/74/13/360_F_718741301_uAMuxLHYGSzECHNoTn4J7qTFWWBdd5Ke.jpg',
    title: 'Nature’s Beauty',
    artist: 'John Doe',
    description: 'A collection of breathtaking landscapes from around the world.',
  },
  {
    id: 2,
    image: 'https://images-cdn.ubuy.co.in/634e37b7d57ac13b6907b5b8-v-inspire-art-30x40-inch-abstract-art.jpg',
    title: 'Abstract Emotions',
    artist: 'Jane Smith',
    description: 'Vibrant abstract art that evokes deep emotions.',
  },
  {
    id: 3,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6Vtm0GkGVCXJwcf4SlJzacdiNbyrtHXxsHg&s',
    title: 'Urban Life',
    artist: 'Alex Johnson',
    description: 'A glimpse into the hustle and bustle of city life.',
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
    name: 'Sadap',
    image: 'https://via.placeholder.com/100',
    bio: 'A passionate landscape artist.',
  },
  {
    id: 2,
    name: 'Treesha',
    image: 'https://via.placeholder.com/100',
    bio: 'Specializes in abstract art.',
  },
  {
    id: 3,
    name: 'Zinal',
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
  const navigate = useNavigate(); // Initialize useNavigate

  // Handle Explore Artworks button click
  const handleExploreArtworks = () => {
    navigate('/CollectionPage'); // Redirect to CollectionPage
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

      {/* Trending Collections */}
      <section className="trending-collections">
        <h2>Trending Collections</h2>
        <div className="collections-grid">
          {trendingCollections.map((collection) => (
            <div key={collection.id} className="collection-card">
              <img src={collection.image} alt={collection.title} />
              <div className="collection-info">
                <h3>{collection.title}</h3>
                <p>By {collection.artist}</p>
                <p>{collection.description}</p>
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
        <p>&copy; 2025 Digital Art Marketplace. All rights reserved.</p>
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