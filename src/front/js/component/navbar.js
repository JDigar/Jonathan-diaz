import React, { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../../styles/home.css";

export const Navbar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header className="fixed">
      <h2>
        Jonathan <span> Díaz </span>
      </h2>
      <nav ref={navRef}>
        <a href="/inicio">Inicio</a>
        <a href="/proyectos">Portfolio</a>
        <a href="/about-me">About me</a>
        <a className="navbar-contacto" href="/contact">
          Contacto
        </a>

        <div className="btn-burger">
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </div>
      </nav>
      <div className="btn-burger">
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </div>
    </header>
  );
};
