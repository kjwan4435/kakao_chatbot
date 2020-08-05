const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const sleepSchema = new Schema(
  {
    id: {
      type: String,
      required: "ID REQUIRED"
    },
    question: {
      type: String,
      required: true
    },
    answer: {
      type: Number,
      required: true
    }
  },
  { timestamps: true }
);

const sleep = mongoose.model("sleep", sleepSchema);
module.exports = sleep;
