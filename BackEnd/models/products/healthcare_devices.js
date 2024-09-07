const mongoose = require('mongoose')

const itemSchema = mongoose.Schema({
  item: String,
  company: String,
  packaging: String,
  price: Number,
  quantity: Number,
  prescription: String,
  img: Array,
  description: String,
})

const HealthcareDeviceSchema = mongoose.Schema({
  category: String,
  subCategory: String,
  subitems: [itemSchema]
})

itemSchema.index({ item: 'text', company: 'text', description: 'text' });
HealthcareDeviceSchema.index({ category: 'text', subCategory: 'text' });

const HealthcareDeviceModel = mongoose.model('product_healthcare_devices', HealthcareDeviceSchema)
module.exports = HealthcareDeviceModel