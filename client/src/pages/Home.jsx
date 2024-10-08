import React from  "react";
import {Link} from"react-router-dom";
const Home = () => {
  return (
    <div>
       <h1>welcome to learning page</h1>
        <p>dont you have acount create a new account bu sign up</p>
        <button>
          <Link to="/login">sign in </Link>
        </button>
        <button>
          <Link to="/register">sign up</Link>
        </button>
      
    </div>
  );
};

export default Home;
