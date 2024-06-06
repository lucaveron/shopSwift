const mongoose = require("mongoose");

const avatarSchema = new mongoose.Schema(
  {
    image: {
      type: String, 
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    collection: "Avatar", 
  }
);

module.exports = mongoose.model("Avatar", avatarSchema);