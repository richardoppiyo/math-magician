import React from 'react';
import './HeaderStyles.css';
// import { BrowserRouter as Link } from 'react-router-dom';

const Header = () => (
  <header className="headsection">
    <h1 className="heading">
      My Math Magician
    </h1>
    <ul className="lists">
      <a href="/" className="list-item">Home</a>
      {/* <Link to={{ pathname: '/' }} className="list-item">Home</Link> */}
      <a href="/Calculator" className="list-item">Calculator</a>
      <a href="/Quotes" className="list-item">Quotes</a>
    </ul>
  </header>
);

export default Header;
