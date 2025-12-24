import React, { useState } from "react";
<<<<<<< HEAD
import "./AuthPage.css";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || "/";

  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
=======
import "./LoginPage.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
>>>>>>> 2b4edc8727ac075520d32d42922c113472618e5a

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
<<<<<<< HEAD
      const res = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/auth/login`,
        form
      );

      sessionStorage.setItem("token", res.data.token);
      sessionStorage.setItem("role", res.data.role);

      setSuccess(true);

      setTimeout(() => {
        if (res.data.role === "admin") {
          navigate("/admin/dashboard", { replace: true });
          return;
        }
        navigate(from, { replace: true });
      }, 1200);

=======
      const res = await axios.post("http://localhost:5000/api/auth/login", form);

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.role);

      if (res.data.role === "admin") {
        navigate("/admin/dashboard");
      } else {
        navigate("/home");
      }
>>>>>>> 2b4edc8727ac075520d32d42922c113472618e5a
    } catch (err) {
      setError("Invalid email or password");
    }
  };

  return (
<<<<<<< HEAD
    <div className="auth-wrapper login-page">
      <form className="auth-card" onSubmit={handleLogin}>

        <div className="auth-switch">
          <span className="active">Login</span>
          <span onClick={() => navigate("/signup")}>Sign Up</span>
        </div>

=======
    <div className="login-wrapper">
      <form className="login-card" onSubmit={handleLogin}>
>>>>>>> 2b4edc8727ac075520d32d42922c113472618e5a
        <h2>Welcome Back</h2>
        <p className="sub">Login to continue</p>

        {error && <div className="error-box">{error}</div>}

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          required
        />

<<<<<<< HEAD
        <button className="auth-btn">Login</button>
      </form>

      {success && <div className="success-toast">✅ Login successful</div>}
=======
        <button type="submit" className="login-btn">
          Login
        </button>
      </form>
>>>>>>> 2b4edc8727ac075520d32d42922c113472618e5a
    </div>
  );
}
