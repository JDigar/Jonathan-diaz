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
        <a className="logoNavbar" href="/">
          {" "}
          LIVE GIG <span> MUSIC </span>{" "}
        </a>
      </h2>
      <nav ref={navRef}>
        <a className="anavbar" href="/">
          Inicio
        </a>
        <a className="anavbar" href="/proyectos">
          Grupos
        </a>
        <a className="anavbar" href="/about-me">
          DJ's
        </a>
        <a className=" anavbar navbar-contacto" href="/contact">
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
