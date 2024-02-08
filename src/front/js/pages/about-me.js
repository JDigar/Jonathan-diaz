import React from "react";
import "../../styles/djs.css";
import timmy from "../../img/timmy.jpg";
import wade from "../../img/wade.jpg";
import kid from "../../img/kid.jpg";

export const AboutMe = () => {
  return (
    <section id="home" className="bkg">
      <div className="bkg">
        <div className="p-5"></div>
        <h1 className="text-h1"> DJ'S </h1>

        {/* linea 1 */}
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col p-5">
            <div className="card">
              <img src={kid} className="card-img-top" alt="kid rizzo" />
              <div className="card-body">
                <h5 className="card-title">Kid Rizzo</h5>
                <p className="card-text">
                  Joven Dj de carácter alegre y extrovertido que siempre tiene
                  en mente que el público no pare de cantar, bailar y saltar.
                  ¡Le encanta liarla allá donde va! Siempre lo vas a encontrar
                  pegandose unos bailes.
                </p>
                <a href="#" className="btn btn-primary">
                  Quiero saber más
                </a>
              </div>
            </div>
          </div>

          <div className="col p-5">
            <div className="card">
              <img src={wade} className="card-img-top" alt="wade" />
              <div className="card-body">
                <h5 className="card-title">Wade</h5>
                <p className="card-text">
                  Artista Sevillano, considerado como el revolucionario del Tech
                  House en nuestro país gracias a éxitos como 'Passion', 'Pan
                  Jabi', 'Guiddi Riddim', 'Mi Amor' o 'Por ejemplo'.
                </p>
                <a href="#" className="btn btn-primary">
                  Quiero saber más
                </a>
              </div>
            </div>
          </div>

          <div className="col p-5">
            <div className="card">
              <img src={timmy} className="card-img-top" alt="timmy trumpet" />
              <div className="card-body">
                <h5 className="card-title">Timmy Trumpet</h5>
                <p className="card-text">
                  DJ, trompetista y productor discográfico Australiano. Es
                  conocido en los grandes festivales de música electrónica por
                  utilizar en sus sets una trompeta para hacer sus canciones.​​
                </p>
                <a href="#" className="btn btn-primary">
                  Quiero saber más
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* linea 2 */}
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
        </div> */}

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
        </div>

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
    </section>
  );
};
