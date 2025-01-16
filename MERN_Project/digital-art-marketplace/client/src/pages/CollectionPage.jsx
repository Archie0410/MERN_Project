import React, { useState } from "react";
import "./CollectionPage.css";

const artCollection = [
  {
    id: 1,
    title: "Abstract Symphony",
    artist: "Alice Smith",
    price: 150,
    image: "https://via.placeholder.com/300",
  },
  {
    id: 2,
    title: "Cyber Dream",
    artist: "Bob Williams",
    price: 200,
    image: "https://via.placeholder.com/300",
  },
  {
    id: 3,
    title: "Neon Reality",
    artist: "Charlie Brown",
    price: 175,
    image: "https://via.placeholder.com/300",
  },
  {
    id: 4,
    title: "Ethereal Light",
    artist: "Diana Green",
    price: 220,
    image: "https://via.placeholder.com/300",
  },
];

const CollectionPage = () => {
  const [selectedArt, setSelectedArt] = useState(null);

  return (
    <div className="collection-page">
      <h2>Art Collection</h2>
      <div className="art-grid">
        {artCollection.map((art) => (
          <div
            className="art-card"
            key={art.id}
            onClick={() => setSelectedArt(art)}
          >
            <img src={art.image} alt={art.title} />
            <div className="art-info">
              <h3>{art.title}</h3>
              <p>By {art.artist}</p>
              <p>${art.price}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedArt && (
        <div className="modal" onClick={() => setSelectedArt(null)}>
          <div className="modal-content">
            <span className="close-btn">&times;</span>
            <img src={selectedArt.image} alt={selectedArt.title} />
            <h3>{selectedArt.title}</h3>
            <p>By {selectedArt.artist}</p>
            <p>Price: ${selectedArt.price}</p>
            <button className="add-to-cart">Add to Cart</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CollectionPage;
