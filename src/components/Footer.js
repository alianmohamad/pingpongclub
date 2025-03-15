import React from "react";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer text-white text-center py-3">
      <div className="container">
        <p className="mb-1">&copy; 2025 Rabid PingPong Club | <a href="/privacy-policy" className="footer-link">Privacy Policy</a> | <a href="/terms-conditions" className="footer-link">Terms & Conditions</a></p>
        <p className="author-credit">This website was designed and developed by <strong>Mohamad Alian</strong>,<br/>a Postgraduate Student at Swinburne University of Technology.😀</p>
      </div>
    </footer>
  );
};

export default Footer;