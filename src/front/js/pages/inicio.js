import React from "react";
import "../../styles/home.css";

export const Inicio = () => {
  return (
    <section id="home">
      <div className="img-inicio">
        <div>
          <h1 className="h1-inicio"> HOLA </h1>
          <p className="soy"> SOY DESARROLADOR WEB</p>
        </div>
      </div>

      <div className="p-4 trabajemos">
        <h1 className="p-4">¡TRABAJEMOS JUNTOS!</h1>
        <div>
          <h4 className="p-4">
            Mi nombre es Jonathan Díaz y quiero formar parte de tu proyecto
          </h4>
          <p className="p-4">
            Me gusta trabajar en equipo, involucrarme en los proyectos y sobre todo... ¡¡El buen rollo!!
          </p>
        </div>
      </div>
    </section>
  );
};
