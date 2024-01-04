const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  products: [
    {
      productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
      quantity: { type: Number, default: 1 },
      price: Number,
    },
  ],
  status: {
    type: String,
    enum: ['pending', 'processing', 'shipped', 'delivered', 'cancelled'],
    default: 'pending',
  },
  shippingAddress: {
    street: String,
    city: String,
    state: String,
    zipCode: String,
    country: String,
  },
  totalAmount: { type: Number, required: true },
  payment: {
    transactionId: { type: mongoose.Schema.Types.ObjectId, ref: 'Transaction' },
    method: String,
  },
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
