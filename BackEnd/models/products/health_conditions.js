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

const subItemSchema = mongoose.Schema({
  item: String,
  subitems: [itemSchema]
})

const HealthConditionSchema = mongoose.Schema({
  category: String,
  item: String,
  subitems: ([subItemSchema] || [itemSchema])
})

const HealthConditionModel = mongoose.model('product_health_conditions', HealthConditionSchema)
module.exports = HealthConditionModel