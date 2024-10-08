const user = require("../models/user.js");

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
    const newUser = await user.create({ name, email, password });
    return res.json(newUser);
  } catch (error) {
    console.error(error);
  }
};

module.exports = { test, registerUser };
