const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema({
  name: { type: String, required: [true, "Please provide username"] },
  avatar: {
    type: String,
    required: true,
  },
  available: {
    type: Boolean,
    required: true,
  },
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Teacher", teacherSchema);
