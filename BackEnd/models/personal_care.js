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

const PersonalCareSchema = mongoose.Schema({
  category: String,
  item: String,
  subitems: [subItemSchema]
})

const PersonalCareModel = mongoose.model('personal_cares', PersonalCareSchema)
module.exports = PersonalCareModel