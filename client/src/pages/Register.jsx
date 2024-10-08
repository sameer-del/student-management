import React, { useState } from "react";

const Signout = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const registerUser = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={registerUser}>
        <label>user name</label>
        <input
          type="text"
          placeholder="enter a name..."
          value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
        />
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

export default Signout;
