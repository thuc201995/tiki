const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema(
  {
    name: { type: String, required: true },
    genre: { type: String, required: true },

    authorName: { type: String, required: true }

  },
  { timestamps: true }
);
module.exports = mongoose.model("Book", bookSchema);
