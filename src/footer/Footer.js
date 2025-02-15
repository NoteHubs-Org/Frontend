import React from "react";
import "./footer.css";
import { FaInstagram, FaLinkedin, FaFacebook, FaTwitter, FaYoutube, FaGlobe, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <h2>NoteHub</h2>
          <p>Your hub for smarter notes and collaborative learning.</p>
        </div>

        <div className="footer-links">
          <div className="footer-column">
            <h4>Company</h4>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">NoteHub Premium</a></li>
              <li><a href="#">AI Study Assistant</a></li>
              <li><a href="#">NoteHub World University Ranking</a></li>
              <li><a href="#">E-Learning Insights</a></li>
              <li><a href="#">Academic Integrity</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Contact & Help</h4>
            <ul>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Support</a></li>
              <li><a href="#">Newsroom</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Legal</h4>
            <ul>
              <li><a href="#">Terms</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Cookie Settings</a></li>
              <li><a href="#">Copyright Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="social-icons">
            <FaInstagram />
            <FaLinkedin />
            <FaFacebook />
            <FaTwitter />
            <FaYoutube />
          </div>
          <p>NoteHub is not affiliated with any school, college, or university.</p>
          <p>© 2025 NoteHub Inc. All rights reserved.</p>
          <div className="language-location">
            <button><FaGlobe /> English (US)</button>
            <button><FaMapMarkerAlt /> United States</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
