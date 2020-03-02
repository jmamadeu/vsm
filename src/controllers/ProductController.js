const Product = require("../models/Product");

module.exports = {
  async destroy(req, res) {
    const { id } = req.params;

    let product = await Product.findById(id);

    if (!product) {
      return res.status(400).json({
        error: true,
        message: "this Product not exists!"
      });
    }

    product = await Product.findByIdAndDelete(id);

    return res.json(product);
  },
  async update(req, res) {
    const { title, description, imageUrl, price } = req.body;
    const { id } = req.params;

    let product = await Product.findById(id);

    if (!product) {
      return res.status(400).json({
        error: true,
        message: "The product not exists!"
      });
    }

    product = await Product.findByIdAndUpdate(
      { _id: id },
      {
        title,
        description,
        imageUrl,
        price
      }
    );

    return res.json(product);
  },
  async show(req, res) {
    const { id } = req.params;

    const product = await Product.findById(id);

    return res.json(product);
  },
  async index(req, res) {
    const products = await Product.find();

    return res.json(products);
  },
  async store(req, res) {
    const { title, imageUrl, price, description } = req.body;

    let product = await Product.findOne({
      title,
      description
    });

    if (!product) {
      product = await Product.create({
        title,
        imageUrl,
        price,
        description
      });

      return res.json(product);
    }

    return res.json(product);
  }
};
