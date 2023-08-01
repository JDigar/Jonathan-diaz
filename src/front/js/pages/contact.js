import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";
import "../../styles/home.css";

export const Contact = () => {
  const form = useRef();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // Agrega tus credenciales de EmailJS
    const serviceID = "service_8wy89qe";
    const templateID = "template_bl8eifn";
    const publicKey = "QnuzGFLIjKw3nHJPL";

    emailjs
      .sendForm(serviceID, templateID, form.current, publicKey)
      .then((result) => {
        alert("Mensaje enviado correctamente");
        reset();
      })
      .catch((error) => {
        alert("Error al enviar el mensaje. Por favor, inténtalo nuevamente.");
        console.error("Error al enviar el mensaje:", error);
      });
  };

  return (
    <div className="bkg">
      <h2 className="h2-contact">¿Tienes un proyecto entre manos?</h2>
      <h3>¡VAMOS A ELLO! </h3>
      <div className="pt-3 pb-5">
      <div className="cont">
        <form ref={form} onSubmit={handleSubmit(onSubmit)}>
          <div>
            <h4>Hablemos</h4>
            <label>Nombre:</label>
            <input
              placeholder={'Tu nombre'}
              className="inputs"
              type="text"
              name="name"
              {...register("name", { required: true })}
              />
            {errors.name && (
              <span className="required">Este campo es obligatorio.</span>
              )}
          </div>
          <div>
            <label>Email:</label>
            <input
              placeholder={'Tu email'}
              className="inputs"
              type="email"
              name="email"
              {...register("email", { required: true })}
              />
            {errors.email && (
              <span className="required">Este campo es obligatorio.</span>
              )}
          </div>
          <div>
            <label>Teléfono:</label>
            <input
              placeholder={'Tu teléfono'}
              className="inputs"
              type="tel"
              name="tel"
              {...register("tel", { required: true })}
              />
            {errors.tel && (
              <span className="required">Este campo es obligatorio.</span>
              )}
          </div>
          <div>
            <label>Asunto:</label>
            <input
              placeholder={'Cuéntame un poco'}
              className="inputs"
              type="text"
              name="asunto"
              {...register("asunto", { required: true })}
              />
            {errors.asunto && (
              <span className="required">Este campo es obligatorio.</span>
              )}
          </div>
          <div>
            <label>Mensaje:</label>
            <textarea
              placeholder={'Cuéntame más sobre tu proyecto...'}
              className="inputs"
              name="message"
              {...register("message", { required: true })}
              />
            {errors.message && (
              <span className="required">Este campo es obligatorio.</span>
              )}
          </div>
          <input className="btn" type="submit" value="Send" />
        </form>
      </div>
    </div>
   </div>
  );
};
