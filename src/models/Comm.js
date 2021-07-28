const mongoose = require("mongoose");

const Comm = new mongoose.Schema({
    postId: {
        type: Number,
    },
    id: {
        type: Number, 
    },
    name: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
  });

module.exports = mongoose.model("Comm", Comm);