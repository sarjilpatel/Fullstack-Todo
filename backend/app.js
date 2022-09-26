const cookieParser = require("cookie-parser");
const express = require("express");
const app = express();

require("dotenv").config({ path: "backend/configs/config.env" });

//Using middlewares
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("running");
});

//Importing Routers
const todoRoutes = require("./routes/todoRoutes");
const userRoutes = require("./routes/userRoutes");

//using Routes
app.use("/api/v1", todoRoutes);
app.use("/api/v1", userRoutes);

module.exports = app;
