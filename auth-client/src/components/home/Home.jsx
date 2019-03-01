import React from "react";

import requiresAuth from "../../auth/requiresAuth";

const Home = props => {
  return (
    <div>
      <button onClick={props.logout}>Logout</button>
    </div>
  );
};

export default requiresAuth(Home);
