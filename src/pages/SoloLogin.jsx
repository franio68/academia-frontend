import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

const Login = (props) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const navegar = useNavigate();

  const gestorFormulario = async (data) => {
    await axios
      .post(process.env.REACT_APP_BACKEND_URL + "/docentes/login", {
        email: data.email,
        password: data.password,
      })
      .then((response) => {
        console.log("Login Correcto");
        console.log(response.data);
        localStorage.setItem(
          "datosUsuario",
          JSON.stringify({
            userId: response.data.userId,
            token: response.data.token,
          })
        );
        navegar("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="Form">
      <div className="title">Accede a tu cuenta</div>
      <div className="inputs">
        <form className="formita" onSubmit={handleSubmit(gestorFormulario)}>
          <div>
            <input
              type="text"
              name="email"
              placeholder="email@email.com"
              {...register("email", {
                pattern:
                  /^(?![_.-])((?![_.-][_.-])[a-zA-Z\d_.-]){0,63}[a-zA-Z\d]@((?!-)((?!--)[a-zA-Z\d-]){0,63}[a-zA-Z\d]\.){1,2}([a-zA-Z]{2,14}\.)?[a-zA-Z]{2,14}$/,
                required: true,
              })}
            />
            {errors.email && errors.email.type === "required" && (
              <span> Campo requerido</span>
            )}
            {errors.email && errors.email.type === "pattern" && (
              <span> Formato incorrecto</span>
            )}
          </div>
          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            {...register("password", {
              required: true,
              minLength: 6,
            })}
          />
          {errors.password && errors.password.type === "required" && (
            <span> Campo requerido</span>
          )}
          {errors.password && errors.password.type === "minLength" && (
            <span>Mínimo de 6 caracteres</span>
          )}
          <button type="submit">"ACCESO"</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
