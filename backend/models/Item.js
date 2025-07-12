const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema({
  sellerId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  name: String,
  size: String,
  gender: String,
  location: String,
  contact: String,
  imageUrl: String,
  points: Number,
  status: { type: String, default: "available" },
});

module.exports = mongoose.model("Item", ItemSchema);