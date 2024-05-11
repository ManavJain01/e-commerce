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

const vitamins_supplementSchema = mongoose.Schema({
  item: String,
  subitems: [itemSchema]
})

const vitamins_supplementModel = mongoose.model('vitamins&supplements', vitamins_supplementSchema)
module.exports = vitamins_supplementModel