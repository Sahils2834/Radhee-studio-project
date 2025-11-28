import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const goToSection = (id) => {
    if (location.pathname !== "/home") {
      navigate("/home");

      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 300);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }

    setOpen(false);
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/login");
  };

  return (
    <nav className="nav">
      <div className="nav-inner">
        <h2 className="logo" onClick={() => goToSection("home")}>
          RADHEE <br /> STUDIO
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
          <li onClick={() => goToSection("home")}>Home</li>
          <li onClick={() => goToSection("wedding")}>Wedding</li>
          <li onClick={() => goToSection("prewedding")}>Pre-Wedding</li>
          <li onClick={() => goToSection("portraits")}>Portraits</li>
          <li onClick={() => goToSection("studio")}>Studio</li>
          <li onClick={() => goToSection("family")}>Family</li>
          <li onClick={() => goToSection("corporate")}>Corporate</li>
          <li onClick={() => goToSection("commercial")}>Commercial</li>
          <li onClick={() => goToSection("gallery")}>Gallery</li>

          <li className="logout-btn" onClick={logout}>Logout</li>
        </ul>
      </div>
    </nav>
  );
}
