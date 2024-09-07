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

const DiabetesCareSchema = mongoose.Schema({
  category: String,
  subCategory: String,
  subitems: [itemSchema]
})

itemSchema.index({ item: 'text', company: 'text', description: 'text' });
DiabetesCareSchema.index({ category: 'text', subCategory: 'text' });

const DiabetesCareModel = mongoose.model('product_diabetes_cares', DiabetesCareSchema)
module.exports = DiabetesCareModel