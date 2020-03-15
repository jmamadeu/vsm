const User = require("../models/User");

module.exports = {
  async show(req, res) {
    const response = await User.getUserById(req.params);

    return res.json(response);
  },
  async index(req, res) {
    const response = await User.getAllUsers();

    return res.json(response);
  },
  async store(req, res) {
    const response = await User.addUser(req.body);

    return res.json(response);
  }
};
