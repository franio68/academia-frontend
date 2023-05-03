import React from "react";
import { useForm } from "react-hook-form";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const gestorFormulario = (data) => {
    console.log(data);
  };

  return (
    <div className="Form">
      <div className="title">Crea tu cuenta</div>
      <div className="inputs">
        <form onSubmit={handleSubmit(gestorFormulario)}>
          <input
            type="text"
            name="nombre"
            placeholder="Nombre"
            {...register("nombre")}
          />
          {errors.nombre && <p>{errors.nombre.message}</p>}
          <input
            type="text"
            name="email"
            placeholder="email@email.com"
            {...register("email")}
          />
          {errors.email && <p>{errors.email.message}</p>}
          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            {...register("password")}
          />
          {/* {errors.password && <p>{errors.password.message}</p>} */}
          {errors.password ? <p>{errors.password.message}</p> : null}
          <input
            type="text"
            name="activo"
            placeholder="¿activo?"
            {...register("activo")}
          />
          {errors.activo && <p>{errors.activo.message}</p>}
          <input type="submit" value="Crear" id="submit" />
        </form>
      </div>
    </div>
  );
};

export default Form;
