const Search = require("../models/Search");

module.exports = {
  post: async (req, res) => {
    const googleId = req.user.googleId;
    const query = req.query.q;

    Search.create({
      googleId,
      query,
    }, (err) => {
      if (err) throw err;
    });
  },
};
