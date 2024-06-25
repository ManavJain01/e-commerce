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

const DiabetesCareSchema = mongoose.Schema({
  category: String,
  item: String,
  subitems: [itemSchema]
})

const DiabetesCareModel = mongoose.model('product_diabetes_cares', DiabetesCareSchema)
module.exports = DiabetesCareModel