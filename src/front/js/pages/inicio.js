import React from "react";
import "../../styles/home.css";
import { BanerInicio } from "../component/banner.js";

export const Inicio = () => {
  return (
    <section id="home">
      <div className="">
        <div>
          <div className="">
            <div className="center">
              <h1 className="h1-inicio"> LIVE GIG MUSIC </h1>

              <h2>GRUPOS Y ARTISTAS PARA BODAS Y EVENTOS</h2>
            </div>
            <BanerInicio />
          </div>
        </div>
      </div>

      <div className="p-4 trabajemos">
        <a className="p-4 a-trabajemos">¡TRABAJEMOS JUNTOS!</a>
        <div>
          <h4 className="p-4">
            Estamos deseando poner la banda sonora de vuestro día
          </h4>
          <p className="p-4">
            Nos encanta hacer disfrutar a la gente y sobre todo... ¡¡El buen
            rollo!!
          </p>
        </div>
      </div>
    </section>
  );
};
