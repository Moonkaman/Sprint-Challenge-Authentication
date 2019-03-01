import React, { useState } from "react";
import axios from "axios";

import RegisterForm from "../components/register/RegisterForm";

const RegisterView = props => {
  const [registerInfo, setRegister] = useState({
    username: "",
    password: ""
  });

  const handleChange = e => {
    const { name, value } = e.target;

    setRegister({
      ...registerInfo,
      [name]: value
    });
  };

  const register = e => {
    e.preventDefault();
    axios
      .post("/register", registerInfo)
      .then(res => {
        localStorage.setItem("jwt", res.data.token);
        props.createToast("Successfully Registered!", "success");
        props.history.push("/");
      })
      .catch(err => console.log(err));
  };
  return (
    <div>
      <h1>Register</h1>
      <RegisterForm
        registerInfo={registerInfo}
        register={register}
        handleChange={handleChange}
      />
    </div>
  );
};

export default RegisterView;
