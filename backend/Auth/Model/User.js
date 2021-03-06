const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const user = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
  },
  subscirbed: {
    type: Boolean,
  },
  password: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  orders: {
    type: Array,
    default: [],
  },
  admin: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("User", user);
