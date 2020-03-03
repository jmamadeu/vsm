const Product = require("../models/Product");

module.exports = {
  async destroy(req, res) {
    const response = await Product.deleteOneProduct(req.params);

    return res.json(response);
  },
  async update(req, res) {
    const response = await Product.updateProduct(req.params, req.body);

    return res.json(response);
  },
  async show(req, res) {
    const response = await Product.getProductById(req.params);

    return res.json(response);
  },
  async index(req, res) {
    const response = await Product.getAllProducts();

    return res.json(response);
  },
  async store(req, res) {
    const response = await Product.addProduct(req.body);

    return res.json(response);
  }
};
