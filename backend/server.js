const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

// const authRouter = require("./Auth/Routes/auth");
// const cityRouter = require("./City/routes/city");
const newsRouter = require("./News/routes/news");
// const searchRouter = require("./Search/routes/search");
// const userRouter = require("./User/routes/user");

const app = express();

// app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

dotenv.config();
const DBURI = process.env.MONGO_DB_URI;

mongoose.connect(
  DBURI,
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  (err) => {
    if (err) {
      console.log("Failed to connect database " + err);
    } else {
      console.log("Database connected successfully");
    }
  }
);

// app.use("/api/auth", authRouter);
// app.use("/api/city", cityRouter);
app.use("/api/news", newsRouter);
// app.use("/api/search", searchRouter);
// app.use("/api/users/", userRouter);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is up and running on port ${port}`);
});
