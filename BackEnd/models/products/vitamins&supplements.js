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

const vitamins_supplementSchema = mongoose.Schema({
  category: String,
  subCategory: String,
  subitems: [itemSchema]
})

itemSchema.index({ item: 'text', company: 'text', description: 'text' });
vitamins_supplementSchema.index({ category: 'text', subCategory: 'text' });


const vitamins_supplementModel = mongoose.model('product_vitamins&supplements', vitamins_supplementSchema)
module.exports = vitamins_supplementModel