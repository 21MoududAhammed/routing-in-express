const express = require("express");
const cors = require("cors");
const adminRouter = require("./routes/admin.route");
const publicRouter = require("./routes/public.route");
const userRouter = require("./routes/user.route");
const productsRouter = require("./routes/products.route");

const port = 5000;

const app = express();

// middleware
app.use(express.json());
app.use(cors());

app.use("/admin", adminRouter);

app.use("/", publicRouter);

app.use("/users", userRouter);

app.use("/products", productsRouter)

app.listen(5000, () => {
  console.log(`Server is running on port ${port}`);
});
