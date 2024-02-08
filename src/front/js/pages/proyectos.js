import React from "react";
import "../../styles/proyectos.css";
import vetusta from "../../img/vetusta.jpg";
import arde from "../../img/arde.jpg";
import moda from "../../img/moda.jpg";

export const Proyectos = () => {
  return (
    <div className="bkg">
      <div className="p-5"></div>
      <h1 className="text-h1"> GRUPOS </h1>

      {/* linea 1 */}
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col p-5">
          <div className="card">
            <img src={vetusta} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Vetusta Morla</h5>
              <p className="card-text">
                Vetusta Morla es una banda española de indie rock originaria de
                Tres Cantos, Madrid, que canta en español. Tras nueve años de
                andadura musical, en febrero de 2008 publicaron su primer largo,
                Un día en el mundo. Tres años más tarde, en 2011, publicaron su
                segundo álbum, Mapas.​
              </p>
              <a href="#" className="btn btn-primary">
                Quiero saber más
              </a>
            </div>
          </div>
        </div>

        <div className="col p-5">
          <div className="card">
            <img src={arde} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Arde Bogotá</h5>
              <p className="card-text">
                Arde Bogotá es un grupo musical de rock alternativo español
                formado en Cartagena, Murcia, en 2017. Está integrado por
                Antonio García, Dani Sánchez, Pepe Esteban y José Ángel
                Mercader.​
              </p>
              <a href="#" className="btn btn-primary">
                Quiero saber más
              </a>
            </div>
          </div>
        </div>

        <div className="col p-5">
          <div className="card">
            <img src={moda} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">La M.O.D.A</h5>
              <p className="card-text">
                La Maravillosa Orquesta del Alcohol es un septeto español con
                influencias folk, blues, rock & roll y punk procedente de
                Burgos.​ Son conocidos frecuentemente por el acrónimo del nombre
                del grupo, La M.O.D.A.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* linea 2
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col p-5">
          <div className="card">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>

        <div className="col p-5">
          <div className="card">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>

        <div className="col p-5">
          <div className="card">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* linea 3 */}
      {/* <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col p-5">
          <div className="card">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>

        <div className="col p-5">
          <div className="card">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>

        <div className="col p-5">
          <div className="card">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* linea 4 */}
      {/* <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col p-5">
          <div className="card">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>

        <div className="col p-5">
          <div className="card">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>

        <div className="col p-5">
          <div className="card">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </div> */}

      {/* linea 5 */}
      {/* <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col p-5">
          <div className="card">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>

        <div className="col p-5">
          <div className="card">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>

        <div className="col p-5">
          <div className="card">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </div> */}

      {/* linea 6 */}
      {/* <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col p-5">
          <div className="card">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>

        <div className="col p-5">
          <div className="card">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>

        <div className="col p-5">
          <div className="card">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </div> */}

      {/* fin */}
    </div>
  );
};
