import React from "react";
import { Link } from "react-router-dom";
import "./app.css";
function App() {
  return (
    <>
      <div className="background">
        <h1>
          Welcome to the <br /> Student Management System
        </h1>
        <h3>Please login or signup to continue.</h3>
        <div className="buttons">
          <button>
            <Link to="/login">Login</Link>
          </button>
          <button>
            <Link to="/signup">Signup</Link>
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
