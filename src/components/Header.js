import React from 'react';
import './HeaderStyles.css';

const Header = () => (
  <header className="headsection">
    <h1 style={{
      fontSize: '3rem', fontWeight: '400', marginBottom: '2rem', lineHeight: '1em', color: '#000',
    }}
    >
      My Math Magician
    </h1>
    <ul className="lists">
      <a href="/Home" className="list-item">Home</a>
      <a href="/Calculator" className="list-item">Calculator</a>
      <a href="/Quotes" className="list-item">Quotes</a>
    </ul>
  </header>
);

export default Header;
