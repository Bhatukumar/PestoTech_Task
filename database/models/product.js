const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  category: { type: String },
  brand: String,
  quantityAvailable: { type: Number, default: 0 },
  images: [String],
  ratings: [{ userId: mongoose.Schema.Types.ObjectId, rating: Number }],
  reviews: [{ userId: mongoose.Schema.Types.ObjectId, text: String }],
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
