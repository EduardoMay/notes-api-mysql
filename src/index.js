require("dotenv").config();

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

app.set("port", process.env.PORT || 3010);

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("API Notes use MYSQL");
});

app.listen(app.get("port"), () => {
  console.log("Server on port", app.get("port"));
});
