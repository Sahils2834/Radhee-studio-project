// src/App.js
import React from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Owner from "./components/Owner";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";

function App() {
  return (
    <div className="App">
      <CustomCursor />

      <Navbar />

      <main>
        <Hero />
        <Owner />
        <Services />
        <Gallery />
      </main>

      <Footer />
    </div>
  );
}

export default App;
