import React, { Component } from "react";
import "../../styles/banner.css";
import vetusta from "../../img/vetusta.jpg";
import arde from "../../img/arde.jpg";
import kid from "../../img/kid.jpg";
import moda from "../../img/moda.jpg";
import timmy from "../../img/timmy.jpg";
import wade from "../../img/wade.jpg";

export const BanerInicio = () => (
  <div className="col-12 row center banner">
    <div className="cnt-banner row">
      <div className="col-6 p-5">
        <div className="col-auto text-center pb-3">
          <a className="i-banner" href="/proyectos">
            GRUPOS
          </a>
        </div>
        <div id="carouselExampleIndicators1" className="carousel slide">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators1"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators1"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators1"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={vetusta}
                className="d-block w-100"
                alt="VETUSTA MORLA"
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Vetusta Morla</h5>
                <p>Banda Madrileña con canciones propias</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={arde} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>Arde Bogotá</h5>
                <p>Banda de Cartagena, composiciones propias</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={moda} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>La M.O.D.A</h5>
                <p>La Maravilla Orquesta Del Alcohol</p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators1"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators1"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className="col-6 p-5">
        <div className="col-auto text-center pb-3">
          <a className="i-banner" href="/about-me">
            DJ'S
          </a>
        </div>
        <div id="carouselExampleIndicators2" className="carousel slide">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators2"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators2"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators2"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={wade} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>Wade</h5>
                <p>DJ y Productor Sevillano, residente de El Row</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={kid} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>Kid Rizzo</h5>
                <p>DJ Valenciano para Bodas y Eventos</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={timmy} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>Timmy Trumpet</h5>
                <p>Icónico DJ Australiano</p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators2"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators2"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  </div>
);
