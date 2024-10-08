import React, { useState } from "react";
import axios from "axios";

const Signin = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const loginUser = (e) => {
    e.preventDefault();
    axios.get("/"); 
  };
  return (
    <div>
      <form onSubmit={loginUser}>
        <label>email</label>
        <input
          type="email"
          placeholder="enter a email..."
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />
        <label>password</label>
        <input
          type="password"
          placeholder="enter a password..."
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default Signin;
