// src/components/Navbar.js
import React, { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav className="nav">
      <div className="nav-inner">
        <h2 className="logo" onClick={() => scrollTo("home")}>
          Radhee Studio
        </h2>

        <div
          className={`menu-icon ${open ? "open" : ""}`}
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
          <span />
        </div>

        <ul className={open ? "nav-links open" : "nav-links"}>
          <li onClick={() => scrollTo("home")}>Home</li>
          <li onClick={() => scrollTo("wedding")}>Wedding</li>
          <li onClick={() => scrollTo("prewedding")}>Pre-Wedding</li>
          <li onClick={() => scrollTo("portraits")}>Portraits</li>
          <li onClick={() => scrollTo("studio")}>Studio</li>
          <li onClick={() => scrollTo("family")}>Family</li>
          <li onClick={() => scrollTo("corporate")}>Corporate</li>
          <li onClick={() => scrollTo("commercial")}>Commercial</li>
          <li onClick={() => scrollTo("gallery")}>Gallery</li>
        </ul>
      </div>
    </nav>
  );
}
