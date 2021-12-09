const express = require("express");
const router = express.Router();
const { register, login, isAuth } = require("../Controller/authController");
router.post("/register", register);
router.post("/login", login);
router.get("/isAuth", isAuth);
module.exports = router;
