import React, { useRef } from "react";
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
    <form ref={form} onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Nombre:</label>
        <input
          type="text"
          name="name"
          {...register("name", { required: true })}
        />
        {errors.name && <span>Este campo es obligatorio.</span>}
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          {...register("email", { required: true })}
        />
        {errors.email && <span>Este campo es obligatorio.</span>}
      </div>
      <div>
        <label>Teléfono:</label>
        <input type="tel" name="tel" {...register("tel", { required: true })} />
        {errors.tel && <span>Este campo es obligatorio.</span>}
      </div>
      <div>
        <label>Asunto:</label>
        <input
          type="text"
          name="asunto"
          {...register("asunto", { required: true })}
        />
        {errors.asunto && <span>Este campo es obligatorio.</span>}
      </div>
      <div>
        <label>Mensaje:</label>
        <textarea name="message" {...register("message", { required: true })} />
        {errors.message && <span>Este campo es obligatorio.</span>}
      </div>
      <input type="submit" value="Send" />
    </form>
  );
};

console.log();
