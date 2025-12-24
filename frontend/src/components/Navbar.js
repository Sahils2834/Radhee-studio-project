<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logoImg from "../assets/owner.jpg";

=======
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
>>>>>>> 2b4edc8727ac075520d32d42922c113472618e5a
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
<<<<<<< HEAD
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
=======
  const navigate = useNavigate();
  const location = useLocation();

  const goToSection = (id) => {
    if (location.pathname !== "/home") {
      navigate("/home");

>>>>>>> 2b4edc8727ac075520d32d42922c113472618e5a
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 300);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
<<<<<<< HEAD
=======

>>>>>>> 2b4edc8727ac075520d32d42922c113472618e5a
    setOpen(false);
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
<<<<<<< HEAD
    setIsLoggedIn(false);
    setOpen(false);
=======
>>>>>>> 2b4edc8727ac075520d32d42922c113472618e5a
    navigate("/login");
  };

  return (
    <nav className="nav">
      <div className="nav-inner">
<<<<<<< HEAD
<div className="logo" onClick={() => goToSection("home")}>
  <img src={logoImg} alt="Radhee Studio Logo" />
</div>


        {/* HAMBURGER */}
        <div className="menu-icon" onClick={() => setOpen(!open)}>
=======
        <h2 className="logo" onClick={() => goToSection("home")}>
          RADHEE <br /> STUDIO
        </h2>

        <div
          className={`menu-icon ${open ? "open" : ""}`}
          onClick={() => setOpen(!open)}
        >
>>>>>>> 2b4edc8727ac075520d32d42922c113472618e5a
          <span />
          <span />
          <span />
        </div>

<<<<<<< HEAD
        {/* NAV LINKS */}
        <ul className={`nav-links ${open ? "open" : ""}`}>
=======
        <ul className={open ? "nav-links open" : "nav-links"}>
>>>>>>> 2b4edc8727ac075520d32d42922c113472618e5a
          <li onClick={() => goToSection("home")}>Home</li>
          <li onClick={() => goToSection("wedding")}>Wedding</li>
          <li onClick={() => goToSection("prewedding")}>Pre-Wedding</li>
          <li onClick={() => goToSection("portraits")}>Portraits</li>
          <li onClick={() => goToSection("studio")}>Studio</li>
          <li onClick={() => goToSection("family")}>Family</li>
          <li onClick={() => goToSection("corporate")}>Corporate</li>
          <li onClick={() => goToSection("commercial")}>Commercial</li>
          <li onClick={() => goToSection("gallery")}>Gallery</li>

<<<<<<< HEAD
          {/* AUTH BUTTON – login/logout */}
          <li className="nav-auth-btn">
            {isLoggedIn ? (
              <button onClick={logout}>Logout</button>
            ) : (
              <button onClick={() => navigate("/login")}>Login</button>
            )}
          </li>
=======
          <li className="logout-btn" onClick={logout}>Logout</li>
>>>>>>> 2b4edc8727ac075520d32d42922c113472618e5a
        </ul>
      </div>
    </nav>
  );
}
