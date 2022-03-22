import React from 'react';
import './HeaderStyles.css';

const Header = () => (
  <header className="headsection">
    <h1 style={{
      fontSize: '3rem', fontWeight: '400', marginBottom: '2rem', lineHeight: '1em', color: '#000', textTransform: 'lowercase',
    }}
    >
      Math Magician
    </h1>
    <ul className="lists">
      <a href="/" className="list-item">Home</a>
      <a href="/" className="list-item">Calculator</a>
      <a href="/" className="list-item">Quote</a>
    </ul>
  </header>
);

export default Header;
