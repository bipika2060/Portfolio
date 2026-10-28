import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/bipika-logo.png" alt="Bipika Logo" />
      </div>

      <div className="desktopMenu">
        <a href="#Intro"><strong>Home</strong></a>
        <a href="#About"><strong>Skill</strong></a>
        <a href="#Portfolio"><strong>Portfolio</strong></a>
        <a href="#Client"><strong>Clients</strong></a>
      </div>
<a href="#contact" className="desktopMenuBtn">
          <strong>Contact Me</strong>
        </a>
    </nav>
  );
};

export default Navbar;