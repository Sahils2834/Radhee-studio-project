import React, { useEffect, useState } from "react";
import "./Gallery.css";

export default function Gallery() {
  const [images, setImages] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/gallery`)
      .then((res) => res.json())
      .then((data) => setImages(data))
      .catch((err) => console.error("Gallery fetch error:", err));
  }, []);

  return (
    <section id="gallery" className="gallery-section">
      <h2 className="section-heading">Gallery</h2>
      <p className="section-subtitle">
        A glimpse into weddings, pre-weddings, studio portraits and branding work
      </p>

      <div className="gallery-grid">
        {images.map((img) => (
          <div
            key={img._id}
            className="gallery-item"
            onClick={() => setSelected(img)}
          >
            <img
              src={`${process.env.REACT_APP_BACKEND_URL}${img.imageUrl}`}
              alt={img.category}
            />
          </div>
        ))}
      </div>

      {selected && (
        <div className="gallery-modal" onClick={() => setSelected(null)}>
          <img
            className="gallery-modal-img"
            src={`${process.env.REACT_APP_BACKEND_URL}${selected.imageUrl}`}
            alt="full"
          />
        </div>
      )}
    </section>
  );
}
