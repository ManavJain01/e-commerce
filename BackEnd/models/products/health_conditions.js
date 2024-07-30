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

const HealthConditionSchema = mongoose.Schema({
  item: String,
  category: String,
  subCategory: String,
  subitems: [itemSchema]
})

itemSchema.index({ item: 'text', company: 'text', description: 'text' });
HealthConditionSchema.index({ item: 'text', category: 'text', subCategory: 'text' });

const HealthConditionModel = mongoose.model('product_health_conditions', HealthConditionSchema)
module.exports = HealthConditionModel