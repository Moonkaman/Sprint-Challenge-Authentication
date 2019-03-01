import React from "react";
import { Link } from "react-router-dom";

import "./Register.css";

const RegisterForm = props => {
  return (
    <form className="auth-form" onSubmit={props.register}>
      <label htmlFor="username">Username</label>
      <br />
      <input
        id="username"
        name="username"
        placeholder="Username"
        type="text"
        value={props.registerInfo.username}
        onChange={props.handleChange}
      />
      <br />

      <label htmlFor="password">Password</label>
      <br />
      <input
        id="password"
        name="password"
        placeholder="Password"
        type="text"
        value={props.registerInfo.password}
        onChange={props.handleChange}
      />
      <br />
      <button>Register</button>
      <p>
        Already have and account? <Link to="/login">Login</Link>
      </p>
    </form>
  );
};

export default RegisterForm;
