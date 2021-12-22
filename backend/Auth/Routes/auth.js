const express = require("express");
const router = express.Router();
const {
  register,
  login,
  isAuth,
  logout,
} = require("../Controller/authController");
router.post("/register", register);
router.post("/login", login);
router.get("/isAuth", isAuth);
router.get("/logout", logout);
module.exports = router;
