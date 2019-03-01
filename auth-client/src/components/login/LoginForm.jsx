import React from "react";
import { Link } from "react-router-dom";

import "./Login.css";

const LoginForm = props => {
  return (
    <form className="auth-form" onSubmit={props.login}>
      <label htmlFor="username">Username</label>
      <br />
      <input
        id="username"
        name="username"
        placeholder="Username"
        type="text"
        value={props.loginInfo.username}
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
        value={props.loginInfo.password}
        onChange={props.handleChange}
      />
      <br />
      <button>Log In</button>
      <p>
        Don't have and account? <Link to="/register">Register</Link>
      </p>
    </form>
  );
};

export default LoginForm;
