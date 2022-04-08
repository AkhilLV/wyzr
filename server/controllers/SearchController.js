module.exports = {
  post: async (req, res) => {
    const userId = req.user;
    console.log(req.params, userId);
  },
};
