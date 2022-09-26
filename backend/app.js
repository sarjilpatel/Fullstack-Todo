const cookieParser = require("cookie-parser");
const express = require("express");
const app = express();
const path = require("path");

require("dotenv").config({ path: "backend/configs/config.env" });

//Using middlewares
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(cookieParser());

//Importing Routers
const todoRoutes = require("./routes/todoRoutes");
const userRoutes = require("./routes/userRoutes");

//using Routes
app.use("/api/v1", todoRoutes);
app.use("/api/v1", userRoutes);

app.use(express.static(path.join(__dirname, "../frontend/build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
});

module.exports = app;
