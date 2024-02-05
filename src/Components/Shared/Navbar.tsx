import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a href="/" className="nav-link">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a href="slider" className="nav-link">
            Slider
          </a>
        </li>
        <li className="nav-item">
          <a href="cards" className="nav-link">
            Cards
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
