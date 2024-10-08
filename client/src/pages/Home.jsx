import React from "react";
//to use link element instead of anchor tag instad href to use to to call the component
import { Link } from "react-router-dom";
import "./home.css";
const Home = () => {
  return (
    <div className="box">
      <h1>welcome to learning page</h1>
      <h3>Train your mind to tackle the problems</h3>
      <div className="buttons">
        <button>
          <Link to="/login" className="links">
            sign in
          </Link>
        </button>
        <button>
          <Link to="/register" className="links">
            sign up
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Home;
