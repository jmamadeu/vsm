const ProductSchema = require("./schemas/ProductSchema");

class Product {
  static async getAllProducts() {
    const products = await ProductSchema.find();

    return {
      data: products,
      success: true
    };
  }

  static async addProduct({ title, imageUrl, price, description }) {
    let product = await ProductSchema.findOne({
      title,
      description
    });

    if (!product) {
      product = await ProductSchema.create({
        title,
        imageUrl,
        price,
        description
      });
    }

    return {
      data: product,
      success: true
    };
  }

  static async getProductById({ id }) {
    const product = await ProductSchema.findById(id);

    return { data: product, success: true };
  }

  static async deleteOneProduct({ id }) {
    let product = await ProductSchema.findById(id);

    if (!product) {
      return {
        success: false,
        messages: ["This Product not exists"]
      };
    }

    product = await ProductSchema.findByIdAndDelete(id);

    return {
      data: product,
      success: true
    };
  }

  static async updateProduct({ id }, { title, description, imageUrl, price }) {
    let product = await ProductSchema.findById(id);

    if (!product) {
      return {
        success: false,
        messages: ["This Product not exists"]
      };
    }

    product = await ProductSchema.findByIdAndUpdate(
      { _id: id },
      {
        title,
        description,
        imageUrl,
        price
      }
    );

    return product;
  }
}

module.exports = Product;
