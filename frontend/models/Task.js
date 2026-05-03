const mongoose = require("mongoose");

module.exports = mongoose.model("Task", {
  title: String,
  status: { type: String, default: "todo" },
  assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  projectId: { type: mongoose.Schema.Types.ObjectId, ref: "Project" },
  dueDate: Date
});