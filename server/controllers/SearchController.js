const Search = require("../models/Search");

module.exports = {
  post: async (req) => {
    const { googleId } = req.user;
    const query = req.query.q;

    Search.create({
      googleId,
      query,
    }, (err) => {
      if (err) throw err;
    });
  },
};
