import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const loginUser = async (e) => {
    e.preventDefault();
    const { email, password } = data;
    try {
      const response = await axios.post("http://localhost:8000/login", {
        email,
        password,
      });

      if (response.data.error) {
        toast.error(response.data.error);
      } else {
        toast.success("Login successful");
        navigate("/"); // Redirect to the home page or wherever you want
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred. Please try again.");
    }
  };
  return (
    <div className="register-home">
      <form onSubmit={loginUser} className="form">
        <label>email</label>
        <input
          type="email"
          placeholder="enter a email..."
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
          className="inputs"
        />
        <label>password</label>
        <input
          type="password"
          placeholder="enter a password..."
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
          className="inputs"
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default Signin;
