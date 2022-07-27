const mongoose = require("mongoose");
const { Schema } = mongoose;

const postSchema = new Schema({
  image: String,
  description: String,
  likes: {
    count: {
      type: Number,
      default: 0,
    },
    // user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  timeStamp: Date,
  Comments: [
    {
      comment: String,
      user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    },
  ],
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

module.exports = mongoose.model("Post", postSchema);
