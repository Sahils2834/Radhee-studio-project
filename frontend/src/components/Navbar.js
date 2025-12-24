import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logoImg from "../assets/owner.jpg";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  // detect login/logout on route change
  useEffect(() => {
    const token = sessionStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, [location.pathname]);

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
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("role");
    setIsLoggedIn(false);
    navigate("/home");
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <img src={logoImg} alt="Radhee Studio" className="navbar-logo" />
        <div className={`nav-menu ${open ? "active" : ""}`}>
          <button className="nav-link" onClick={() => goToSection("gallery")}>Gallery</button>
          <button className="nav-link" onClick={() => goToSection("services")}>Services</button>
          <button className="nav-link" onClick={() => goToSection("owner")}>About</button>
          <button className="nav-link" onClick={() => goToSection("footer")}>Contact</button>
          {isLoggedIn ? (
            <button className="nav-link logout-btn" onClick={logout}>Logout</button>
          ) : (
            <>
              <button className="nav-link" onClick={() => navigate("/login")}>Login</button>
              <button className="nav-link" onClick={() => navigate("/signup")}>Signup</button>
            </>
          )}
        </div>
        <div className="hamburger" onClick={() => setOpen(!open)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
}
