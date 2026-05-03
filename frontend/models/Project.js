const mongoose = require("mongoose");

module.exports = mongoose.model("Project", {
  title: String,
  description: String,
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
});