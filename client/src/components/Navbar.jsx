import React from "react";
import { Link } from "react-router-dom";
import "../components/navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-head">
      <img src="head.png" />
      <nav>
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/register" className="nav-link">
          register
        </Link>
        <Link to="/login" className="nav-link">
          login
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
