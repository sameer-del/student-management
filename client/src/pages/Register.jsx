import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Signout = () => {
  //after the register automatically navigate to login to use we import useNavigate from react-router-dom
  const navigate = useNavigate();
  //usestate to store the data
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  //handling submit
  const registerUser = async (e) => {
    e.preventDefault();
    //destructing the data and store it in data
    const { name, email, password } = data;
    //try catch block
    try {
      //using axios we send the data to the server
      const { data } = await axios.post("/register", {
        name,
        email,
        password,
      });
      //this data error is handled in backend the object error is called
      if (data.error) {
        toast.error(data.error);
      } else {
        //to set the inputs clear
        setData({});
        //this toast send the toast message
        toast.success("login success");
        //this navigate use to navigate the register to login page
        navigate("/login");
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="register-home">
      <form onSubmit={registerUser} className="form">
        <label>user name</label>
        <input
          type="text"
          placeholder="enter a name..."
          value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
          className="inputs"
        />
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

export default Signout;
