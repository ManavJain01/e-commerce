const mongoose = require('mongoose')

const itemSchema = mongoose.Schema({
  item: String,
  subitems: Object
})

const CategoryModel = mongoose.model('categories', itemSchema)
module.exports = CategoryModel