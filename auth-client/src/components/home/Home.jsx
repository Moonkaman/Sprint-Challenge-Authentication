import React, { useState, useEffect } from "react";
import axios from "axios";

import requiresAuth from "../../auth/requiresAuth";

import "./Home.css";

const Home = props => {
  const [jokes, setJokes] = useState([]);

  useEffect(_ => {
    axios
      .get("/jokes")
      .then(res => setJokes(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <ul>
        {jokes.map(joke => (
          <li key={joke.id}>{joke.joke}</li>
        ))}
      </ul>
      <button className="logout-btn" onClick={props.logout}>
        Logout
      </button>
    </div>
  );
};

export default requiresAuth(Home);
