const express = require("express");
const {
  getNewsSection,
  getAllNews,
  addNews,
} = require("../controllers/newsController");
const router = express.Router();

router.get("/all/:count", getAllNews);
router.get("/section/:section", getNewsSection);
router.post("/add", addNews);
module.exports = router;
