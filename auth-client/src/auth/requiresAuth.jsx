import React from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

axios.defaults.baseURL = "http://localhost:3300/api";
axios.interceptors.request.use(
  options => {
    options.headers.authorization = localStorage.getItem("jwt");
    return options;
  },
  err => {
    return Promise.reject(err);
  }
);

export default Component => {
  return props => {
    const token = localStorage.getItem("jwt");
    return token ? <Component {...props} /> : <Redirect to="/login" />;
  };
};
