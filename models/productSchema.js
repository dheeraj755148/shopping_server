const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  id: String,
  category: String,
  imageUrl: String,
  title: Object,
  description: String,
  price: Object,
  tagline: String,
  size: Array,
});

const Products = new mongoose.model("products", productSchema);

module.exports = Products;
