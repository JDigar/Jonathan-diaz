// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { styled } from "styled-components";
// import "../../styles/navbar.css"

// export const Navbar = () => {
//   return (
//     <>
//     <div className="navBar">
//       <h2> Jonathan <span>Díaz</span> </h2>
//       <div className="navBarA">
//             <a href="home">Inicio</a>
//             <a href="proyectos">Proyectos</a>
//             <a href="contact">Contacto</a>
//       </div>
//       </div>
//     </>
//   );
// };

import React, { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../../styles/navbar.css";

export const Navbar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <h2>
        Jonathan <span> Díaz </span>
      </h2>
      <nav ref={navRef}>
          
            <a href="/home">Inicio</a>
            <a href="/proyectos">Portfolio</a>
            <a href="/contact">Contacto</a>
            <a href="/#">About me</a>
          
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
};