import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";

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
      .send(serviceID, templateID, data, publicKey)
      .then(() => {
        alert("Mensaje enviado correctamente");
        reset();
      })
      .catch((error) => {
        alert("Error al enviar el mensaje. Por favor, inténtalo nuevamente.");
        console.error("Error al enviar el mensaje:", error);
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Nombre:</label>
        <input
          type="text"
          {...register("name", { required: true })}
          name="user_name"
        />
        {errors.name && <span>Este campo es obligatorio.</span>}
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          {...register("email", { required: true })}
          name="user_email"
        />
        {errors.email && <span>Este campo es obligatorio.</span>}
      </div>
      <div>
        <label>Teléfono:</label>
        <input
          type="tel"
          {...register("tel", { required: true })}
          name="user_phone"
        />
        {errors.email && <span>Este campo es obligatorio.</span>}
      </div>
      <div>
        <label>Mensaje:</label>
        <textarea {...register("message", { required: true })} name="message" />
        {errors.message && <span>Este campo es obligatorio.</span>}
      </div>
      <input type="submit" value="Send" />
    </form>
  );
};
