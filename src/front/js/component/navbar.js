import React, { useState } from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import "../../styles/navbar.css"

export const Navbar = () => {
  return (
    <>
    <div className="navBar">
      <h2> Jonathan <span>Díaz</span> </h2>
      <div className="navBarA">
            <a href="home">Inicio</a>
            <a href="proyectos">Proyectos</a>
            <a href="contact">Contacto</a>
      </div>
      </div>
    </>
  );
};

