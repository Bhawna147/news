const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs");
const passport = require("passport");
const app = express();
const dotenv = require("dotenv");
const port = process.env.PORT || 8000;
const path = require("path");
dotenv.config();
console.log(process.env.MONGO_DB_URI);
const authRouter = require("./Auth/Routes/auth");
const newsRouter = require("./News/routes/news");
app.use(express.static(path.join(__dirname, "build")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(cookieParser("secret"));
app.use(passport.initialize());
app.use(passport.session());
// require("./passportConfig")(passport);

const DBURI = process.env.MONGO_DB_URI;

mongoose.connect(
  DBURI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) {
      console.log("Failed to connect database " + err);
    } else {
      console.log("Database connected successfully......");
    }
  }
);
app.use("/api/auth", authRouter);
app.use("/api/news", newsRouter);

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(port, () => {
  console.log(`Server is up and running on port ${port}`);
});
