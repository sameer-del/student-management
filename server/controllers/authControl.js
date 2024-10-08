const user = require("../models/user.js");
// hash password function hashed the password and return it then we create a new user to that credientials

const { hashPassword, comparePassword } = require("../helpers/auth.js");

const test = (req, res) => {
  res.json("test is working");
};

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name) {
      return res.json({
        error: "enter a username",
      });
    }
    if (!password || password.length < 6) {
      return res.json({
        error: "enter a valid password",
      });
    }

    const exist = await user.findOne({ email });
    if (exist) {
      return res.json({
        error: "user already exists",
      });
    }
    //hashpassword function called and return the password
    const HashPassword = await hashPassword(password);
    const newUser = await user.create({
      name,
      email,
      password: HashPassword,
    });
    return res.json(newUser);
  } catch (error) {
    console.error(error);
  }
};
//login controller
const loginUser = async (req, res) => {
  console.log("Received login request:", req.body); // Debugging
  const { email, password } = req.body;
  try {
    const userHas = await user.findOne({ email });
    if (!userHas) {
      res.json({
        error: "User not found",
      });
    }
    const match = await comparePassword(password, userHas.password);

    if (match) {
      res.json("Password matched");
      console.log(match);
    } else {
      res.json({ error: "Incorrect password" });
    }
  } catch (error) {
    console.log("Error:", error);
    return res.status(500).json({ error: "Something went wrong" });
  }
};

module.exports = { test, registerUser, loginUser };
