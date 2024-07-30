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

itemSchema.index({ item: 'text', company: 'text', description: 'text' });

const MedicineModel = mongoose.model('product_medicines', itemSchema)
module.exports = MedicineModel