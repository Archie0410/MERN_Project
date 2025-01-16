/* eslint-disable no-unused-vars */
import React from 'react';
import './Collections.css';


// Static data for art pieces
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

const Collections = () => {
  return (
    <div className="collections-container">
      <h1>Art Pieces</h1>

      {/* Featured Collections Section */}
      <section className="featured-collections">
        <h2>Featured Collections</h2>
        <div className="featured-grid">
          {artPieces.map((art) => (
            <div key={art.id} className="featured-item">
              <img src={art.image} alt={art.title} />
              <h3>{art.title}</h3>
              <p>By {art.artist}</p>
              <p>${art.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* All Artworks Section */}
      <section className="all-artworks">
        <h2>All Artworks</h2>
        <div className="artworks-grid">
          {artPieces.map((art) => (
            <div key={art.id} className="artwork-item">
              <img src={art.image} alt={art.title} />
              <h3>{art.title}</h3>
              <p>By {art.artist}</p>
              <p>${art.price}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Collections;