const mongoose = require("mongoose");
const { Schema } = mongoose;

const postSchema = new Schema({
  text: {
    type: String,
    required: true,
    maxLength: 160
  },
  _user: { type: Schema.Types.ObjectId, ref: "User" },
  datePosted: Date
});

const posts = mongoose.model("posts", postSchema);

module.exports = posts;
