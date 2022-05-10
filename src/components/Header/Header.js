import React from 'react';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header class="header">
      <FaBars id="menu-btn" fill="white" />

      <a href="#home" class="logo">
        IMB
      </a>
      <nav class="navbar">
        <Link to="/" class="active">
          Home
        </Link>
        <Link to="/about">About</Link>
        <Link to="/education">Education</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/contact">Contact</Link>
        {/* <a href="#home" class="active">
          Home
        </a>
        <a href="#about">About</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contact">Contact</a> */}
      </nav>
      <div class="follow">
        {/* <a href="#" class="fab fa-github"></a>
          <a href="#" class="fab fa-linkedin"></a>
          <a href="#" class="fab fa-instagram"></a> */}
        {/* get react icons here */}
      </div>
    </header>
  );
};

export default Header;
