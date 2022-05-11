import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaMailBulk } from 'react-icons/fa';
import { FaCloudMoon } from 'react-icons/fa';

const Header = () => {
  const [sidebar, setSidebar] = useState(false);
  const [isLight, setIsLight] = useState(true);

  function toggleTheme() {
    setIsLight(!isLight);
  }
  return (
    <header class="header active">
      {/* add an active class here to toggle */}
      {sidebar || <FaBars id="menu-btn" fill="white" />}
      <Link to="/" class="logo ">
        IMB
      </Link>

      <nav class="navbar ">
        <Link to="/" class="link active">
          Home
        </Link>
        <Link to="/about" className="link">
          About
        </Link>
        <Link to="/education" className="link">
          Education
        </Link>
        <Link to="/portfolio" className="link">
          Portfolio
        </Link>
        <Link to="/contact" className="link">
          Contact
        </Link>
        <button id="theme-toggler" onClick={toggleTheme}>
          {isLight ? 'Darkmode' : 'Lightmode'}
          {/* <FaCloudMoon fill="#000" /> */}
        </button>
      </nav>

      <div class="follow">
        <a href="https://github.com/whatthefoobar">
          <FaGithub fill="#000" className="social-icon" />
        </a>
        <a href="https://www.linkedin.com/in/irina-munteanu-b%C3%A4ck-523a41b4/">
          <FaLinkedin fill="#000" className="social-icon" />
        </a>
        <a href="mailto:irina.mntn@gmail.com">
          <FaMailBulk fill="#000" className="social-icon" />
        </a>
      </div>
    </header>
  );
};

export default Header;
