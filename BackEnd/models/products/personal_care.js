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
  reviews: [],
});

const PersonalCareSchema = mongoose.Schema({
  category: String,
  subCategory: String,
  item: String,
  subitems: [itemSchema]
})

itemSchema.index({ item: 'text', company: 'text', description: 'text' });
PersonalCareSchema.index({ item: 'text', category: 'text', subCategory: 'text' });

const PersonalCareModel = mongoose.model('product_personal_cares', PersonalCareSchema)
module.exports = PersonalCareModel