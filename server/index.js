const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();
const port = 8000;
const { mongoose } = require("mongoose");

mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => console.log("database connection established"))
  .catch((err) => console.log("database not connection", err));

const app = express();
app.use("/", require("./routes/authRoute.js"));

app.listen(port, () => console.log(`listening on ${port}`));
