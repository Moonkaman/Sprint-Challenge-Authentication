import React from "react";

import Home from "../components/home/Home";

const HomeView = props => {
  const logout = e => {
    e.preventDefault();
    localStorage.removeItem("jwt");
    props.createToast("Logged out", "success");
    props.history.push("/login");
  };

  return (
    <div>
      <h1>Home</h1>
      <Home logout={logout} />
    </div>
  );
};

export default HomeView;
