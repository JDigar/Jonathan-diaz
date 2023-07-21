// import React from "react";
// import { Link } from "react-router-dom";

// export const Navbar = () => {
// 	return (
// 		<nav className="navbar navbar-light bg-light">
// 			<div className="container">
// 				<Link to="/">
// 					<span className="navbar-brand mb-0 h1">React Boilerplate</span>
// 				</Link>
// 				<div className="ml-auto">
// 					<Link to="/demo">
// 						<button className="btn btn-primary">Check the Context in action</button>
// 					</Link>
// 				</div>
// 			</div>
// 		</nav>
// 	);
// };

import React, { useState } from 'react';
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav>
      <div className="logo">Mi Logo</div>
		<ul>
          <li><a href="home">Inicio</a></li>
          <li><a href="proyectos">Proyectos</a></li>
          <li><a href="contact">Contacto</a></li>
          {/* Agrega aquí más pestañas según tus necesidades */}
        </ul>
      <div className={`menu ${isMobileMenuOpen ? 'active' : ''}`}>
      </div>
      <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
        <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}>
		</i>
       
      </div>
    </nav>
  );
};

