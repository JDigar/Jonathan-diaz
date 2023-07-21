import React from 'react';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';

export const Contact = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    // Agrega tus credenciales de EmailJS
    const serviceID = 'service_8wy89qe';
    const templateID = 'Jonathan-contact';
    const userID = 'JonathanDiaz';

    emailjs.send(serviceID, templateID, data, userID)
      .then(() => {
        alert('Mensaje enviado correctamente');
        reset();
      })
      .catch((error) => {
        alert('Error al enviar el mensaje. Por favor, inténtalo nuevamente.');
        console.error('Error al enviar el mensaje:', error);
      });
  };

  return (
    <section id="contacto">
      <h2>Contacto</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Nombre:</label>
          <input type="text" {...register('name', { required: true })} />
          {errors.name && <span>Este campo es obligatorio.</span>}
        </div>
        <div>
          <label>Email:</label>
          <input type="email" {...register('email', { required: true })} />
          {errors.email && <span>Este campo es obligatorio.</span>}
        </div>
        <div>
          <label>Mensaje:</label>
          <textarea {...register('message', { required: true })} />
          {errors.message && <span>Este campo es obligatorio.</span>}
        </div>
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
};
