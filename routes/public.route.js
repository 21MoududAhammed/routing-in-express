const express = require("express");

const publicRouter = express.Router();

publicRouter.get("/", (req, res) => {
  res.send("Hello World!");
});


module.exports = publicRouter;
