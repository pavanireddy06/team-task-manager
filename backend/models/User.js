const mongoose = require("mongoose");

module.exports = mongoose.model("User", {
  name: String,
  email: String,
  password: String,
  role: { type: String, enum: ["admin", "member"], default: "member" }
});