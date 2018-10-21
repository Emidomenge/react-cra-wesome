import React from 'react';
import css from './footer.css';

const Footer = () => (
  <footer className="absolute bottom-0 w-100 tc fixed bg-black">
    <div className="ma4 white">
      {'Project created by '}
      <a href="http://www.domenge.fr/" target="_blank" rel="noopener noreferrer">Emilien Domenge-Heritier</a>
    </div>
  </footer>
);

export default Footer;
