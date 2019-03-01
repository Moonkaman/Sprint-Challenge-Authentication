import React from "react";

import requiresAuth from "../../auth/requiresAuth";

const Home = props => {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

export default requiresAuth(Home);
