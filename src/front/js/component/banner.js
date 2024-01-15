import React, { Component } from "react";
import "../../styles/banner.css";
import vetusta from "../../img/vetusta.jpg";
import montañas from "../../img/montañas.jpg";


export const BanerInicio = () => (

      
       <div className="col-12 row center banner"> 
        <div className="col-6 p-5">
          <div className="col-auto text-center pb-3">
            <a className="i-banner" href="/proyectos">  
              GRUPOS
            </a>
          </div>
              <div id="carouselExampleIndicators" className="carousel slide">
                  <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                  </div>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img src={vetusta} className="d-block w-100" alt="VETUSTA MORLA"/>
                      <div className="carousel-caption d-none d-md-block">
                        <h5>Vetusta Morla</h5>
                        <p>Banda Madrileña con canciones propias</p>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <img src={montañas} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                      <img src={montañas} className="d-block w-100" alt="..."/>
                    </div>
                  </div>
                  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                  </button>
              </div>
          </div>
          <div className="col-6 p-5">
          <div className="col-auto text-center pb-3">
            <a className="i-banner">  
              DJ'S
            </a>
          </div>
              <div id="carouselExampleIndicators" className="carousel slide">
                  <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                  </div>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img src={montañas} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                      <img src={montañas} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                      <img src={montañas} className="d-block w-100" alt="..."/>
                    </div>
                  </div>
                  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                  </button>
              </div>
          </div>
        </div>
        
 
);