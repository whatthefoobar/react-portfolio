import React from 'react';
import { FaBars } from 'react-icons/fa';

const Header = () => {
  return (
    <header class="header">
      <FaBars id="menu-btn" fill="white" />

      <a href="#home" class="logo">
        IMB
      </a>
      <nav class="navbar">
        <a href="#home" class="active">
          Home
        </a>
        <a href="#about">About</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contact">Contact</a>
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
