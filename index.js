const express = require("express");
const cors = require("cors");
const errorHandler = require("./middleware/errorHandler");
const userRouter = require("./routes/user.route");
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/user", userRouter);

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Listen to Port ${port}`);
});

process.on("unhandledRejection", (error) => {
  console.log(error.name, error.message);
  app.close(() => {
    process.exit(1);
  });
});
