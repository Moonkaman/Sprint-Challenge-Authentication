import React, { useState } from "react";
import axios from "axios";

import LoginForm from "../components/login/LoginForm";

const LoginView = props => {
  const [loginInfo, setLogin] = useState({
    username: "",
    password: ""
  });

  const handleChange = e => {
    const { name, value } = e.target;

    setLogin({
      ...loginInfo,
      [name]: value
    });
  };

  const login = e => {
    e.preventDefault();
    axios
      .post("/login", loginInfo)
      .then(res => {
        localStorage.setItem("jwt", res.data.token);
        props.createToast(res.data.message, "success");
        props.history.push("/");
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      <h1>Login</h1>
      <LoginForm
        handleChange={handleChange}
        loginInfo={loginInfo}
        login={login}
      />
    </div>
  );
};

export default LoginView;
