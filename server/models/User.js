const mongoose = require("mongoose");

const User = mongoose.Schema({
  googleId: { type: String, required: true },
  email: { type: String, required: true },
  username: { type: String, required: true },
});

module.exports = mongoose.model("User", User);
