const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();
const port = process.env.PORT;
const authRoute = require("./routes/authRoute.js");
const { mongoose } = require("mongoose");
const cookieParser = require("cookie-parser");
const app = express();
mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => console.log("database connection established"))
  .catch((err) => console.log("database not connection", err));
app.use(express.json());

app.use("/", authRoute);

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.listen(port, () => console.log(`listening on ${port}`));
