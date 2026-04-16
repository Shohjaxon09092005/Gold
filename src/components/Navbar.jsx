import React from "react";
import '../styles/navber.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <h1 className="logo">FastFood</h1>
        <ul className="nav-links">
          <li><a href="#home">Bosh sahifa</a></li>
          <li><a href="#menu">Menyu</a></li>
          <li><a href="#contact">Aloqa</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;