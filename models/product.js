const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
  },
  image: {
    type: String,
  },
  price: {
    type: Number,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});
const Product = mongoose.model("Product", productSchema);

module.exports = Product;
