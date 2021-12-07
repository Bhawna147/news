const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const news = new Schema({
  heading: {
    type: String,
    required: true,
  },
  thumbnail: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  video_link: {
    type: String,
    required: true,
  },
  full_story: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("news", news);
