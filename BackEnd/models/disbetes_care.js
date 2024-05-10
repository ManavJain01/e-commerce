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

const DiabetesCareSchema = mongoose.Schema({
  item: String,
  subitems: [itemSchema]
})

const DiabetesCareModel = mongoose.model('diabetes_care', DiabetesCareSchema)
module.exports = DiabetesCareModel