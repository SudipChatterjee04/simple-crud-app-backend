const mongoose = require("mongoose");
const ProductSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Product name is required"],
      unique: true,
    },

    quantity: {
      type: Number,
      required: [true, "Product quantity is required"],
      min: [0, "Product quantity cannot be negative"],
    },
    price: {
      type: Number,
      required: [true, "Product price is required"],
      min: [0, "Product price cannot be negative"],
    },
    image: {
      type: String,
      required: [false, "Product image is not mandatory"],
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;