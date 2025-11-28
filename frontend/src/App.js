import React from "react";
import "./App.css";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Owner from "./components/Owner";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";

import LoginPage from "./components/LoginPage";
import BookingForm from "./components/BookingForm";
import AdminDashboard from "./admin/AdminDashboard";
import CustomerBookings from "./components/CustomerBookings";

export default function App() {
  const location = useLocation();
  const role = localStorage.getItem("role");

  const hideNavbarPaths = ["/login", "/admin/dashboard"];
  const hideNavbar = hideNavbarPaths.includes(location.pathname);

  return (
    <div className="App">
      <CustomCursor />

      {!hideNavbar && role === "customer" && <Navbar />}

      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />

        <Route path="/login" element={<LoginPage />} />

        <Route
          path="/admin/dashboard"
          element={
            role === "admin" ? <AdminDashboard /> : <Navigate to="/login" />
          }
        />

        <Route
          path="/home"
          element={
            role === "customer" ? (
              <>
                <Hero />
                <Owner />
                <Services />
                <Gallery />
                <Footer />
              </>
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        <Route
          path="/customer/bookings"
          element={
            role === "customer" ? (
              <CustomerBookings />
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        <Route
          path="/book"
          element={
            role === "customer" ? (
              <BookingForm />
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}
