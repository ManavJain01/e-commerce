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
  subitems: ([itemSchema] || [] || Array)
})

const PersonalCareSchema = mongoose.Schema({
  item: String,
  subitems: ([subItemSchema] || [] || Array)
})

const PersonalCareModel = mongoose.model('personal_care', PersonalCareSchema)
module.exports = PersonalCareModel