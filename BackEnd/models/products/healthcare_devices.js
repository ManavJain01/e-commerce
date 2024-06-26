const mongoose = require('mongoose')

const itemSchema = mongoose.Schema({
  item: String,
  company: String,
  packaging: String,
  price: Number,
  quantity: Number,
  prescription: String,
  img: Object,
  description: String,
})

const HealthcareDeviceSchema = mongoose.Schema({
  category: String,
  item: String,
  subitems: [itemSchema]
})

const HealthcareDeviceModel = mongoose.model('product_healthcare_devices', HealthcareDeviceSchema)
module.exports = HealthcareDeviceModel