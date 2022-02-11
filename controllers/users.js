module.exports = {
  getUsers(req, res) {
    res.send([
      { id: 1, name: "Mister" },
      { id: 2, name: "Potato" },
      { id: 3, name: "Mary" },
      { id: 4, name: "Ahmad" },
    ]);
  },
};
