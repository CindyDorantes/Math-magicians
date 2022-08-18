import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div>
    <header className="navHeader">
      <p className="navTitle">Math Magicians</p>
      <nav className="navBar">
        <Link to="/" className="navLink">Home</Link>
        <Link to="/calculator" className="navLink">Calculator</Link>
        <Link to="/quote" className="navLink">Quote</Link>
      </nav>
    </header>
  </div>
);

export default Navbar;
