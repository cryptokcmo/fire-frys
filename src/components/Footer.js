// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-red-800 text-white py-4 text-center">
      <p>© 2024 Fire-Frys. All Rights Reserved.</p>
      <p>
        Follow us on 
        <a href="https://www.facebook.com" className="hover:text-yellow-400 mx-2" target="_blank" rel="noopener noreferrer">Facebook</a> | 
        <a href="https://www.twitter.com" className="hover:text-yellow-400 mx-2" target="_blank" rel="noopener noreferrer">Twitter</a> | 
        <a href="https://www.instagram.com" className="hover:text-yellow-400 mx-2" target="_blank" rel="noopener noreferrer">Instagram</a>
      </p>
    </footer>
  );
};

export default Footer;
