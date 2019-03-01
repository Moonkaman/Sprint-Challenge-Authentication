import React from "react";
import { Route } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import HomeView from "./views/HomeView";
import LoginView from "./views/LoginView";
import RegisterView from "./views/RegisterView";

import "./App.css";
import "react-toastify/dist/ReactToastify.min.css";

const App = props => {
  const createToast = (message, type) => {
    toast[type](message, {
      position: "top-right",
      autoClose: 2200,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true
    });
  };

  return (
    <div className="App">
      <Route exact path="/" render={props => <HomeView {...props} />} />
      <Route
        path="/login"
        render={props => <LoginView {...props} createToast={createToast} />}
      />
      <Route
        path="/register"
        render={props => <RegisterView {...props} createToast={createToast} />}
      />
      <ToastContainer />
    </div>
  );
};

export default App;
