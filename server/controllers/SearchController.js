const db = require("../db/db");

module.exports = {
  post: async (req, res) => {
    const { query } = req.params;
    const userId = req.user.id || 1;

    db.run("INSERT INTO searches (user_id, query) VALUES (?, ?)", [userId, query], (result, error) => {
      if (error) {
        return res.status(404).send({ message: "error_occured" });
      }

      res.send({ message: "Success" });
    });
  },
};
