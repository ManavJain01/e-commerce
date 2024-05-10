const mongoose = require('mongoose')

const subItemsSchema = mongoose.Schema({
  item: String,
  subitems: Object
})

const itemSchema = mongoose.Schema({
  item: String,
  subitems: subItemsSchema
})

const CategoryModel = mongoose.model('categories', itemSchema)
module.exports = CategoryModel