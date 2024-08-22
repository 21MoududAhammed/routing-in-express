const express = require("express");

const userRouter = express.Router();

// userRouter.param("info", (req, res, next, id) => {
//   req.info = id === "100" ? "One Hundred" : "Not One Hundred";
//   next();
// });

userRouter.get("/", (req, res) => {
  res.send("This is Users router");
});

userRouter.get("/:id", (req, res) => {
  const { id } = req.params;
  const info = id === "100" ? "One Hundred" : "Not One Hundred";
  res.send(`The id is: ${info}`);
});
module.exports = userRouter;
