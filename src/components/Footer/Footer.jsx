import React from 'react';

import './Footer.css';

export const Footer = () => (
  <footer className="footer">
    <nav className="footer__menu">
      <a href="#" className="footer__link">
        About
      </a>
      <a href="#" className="footer__link">
        Contact
      </a>
      <a href="#" className="footer__link">
        Careers
      </a>
    </nav>
    <p>&copy; FoxTok</p>
  </footer>
);
