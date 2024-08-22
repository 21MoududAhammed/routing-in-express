const productsRouter = require("express").Router();

productsRouter.param((param, option) => (req, res, next, p_id) => {
  if (p_id === option) {
    next();
  } else {
    res.sendStatus(403);
  }
});

productsRouter.param("p_id", "102");

productsRouter.get("/", (req, res) => {
  res.send("This is product Router");
});
productsRouter.get("/:p_id", (req, res) => {
  res.send("This is product Router with product id.");
});

module.exports = productsRouter;
