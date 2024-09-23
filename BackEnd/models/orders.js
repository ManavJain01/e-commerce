const mongoose = require('mongoose')

const orderSchema = mongoose.Schema({
  paymentStatus: {
    type: String,
    enum: ['Pending', 'Completed', 'Failed'], // Customize the statuses as needed
    required: true,
  },
  deliveryStatus: {
    type: String,
    enum: ['Pending', 'Shipped', 'Delivered', 'Canceled'], // Customize the statuses as needed
    required: true,
  },
  products: {
    type: Object,
    required: true,
  },
  orderTime: {
    type: Date,
    default: Date.now,
  }
})

const ordersSchema = mongoose.Schema({
  orders:{
    type: [orderSchema],
    default: [],
  }
})

const OrderModel = mongoose.model('orders', ordersSchema);
module.exports = OrderModel