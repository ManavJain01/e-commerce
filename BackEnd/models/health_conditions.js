const mongoose = require('mongoose')

const itemSchema = mongoose.Schema({
  item: String,
  company: String,
  packaging: String,
  price: Number,
  quantity: Number,
  prescription: String,
  img: String,
  description: String,
})

const subItemSchema = mongoose.Schema({
  item: String,
  subitems: [itemSchema]
})

const HealthConditionSchema = mongoose.Schema({
  item: String,
  subitems: ([subItemSchema] || [itemSchema])
})

const HealthConditionModel = mongoose.model('health_conditions', HealthConditionSchema)
module.exports = HealthConditionModel