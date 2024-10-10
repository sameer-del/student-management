const user = require("../models/user.js");
// hash password function hashed the password and return it then we create a new user to that credientials
const jwt = require("jsonwebtoken");
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
      return res.json({
        error: "User not found",
      });
    }
    const match = await comparePassword(password, userHas.password);

    if (match) {
      jwt.sign(
        { email: userHas.email, id: userHas.id, name: userHas.name },
        process.env.JWT_TOKEN,
        {},
        (err, token) => {
          console.log(token)
          if (err) throw err;
          // Set token as an HttpOnly cookie
          res.cookie("token", token, { httpOnly: true }).json(userHas);
        }
      );
    }
  } catch (error) {
    console.log("Error:", error);
    return res.status(500).json({ error: "Something went wrong" });
  }
};

const getProfile = (req, res) => {
  const { token } = req.cookies || {}; // Safely destructure with fallback

  if (token) {
    jwt.verify(token, process.env.JWT_TOKEN, {}, (err, user) => {
      if (err) {
        console.error("JWT Verification Error:", err);
        return res.status(403).json({ error: "Token verification failed" });
      }
      res.json(user);
    });
  } else {
    res.json(null); // Return null if no token is provided
  }
};

module.exports = { test, registerUser, loginUser, getProfile };
