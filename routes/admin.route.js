const express = require("express");

const adminRouter = express.Router();

const log = (req, res, next) => {
  console.log("I am logging from admin router.");
  next();
};

adminRouter.get("*", log);

adminRouter.get("/", (req, res) => {
  res.send("I am from admin.");
});

adminRouter.get("/login", (req, res) => {
  res.send("This is login route under admin");
});

module.exports = adminRouter;
