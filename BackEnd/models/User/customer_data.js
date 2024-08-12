const mongoose = require('mongoose')

const { Schema } = mongoose;

const OrderSchema = new Schema({
  id: {
    type: Schema.Types.ObjectId,
    required: true,
  },
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
  },
});

const CustomerDataSchema = new Schema({
  cart:{
    type: Array,
  },
  saveForLater:{
    type: Object,
  },
  refills:{
    type: Object
  },
  records:{
    type: Object
  },
  orders:{
    type: [OrderSchema],
    default: [],
  }
})

module.exports = mongoose.model('users_datas', CustomerDataSchema)