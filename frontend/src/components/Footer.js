import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <h3>Radhee Studio</h3>
          <p>Arts & Photoworks – Pune</p>
        </div>

        <div className="footer-contact">
<<<<<<< HEAD
          {/* <p>Call: +91-XXXXXXXXXX</p> */}
=======
          <p>Call: +91-XXXXXXXXXX</p>
>>>>>>> 2b4edc8727ac075520d32d42922c113472618e5a
          <p>Email: radheestudio@gmail.com</p>
        </div>

        <div className="footer-copy">
          © {new Date().getFullYear()} Radhee Arts & Photoworks. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
