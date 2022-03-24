import React from 'react';
import './HeaderStyles.css';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="headsection">
    <h1 className="heading">
      My Math Magician
    </h1>
    <ul className="lists">
      <Link to="/" className="list-item">Home</Link>
      <Link to="/Calculator" className="list-item">Calculator</Link>
      <Link to="/Quotes" className="list-item">Quotes</Link>
    </ul>
  </header>
);

export default Header;
