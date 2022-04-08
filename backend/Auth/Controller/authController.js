const dotenv = require("dotenv");
const User = require("../Model/User");
const bcrypt = require("bcryptjs");
const passport = require("passport");
require("../validation/passportConfig")(passport);
dotenv.config();

const register = async (req, res) => {
  // console.log(req.body);
  User.findOne({ email: req.body.email }, async (err, data) => {
    if (err) {
      return res.send({
        err: true,
        success: false,
        message: "Server Internal Error...",
      });
    }
    if (data) {
      return res.send({
        err: false,
        success: false,
        message: "User already exists...",
      });
    } else {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
        gender: req.body.gender,
        country: req.body.country,
        state: req.body.state,
        city: req.body.city,
        orders: [],
        phone: req.body.phone,
        subscirbed: false,
      });
      await user.save();
      return res.send({
        err: false,
        success: true,
        message: "User Created Successfully....",
      });
    }
  });
};

const login = async (req, res, next) => {
  // console.log(req.body);
  passport.authenticate("local", (err, user, info) => {
    if (err) throw err;
    if (!user)
      res.send({ err: false, success: false, message: "User not Exists...." });
    else {
      req.logIn(user, (err) => {
        if (err) throw err;
        return res.send({
          err: false,
          success: true,
          message: "User Logged In successfully....",
        });
      });
    }
  })(req, res, next);
};
const logout = async (req, res) => {
  try {
    req.logOut();
    res.send({ err: false, success: true, message: "Logged Out Successfully" });
  } catch (err) {
    console.log(err);
    res.send({ err: true, success: false, message: "Something went wrong.." });
  }
};
const isAuth = async (req, res) => {
  if (req.isAuthenticated()) {
    res.send({
      err: false,
      success: true,
      isAuth: true,
      info: { ...req.user },
    });
  } else {
    res.send({ err: false, success: false, isAuth: false });
  }
};

module.exports = {
  register,
  login,
  isAuth,
  logout,
};
