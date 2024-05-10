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

const MedicineModel = mongoose.model('medicines', itemSchema)
module.exports = MedicineModel