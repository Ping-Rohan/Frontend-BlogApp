import React from "react";
import "./signup.css";
import { useFormik } from "formik";
import signupSchema from "./signupSchema";
import { signUp } from "../../Redux/user";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

let initialValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export default function Signup() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { handleSubmit, handleChange, errors, values } = useFormik({
    initialValues,
    onSubmit: (value, action) => {
      dispatch(signUp(value, navigate));
      action.resetForm();
    },
    validationSchema: signupSchema,
  });
  return (
    <section className="signup">
      <form action="" onSubmit={handleSubmit}>
        <div className="input">
          <label htmlFor="">Fullname</label>
          {errors.name && <span className="error">{errors.name}</span>}
          <input
            type="text"
            name="name"
            onChange={handleChange}
            value={values.name}
          />
        </div>
        <div className="input">
          <label htmlFor="">Email</label>
          {errors.email && <span className="error">{errors.email}</span>}

          <input
            type="email"
            name="email"
            onChange={handleChange}
            value={values.email}
          />
        </div>
        <div className="input">
          <label htmlFor="">Password</label>
          {errors.password && <span className="error">{errors.password}</span>}

          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={values.password}
          />
        </div>
        <div className="input">
          <label htmlFor="confirmPassword">Confirm password</label>
          {errors.confirmPassword && (
            <span className="error">{errors.confirmPassword}</span>
          )}
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            onChange={handleChange}
            value={values.confirmPassword}
          />
        </div>
        <button type="submit">Create Account</button>
      </form>
    </section>
  );
}
