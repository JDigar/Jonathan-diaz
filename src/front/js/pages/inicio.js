import React from "react";
import "../../styles/home.css";
import ReactPlayer from "react-player";

export const Inicio = () => {
  return (
    <section id="home">
      <div className="">
        <div>
          <h1 className="h1-inicio"> LIVE GIG MUSIC </h1>

          <h2>GRUPOS Y ARTISTAS PARA BODAS Y EVENTOS</h2>
          <div className="">
            <div className="center">
            <ReactPlayer url="https://www.youtube.com/watch?v=WjBzSSF0j48"
            playsinline
            width='100%'
            height='1000px'
            loop
            muted
            playing='true'
             />
             </div>
          </div>
        </div>
      </div>

      <div className="p-4 trabajemos">
        <h1 className="p-4">¡TRABAJEMOS JUNTOS!</h1>
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
