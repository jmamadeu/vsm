const mongoose = require("mongoose");

const UseSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    cart: {
      items: [
        {
          product: { type: mongoose.Types.ObjectId, ref: "Product" },
          quantity: Number
        }
      ]
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UseSchema);
