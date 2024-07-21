import React from "react";
import {
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import './footer.css';  // Import the footer CSS file

function Footer() {
  return (
    <>
      <hr className="footer-divider" />
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-content">
            <div className="footer-icons">
              <a href="https://www.linkedin.com/in/pawan-sharma-062574163/" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn className="icon linkedin" />
              </a>
              <a href="https://github.com/pa-sha-10" target="_blank" rel="noopener noreferrer">
                <FaGithub className="icon github" />
              </a>
              <a href="https://x.com/PawanSharma_10" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="icon twitter" />
              </a>
              <a href="https://www.instagram.com/pawansharma9941" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="icon instagram" />
              </a>
            </div>
            <div className="footer-text">
              <p>&copy; 2024 Pawan Sharma. All rights reserved.<br/>
              Raipur,Chhattisgarh</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;