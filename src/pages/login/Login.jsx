import React from "react";
import "./Login.css";
import { useFormik } from "formik";
import loginSchema from "./LoginSchema";
import { login } from "../../Redux/User";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (value, action) => {
      console.log(value);
      dispatch(login(value, navigate));
    },
    validationSchema: loginSchema,
  });
  return (
    <section className="login">
      <form action="" onSubmit={handleSubmit}>
        <div className="input">
          <label htmlFor="">Email</label>
          {errors.email && <span className="error">{errors.email}</span>}
          <input type="email" onChange={handleChange} name="email" />
        </div>
        <div className="input">
          <label htmlFor="">Password</label>
          {errors.password && <span className="error">{errors.password}</span>}
          <input type="password" onChange={handleChange} name="password" />
        </div>
        <button>Login</button>
      </form>
    </section>
  );
}
