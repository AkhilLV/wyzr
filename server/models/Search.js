const mongoose = require("mongoose");

const Search = mongoose.Schema({
  googleId: { type: String, required: true },
  searchTerm: { type: String, required: true },
});

module.exports = mongoose.model("Search", Search);
