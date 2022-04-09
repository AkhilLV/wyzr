const mongoose = require("mongoose");

const Search = mongoose.Schema({
  googleId: { type: String, required: true },
  query: { type: String, required: true },
});

module.exports = mongoose.model("Search", Search);
