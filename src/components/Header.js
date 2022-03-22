import React from 'react';
import './HeaderStyles.css';

const Header = () => (
  <header className="headsection">
    <h1 className="heading">
      My Math Magician
    </h1>
    <ul className="lists">
      <a href="/" className="list-item">Home</a>
      <a href="/Calculator" className="list-item">Calculator</a>
      <a href="/Quotes" className="list-item">Quotes</a>
    </ul>
  </header>
);

export default Header;
