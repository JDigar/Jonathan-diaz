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

import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../../styles/navbar.css"

export const Navbar = () => {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
			<h3>LOGO</h3>
			<nav ref={navRef}>
				<a href="/#">Home</a>
				<a href="/#">My work</a>
				<a href="/#">Blog</a>
				<a href="/#">About me</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

// export default Navbar;