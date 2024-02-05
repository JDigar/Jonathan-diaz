import React from "react";
import "../../styles/home.css";
import { BanerInicio } from "../component/banner.js";
import { Welcome } from "../component/welcome.js";
import { Space } from "../component/space.js";

export const Inicio = () => {
  return (
    <section id="home">
      <div className="">
        <div>
          <Welcome />
        </div>{" "}
        <div>
          <Space />
        </div>{" "}
        <div>
          <BanerInicio />
        </div>{" "}
      </div>
      <div className="p-4 trabajemos">
        <a className="p-4 a-trabajemos" href="/contact">
          {" "}
          ¡TRABAJEMOS JUNTOS!{" "}
        </a>{" "}
        <div>
          <h4 className="p-4">
            Estamos deseando poner la banda sonora de vuestro día{" "}
          </h4>{" "}
          <p className="p-4">
            Nos encanta hacer disfrutar a la gente y sobre todo...¡¡El buen
            rollo!!
          </p>{" "}
          <a className=" anavbar contacto-inicio" href="/contact">
            CUÉNTAME QUE QUIERES PARA TU DÍA{" "}
          </a>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
};
