const express = require("express");
const {
  getNews,
  getAllNews,
  addNews,
} = require("../controllers/newsController");
const router = express.Router();

router.get("/all", getAllNews);
router.get("/:id", getNews);
router.post("/add", addNews);
module.exports = router;
