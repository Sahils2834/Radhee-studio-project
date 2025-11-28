import React from "react";
import "./Gallery.css";

import g1 from "../assets/gallery1.JPG";
import g2 from "../assets/gallery2.JPG";
import g3 from "../assets/gallery3.JPG";
import g4 from "../assets/gallery4.JPG";
import g5 from "../assets/gallery5.JPG";
import g6 from "../assets/gallery6.jpg";

export default function Gallery() {
  const images = [g1, g2, g3, g4, g5, g6];

  return (
    <section id="gallery" className="gallery-section">
      <h2 className="section-heading">Gallery</h2>
      <p className="section-subtitle">
        A glimpse into weddings, pre-weddings, studio portraits and branding
        work
      </p>

      <div className="gallery-grid">
        {images.map((img, i) => (
          <div key={i} className="gallery-item">
            <img src={img} alt={`Radhee Studio work ${i + 1}`} />
            <div className="gallery-overlay">
              <span>View Detail</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
