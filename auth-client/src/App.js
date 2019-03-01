import React from "react";
import { Route } from "react-router-dom";

import HomeView from "./views/HomeView";
import LoginView from "./views/LoginView";
import RegisterView from "./views/RegisterView";

import "./App.css";

const App = props => {
  return (
    <div className="App">
      <Route exact path="/" render={props => <HomeView {...props} />} />
      <Route path="/login" render={props => <LoginView {...props} />} />
      <Route path="/register" render={props => <RegisterView {...props} />} />
    </div>
  );
};

export default App;
